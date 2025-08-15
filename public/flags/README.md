# Flag Images

This directory is reserved for flag images. Currently, the language selector uses emoji flags:

- 🇺🇸 for English (en)
- 🇷🇺 for Russian (ru)

If you want to use actual flag image files instead of emojis, you can place the files here:

- `en.svg` or `en.png` for English flag
- `ru.svg` or `ru.png` for Russian flag

Then update the `LanguageSelector.tsx` component to use these image files instead of emoji flags.

Example:
```typescript
const languages: Language[] = [
  { code: 'en', name: 'English', flag: '/flags/en.svg' },
  { code: 'ru', name: 'Russian', flag: '/flags/ru.svg' },
];
```

And update the FlagIcon component to render an img element instead of a span.
