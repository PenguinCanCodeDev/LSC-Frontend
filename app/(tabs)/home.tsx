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
import { Ionicons } from '@expo/vector-icons';
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

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
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
                    <View style={styles.contactIcon}>
                        <Ionicons name="people" size={20} color="#FFFFFF" />
                    </View>
                </View>

                {/* Upcoming Events */}
                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>Upcoming Events</Text>
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
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#FFFFFF',
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
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 16,
    },
    greeting: {
        fontSize: 22,
        fontWeight: '700',
        color: '#0A2463',
    },
    subGreeting: {
        fontSize: 15,
        color: '#6B7280',
        marginTop: 2,
    },
    contactIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#0A2463',
        alignItems: 'center',
        justifyContent: 'center',
    },
    sectionContainer: {
        marginTop: 10,
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#0A2463',
        marginLeft: 20,
        marginBottom: 14,
    },
    eventsListContent: {
        paddingLeft: 20,
        paddingRight: 4,
    },
});