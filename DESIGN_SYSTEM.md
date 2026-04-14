# Falar com Cris - Design System

## Design Philosophy
A warm, romantic learning experience inspired by Brazilian culture and the personal connection between Martin and Cris. Avoiding generic AI aesthetics with bold, confident design choices.

## Color Palette

### Primary Colors (Brazilian-Inspired)
```css
--sunset-coral: #FF6B6B;      /* Primary accent - warm, romantic */
--tropical-orange: #FFB84D;   /* Secondary accent - energetic */
--amazon-green: #51CF66;      /* Success, progress - life, growth */
--copacabana-blue: #4DABF7;   /* Info, calm - beach, sky */
--ipanema-purple: #B197FC;    /* Achievement, special - bossa nova elegance */
```

### Neutrals (Warm Tones)
```css
--cream: #FFF8F0;             /* Background - warm, inviting */
--sand: #F5E6D3;              /* Secondary background */
--warm-gray-100: #F8F4F0;
--warm-gray-200: #E8DED0;
--warm-gray-300: #D4C4B0;
--warm-gray-700: #5C4F3D;
--warm-gray-900: #2D2416;     /* Text */
```

### Semantic Colors
```css
--success: var(--amazon-green);
--error: #FA5252;
--warning: var(--tropical-orange);
--info: var(--copacabana-blue);
--romantic: var(--sunset-coral);
```

## Typography

### Font Stack
- **Display/Headers**: 'Outfit', sans-serif (geometric, modern, friendly)
- **Body**: 'Inter', sans-serif (readable, professional)
- **Portuguese/Emphasis**: 'Merriweather', serif (warm, romantic for phrases)

### Scale
```css
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */
```

### Font Weights
```css
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;
```

## Spacing System
```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
```

## Border Radius
```css
--radius-sm: 0.375rem;   /* 6px - buttons, inputs */
--radius-md: 0.5rem;     /* 8px - cards */
--radius-lg: 0.75rem;    /* 12px - modals */
--radius-xl: 1rem;       /* 16px - flashcards */
--radius-2xl: 1.5rem;    /* 24px - hero elements */
--radius-full: 9999px;   /* pills, avatars */
```

## Shadows
```css
--shadow-sm: 0 1px 2px 0 rgba(45, 36, 22, 0.05);
--shadow-md: 0 4px 6px -1px rgba(45, 36, 22, 0.1), 0 2px 4px -1px rgba(45, 36, 22, 0.06);
--shadow-lg: 0 10px 15px -3px rgba(45, 36, 22, 0.1), 0 4px 6px -2px rgba(45, 36, 22, 0.05);
--shadow-xl: 0 20px 25px -5px rgba(45, 36, 22, 0.1), 0 10px 10px -5px rgba(45, 36, 22, 0.04);
--shadow-card: 0 2px 8px rgba(255, 107, 107, 0.08), 0 1px 3px rgba(255, 107, 107, 0.04);
```

## Animations

### Transitions
```css
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-base: 250ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-slow: 350ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-spring: 400ms cubic-bezier(0.34, 1.56, 0.64, 1);
```

### Keyframes
- **Flash Card Flip**: 600ms 3D rotate with spring easing
- **Progress Fill**: 800ms ease-out with slight bounce
- **Achievement Pop**: 500ms scale + fade with spring
- **Streak Flame**: 2s infinite pulse
- **Confetti**: 3s physics-based particle animation

## Component Patterns

### Cards
- Soft shadows with warm tint
- Hover: lift + shadow increase
- Active: slight scale down (0.98)
- Border: subtle warm gradient option

### Buttons
- **Primary**: Coral gradient, bold, slightly rounded
- **Secondary**: Outlined, warm gray
- **Success**: Amazon green fill
- **Ghost**: No background, hover background
- States: hover lift, active press, disabled fade

### Inputs
- Warm cream background
- Sand border, coral focus ring
- Generous padding (16px vertical)
- Clear icons in warm gray

### Progress Bars
- Track: sand background
- Fill: gradient (coral → orange)
- Animated shimmer on active
- Height: 12px, fully rounded

## Layout

### Container Widths
```css
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
```

### Navigation
- Fixed bottom on mobile (56px height)
- Sidebar on desktop (280px width)
- Glass morphism effect with warm tint

### Grid
- 12 column system
- 24px gutter on mobile
- 32px gutter on desktop

## Accessibility

### Focus Indicators
- 3px solid coral ring
- 4px offset
- High contrast mode support

### Touch Targets
- Minimum 44x44px
- Generous spacing between interactive elements

### Color Contrast
- All text meets WCAG AA (4.5:1 minimum)
- Interactive elements meet AAA where possible

## Brazilian Cultural Elements

### Visual Motifs
- Subtle background patterns: sidewalk mosaic (calçadão)
- Card decorations: tropical leaves, beach waves
- Achievement icons: Brazilian symbols (Christ the Redeemer silhouette, açaí bowl, caipirinha)

### Microinteractions
- Samba rhythm for correct answers (3-2 beat vibration)
- Beach wave animation on streak milestones
- Confetti with Brazilian flag colors

### Emotional Tone
- Warm, encouraging (like talking to a patient partner)
- Celebratory (Brazilian enthusiasm)
- Romantic without being cheesy (bossa nova sophistication)
