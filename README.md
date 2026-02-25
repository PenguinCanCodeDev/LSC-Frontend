# LSC-Frontend 🚀

Welcome to **LSC-Frontend**, a modern React Native cross-platform application built with [Expo](https://expo.dev) and [Expo Router](https://docs.expo.dev/router/introduction).

## ✨ Features

- **Tab Navigation:** Seamless file-based routing with tab navigation (`Home`, `Updates`, `Messages`, `Profile`) using `expo-router`.
- **Custom UI Components:** Beautifully designed screens with custom cards (`EventCard`, `CatchUpItem`) and layout configurations.
- **Custom SVG Icons:** High-quality, scalable vector icons configured to accept dynamic colors.
- **Persistent Theming:** Built-in Light and Dark mode! Dynamic theming is controlled via a custom `ThemeContext` and user preferences are persistently saved using `@react-native-async-storage/async-storage`.

## 🛠️ Tech Stack

- **Framework:** [React Native](https://reactnative.dev/) & [Expo](https://expo.dev/) (SDK 54)
- **Navigation:** [Expo Router](https://docs.expo.dev/router/introduction) (File-based routing)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Storage:** [AsyncStorage](https://react-native-async-storage.github.io/async-storage/)
- **Icons:** [React Native SVG](https://github.com/software-mansion/react-native-svg) & [Expo Vector Icons](https://docs.expo.dev/guides/icons/)

## 🚀 Getting Started

### 1. Install Dependencies

Clone the repository and install the required dependencies:

```bash
npm install
```

### 2. Start the Development Server

Start the Expo development server to launch the app:

```bash
npx expo start
```

In the terminal output, you'll find options to open the app:
- Press `a` to open in an **Android emulator**
- Press `i` to open in an **iOS simulator**
- Or scan the QR code with the **Expo Go** app on your physical device.

## 📁 Project Structure

This project uses file-based routing via the **app** directory:

- `app/(tabs)/` - Contains the main tab screens (Home, Updates, Messages, Profile).
- `app/(onboarding)/` - Contains authentication and onboarding flows.
- `components/` - Reusable UI components and custom SVG icons.
- `context/` - Global state providers, including `ThemeContext` for managing the light/dark mode.
- `constants/` - Application constants, including the centralized `colors.ts` theme definitions.

## 🤝 Contributing

When developing, make sure all new UI components reference `useTheme()` and `getStyles(colors)` to ensure full compatibility with the dynamic light/dark mode system.

## 📄 License

This project is licensed under the MIT License.
