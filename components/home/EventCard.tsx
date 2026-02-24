import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CARD_WIDTH = Dimensions.get('window').width * 0.8;

interface EventCardProps {
    title: string;
    subtitle: string;
    tags: string[];
    completed?: boolean;
    imageColor?: string;
}

export default function EventCard({
    title,
    subtitle,
    tags,
    completed = false,
    imageColor = '#D6DCE8',
}: EventCardProps) {
    return (
        <View style={styles.card}>
            {/* Image placeholder area */}
            <View style={[styles.imagePlaceholder, { backgroundColor: imageColor }]} />

            {/* Content area */}
            <View style={styles.content}>
                <View style={styles.titleRow}>
                    <View style={styles.titleTextContainer}>
                        <Text style={styles.title} numberOfLines={1}>
                            {title}
                        </Text>
                        <Text style={styles.subtitle} numberOfLines={1}>
                            {subtitle}
                        </Text>
                    </View>
                    {completed && (
                        <View style={styles.checkCircle}>
                            <Ionicons name="checkmark-circle" size={30} color="#4CAF50" />
                        </View>
                    )}
                </View>

                {/* Tags */}
                <View style={styles.tagsRow}>
                    {tags.map((tag, index) => (
                        <View key={index} style={styles.tag}>
                            <Text style={styles.tagText}>{tag}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: CARD_WIDTH,
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        marginRight: 16,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 3,
        borderWidth: 1,
        borderColor: '#F0F0F0',
    },
    imagePlaceholder: {
        width: '100%',
        height: 160,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },
    content: {
        padding: 14,
    },
    titleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 10,
    },
    titleTextContainer: {
        flex: 1,
        marginRight: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
        color: '#1A1A2E',
        marginBottom: 3,
    },
    subtitle: {
        fontSize: 13,
        color: '#6B7280',
    },
    checkCircle: {
        marginTop: 2,
    },
    tagsRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },
    tag: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
        borderWidth: 1.2,
        borderColor: '#D1D5DB',
        backgroundColor: '#FFFFFF',
    },
    tagText: {
        fontSize: 10,
        fontWeight: '600',
        color: '#374151',
        letterSpacing: 0.3,
    },
});
