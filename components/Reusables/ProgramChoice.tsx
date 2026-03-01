import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

interface SegmentedControlProps {
    options: string[]
    value: string
    onValueChange: (value: string) => void
}

export default function ProgramChoice({ options, value, onValueChange }: SegmentedControlProps) {
    return (
        <View style={styles.container}>
            {options.map((option) => {
                const isSelected = option === value
                return (
                    <TouchableOpacity
                        key={option}
                        style={[styles.option, isSelected && styles.optionSelected]}
                        onPress={() => onValueChange(option)}
                        activeOpacity={0.8}
                    >
                        <Text style={[styles.optionText, isSelected && styles.optionTextSelected]}>
                            {option}
                        </Text>
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 10,  // <-- spacing between the two separate buttons
    },
    option: {
        backgroundColor: "#F2F2F2",
        borderRadius: 16,
        paddingVertical: 16,
        alignItems: "center",
    },
    optionSelected: {
        backgroundColor: "#326BFE",
    },
    optionText: {
        fontSize: 15,
        color: "#326BFE",
        fontWeight: "600",
    },
    optionTextSelected: {
        color: "#fff",
    },
})