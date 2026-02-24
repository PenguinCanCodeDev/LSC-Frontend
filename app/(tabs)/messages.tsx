import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import NotificationIcon from '@/components/svgIcons/NotificationIcon';
import ConfidentialIcon from '@/components/svgIcons/ConfidentialIcon';
import SendMessageIcon from '@/components/svgIcons/SendMessageIcon';
import { useTheme } from '@/context/ThemeContext';
import { useIsFocused } from '@react-navigation/native';

const BLUE_BG_HEIGHT = 80;

export default function Messages() {
    const { colors, theme } = useTheme();
    const styles = getStyles(colors);
    const isFocused = useIsFocused();

    return (
        <View style={styles.rootContainer}>
            {isFocused && (
                <StatusBar
                    barStyle="light-content"
                    backgroundColor={colors.primaryDark}
                />
            )}

            {/* Blue background layer */}
            <View style={styles.blueBackground} />

            <SafeAreaView style={styles.safeArea}>
                {/* Top header */}
                <View style={styles.topHeader}>
                    <View>
                        <Text style={styles.greeting}>Hey L300 Champion,</Text>
                        <Text style={styles.subGreeting}>What's good?</Text>
                    </View>
                    <NotificationIcon width={40} height={40} />
                </View>

                {/* Messages header */}
                <View style={styles.messagesHeader}>
                    <Text style={styles.messagesTitle}>Messages</Text>
                    <Text style={styles.messagesSubtitle}>
                        Need advice or support? Send us a message.
                    </Text>
                </View>

                {/* Action rows */}
                <View style={styles.actionsContainer}>
                    <TouchableOpacity style={styles.actionRow}>
                        <SendMessageIcon width={28} height={28} />
                        <Text style={styles.actionText}>Send us a message</Text>
                        <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.actionRow}>
                        <ConfidentialIcon width={28} height={28} />
                        <Text style={styles.actionText}>Send as confidential message</Text>
                        <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    );
}

const getStyles = (colors: any) => StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: colors.background,
    },
    blueBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: BLUE_BG_HEIGHT,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: colors.primaryDark,
        zIndex: 0,
    },
    safeArea: {
        flex: 1,
        zIndex: 1,
    },
    topHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 10,
        paddingBottom: 16,
    },
    greeting: {
        fontSize: 22,
        fontWeight: '700',
        color: '#FFFFFF',
    },
    subGreeting: {
        fontSize: 15,
        color: colors.primaryLight,
        marginTop: 2,
    },
    messagesHeader: {
        paddingHorizontal: 16,
        paddingTop: 8,
        paddingBottom: 12,
    },
    messagesTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: colors.text,
    },
    messagesSubtitle: {
        fontSize: 14,
        color: colors.secondaryText,
        marginTop: 2,
    },
    actionsContainer: {
        paddingHorizontal: 16,
        paddingTop: 4,
    },
    actionRow: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.surface,
        borderRadius: 14,
        padding: 16,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: colors.border,
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.04,
        shadowRadius: 4,
        elevation: 1,
    },
    actionText: {
        flex: 1,
        fontSize: 15,
        fontWeight: '500',
        color: colors.text,
        marginLeft: 12,
    },
});