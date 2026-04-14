import { useState, useEffect } from 'react';
import type { Phrase } from '../types';
import './Quiz.css';

type QuizMode = 'pt-to-en' | 'en-to-pt';

interface QuizProps {
  phrases: Phrase[];
  mode: QuizMode;
  onComplete: (score: number, total: number) => void;
  onPlayAudio?: (text: string) => void;
}

export function Quiz({ phrases, mode, onComplete, onPlayAudio }: QuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [options, setOptions] = useState<string[]>([]);

  const currentPhrase = phrases[currentIndex];

  useEffect(() => {
    if (!currentPhrase) return;

    const correctAnswer = mode === 'pt-to-en' ? currentPhrase.english : currentPhrase.portuguese;
    
    const wrongAnswers = phrases
      .filter(p => p.id !== currentPhrase.id)
      .map(p => mode === 'pt-to-en' ? p.english : p.portuguese)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    const allOptions = [correctAnswer, ...wrongAnswers].sort(() => Math.random() - 0.5);
    setOptions(allOptions);
  }, [currentIndex, currentPhrase, mode, phrases]);

  const handleAnswer = (answer: string) => {
    if (selectedAnswer !== null) return;

    const correctAnswer = mode === 'pt-to-en' ? currentPhrase.english : currentPhrase.portuguese;
    const correct = answer === correctAnswer;

    setSelectedAnswer(answer);
    setIsCorrect(correct);

    if (correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentIndex < phrases.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setSelectedAnswer(null);
        setIsCorrect(null);
      } else {
        onComplete(correct ? score + 1 : score, phrases.length);
      }
    }, 1500);
  };

  if (!currentPhrase) {
    return <div>Loading...</div>;
  }

  const question = mode === 'pt-to-en' ? currentPhrase.portuguese : currentPhrase.english;
  const correctAnswer = mode === 'pt-to-en' ? currentPhrase.english : currentPhrase.portuguese;

  return (
    <div className="quiz-container">
      <div className="quiz-progress">
        Question {currentIndex + 1} of {phrases.length}
      </div>

      <div className="quiz-score">
        Score: {score} / {currentIndex + (isCorrect !== null ? 1 : 0)}
      </div>

      <div className="quiz-question">
        <div className={mode === 'pt-to-en' ? 'portuguese' : ''}>
          {question}
        </div>
        {mode === 'pt-to-en' && onPlayAudio && (
          <button
            className="audio-btn"
            onClick={() => onPlayAudio(question)}
          >
            🔊 Hear it
          </button>
        )}
      </div>

      <div className="quiz-options">
        {options.map((option, index) => {
          let className = 'quiz-option';
          if (selectedAnswer !== null) {
            if (option === correctAnswer) {
              className += ' correct';
            } else if (option === selectedAnswer) {
              className += ' incorrect';
            }
          }

          return (
            <button
              key={index}
              className={className}
              onClick={() => handleAnswer(option)}
              disabled={selectedAnswer !== null}
            >
              <div className={mode === 'en-to-pt' ? 'portuguese' : ''}>
                {option}
              </div>
            </button>
          );
        })}
      </div>

      {isCorrect !== null && (
        <div className={'quiz-feedback' + (isCorrect ? ' correct' : ' incorrect')}>
          {isCorrect ? '✓ Correct! Muito bem!' : '✗ Not quite. Keep practicing!'}
        </div>
      )}
    </div>
  );
}
