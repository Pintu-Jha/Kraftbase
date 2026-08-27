# Kraftbase

Kraftbase is a portrait Expo learning app for children. It includes onboarding, a home dashboard, lesson browsing, analytics, a dictionary placeholder, and profile placeholder screens.

## Requirements

- Node.js 22.13 or newer
- npm
- Expo Go or an iOS/Android simulator

This project uses Expo SDK 57, React Native 0.86, and React 19.

## Run The App

```bash
npm install
npm start
```

Then press `i` for the iOS simulator, `a` for Android, or scan the QR code with Expo Go.

For web:

```bash
npm run web
```

## Quality Checks

```bash
npm run validate
```

This runs TypeScript in strict no-emit mode and ESLint across all TypeScript files.

Individual checks are available with `npm run typecheck` and `npm run lint`.

## Project Structure

```text
src/
  assets/          SVG icons, illustrations, and static images
  components/
    ui/            Small reusable primitives such as Button, Chip, Card, and Avatar
    composite/     Composed product components such as CourseCard and LessonHero
  navigation/      Typed root and tab navigators
  screens/         Screen-level composition grouped by feature
  theme/           Color, typography, spacing, radius, and responsive tokens
  types/           Shared domain types and local mock data
```

Screens compose reusable components. Components consume theme tokens instead of defining their own design values. Mock data is kept separate from presentation so the same components can receive API data later.

## Notes

- The app starts on onboarding by design. Continue through onboarding to reach the main tab navigator.
- Fonts are loaded from the local assets folder during app startup.
- The current dictionary and profile routes are intentionally lightweight placeholders.
