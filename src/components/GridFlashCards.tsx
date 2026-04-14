import { useState } from 'react';
import type { Phrase } from '../types';
import './GridFlashCards.css';

interface GridFlashCardsProps {
  phrases: Phrase[];
  onPlayAudio?: (text: string) => void;
}

export function GridFlashCards({ phrases, onPlayAudio }: GridFlashCardsProps) {
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());

  const handleCardClick = (phraseId: string) => {
    const newFlipped = new Set(flippedCards);
    if (newFlipped.has(phraseId)) {
      newFlipped.delete(phraseId);
    } else {
      newFlipped.add(phraseId);
    }
    setFlippedCards(newFlipped);

    setTimeout(() => {
      setFlippedCards(prev => {
        const updated = new Set(prev);
        updated.delete(phraseId);
        return updated;
      });
    }, 3000);
  };

  return (
    <div className="grid-flashcards">
      {phrases.map((phrase) => {
        const isFlipped = flippedCards.has(phrase.id);
        return (
          <div
            key={phrase.id}
            className={'grid-card' + (isFlipped ? ' flipped' : '')}
            onClick={() => handleCardClick(phrase.id)}
          >
            <div className="grid-card-inner">
              <div className="grid-card-front">
                <div className="grid-card-category">{phrase.category}</div>
                <div className="grid-card-text portuguese">{phrase.portuguese}</div>
                {onPlayAudio && (
                  <button
                    className="audio-btn-small"
                    onClick={(e) => {
                      e.stopPropagation();
                      onPlayAudio(phrase.portuguese);
                    }}
                  >
                    🔊
                  </button>
                )}
              </div>
              <div className="grid-card-back">
                <div className="grid-card-text">{phrase.english}</div>
                <div className="grid-card-original portuguese">{phrase.portuguese}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
