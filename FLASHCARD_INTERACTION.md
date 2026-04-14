# Flashcard Interaction Design

## Gesture & Interaction System

### Primary Interaction: Tap to Flip
```
State 1: Front (Portuguese phrase)
  ↓ [Tap anywhere on card]
State 2: Back (English translation + context)
  ↓ [Select confidence button]
State 3: Next card (smooth transition)
```

### Secondary Interactions: Swipe Gestures

**Mobile Swipe Directions:**
- **Right swipe** (green indicator): "Easy" - phrase well known
- **Left swipe** (red indicator): "Again" - need more practice
- **Up swipe** (blue indicator): "Good" - got it right
- **Down swipe** (orange indicator): "Hard" - struggled but got it

**Visual Feedback:**
- Swipe threshold: 80px
- Color overlay fades in based on swipe distance
- Haptic feedback at threshold
- Icon appears in swipe direction (✓, ✗, 👍, 🤔)

**Desktop Alternative:**
- Keyboard shortcuts (1-4 keys, Space to flip)
- Prominent buttons below card
- Hover states on buttons

## Card Anatomy

### Front Side (Portuguese)
```
┌─────────────────────────────────────┐
│  🔊                      ❤️ Romantic │  ← Category badge + audio
│                                      │
│                                      │
│          Eu te amo                  │  ← Phrase (large, serif)
│                                      │
│                                      │
│              [Tap to reveal]         │  ← Subtle hint
│                                      │
│                                      │
│  ●●●●○○○○○○                 5/20    │  ← Progress dots + counter
└─────────────────────────────────────┘
```

### Back Side (English + Context)
```
┌─────────────────────────────────────┐
│                                      │
│        Eu te amo                     │  ← Portuguese (smaller)
│        I love you                    │  ← Translation (medium)
│                                      │
│  💬 "Eu te amo, meu amor!"          │  ← Context example
│                                      │
│  ┌──────┬──────┬──────┬──────┐     │
│  │ Again│ Hard │ Good │ Easy │     │  ← Confidence buttons
│  │  ❌  │  🤔  │  👍  │  ✨  │     │
│  └──────┴──────┴──────┴──────┘     │
│                                      │
│  ●●●●●○○○○○                5/20    │
└─────────────────────────────────────┘
```

## Animation Sequences

### 1. Card Flip Animation
```css
/* 3D flip on Y-axis */
.card-flip-enter {
  transform: rotateY(0deg);
}
.card-flip-enter-active {
  transform: rotateY(180deg);
  transition: transform 600ms cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

**Timing:**
- 0ms: Start rotation
- 300ms: Card perpendicular (front invisible)
- 301ms: Switch content (front → back)
- 600ms: Complete rotation (back visible)

**Audio:** Subtle "whoosh" sound at 300ms

### 2. Answer Submission Flow

**Button Click:**
```
1. Button press animation (scale 0.95)
2. Card shrinks slightly (scale 0.98)
3. Fade out (opacity 0)
4. Slide left (translateX -100%)
5. Next card slides in from right
6. Scale up to normal (scale 1)
```

**Duration:** 400ms total
**Easing:** cubic-bezier(0.4, 0.0, 0.2, 1)

**Swipe:**
```
1. Card follows finger/cursor
2. Rotation proportional to swipe (-15deg to 15deg)
3. Color overlay intensity increases
4. At threshold: haptic + icon appears
5. Release: accelerate in swipe direction
6. Fade out while moving
7. Next card slides in from opposite side
```

**Duration:** Based on swipe velocity (200-600ms)

### 3. New Card Entrance

**First Card:**
```
- Fade in from 0 to 1 opacity
- Scale from 0.9 to 1
- Slight upward movement (translateY 20px → 0)
```

**Subsequent Cards:**
```
- Start behind current card (z-index -1)
- Scale 0.95, opacity 0.5
- When current card exits:
  - Move to front (z-index 1)
  - Scale to 1, opacity to 1
  - Subtle spring animation
```

### 4. Progress Indicators

**Progress Dots:**
- Fill animation: left to right wave (100ms stagger)
- Completed dot: scale pulse (1 → 1.2 → 1)
- Current dot: gentle pulse animation (infinite)

**Card Counter:**
- Number increments with spring animation
- Brief color flash (coral) on change

**Top Progress Bar:**
- Width transition with spring easing
- Shimmer animation overlay
- Milestone markers at 25%, 50%, 75%
- Confetti burst at 100%

## Confidence Button Design

### Button Styles
```tsx
// Again (Red - needs practice)
background: linear-gradient(135deg, #FA5252, #FF6B6B);
icon: ❌ or 🔄

// Hard (Orange - struggled)
background: linear-gradient(135deg, #FF8C42, #FFB84D);
icon: 🤔 or 💭

// Good (Green - got it)
background: linear-gradient(135deg, #51CF66, #69DB7C);
icon: 👍 or ✓

// Easy (Blue - mastered)
background: linear-gradient(135deg, #4DABF7, #74C0FC);
icon: ✨ or 🎯
```

### Button States
- **Default:** Gradient background, white text
- **Hover:** Lift (translateY -2px), shadow increase
- **Active:** Press down (translateY 0), scale 0.95
- **Disabled:** Grayscale, reduced opacity

### Button Layout
**Mobile (Stack):**
```
┌─────────────┐
│   Again ❌  │
├─────────────┤
│   Hard 🤔   │
├─────────────┤
│   Good 👍   │
├─────────────┤
│   Easy ✨   │
└─────────────┘
```

**Desktop (Row):**
```
┌──────┬──────┬──────┬──────┐
│ Again│ Hard │ Good │ Easy │
└──────┴──────┴──────┴──────┘
```

## Audio Feedback

### Sound Effects
- **Card flip:** Soft whoosh (100ms)
- **Correct answer (Good/Easy):** Positive chime (200ms)
- **Needs practice (Again):** Gentle notification (150ms)
- **Struggled (Hard):** Neutral beep (150ms)
- **Streak milestone:** Celebration fanfare (500ms)
- **Session complete:** Success melody (1s)

### Text-to-Speech
- **Trigger:** Tap speaker icon on front of card
- **Voice:** Portuguese (Brazilian) - female voice
- **Speed:** 0.9x (slightly slower for learning)
- **Highlight:** Word highlighting during playback

## Haptic Feedback (Mobile)

```tsx
// Light tap: Card flip, button press
navigator.vibrate(10);

// Medium tap: Correct answer
navigator.vibrate([10, 50, 10]);

// Success pattern: Session complete
navigator.vibrate([10, 50, 10, 50, 100]);

// Threshold reached: Swipe gesture
navigator.vibrate(20);
```

## Error States

### Network Error (can't load phrases)
```
┌─────────────────────────────────────┐
│                                      │
│            📡 ❌                     │
│                                      │
│     Couldn't load new phrases       │
│                                      │
│     [ Try Again ]  [ Use Offline ]  │
│                                      │
└─────────────────────────────────────┘
```

### No Cards Due
```
┌─────────────────────────────────────┐
│                                      │
│            ✨ 🎉                     │
│                                      │
│     You're all caught up!           │
│     Next review: Tomorrow at 9am    │
│                                      │
│     [ Practice Anyway ]  [ Done ]   │
│                                      │
└─────────────────────────────────────┘
```

### Session Complete
```
┌─────────────────────────────────────┐
│            🎊                       │
│                                      │
│     Great work, Martin!             │
│     20 cards reviewed               │
│                                      │
│     📈 Daily goal complete!         │
│     🔥 7-day streak maintained!     │
│                                      │
│     [ Continue ]  [ View Stats ]    │
│                                      │
└─────────────────────────────────────┘
```

## Accessibility Considerations

### Keyboard Navigation
```
Space:     Flip card
1-4:       Confidence buttons (Again/Hard/Good/Easy)
Enter:     Submit selected button
Tab:       Navigate between buttons
Escape:    Exit session
Arrow Up:  Audio playback
```

### Screen Reader Announcements
```tsx
// Card front
"Portuguese phrase: Eu te amo. Press space to reveal translation. Card 5 of 20."

// Card back
"Translation: I love you. Example: Eu te amo, meu amor. Select your confidence level."

// Answer submitted
"Good selected. Next card loading. Card 6 of 20."

// Progress
"Daily goal: 15 of 20 cards complete. 75 percent."
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  .card-flip-enter-active {
    transition: opacity 200ms ease;
    transform: none; /* No rotation */
  }

  .swipe-animation {
    transition: opacity 150ms ease;
    transform: none; /* No slide */
  }
}
```

## Context & Examples System

### Context Display
Each phrase back includes:
1. **Literal translation** (if different)
2. **Usage example** with Cris's name when appropriate
3. **Cultural note** (optional, for idioms)

**Example:**
```
Front: "Bom dia, meu amor"
Back:
  Translation: "Good morning, my love"
  Example: "Bom dia, meu amor! Dormiu bem?" (Good morning, my love! Did you sleep well?)
  Note: Common affectionate morning greeting
```

### Personalization
- Romantic phrases use Cris's name in examples
- Household phrases reference Martin's perspective
- Greetings include time-appropriate context

## Spaced Repetition Integration

### Visual Cues
Cards show difficulty based on SM-2 algorithm:
- **New:** Blue corner ribbon "NEW"
- **Learning:** Orange ribbon "LEARNING"
- **Review:** Green ribbon "REVIEW"
- **Relearning:** Red ribbon "PRACTICE"

### Next Review Display
After answering, briefly show:
```
"See this again: Tomorrow"
"See this again: In 3 days"
"See this again: In 1 week"
```

### Interval Adjustment
- **Again:** Reset to learning mode
- **Hard:** Shorter interval (1.2x)
- **Good:** Standard interval (2.5x)
- **Easy:** Longer interval (3x + graduate)
