import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    FlatList,
    StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NotificationIcon from '@/components/svgIcons/NotificationIcon';
import EventCard from '@/components/home/EventCard';
import CatchUpItem from '@/components/home/CatchUpItem';

const EVENTS_DATA = [
    {
        id: '1',
        title: 'Accountability: Reflections &...',
        subtitle: 'December 2025 TRAME session',
        tags: ['TRAME SESSION', 'L300', '100 - 400L'],
        completed: true,
        imageColor: '#D6DCE8',
    },
    {
        id: '2',
        title: 'Annual Leadership Summit',
        subtitle: 'January 2026 Conference',
        tags: ['CONFERENCE', 'L300'],
        completed: false,
        imageColor: '#C8D6E5',
    },
    {
        id: '3',
        title: 'Vision & Strategy Workshop',
        subtitle: 'February 2026 Workshop',
        tags: ['WORKSHOP', 'L200', '200 - 300L'],
        completed: false,
        imageColor: '#DAD2E9',
    },
];

const CATCH_UP_DATA = [
    {
        id: '1',
        title: 'ABCD of Life',
        subtitle: 'LetsTalkPodcast',
        type: 'PODCAST' as const,
    },
    {
        id: '2',
        title: 'TRAME Session November...',
        subtitle: 'BIU Leadership300 (L300)',
        type: 'YOUTUBE' as const,
    },
];

// Height of the blue background - covers status bar, safe area, header, section title, and ~60% of cards
const BLUE_BG_HEIGHT = 280;

export default function HomeScreen() {
    return (
        <View style={styles.rootContainer}>
            <StatusBar barStyle="light-content" backgroundColor="#012265" />

            {/* Blue background layer */}
            <View style={styles.blueBackground} />

            <SafeAreaView style={styles.safeArea}>
                <ScrollView
                    style={styles.scrollView}
                    contentContainerStyle={styles.scrollContent}
                    showsVerticalScrollIndicator={false}
                >
                    {/* Header */}
                    <View style={styles.header}>
                        <View>
                            <Text style={styles.greeting}>Hey L300 Champion,</Text>
                            <Text style={styles.subGreeting}>What's good?</Text>
                        </View>
                        <NotificationIcon width={40} height={40} />
                    </View>

                    {/* Upcoming Events */}
                    <View style={styles.eventsSectionContainer}>
                        <Text style={styles.eventsSectionTitle}>Upcoming Events</Text>
                        <FlatList
                            data={EVENTS_DATA}
                            keyExtractor={(item) => item.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.eventsListContent}
                            renderItem={({ item }) => (
                                <EventCard
                                    title={item.title}
                                    subtitle={item.subtitle}
                                    tags={item.tags}
                                    completed={item.completed}
                                    imageColor={item.imageColor}
                                />
                            )}
                        />
                    </View>

                    {/* Catch Up */}
                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>Catch Up</Text>
                        {CATCH_UP_DATA.map((item) => (
                            <CatchUpItem
                                key={item.id}
                                title={item.title}
                                subtitle={item.subtitle}
                                type={item.type}
                            />
                        ))}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    blueBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: BLUE_BG_HEIGHT,
        backgroundColor: '#012265',
        zIndex: 0,
    },
    safeArea: {
        flex: 1,
        zIndex: 1,
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        paddingBottom: 30,
    },
    header: {
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
        color: '#B0C4DE',
        marginTop: 2,
    },
    eventsSectionContainer: {
        marginTop: 8,
        marginBottom: 8,
    },
    eventsSectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#FFFFFF',
        marginLeft: 16,
        marginBottom: 12,
    },
    sectionContainer: {
        marginTop: 8,
        marginBottom: 8,
        paddingHorizontal: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#0A2463',
        marginBottom: 12,
    },
    eventsListContent: {
        paddingLeft: 16,
        paddingRight: 4,
    },
});