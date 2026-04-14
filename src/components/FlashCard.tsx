import type { Phrase } from '../types';
import './FlashCard.css';

interface FlashCardProps {
  phrase: Phrase;
  onRate: (quality: 0 | 1 | 2 | 3 | 4 | 5) => void;
  showAnswer: boolean;
  onFlip: () => void;
}

export function FlashCard({ phrase, onRate, showAnswer, onFlip }: FlashCardProps) {
  const cardClass = showAnswer ? 'flashcard flipped' : 'flashcard';
  
  return (
    <div className="flashcard-container">
      <div className={cardClass} onClick={onFlip}>
        <div className="flashcard-inner">
          <div className="flashcard-front">
            <div className="flashcard-category">{phrase.category}</div>
            <div className="flashcard-text portuguese">{phrase.portuguese}</div>
            {phrase.context && (
              <div className="flashcard-context">{phrase.context}</div>
            )}
            <div className="flashcard-hint">Click to reveal</div>
          </div>
          <div className="flashcard-back">
            <div className="flashcard-text">{phrase.english}</div>
            <div className="flashcard-original portuguese">{phrase.portuguese}</div>
          </div>
        </div>
      </div>

      {showAnswer && (
        <div className="rating-buttons slide-up">
          <button onClick={() => onRate(1)} className="rating-btn rating-again">
            Again
          </button>
          <button onClick={() => onRate(3)} className="rating-btn rating-hard">
            Hard
          </button>
          <button onClick={() => onRate(4)} className="rating-btn rating-good">
            Good
          </button>
          <button onClick={() => onRate(5)} className="rating-btn rating-easy">
            Easy
          </button>
        </div>
      )}
    </div>
  );
}
