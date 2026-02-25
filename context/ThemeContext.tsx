import React, { createContext, useContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SystemUI from 'expo-system-ui';
import { Colors } from '@/constants/color-scheme/colors';

type ThemeType = 'light' | 'dark';

interface ThemeContextType {
    theme: ThemeType;
    colors: typeof Colors.light;
    toggleTheme: () => void;
    setTheme: (theme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType>({
    theme: 'light',
    colors: Colors.light,
    toggleTheme: () => { },
    setTheme: () => { },
});

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const systemColorScheme = useColorScheme();
    const [theme, setThemeState] = useState<ThemeType>(systemColorScheme === 'dark' ? 'dark' : 'light');

    useEffect(() => {
        // Load the saved theme when the app starts
        const loadTheme = async () => {
            try {
                const storedTheme = await AsyncStorage.getItem('appTheme') as ThemeType | null;
                if (storedTheme) {
                    setThemeState(storedTheme);
                }
            } catch (error) {
                console.error('Failed to load theme from AsyncStorage', error);
            }
        };
        loadTheme();
    }, []);

    const toggleTheme = () => {
        setThemeState((prev) => {
            const nextTheme = prev === 'light' ? 'dark' : 'light';
            AsyncStorage.setItem('appTheme', nextTheme).catch(err => console.error('Failed to save theme', err));
            return nextTheme;
        });
    };

    const setTheme = (newTheme: ThemeType) => {
        setThemeState(newTheme);
        AsyncStorage.setItem('appTheme', newTheme).catch(err => console.error('Failed to save theme', err));
    };

    const colors = Colors[theme];

    // Update the root view background color to match the tab bar
    // so the space behind the Android navigation bar looks seamless
    useEffect(() => {
        SystemUI.setBackgroundColorAsync(colors.surface);
    }, [theme, colors.surface]);

    return (
        <ThemeContext.Provider value={{ theme, colors, toggleTheme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
