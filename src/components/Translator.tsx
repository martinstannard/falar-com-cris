import { useState } from 'react';
import './Translator.css';

type TranslationMode = 'en-pt' | 'pt-en';

export function Translator() {
  const [text, setText] = useState('');
  const [translation, setTranslation] = useState('');
  const [isTranslating, setIsTranslating] = useState(false);
  const [mode, setMode] = useState<TranslationMode>('en-pt');

  const handleTranslate = async () => {
    if (!text.trim()) return;
    setIsTranslating(true);
    
    const langpair = mode === 'en-pt' ? 'en|pt-BR' : 'pt-BR|en';
    
    try {
      // Using MyMemory API for translation
      const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${langpair}`);
      const data = await response.json();
      setTranslation(data.responseData.translatedText);
    } catch (error) {
      console.error('Translation error:', error);
      setTranslation(mode === 'en-pt' 
        ? 'Desculpe, algo deu errado com a tradução.' 
        : 'Sorry, something went wrong with the translation.'
      );
    } finally {
      setIsTranslating(false);
    }
  };

  const toggleMode = () => {
    setMode(prev => prev === 'en-pt' ? 'pt-en' : 'en-pt');
    setText('');
    setTranslation('');
  };

  const labels = {
    'en-pt': {
      title: 'English ➔ Portuguese',
      subtitle: 'Translate any English phrase to Brazilian Portuguese',
      inputLabel: 'English',
      inputPlaceholder: 'Type something in English...',
      resultLabel: 'Brazilian Portuguese',
      buttonText: 'Translate Now 🇧🇷'
    },
    'pt-en': {
      title: 'Portuguese ➔ English',
      subtitle: 'Traduzir qualquer frase em português para o inglês',
      inputLabel: 'Portuguese',
      inputPlaceholder: 'Digite algo em português...',
      resultLabel: 'English',
      buttonText: 'Traduzir Agora 🇺🇸'
    }
  };

  const currentLabels = labels[mode];

  return (
    <div className="translator-container slide-up">
      <div className="translator-card">
        <div className="translator-header-row">
          <h2>{currentLabels.title}</h2>
          <button onClick={toggleMode} className="btn-toggle-mode" title="Switch direction">
            🔄 Switch
          </button>
        </div>
        <p className="translator-subtitle">{currentLabels.subtitle}</p>
        
        <div className="translator-input-group">
          <label htmlFor="translator-input">{currentLabels.inputLabel}</label>
          <textarea
            id="translator-input"
            placeholder={currentLabels.inputPlaceholder}
            value={text}
            onChange={(e) => setText(e.target.value)}
            className={mode === 'pt-en' ? 'portuguese' : ''}
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
              currentLabels.buttonText
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
              <span className="result-label">{currentLabels.resultLabel}</span>
              <button 
                className="btn-copy" 
                onClick={() => navigator.clipboard.writeText(translation)}
                title="Copy to clipboard"
              >
                📋
              </button>
            </div>
            <div className={`result-text ${mode === 'en-pt' ? 'portuguese' : ''}`}>
              {translation}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
