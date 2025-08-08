# Datablize Color Palette & Theme System

## Color Palette Overview

### Base Color Palette (Primary: Blue Tones)

| Color Name | Hex Code | Usage Example |
|------------|----------|---------------|
| Deep Navy | #113F67 | Primary brand color, headings |
| Ocean Blue | #34699A | Secondary color, buttons |
| Sky Blue | #58A0C8 | Accents, highlights |
| Ice Blue | #DBE4C9 | Backgrounds, subtle highlights |
| Warm White | #FFFFF0 | Light theme background |
| Soft Cream | #FDF5AA | Accents, highlights |
| Charcoal | #2D3748 | Text color |
| Dark Navy | #0A1F33 | Dark theme background |
| Light Gray | #E2E8F0 | Dark theme text |

## Theme Configurations

### Light Theme Palette
- **Background**: Warm White (#FFFFF0)
- **Text**: Charcoal (#2D3748)
- **Primary**: Deep Navy (#113F67)
- **Secondary**: Ocean Blue (#34699A)
- **Accents**: Sky Blue (#58A0C8)

### Dark Theme Palette
- **Background**: Dark Navy (#0A1F33)
- **Text**: Light Gray (#E2E8F0)
- **Primary**: Sky Blue (#58A0C8)
- **Secondary**: Ice Blue (#DBE4C9)
- **Accents**: Soft Cream (#FDF5AA)

### Blue-Dominant Theme Palette
- **Background**: Ice Blue (#DBE4C9)
- **Text**: Deep Navy (#113F67)
- **Primary**: Ocean Blue (#34699A)
- **Secondary**: Sky Blue (#58A0C8)
- **Accents**: Soft Cream (#FDF5AA)

## Gradient Combinations

### Primary Gradient (Buttons, Headers)
- `#113F67 → #34699A` (Deep Navy to Ocean Blue)
- Great for CTAs and important sections

### Soft Background Gradient
- `#DBE4C9 → #FFFFF0` (Ice Blue to Warm White)
- Clean, professional look for light sections

### Accent Gradient (Highlights)
- `#FDF5AA → #58A0C8` (Soft Cream to Sky Blue)
- Adds warmth while keeping a tech feel

## Implementation Details

### Theme Context
The application uses React Context (`ThemeContext`) to manage theme state across all components. The context provides:

- `theme`: Current theme ('light', 'dark', 'blue')
- `themeConfig`: Current theme's color configuration
- `toggleTheme()`: Function to cycle through themes
- `setTheme(theme)`: Function to set specific theme

### Floating Button
A floating button is positioned at the bottom-right corner of the screen that:
- Stays fixed during scrolling
- Uses theme-appropriate colors
- Provides smooth scroll-to-top functionality
- Includes hover animations and scaling effects

### Theme Toggle
A theme toggle component in the navbar allows users to:
- Switch between light, dark, and blue themes
- See visual feedback with appropriate icons
- Persist theme preference in localStorage

## Usage Examples

### Using Theme Colors in Components
```jsx
import { useTheme } from '../context/ThemeContext';

const MyComponent = () => {
  const { themeConfig } = useTheme();
  
  return (
    <div className={`${themeConfig.background} ${themeConfig.text}`}>
      <h1 className={themeConfig.primary}>Title</h1>
      <button className={themeConfig.button.primary}>
        Click me
      </button>
    </div>
  );
};
```

### Tailwind Classes
The color palette is available as Tailwind classes:
- `bg-deep-navy`, `text-deep-navy`
- `bg-ocean-blue`, `text-ocean-blue`
- `bg-sky-blue`, `text-sky-blue`
- `bg-ice-blue`, `text-ice-blue`
- `bg-warm-white`, `text-warm-white`
- `bg-soft-cream`, `text-soft-cream`
- `bg-charcoal`, `text-charcoal`
- `bg-dark-navy`, `text-dark-navy`
- `bg-light-gray`, `text-light-gray`

## Responsive Design
All theme implementations are responsive and work seamlessly across:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (< 768px)

The floating button and theme toggle adapt their size and positioning for different screen sizes.
