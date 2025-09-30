# Game'Lusive Education - Multilingual Website

This is a multilingual website for the Game'Lusive Education Erasmus+ project, supporting 5 languages: English, Polish, Turkish, Dutch, and Lithuanian.

## 🌍 Languages Supported

- **English (en)** - Default language
- **Polish (pl)** - Polski
- **Turkish (tr)** - Türkçe  
- **Dutch (nl)** - Nederlands
- **Lithuanian (lt)** - Lietuvių

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🔧 Multilingual System Architecture

### Core Files

- **`lib/i18n.ts`** - Language configuration and types
- **`lib/translations.ts`** - All translation content
- **`components/language-provider.tsx`** - React context for language state
- **`components/language-selector.tsx`** - Language dropdown component
- **`components/language-metadata.tsx`** - Updates HTML lang attribute

### How It Works

1. **Language Provider**: Wraps the entire app and provides language context
2. **Translation Function**: `t()` function for accessing translations
3. **Language Selector**: Dropdown in navbar for switching languages
4. **Local Storage**: Saves user's language preference
5. **Dynamic HTML Lang**: Updates document language attribute

### Adding New Translations

1. Add your translation key to `lib/translations.ts`
2. Use the `t()` function in components: `{t('your.translation.key')}`

### Translation Key Structure

```typescript
{
  nav: {
    about: "About",
    partners: "Partners", 
    // ...
  },
  hero: {
    title: "Game'Lusive Education",
    subtitle: "Teaching children...",
    // ...
  },
  // ... other sections
}
```

### Usage Example

```tsx
import { useLanguage } from '@/components/language-provider';

function MyComponent() {
  const { t, language, setLanguage } = useLanguage();
  
  return (
    <div>
      <h1>{t('hero.title')}</h1>
      <p>{t('hero.subtitle')}</p>
    </div>
  );
}
```

## 📱 Features

- ✅ Complete navbar translations
- ✅ Hero section with funding text
- ✅ About project section
- ✅ Partners section with "Visit Website" links
- ✅ Educational games with descriptions and skills
- ✅ News section with categories
- ✅ Contact/Newsletter section
- ✅ Footer with all links
- ✅ Language selector in desktop and mobile navigation
- ✅ Persistent language selection (localStorage)
- ✅ Dynamic HTML lang attribute

## 🎮 Game Descriptions Translated

All 5 educational games have full translations:
- Animal Detectives
- Good or Bad?
- Shopping Adventure  
- Sentence Tower
- Journey to School

## 🏗️ Technical Implementation

- **Framework**: Next.js 15 with React 18
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI (shadcn/ui)
- **State Management**: React Context API
- **Storage**: localStorage for persistence
- **TypeScript**: Fully typed translation system

## 🌐 Browser Support

- Modern browsers with localStorage support
- Graceful fallback to English if stored language not found
- SEO-friendly with proper HTML lang attributes

## 📝 Maintenance

To add a new language:

1. Add language to `lib/i18n.ts`
2. Add translations to `lib/translations.ts` 
3. Test all sections for proper display

To modify existing translations:

1. Update the relevant section in `lib/translations.ts`
2. Test the changes in the browser

---

**Project**: Game'Lusive Education Erasmus+ Project  
**Website**: [Your Domain]  
**Designed by**: Kocatürk Danışmanlık
