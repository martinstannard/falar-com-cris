# Implementation Guide

## Quick Start Checklist

### Phase 1: Foundation (Week 1)
- [ ] Set up design system CSS variables
- [ ] Create base components (Button, Card, ProgressBar)
- [ ] Implement AppShell layout
- [ ] Set up routing (if using React Router)
- [ ] Create data structure for phrases

### Phase 2: Core Features (Week 2)
- [ ] FlashCard component with flip animation
- [ ] Spaced repetition algorithm (SM-2)
- [ ] Basic progress tracking
- [ ] LocalStorage persistence
- [ ] Lesson category selection

### Phase 3: Enhancement (Week 3)
- [ ] Swipe gestures (mobile)
- [ ] Audio pronunciation (Web Speech API)
- [ ] Progress dashboard with charts
- [ ] Streak tracking system
- [ ] Achievement system foundation

### Phase 4: Polish (Week 4)
- [ ] Achievement unlock animations
- [ ] Confetti effects
- [ ] Sound effects
- [ ] Responsive refinements
- [ ] Accessibility audit

## Folder Structure Setup

```bash
src/
├── components/
│   ├── layout/
│   ├── flashcards/
│   ├── lessons/
│   ├── progress/
│   ├── achievements/
│   ├── ui/
│   └── home/
├── pages/
├── hooks/
├── utils/
├── data/
├── styles/
└── types/
```

## CSS Variables Setup

Create `/src/styles/variables.css`:

```css
:root {
  /* Colors - Primary Palette */
  --sunset-coral: #FF6B6B;
  --tropical-orange: #FFB84D;
  --amazon-green: #51CF66;
  --copacabana-blue: #4DABF7;
  --ipanema-purple: #B197FC;

  /* Colors - Neutrals */
  --cream: #FFF8F0;
  --sand: #F5E6D3;
  --warm-gray-100: #F8F4F0;
  --warm-gray-200: #E8DED0;
  --warm-gray-300: #D4C4B0;
  --warm-gray-700: #5C4F3D;
  --warm-gray-900: #2D2416;

  /* Colors - Semantic */
  --success: var(--amazon-green);
  --error: #FA5252;
  --warning: var(--tropical-orange);
  --info: var(--copacabana-blue);
  --romantic: var(--sunset-coral);

  /* Typography */
  --font-display: 'Outfit', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-portuguese: 'Merriweather', Georgia, serif;

  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;
  --text-4xl: 2.25rem;
  --text-5xl: 3rem;

  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  --font-extrabold: 800;

  /* Spacing */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;

  /* Border Radius */
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  --radius-2xl: 1.5rem;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgba(45, 36, 22, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(45, 36, 22, 0.1),
               0 2px 4px -1px rgba(45, 36, 22, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(45, 36, 22, 0.1),
               0 4px 6px -2px rgba(45, 36, 22, 0.05);
  --shadow-xl: 0 20px 25px -5px rgba(45, 36, 22, 0.1),
               0 10px 10px -5px rgba(45, 36, 22, 0.04);
  --shadow-card: 0 2px 8px rgba(255, 107, 107, 0.08),
                 0 1px 3px rgba(255, 107, 107, 0.04);

  /* Transitions */
  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-base: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 350ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-spring: 400ms cubic-bezier(0.34, 1.56, 0.64, 1);

  /* Layout */
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1280px;

  --nav-height-mobile: 56px;
  --nav-width-desktop: 280px;
  --header-height: 64px;

  /* Z-index scale */
  --z-base: 1;
  --z-dropdown: 1000;
  --z-sticky: 1100;
  --z-fixed: 1200;
  --z-modal-backdrop: 1300;
  --z-modal: 1400;
  --z-toast: 1500;
}
```

## Base Styles Setup

Create `/src/styles/reset.css`:

```css
/* Modern CSS Reset */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

body {
  min-height: 100vh;
  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: 1.5;
  color: var(--warm-gray-900);
  background-color: var(--cream);
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

button, input, textarea, select {
  font: inherit;
}

button {
  cursor: pointer;
  border: none;
  background: none;
}

a {
  color: inherit;
  text-decoration: none;
}

/* Remove focus outline, replace with custom ring */
:focus {
  outline: none;
}

:focus-visible {
  outline: 3px solid var(--sunset-coral);
  outline-offset: 4px;
  border-radius: var(--radius-sm);
}

/* Smooth scrolling */
@media (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: smooth;
  }
}
```

## Typography Setup

Create `/src/styles/typography.css`:

```css
/* Font imports */
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap');

/* Headings */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-display);
  font-weight: var(--font-bold);
  line-height: 1.2;
  color: var(--warm-gray-900);
}

h1 { font-size: var(--text-5xl); }
h2 { font-size: var(--text-4xl); }
h3 { font-size: var(--text-3xl); }
h4 { font-size: var(--text-2xl); }
h5 { font-size: var(--text-xl); }
h6 { font-size: var(--text-lg); }

/* Portuguese text styling */
.portuguese-text {
  font-family: var(--font-portuguese);
  font-weight: var(--font-normal);
  color: var(--warm-gray-900);
}

.portuguese-large {
  font-family: var(--font-portuguese);
  font-size: var(--text-4xl);
  font-weight: var(--font-bold);
  line-height: 1.3;
}

/* Body text */
p {
  margin-bottom: var(--space-4);
  line-height: 1.6;
}

/* Code/monospace */
code, pre {
  font-family: 'SF Mono', Monaco, 'Cascadia Code', monospace;
  font-size: 0.9em;
}
```

## Animation Keyframes

Create `/src/styles/animations.css`:

```css
/* Card flip */
@keyframes flip-in {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(180deg);
  }
}

/* Progress fill */
@keyframes progress-fill {
  from {
    width: 0%;
  }
  to {
    width: var(--target-width);
  }
}

/* Achievement pop */
@keyframes achievement-pop {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

/* Streak flame pulse */
@keyframes flame-pulse {
  0%, 100% {
    filter: brightness(1) drop-shadow(0 0 8px rgba(255, 107, 107, 0.6));
  }
  50% {
    filter: brightness(1.2) drop-shadow(0 0 16px rgba(255, 107, 107, 0.8));
  }
}

/* Shimmer effect */
@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}

/* Confetti fall */
@keyframes confetti-fall {
  to {
    transform: translateY(100vh) rotate(360deg);
  }
}

/* Slide up */
@keyframes slide-up {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Fade in */
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Scale bounce */
@keyframes scale-bounce {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

/* Rainbow shine (legendary achievements) */
@keyframes rainbow-shine {
  0% {
    filter: hue-rotate(0deg) brightness(1.2);
  }
  100% {
    filter: hue-rotate(360deg) brightness(1.2);
  }
}

/* Reduced motion alternatives */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Utility Classes

Create `/src/styles/utilities.css`:

```css
/* Flexbox utilities */
.flex { display: flex; }
.flex-col { flex-direction: column; }
.items-center { align-items: center; }
.justify-center { justify-content: center; }
.justify-between { justify-content: space-between; }
.gap-2 { gap: var(--space-2); }
.gap-4 { gap: var(--space-4); }
.gap-6 { gap: var(--space-6); }

/* Grid utilities */
.grid { display: grid; }
.grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
.grid-cols-3 { grid-template-columns: repeat(3, 1fr); }

/* Spacing utilities */
.p-4 { padding: var(--space-4); }
.p-6 { padding: var(--space-6); }
.p-8 { padding: var(--space-8); }
.m-0 { margin: 0; }
.mt-4 { margin-top: var(--space-4); }
.mb-4 { margin-bottom: var(--space-4); }

/* Text utilities */
.text-center { text-align: center; }
.text-bold { font-weight: var(--font-bold); }
.text-sm { font-size: var(--text-sm); }
.text-lg { font-size: var(--text-lg); }
.text-xl { font-size: var(--text-xl); }
.text-2xl { font-size: var(--text-2xl); }

/* Color utilities */
.text-coral { color: var(--sunset-coral); }
.text-green { color: var(--amazon-green); }
.text-gray { color: var(--warm-gray-700); }
.bg-cream { background-color: var(--cream); }
.bg-sand { background-color: var(--sand); }

/* Border utilities */
.rounded { border-radius: var(--radius-md); }
.rounded-lg { border-radius: var(--radius-lg); }
.rounded-full { border-radius: var(--radius-full); }

/* Shadow utilities */
.shadow-sm { box-shadow: var(--shadow-sm); }
.shadow-md { box-shadow: var(--shadow-md); }
.shadow-lg { box-shadow: var(--shadow-lg); }

/* Display utilities */
.hidden { display: none; }
.block { display: block; }
.inline-block { display: inline-block; }

/* Position utilities */
.relative { position: relative; }
.absolute { position: absolute; }
.fixed { position: fixed; }

/* Width utilities */
.w-full { width: 100%; }
.max-w-md { max-width: var(--container-md); }
.max-w-lg { max-width: var(--container-lg); }

/* Accessibility */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

## Package Dependencies

Add these to `package.json`:

```json
{
  "dependencies": {
    "react": "^19.2.4",
    "react-dom": "^19.2.4",
    "react-router-dom": "^6.22.0",
    "recharts": "^2.12.0"
  },
  "devDependencies": {
    "@types/react": "^19.2.14",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.1",
    "typescript": "~6.0.2",
    "vite": "^8.0.4"
  }
}
```

## Sample Component: Button

Create `/src/components/ui/Button.tsx`:

```tsx
import './Button.css';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  onClick,
  type = 'button',
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`btn btn-${variant} btn-${size} ${fullWidth ? 'btn-full' : ''}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
```

Create `/src/components/ui/Button.css`:

```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);

  font-family: var(--font-display);
  font-weight: var(--font-semibold);

  border-radius: var(--radius-sm);
  border: none;
  cursor: pointer;

  transition: all var(--transition-base);

  /* Remove tap highlight on mobile */
  -webkit-tap-highlight-color: transparent;
}

/* Sizes */
.btn-sm {
  padding: var(--space-2) var(--space-4);
  font-size: var(--text-sm);
}

.btn-md {
  padding: var(--space-3) var(--space-6);
  font-size: var(--text-base);
}

.btn-lg {
  padding: var(--space-4) var(--space-8);
  font-size: var(--text-lg);
}

/* Variants */
.btn-primary {
  background: linear-gradient(135deg, var(--sunset-coral), var(--tropical-orange));
  color: white;
  box-shadow: var(--shadow-md);
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-primary:active:not(:disabled) {
  transform: translateY(0);
  box-shadow: var(--shadow-sm);
}

.btn-secondary {
  background: transparent;
  color: var(--warm-gray-900);
  border: 2px solid var(--warm-gray-300);
}

.btn-secondary:hover:not(:disabled) {
  background: var(--warm-gray-100);
  border-color: var(--warm-gray-700);
}

.btn-success {
  background: var(--amazon-green);
  color: white;
  box-shadow: var(--shadow-md);
}

.btn-success:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
  filter: brightness(1.1);
}

.btn-ghost {
  background: transparent;
  color: var(--warm-gray-700);
}

.btn-ghost:hover:not(:disabled) {
  background: var(--warm-gray-100);
}

/* States */
.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none !important;
}

.btn-full {
  width: 100%;
}

/* Focus state */
.btn:focus-visible {
  outline: 3px solid var(--sunset-coral);
  outline-offset: 2px;
}
```

## Sample Component: Card

Create `/src/components/ui/Card.tsx`:

```tsx
import './Card.css';

interface CardProps {
  children: React.ReactNode;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export default function Card({
  children,
  hover = false,
  padding = 'md',
  className = '',
  onClick,
}: CardProps) {
  return (
    <div
      className={`card card-${padding} ${hover ? 'card-hover' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
```

Create `/src/components/ui/Card.css`:

```css
.card {
  background: white;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-card);
  transition: all var(--transition-base);
}

/* Padding variants */
.card-none {
  padding: 0;
}

.card-sm {
  padding: var(--space-4);
}

.card-md {
  padding: var(--space-6);
}

.card-lg {
  padding: var(--space-8);
}

/* Hover effect */
.card-hover {
  cursor: pointer;
}

.card-hover:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.card-hover:active {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}
```

## Data Structure Example

Create `/src/data/phrases.ts`:

```typescript
export interface Phrase {
  id: string;
  portuguese: string;
  english: string;
  context?: string;
  category: 'romantic' | 'greetings' | 'household';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export const phrases: Phrase[] = [
  // Romantic phrases
  {
    id: 'romantic-1',
    portuguese: 'Eu te amo',
    english: 'I love you',
    context: 'Eu te amo, meu amor!',
    category: 'romantic',
    difficulty: 'beginner',
  },
  {
    id: 'romantic-2',
    portuguese: 'Você é linda',
    english: 'You are beautiful',
    context: 'Você é linda, Cris!',
    category: 'romantic',
    difficulty: 'beginner',
  },

  // Greetings
  {
    id: 'greeting-1',
    portuguese: 'Bom dia',
    english: 'Good morning',
    context: 'Bom dia, meu amor! Dormiu bem?',
    category: 'greetings',
    difficulty: 'beginner',
  },

  // Household
  {
    id: 'household-1',
    portuguese: 'Vou fazer café',
    english: 'I will make coffee',
    context: 'Vou fazer café. Você quer?',
    category: 'household',
    difficulty: 'beginner',
  },
];
```

## Testing the Design System

Create a test page to visualize all components:

```tsx
// /src/pages/DesignSystemTest.tsx
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

export default function DesignSystemTest() {
  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>Design System Test</h1>

      <section>
        <h2>Colors</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <div style={{ width: 100, height: 100, background: 'var(--sunset-coral)', borderRadius: '8px' }} />
          <div style={{ width: 100, height: 100, background: 'var(--tropical-orange)', borderRadius: '8px' }} />
          <div style={{ width: 100, height: 100, background: 'var(--amazon-green)', borderRadius: '8px' }} />
          <div style={{ width: 100, height: 100, background: 'var(--copacabana-blue)', borderRadius: '8px' }} />
          <div style={{ width: 100, height: 100, background: 'var(--ipanema-purple)', borderRadius: '8px' }} />
        </div>
      </section>

      <section>
        <h2>Buttons</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="success">Success</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="primary" disabled>Disabled</Button>
        </div>
      </section>

      <section>
        <h2>Cards</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
          <Card>Basic card</Card>
          <Card hover>Hover card</Card>
          <Card padding="lg">Large padding</Card>
        </div>
      </section>

      <section>
        <h2>Typography</h2>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <p>Body paragraph text in Inter font</p>
        <p className="portuguese-large">Eu te amo, meu amor!</p>
      </section>
    </div>
  );
}
```

## Next Steps

1. **Install dependencies**: `npm install`
2. **Import all style files** in `main.tsx`:
   ```tsx
   import './styles/variables.css';
   import './styles/reset.css';
   import './styles/typography.css';
   import './styles/animations.css';
   import './styles/utilities.css';
   ```
3. **Build components incrementally** following the architecture
4. **Test on multiple devices** for responsive design
5. **Run accessibility audit** with tools like axe DevTools
6. **Optimize performance** with React DevTools Profiler

## Resources

- **Design inspiration**: Duolingo, Drops, Memrise
- **Brazilian culture**: Unsplash (search "Brazil"), Brazilian tourism sites
- **Portuguese pronunciation**: Google Translate API or Web Speech API
- **Spaced repetition**: Anki algorithm documentation, SM-2 algorithm
