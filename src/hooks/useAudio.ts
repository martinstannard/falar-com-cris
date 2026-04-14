import { useCallback } from 'react';

export function useAudio() {
  const playAudio = useCallback((text: string, lang: string = 'pt-BR') => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = 0.9;
      utterance.pitch = 1;

      const voices = window.speechSynthesis.getVoices();
      const portugueseVoice = voices.find(voice => voice.lang.startsWith('pt'));
      
      if (portugueseVoice) {
        utterance.voice = portugueseVoice;
      }

      window.speechSynthesis.speak(utterance);
    } else {
      console.warn('Speech synthesis not supported');
    }
  }, []);

  return { playAudio };
}
