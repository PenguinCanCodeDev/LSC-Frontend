import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    StatusBar,
    TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import YouTubeIcon from '@/components/svgIcons/YouTubeIcon';
import PodcastIcon from '@/components/svgIcons/PodcastIcon';
import WhatsAppIcon from '@/components/svgIcons/WhatsAppIcon';
import EditProfileIcon from '@/components/svgIcons/EditProfileIcon';
import { useTheme } from '@/context/ThemeContext';
import { useIsFocused } from '@react-navigation/native';

const SOCIAL_LINKS = [
    {
        id: '1',
        title: 'BIU L300 Channel',
        subtitle: 'WhatsApp Channel',
        icon: <WhatsAppIcon width={34} height={34} />,
    },
    {
        id: '2',
        title: 'BIU Leadership300 (L300)',
        subtitle: 'YouTube',
        icon: <YouTubeIcon width={34} height={24} />,
    },
    {
        id: '3',
        title: 'LetsTalkPodcast',
        subtitle: 'Podcast LinkTree',
        icon: <PodcastIcon width={34} height={34} />,
    },
];

export default function ProfileScreen() {
    const { colors, theme, toggleTheme } = useTheme();
    const styles = getStyles(colors);
    const isFocused = useIsFocused();

    return (
        <SafeAreaView style={styles.safeArea}>
            {isFocused && (
                <StatusBar
                    barStyle={theme === 'dark' ? "light-content" : "dark-content"}
                    backgroundColor={colors.background}
                />
            )}

            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                {/* Profile Header */}
                <View style={styles.profileHeader}>
                    {/* Placeholder for Avatar */}
                    <View style={styles.avatarCircle}>
                        <Ionicons name="person-outline" size={40} color={colors.tertiaryText} />
                    </View>

                    {/* Name */}
                    <Text style={styles.profileName}>John Snow</Text>

                    {/* Level badge */}
                    <View style={styles.levelBadge}>
                        <Text style={styles.levelBadgeText}>L300</Text>
                    </View>

                    {/* Action buttons (Edit Profile + Theme Toggle) */}
                    <View style={styles.actionRowContainer}>
                        {/* Edit profile */}
                        <TouchableOpacity style={styles.editProfileButton}>
                            <Text style={styles.editProfileText}>Edit profile</Text>
                            <View style={{ marginLeft: 6 }}>
                                <EditProfileIcon width={15} height={15} />
                            </View>
                        </TouchableOpacity>

                        {/* Theme Toggle */}
                        <TouchableOpacity
                            style={styles.themeToggleBtn}
                            onPress={toggleTheme}
                        >
                            <Ionicons
                                name={theme === 'dark' ? "sunny-outline" : "moon-outline"}
                                size={18}
                                color={colors.primary}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Grey container behind cards */}
                <View style={styles.cardsWrapper}>

                    {/* Info Card */}
                    <View style={styles.infoCard}>
                        <View style={styles.infoRow}>
                            <View style={styles.infoItem}>
                                <Text style={styles.infoLabel}>Department</Text>
                                <Text style={styles.infoValue}>Computer Science</Text>
                            </View>
                            <View style={styles.infoItem}>
                                <Text style={styles.infoLabel}>Mat No</Text>
                                <Text style={styles.infoValue}>SCN/CSC/230123</Text>
                            </View>
                        </View>
                        <View style={styles.infoRow}>
                            <View style={styles.infoItem}>
                                <Text style={styles.infoLabel}>Faculty</Text>
                                <Text style={styles.infoValue}>Computing</Text>
                            </View>
                            <View style={styles.infoItem}>
                                <Text style={styles.infoLabel}>Campus</Text>
                                <Text style={styles.infoValue}>Legacy(Okha)</Text>
                            </View>
                        </View>
                    </View>

                    {/* Connect With Us */}
                    <View style={styles.connectSection}>
                        <Text style={styles.connectTitle}>Connect with Us</Text>
                        <Text style={styles.connectSubtitle}>
                            Follow us on our socials so you don't miss a thing.
                        </Text>

                        {SOCIAL_LINKS.map((link) => (
                            <TouchableOpacity key={link.id} style={styles.socialRow}>
                                <View style={styles.socialIconContainer}>
                                    {link.icon}
                                </View>
                                <View style={styles.socialTextContainer}>
                                    <Text style={styles.socialTitle}>{link.title}</Text>
                                    <Text style={styles.socialSubtitle}>{link.subtitle}</Text>
                                </View>
                                <Ionicons name="open-outline" size={20} color={colors.primary} />
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/* Log out */}
                <TouchableOpacity style={styles.logoutButton}>
                    <Text style={styles.logoutText}>Log out</Text>
                    <Ionicons name="log-out-outline" size={18} color={colors.error} style={{ marginLeft: 4 }} />
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView >
    );
}

const getStyles = (colors: any) => StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colors.background,
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        paddingBottom: 30,
    },

    // Grey container for cards
    cardsWrapper: {
        backgroundColor: colors.surfaceSecondary,
        borderRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 8,
        marginBottom: 15,
        marginTop: 25,
    },

    // Profile Header
    profileHeader: {
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 16,
    },
    avatarCircle: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: colors.surfaceTertiary,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12,
    },
    profileName: {
        fontSize: 20,
        fontWeight: '700',
        color: colors.text,
        marginBottom: 8,
    },
    levelBadge: {
        backgroundColor: colors.primary,
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 20,
        marginBottom: 10,
    },
    levelBadgeText: {
        fontSize: 14,
        fontWeight: '700',
        color: colors.surface,
    },
    actionRowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    editProfileButton: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.primary,
        borderRadius: 20,
        paddingHorizontal: 14,
        paddingVertical: 6,
    },
    editProfileText: {
        fontSize: 13,
        fontWeight: '500',
        color: colors.primary,
    },
    themeToggleBtn: {
        width: 34,
        height: 34,
        borderRadius: 17,
        borderWidth: 1,
        borderColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },

    // Info Card
    infoCard: {
        marginTop: -30,
        marginBottom: 15,
        backgroundColor: colors.surface,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: colors.border,
        padding: 16,
        paddingVertical: 20,
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.04,
        shadowRadius: 6,
        elevation: 1,
    },
    infoRow: {
        flexDirection: 'row',
        marginBottom: 16,
    },
    infoItem: {
        flex: 1,
    },
    infoLabel: {
        fontSize: 12,
        fontWeight: '600',
        color: colors.primary,
        marginBottom: 4,
    },
    infoValue: {
        fontSize: 14,
        fontWeight: '500',
        color: colors.text,
    },

    // Connect Section
    connectSection: {
        marginTop: 8,
        marginBottom: -30,
        backgroundColor: colors.surface,
        borderRadius: 14,
        padding: 16,
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.04,
        shadowRadius: 6,
        elevation: 1,
    },
    connectTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: colors.primary,
        marginBottom: 4,
    },
    connectSubtitle: {
        fontSize: 13,
        color: colors.secondaryText,
        marginBottom: 16,
        lineHeight: 18,
    },
    socialRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    socialIconContainer: {
        marginRight: 12,
    },
    socialTextContainer: {
        flex: 1,
    },
    socialTitle: {
        fontSize: 15,
        fontWeight: '600',
        color: colors.text,
        marginBottom: 2,
    },
    socialSubtitle: {
        fontSize: 12,
        color: colors.tertiaryText,
    },

    // Logout
    logoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
    },
    logoutText: {
        fontSize: 15,
        fontWeight: '600',
        color: colors.error,
    },
});