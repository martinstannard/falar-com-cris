# Falar com Cris 🇧🇷

A beautiful, feature-rich Brazilian Portuguese learning app with spaced repetition, quizzes, and pronunciation practice. Built with React, TypeScript, and the Dracula theme.

**🌐 Live Demo**: [https://port-omega-ten-61.vercel.app](https://port-omega-ten-61.vercel.app)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/martinstannard/falar-com-cris)

## Features

### 🎴 Multiple Learning Modes
- **Spaced Repetition** - SM-2 algorithm for optimal learning intervals
- **Grid View** - Browse all phrases in an interactive grid with flip animations
- **Quiz PT→EN** - Multiple choice quiz (Portuguese to English)
- **Quiz EN→PT** - Multiple choice quiz (English to Portuguese)
- **Pronunciation Practice** - Record yourself and get scored on accuracy

### 🔊 Audio & Speech
- **Text-to-Speech** - Hear Portuguese pronunciation for every phrase
- **Speech Recognition** - Record your pronunciation and get instant feedback
- **Pronunciation Scoring** - Uses Levenshtein distance algorithm to compare your speech

### 📚 Content
- **65+ phrases** across 3 categories:
  - ❤️ Romantic/Relationship phrases
  - 👋 Everyday greetings  
  - 🏠 Household & daily life

### 📊 Progress Tracking
- Total reviews counter
- Current streak with 🔥 indicator
- Cards learned tracker
- Study date history
- Visual progress bars

### 🏆 Achievements System
- 🎯 Primeiro Passo - Complete your first review
- ❤️ Coração Brasileiro - Learn 10 romantic phrases
- 🔥 Sete Dias - Study for 7 days in a row
- 💬 Conversador - Learn phrases from all categories
- ⭐ Dedicação - Complete 50 reviews
- ✨ Perfeito! - Get all cards correct in a session

### 🎨 Dracula Theme
- Dark purple and pink gradient accents
- Deep dark backgrounds
- Neon colors and smooth animations
- Fully responsive design

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **Web Speech API** - Text-to-speech and speech recognition
- **Local Storage** - Offline-first data persistence
- **CSS Variables** - Theming system

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Modern browser (Chrome, Edge, or Safari recommended for speech features)

### Installation

```bash
# Clone the repository
git clone https://github.com/martinstannard/falar-com-cris.git
cd falar-com-cris

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Usage

1. **Learn Mode** - Practice with spaced repetition flashcards
2. **Grid Mode** - Browse all phrases, click to flip, filter by category
3. **Quiz Modes** - Test yourself with multiple choice questions
4. **Pronunciation** - Click Record and speak the Portuguese phrase
5. **Track Progress** - View your stats and unlock achievements

## Pronunciation Practice

The pronunciation feature requires:
- Microphone access (browser will prompt for permission)
- Internet connection (uses Google's speech recognition API)
- Supported browser (Chrome, Edge, or Safari)

When you click "🎤 Record":
1. Browser asks for microphone permission - click "Allow"
2. Speak the Portuguese phrase clearly
3. See what you said and get a pronunciation score

## Development

```bash
# Run development server
npm run dev

# Type checking
npm run build

# Lint code
npm run lint
```

## Project Structure

```
src/
├── components/          # React components
│   ├── FlashCard.tsx   # Spaced repetition card
│   ├── GridFlashCards.tsx  # Grid view
│   └── Quiz.tsx        # Quiz component
├── data/
│   └── phrases.ts      # 65+ Portuguese phrases
├── hooks/
│   ├── useAudio.ts     # Text-to-speech hook
│   └── useSpeechRecognition.ts  # Speech recognition hook
├── styles/             # CSS files
├── types/              # TypeScript definitions
├── utils/
│   ├── spacedRepetition.ts  # SM-2 algorithm
│   └── storage.ts      # LocalStorage utilities
└── App.tsx             # Main app component
```

## Features in Detail

### Spaced Repetition Algorithm
Uses the SM-2 algorithm with quality ratings:
- **Again** (1) - Reset card, review tomorrow
- **Hard** (3) - Decrease ease factor
- **Good** (4) - Normal progression
- **Easy** (5) - Increase interval significantly

### Pronunciation Scoring
Compares your speech to the target phrase using:
- Text normalization
- Levenshtein distance algorithm
- Similarity percentage calculation
- 90%+ = Excellent, 70%+ = Good, <70% = Keep practicing

### Local Storage
All data is stored locally:
- Phrases and flashcards
- Review history
- Statistics and streaks
- Achievement progress
- No backend required!

## Browser Compatibility

| Feature | Chrome | Edge | Safari | Firefox |
|---------|--------|------|--------|---------|
| Core App | ✅ | ✅ | ✅ | ✅ |
| Text-to-Speech | ✅ | ✅ | ✅ | ✅ |
| Speech Recognition | ✅ | ✅ | ✅ MacOS only | ⚠️ Limited |

## Contributing

This is a personal learning project, but suggestions are welcome! Feel free to open an issue.

## License

MIT

## Acknowledgments

- Built to help Martin learn Portuguese to communicate with Cris 💕
- Dracula theme inspired by [Dracula Theme](https://draculatheme.com/)
- Uses Web Speech API for pronunciation features
- SM-2 algorithm by Piotr Woźniak

---

**Made with ❤️ for Cris**
