import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import CheckCircleIcon from '@/components/svgIcons/CheckCircleIcon';

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
                            <CheckCircleIcon width={30} height={30} />
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
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.06,
        shadowRadius: 12,
        elevation: 2,
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
        gap: 6,
    },
    tag: {
        paddingHorizontal: 6,
        paddingVertical: 4,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#0444B6',
        backgroundColor: '#FFFFFF',
    },
    tagText: {
        fontSize: 9,
        fontWeight: '500',
        color: '#0444B6',
        letterSpacing: 0.2,
    },
});
