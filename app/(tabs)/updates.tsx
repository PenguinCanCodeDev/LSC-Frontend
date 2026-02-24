import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NotificationIcon from '@/components/svgIcons/NotificationIcon';
import FilterIcon from '@/components/svgIcons/FilterIcon';
import CatchUpItem from '@/components/home/CatchUpItem';
import type { MediaType } from '@/components/home/CatchUpItem';
import { useTheme } from '@/context/ThemeContext';
import { useIsFocused } from '@react-navigation/native';

const BLUE_BG_HEIGHT = 100;

const UPDATES_DATA: { id: string; title: string; subtitle: string; type: MediaType }[] = [
    {
        id: '1',
        title: 'TRAME Session December...',
        subtitle: 'BIU Leadership300 (L300)',
        type: 'YOUTUBE',
    },
    {
        id: '2',
        title: 'ABCD of Life',
        subtitle: 'LetsTalkPodcast',
        type: 'PODCAST',
    },
    {
        id: '3',
        title: 'TRAME Session November...',
        subtitle: 'BIU Leadership300 (L300)',
        type: 'YOUTUBE',
    },
    {
        id: '4',
        title: 'Your Words',
        subtitle: 'LetsTalkPodcast',
        type: 'PODCAST',
    },
    {
        id: '5',
        title: 'Friday 8-9PM News',
        subtitle: 'BIU L300 Radio',
        type: 'RADIO',
    },
];

export default function Updates() {
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
                {/* Top header - same as Home */}
                <View style={styles.topHeader}>
                    <View>
                        <Text style={styles.greeting}>Hey L300 Champion,</Text>
                        <Text style={styles.subGreeting}>What's good?</Text>
                    </View>
                    <NotificationIcon width={40} height={40} />
                </View>

                <ScrollView
                    style={styles.scrollView}
                    contentContainerStyle={styles.scrollContent}
                    showsVerticalScrollIndicator={false}
                >
                    {/* Updates header */}
                    <View style={styles.updatesHeader}>
                        <View>
                            <Text style={styles.updatesTitle}>Updates</Text>
                            <Text style={styles.updatesSubtitle}>Here's what's been going on</Text>
                        </View>
                        <FilterIcon width={24} height={24} />
                    </View>

                    {/* Coming up pill */}
                    <View style={styles.pillContainer}>
                        <View style={styles.comingUpPill}>
                            <Text style={styles.comingUpText}>Coming up</Text>
                        </View>
                    </View>

                    {/* Updates list */}
                    <View style={styles.listContainer}>
                        {UPDATES_DATA.map((item, index) => (
                            <CatchUpItem
                                key={item.id}
                                title={item.title}
                                subtitle={item.subtitle}
                                type={item.type}
                                containerStyle={index === 0 ? { borderTopLeftRadius: 0 } : undefined}
                            />
                        ))}
                    </View>
                </ScrollView>
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
        height: 80,
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
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        paddingBottom: 30,
    },
    updatesHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 8,
        paddingBottom: 8,
    },
    updatesTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: colors.text,
    },
    updatesSubtitle: {
        fontSize: 14,
        color: colors.secondaryText,
        marginTop: 2,
    },
    pillContainer: {
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    comingUpPill: {
        backgroundColor: colors.comingUpPill,
        alignSelf: 'flex-start',
        paddingHorizontal: 14,
        paddingVertical: 6,
        borderRadius: 10,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        marginBottom: -15,
    },
    comingUpText: {
        fontSize: 12,
        fontWeight: '700',
        color: '#FFFFFF', // Keep pill text white always
    },
    listContainer: {
        paddingHorizontal: 16,
        paddingTop: 4,
    },
});