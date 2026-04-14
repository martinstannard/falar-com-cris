import { useState } from 'react';
import './Translator.css';

export function Translator() {
  const [text, setText] = useState('');
  const [translation, setTranslation] = useState('');
  const [isTranslating, setIsTranslating] = useState(false);

  const handleTranslate = async () => {
    if (!text.trim()) return;
    setIsTranslating(true);
    try {
      // Using MyMemory API for translation
      const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|pt-BR`);
      const data = await response.json();
      setTranslation(data.responseData.translatedText);
    } catch (error) {
      console.error('Translation error:', error);
      setTranslation('Desculpe, algo deu errado com a tradução.');
    } finally {
      setIsTranslating(false);
    }
  };

  return (
    <div className="translator-container slide-up">
      <div className="translator-card">
        <h2>English ➔ Portuguese</h2>
        <p className="translator-subtitle">Translate any English phrase to Brazilian Portuguese</p>
        
        <div className="translator-input-group">
          <label htmlFor="english-text">English</label>
          <textarea
            id="english-text"
            placeholder="Type something in English..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div className="translator-actions">
          <button
            onClick={handleTranslate}
            disabled={isTranslating || !text.trim()}
            className="btn-primary btn-translate"
          >
            {isTranslating ? (
              <span className="loading-spinner">✨ Translating...</span>
            ) : (
              'Translate Now 🇧🇷'
            )}
          </button>
          <button 
            onClick={() => { setText(''); setTranslation(''); }}
            className="btn-secondary"
            disabled={!text && !translation}
          >
            Clear
          </button>
        </div>

        {translation && (
          <div className="translator-result">
            <div className="result-header">
              <span className="result-label">Brazilian Portuguese</span>
              <button 
                className="btn-copy" 
                onClick={() => navigator.clipboard.writeText(translation)}
                title="Copy to clipboard"
              >
                📋
              </button>
            </div>
            <div className="result-text portuguese">{translation}</div>
          </div>
        )}
      </div>
    </div>
  );
}
