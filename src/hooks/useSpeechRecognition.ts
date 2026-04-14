import { useState, useCallback, useRef } from 'react';

interface SpeechRecognitionResult {
  transcript: string;
  confidence: number;
}

export function checkSpeechRecognitionSupport(): {
  supported: boolean;
  message: string;
} {
  const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

  if (!SpeechRecognition) {
    return {
      supported: false,
      message: 'Speech recognition is not supported in your browser. Try using Chrome, Edge, or Safari.'
    };
  }

  return {
    supported: true,
    message: 'Speech recognition is supported!'
  };
}

export function useSpeechRecognition() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [error, setError] = useState<string | null>(null);
  const recognitionRef = useRef<any>(null);

  const startListening = useCallback((lang: string = 'pt-BR'): Promise<SpeechRecognitionResult> => {
    setError(null);

    return new Promise((resolve, reject) => {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

      if (!SpeechRecognition) {
        const message = 'Speech recognition not supported in this browser. Use Chrome or Edge.';
        setError(message);
        reject(new Error(message));
        return;
      }

      try {
        const recognition = new SpeechRecognition();
        recognition.lang = lang;
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        let hasResult = false;

        recognition.onstart = () => {
          console.log('Speech recognition started');
          setIsListening(true);
          setError(null);
        };

        recognition.onresult = (event: any) => {
          hasResult = true;
          const result = event.results[0][0];
          console.log('Recognized:', result.transcript, 'Confidence:', result.confidence);
          setTranscript(result.transcript);
          setIsListening(false);
          resolve({
            transcript: result.transcript,
            confidence: result.confidence
          });
        };

        recognition.onerror = (event: any) => {
          console.error('Speech recognition error:', event.error);
          setIsListening(false);

          let errorMessage = '';
          switch (event.error) {
            case 'no-speech':
              errorMessage = 'No speech detected. Try speaking louder or closer to the microphone.';
              break;
            case 'audio-capture':
              errorMessage = 'No microphone found. Check your microphone is connected and working.';
              break;
            case 'not-allowed':
              errorMessage = 'Microphone permission denied. Click "Allow" when the browser asks for microphone access, or enable it in your browser settings.';
              break;
            case 'network':
              errorMessage = 'Network error. Speech recognition requires an internet connection.';
              break;
            case 'aborted':
              errorMessage = 'Recording was stopped. Try again.';
              break;
            default:
              errorMessage = `Speech recognition error: ${event.error}. Please try again.`;
          }

          setError(errorMessage);
          reject(new Error(errorMessage));
        };

        recognition.onend = () => {
          console.log('Speech recognition ended');
          setIsListening(false);

          if (!hasResult) {
            const message = 'No speech was detected. Please try again and speak clearly.';
            setError(message);
            reject(new Error(message));
          }
        };

        recognitionRef.current = recognition;
        recognition.start();
      } catch (err: any) {
        const message = 'Failed to start speech recognition: ' + err.message;
        setError(message);
        setIsListening(false);
        reject(new Error(message));
      }
    });
  }, []);

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    isListening,
    transcript,
    error,
    startListening,
    stopListening,
    clearError
  };
}

export function compareTranscripts(expected: string, actual: string): number {
  const normalize = (str: string) => str.toLowerCase().trim().replace(/[.,!?]/g, '');
  const normalizedExpected = normalize(expected);
  const normalizedActual = normalize(actual);

  if (normalizedExpected === normalizedActual) {
    return 100;
  }

  const distance = levenshteinDistance(normalizedExpected, normalizedActual);
  const maxLength = Math.max(normalizedExpected.length, normalizedActual.length);
  const similarity = ((maxLength - distance) / maxLength) * 100;

  return Math.max(0, Math.round(similarity));
}

function levenshteinDistance(str1: string, str2: string): number {
  const matrix: number[][] = [];

  for (let i = 0; i <= str2.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= str1.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= str2.length; i++) {
    for (let j = 1; j <= str1.length; j++) {
      if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }

  return matrix[str2.length][str1.length];
}
