import { useState, useEffect } from 'react';
import { FlashCard } from './components/FlashCard';
import { GridFlashCards } from './components/GridFlashCards';
import { Quiz } from './components/Quiz';
import type { AppState, Review, Phrase } from './types';
import { loadState, saveState } from './utils/storage';
import { calculateNextReview, getDueCards } from './utils/spacedRepetition';
import { useAudio } from './hooks/useAudio';
import { useSpeechRecognition, compareTranscripts, checkSpeechRecognitionSupport } from './hooks/useSpeechRecognition';
import './App.css';

type ViewType = 'learn' | 'grid' | 'quiz-pt-en' | 'quiz-en-pt' | 'pronunciation' | 'stats' | 'achievements';

function App() {
  const [state, setState] = useState<AppState>(loadState());
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [view, setView] = useState<ViewType>('learn');
  const [sessionCorrect, setSessionCorrect] = useState(0);
  const [sessionTotal, setSessionTotal] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'romantic' | 'everyday' | 'household'>('all');
  const [pronunciationPhrase, setPronunciationPhrase] = useState<Phrase | null>(null);
  const [pronunciationScore, setPronunciationScore] = useState<number | null>(null);
  const [recognizedText, setRecognizedText] = useState<string>('');

  const { playAudio } = useAudio();
  const { isListening, error: speechError, startListening, clearError } = useSpeechRecognition();
  const speechSupport = checkSpeechRecognitionSupport();

  const dueCards = getDueCards(state.cards);
  const currentCard = dueCards[currentCardIndex];
  const currentPhrase = currentCard
    ? state.phrases.find(p => p.id === currentCard.phraseId)
    : null;

  // Save state whenever it changes
  useEffect(() => {
    saveState(state);
  }, [state]);

  const handleFlip = () => {
    setShowAnswer(!showAnswer);
  };

  const handleRate = (quality: 0 | 1 | 2 | 3 | 4 | 5) => {
    if (!currentCard || !currentPhrase) return;

    const updatedCard = calculateNextReview(currentCard, quality);
    const isCorrect = quality >= 3;
    if (isCorrect) {
      setSessionCorrect(prev => prev + 1);
    }
    setSessionTotal(prev => prev + 1);

    const review: Review = {
      cardId: currentCard.id,
      timestamp: new Date(),
      quality,
      timeSpent: 0
    };

    setState(prevState => {
      const newCards = prevState.cards.map(c =>
        c.id === updatedCard.id ? updatedCard : c
      );

      const today = new Date().toDateString();
      const studyDates = prevState.stats.studyDates.includes(today)
        ? prevState.stats.studyDates
        : [...prevState.stats.studyDates, today];

      const sortedDates = [...studyDates].sort((a, b) =>
        new Date(b).getTime() - new Date(a).getTime()
      );
      let currentStreak = 0;
      const now = new Date();
      for (const dateStr of sortedDates) {
        const date = new Date(dateStr);
        const daysDiff = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
        if (daysDiff === currentStreak) {
          currentStreak++;
        } else {
          break;
        }
      }

      const newStats = {
        ...prevState.stats,
        totalReviews: prevState.stats.totalReviews + 1,
        currentStreak,
        longestStreak: Math.max(currentStreak, prevState.stats.longestStreak),
        cardsLearned: newCards.filter(c => c.repetitions > 0).length,
        lastStudyDate: new Date(),
        studyDates
      };

      const newAchievements = prevState.achievements.map(achievement => {
        if (achievement.unlocked) return achievement;

        let progress = achievement.progress;
        let unlocked = false;

        if (achievement.id === 'first-review') {
          progress = newStats.totalReviews > 0 ? 1 : 0;
          unlocked = progress >= 1;
        } else if (achievement.id === 'streak-7') {
          progress = newStats.currentStreak;
          unlocked = progress >= 7;
        } else if (achievement.id === 'reviews-50') {
          progress = newStats.totalReviews;
          unlocked = progress >= 50;
        }

        return {
          ...achievement,
          progress,
          unlocked,
          unlockedAt: unlocked && !achievement.unlocked ? new Date() : achievement.unlockedAt
        };
      });

      return {
        ...prevState,
        cards: newCards,
        reviews: [...prevState.reviews, review],
        stats: newStats,
        achievements: newAchievements
      };
    });

    setShowAnswer(false);
    if (currentCardIndex < dueCards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    } else {
      setCurrentCardIndex(0);
    }
  };

  const handlePronunciationTest = async () => {
    if (!pronunciationPhrase) {
      const randomPhrase = state.phrases[Math.floor(Math.random() * state.phrases.length)];
      setPronunciationPhrase(randomPhrase);
      setPronunciationScore(null);
      setRecognizedText('');
      clearError();
      playAudio(randomPhrase.portuguese);
      return;
    }

    clearError();
    setPronunciationScore(null);
    setRecognizedText('');

    try {
      const result = await startListening('pt-BR');
      setRecognizedText(result.transcript);
      const score = compareTranscripts(pronunciationPhrase.portuguese, result.transcript);
      setPronunciationScore(score);
    } catch (error: any) {
      console.error('Speech recognition error:', error);
      // Error is already set in the hook, no need to alert
    }
  };

  const getFilteredPhrases = () => {
    if (selectedCategory === 'all') return state.phrases;
    return state.phrases.filter(p => p.category === selectedCategory);
  };

  const handleQuizComplete = (score: number, total: number) => {
    alert(`Quiz complete! Score: ${score}/${total} (${Math.round((score / total) * 100)}%)`);
    setView('learn');
  };

  const renderNavigation = (currentView: ViewType) => (
    <nav className="nav">
      <button onClick={() => setView('learn')} className={`nav-btn ${currentView === 'learn' ? 'active' : ''}`}>
        Spaced
      </button>
      <button onClick={() => setView('grid')} className={`nav-btn ${currentView === 'grid' ? 'active' : ''}`}>
        Grid
      </button>
      <button onClick={() => setView('quiz-pt-en')} className={`nav-btn ${currentView === 'quiz-pt-en' ? 'active' : ''}`}>
        Quiz PT→EN
      </button>
      <button onClick={() => setView('quiz-en-pt')} className={`nav-btn ${currentView === 'quiz-en-pt' ? 'active' : ''}`}>
        Quiz EN→PT
      </button>
      <button onClick={() => setView('pronunciation')} className={`nav-btn ${currentView === 'pronunciation' ? 'active' : ''}`}>
        🎤 Speak
      </button>
      <button onClick={() => setView('stats')} className={`nav-btn ${currentView === 'stats' ? 'active' : ''}`}>
        Stats
      </button>
      <button onClick={() => setView('achievements')} className={`nav-btn ${currentView === 'achievements' ? 'active' : ''}`}>
        Achievements
      </button>
    </nav>
  );

  if (view === 'grid') {
    return (
      <div className="app">
        <header className="app-header">
          <h1>Falar com Cris 🇧🇷</h1>
          {renderNavigation('grid')}
          <div className="category-filter">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedCategory('romantic')}
              className={`filter-btn ${selectedCategory === 'romantic' ? 'active' : ''}`}
            >
              ❤️ Romantic
            </button>
            <button
              onClick={() => setSelectedCategory('everyday')}
              className={`filter-btn ${selectedCategory === 'everyday' ? 'active' : ''}`}
            >
              👋 Everyday
            </button>
            <button
              onClick={() => setSelectedCategory('household')}
              className={`filter-btn ${selectedCategory === 'household' ? 'active' : ''}`}
            >
              🏠 Household
            </button>
          </div>
        </header>
        <main className="app-main">
          <GridFlashCards phrases={getFilteredPhrases()} onPlayAudio={playAudio} />
        </main>
      </div>
    );
  }

  if (view === 'quiz-pt-en') {
    const quizPhrases = getFilteredPhrases().slice(0, 10);
    return (
      <div className="app">
        <header className="app-header">
          <h1>Falar com Cris 🇧🇷</h1>
          {renderNavigation('quiz-pt-en')}
        </header>
        <main className="app-main">
          <Quiz
            phrases={quizPhrases}
            mode="pt-to-en"
            onComplete={handleQuizComplete}
            onPlayAudio={playAudio}
          />
        </main>
      </div>
    );
  }

  if (view === 'quiz-en-pt') {
    const quizPhrases = getFilteredPhrases().slice(0, 10);
    return (
      <div className="app">
        <header className="app-header">
          <h1>Falar com Cris 🇧🇷</h1>
          {renderNavigation('quiz-en-pt')}
        </header>
        <main className="app-main">
          <Quiz
            phrases={quizPhrases}
            mode="en-to-pt"
            onComplete={handleQuizComplete}
          />
        </main>
      </div>
    );
  }

  if (view === 'pronunciation') {
    return (
      <div className="app">
        <header className="app-header">
          <h1>Falar com Cris 🇧🇷</h1>
          {renderNavigation('pronunciation')}
        </header>
        <main className="app-main">
          <div className="pronunciation-container">
            <h2>Pronunciation Practice</h2>

            {!speechSupport.supported ? (
              <div className="browser-warning">
                <div className="warning-icon">⚠️</div>
                <div className="warning-message">{speechSupport.message}</div>
                <p className="warning-detail">
                  For the best experience, use this feature in Chrome, Edge, or Safari.
                </p>
              </div>
            ) : (
              <>
                <p>Click "New Phrase" to hear a phrase, then click "Record" to try saying it!</p>
                <div className="browser-info">
                  ✅ Your browser supports speech recognition<br />
                  <small>When you click Record, your browser will ask for microphone permission. Click "Allow".</small>
                </div>
              </>
            )}

            {pronunciationPhrase ? (
              <div className="pronunciation-card">
                <div className="pronunciation-phrase portuguese">{pronunciationPhrase.portuguese}</div>
                <div className="pronunciation-translation">{pronunciationPhrase.english}</div>

                <div className="pronunciation-buttons">
                  <button onClick={() => playAudio(pronunciationPhrase.portuguese)} className="btn-primary">
                    🔊 Hear it
                  </button>
                  <button
                    onClick={handlePronunciationTest}
                    className={'btn-primary' + (isListening ? ' listening' : '')}
                    disabled={isListening || !speechSupport.supported}
                  >
                    {isListening ? '🎤 Listening...' : '🎤 Record'}
                  </button>
                  <button onClick={() => {
                    setPronunciationPhrase(null);
                    setPronunciationScore(null);
                    setRecognizedText('');
                    clearError();
                  }} className="btn-secondary">
                    New Phrase
                  </button>
                </div>

                {speechError && (
                  <div className="error-message">
                    <div className="error-icon">❌</div>
                    <div>{speechError}</div>
                    <button onClick={clearError} className="btn-dismiss">Dismiss</button>
                  </div>
                )}

                {recognizedText && (
                  <div className="recognized-text">
                    <div className="recognized-label">You said:</div>
                    <div className="recognized-value portuguese">{recognizedText}</div>
                  </div>
                )}

                {pronunciationScore !== null && (
                  <div className={'pronunciation-result' + (pronunciationScore >= 70 ? ' good' : ' needs-practice')}>
                    <div className="score-value">{pronunciationScore}%</div>
                    <div className="score-label">
                      {pronunciationScore >= 90 ? 'Excellent! 🎉' :
                       pronunciationScore >= 70 ? 'Good job! 👍' :
                       'Keep practicing! 💪'}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={handlePronunciationTest}
                className="btn-large"
                disabled={!speechSupport.supported}
              >
                Start Practice
              </button>
            )}
          </div>
        </main>
      </div>
    );
  }

  if (view === 'stats') {
    return (
      <div className="app">
        <header className="app-header">
          <h1>Falar com Cris 🇧🇷</h1>
          {renderNavigation('stats')}
        </header>
        <main className="app-main">
          <div className="stats-container">
            <h2>Your Progress</h2>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-value">{state.stats.totalReviews}</div>
                <div className="stat-label">Total Reviews</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">{state.stats.currentStreak} 🔥</div>
                <div className="stat-label">Current Streak</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">{state.stats.cardsLearned}</div>
                <div className="stat-label">Cards Learned</div>
              </div>
              <div className="stat-card">
                <div className="stat-value">{dueCards.length}</div>
                <div className="stat-label">Due Today</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (view === 'achievements') {
    return (
      <div className="app">
        <header className="app-header">
          <h1>Falar com Cris 🇧🇷</h1>
          {renderNavigation('achievements')}
        </header>
        <main className="app-main">
          <div className="achievements-container">
            <h2>Achievements</h2>
            <div className="achievements-grid">
              {state.achievements.map(achievement => (
                <div
                  key={achievement.id}
                  className={`achievement-card ${achievement.unlocked ? 'unlocked' : 'locked'}`}
                >
                  <div className="achievement-icon">{achievement.icon}</div>
                  <div className="achievement-name">{achievement.name}</div>
                  <div className="achievement-description">{achievement.description}</div>
                  <div className="achievement-progress">
                    {achievement.progress} / {achievement.maxProgress}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Falar com Cris 🇧🇷</h1>
        {renderNavigation('learn')}
      </header>

      <main className="app-main">
        {dueCards.length === 0 ? (
          <div className="empty-state">
            <h2>All done for today! 🎉</h2>
            <p>Come back tomorrow to continue learning Portuguese with Cris.</p>
            <div className="session-summary">
              <p>Session: {sessionCorrect} / {sessionTotal} correct</p>
            </div>
          </div>
        ) : currentPhrase ? (
          <div className="learn-container">
            <div className="progress-bar-container">
              <div className="progress-text">
                Card {currentCardIndex + 1} of {dueCards.length}
              </div>
              <div className="progress-track">
                <div
                  className="progress-fill"
                  style={{ width: `${((currentCardIndex + 1) / dueCards.length) * 100}%` }}
                />
              </div>
            </div>

            <FlashCard
              phrase={currentPhrase}
              showAnswer={showAnswer}
              onFlip={handleFlip}
              onRate={handleRate}
            />

            {sessionTotal > 0 && (
              <div className="session-stats">
                Session: {sessionCorrect} / {sessionTotal} correct
                ({Math.round((sessionCorrect / sessionTotal) * 100)}%)
              </div>
            )}
          </div>
        ) : null}
      </main>
    </div>
  );
}

export default App;
