// constants/color-scheme/colors.ts

const tintColorLight = '#0444B6';
const tintColorDark = '#326BFE'; // A slightly lighter blue for dark mode contrast

export const Colors = {
    light: {
        // App Theme
        text: '#1A1A2E',
        secondaryText: '#6B7280',
        tertiaryText: '#9CA3AF',
        background: '#FFFFFF',
        tint: tintColorLight,
        tabIconDefault: '#9CA3AF',
        tabIconSelected: tintColorLight,

        // Brand / Primary
        primary: '#0444B6',
        primaryDark: '#012265', // Blue header background
        primaryLight: '#B0C4DE', // Sub-greeting text on blue header

        // Backgrounds & Surface
        surface: '#FFFFFF',
        surfaceSecondary: '#F5F5F5', // Grey cards wrapper
        surfaceTertiary: '#F2F2F2', // Avatar/Icon circular backgrounds

        // Borders
        border: '#F0F0F0',
        borderSecondary: '#D6DCE8',
        borderTertiary: '#7C7C7C',

        // Functional / State Colors
        success: '#32B904',
        error: '#F44336',
        warning: '#FF9A00',

        // Specific UI Element Colors
        comingUpPill: '#326BFE',
        shadow: '#000000',
        notificationShadow: '#364D9B',
        youtubeRed: '#FF0000',
        whatsappGreen: '#25D366',
        dateHighlight: '#DAD2E9',
        cardImagePlaceholder: '#C8D6E5',
    },
    dark: {
        // App Theme
        text: '#FFFFFF',
        secondaryText: '#A1A1AA', // Lighter grey for dark mode
        tertiaryText: '#71717A',
        background: '#121212', // Dark background
        tint: tintColorDark,
        tabIconDefault: '#71717A',
        tabIconSelected: tintColorDark,

        // Brand / Primary
        primary: '#326BFE', // Slightly lighter blue for contrast
        primaryDark: '#01153E', // Even darker header for dark mode
        primaryLight: '#B0C4DE',

        // Backgrounds & Surface
        surface: '#1E1E1E', // Dark cards
        surfaceSecondary: '#27272A', // Grey cards wrapper
        surfaceTertiary: '#3F3F46', // Avatar circular backgrounds

        // Borders
        border: '#333333',
        borderSecondary: '#3F3F46',
        borderTertiary: '#52525B',

        // Functional / State Colors
        success: '#4ADE80',
        error: '#F87171',
        warning: '#FBBF24',

        // Specific UI Element Colors
        comingUpPill: '#3B82F6',
        shadow: '#000000',
        notificationShadow: '#1A2A5E',
        youtubeRed: '#EF4444',
        whatsappGreen: '#22C55E',
        dateHighlight: '#4B3F65',
        cardImagePlaceholder: '#2D3748',
    },
};
