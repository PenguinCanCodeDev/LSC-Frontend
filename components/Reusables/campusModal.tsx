import { useState } from "react"
import {
    FlatList,
    Modal,
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native"

interface DropdownOption {
    label: string
    value: string
}

interface DropdownBoxProps {
    text: string
    placeholder: string
    value: string
    options: DropdownOption[]
    onValueChange: (value: string) => void
}

export default function CampusModal({
    text,
    placeholder,
    value,
    options,
    onValueChange,
}: DropdownBoxProps) {
    const [modalVisible, setModalVisible] = useState(false)

    const selectedLabel = options.find((opt) => opt.value === value)?.label

    return (
        <View>
            <TouchableOpacity
                style={styles.inputBox}
                onPress={() => setModalVisible(true)}
                activeOpacity={0.8}
            >
                <Text style={styles.inputText}>{text}</Text>
                <Text style={selectedLabel ? styles.valueText : styles.placeholderText}>
                    {selectedLabel ?? placeholder}
                </Text>
            </TouchableOpacity>

            <Modal
                visible={modalVisible}
                transparent
                animationType="fade"
                onRequestClose={() => setModalVisible(false)}
            >
                <Pressable style={styles.overlay} onPress={() => setModalVisible(false)}>
                    <View style={styles.modal}>
                        <Text style={styles.modalTitle}>Select a campus</Text>

                        <FlatList
                            data={options}
                            keyExtractor={(item) => item.value}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={styles.option}
                                    onPress={() => {
                                        onValueChange(item.value)
                                        setModalVisible(false)
                                    }}
                                >
                                    <Text
                                        style={[
                                            styles.optionText,
                                            item.value === value && styles.optionTextSelected,
                                        ]}
                                    >
                                        {item.label}
                                    </Text>
                                </TouchableOpacity>
                            )}
                        />

                        <TouchableOpacity
                            style={styles.doneButton}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.doneText}>Done</Text>
                        </TouchableOpacity>
                    </View>
                </Pressable>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    inputBox: {
        backgroundColor: "#F2F2F2",
        marginVertical: 6,
        borderRadius: 16,
        paddingHorizontal: 10,
        paddingVertical: 3,
        paddingBottom: 10,
    },
    inputText: {
        color: "#0444B6",
        fontSize: 13,
        fontWeight: "600",
        top: 6,
    },
    valueText: {
        color: "#000",
        fontSize: 14,
        marginTop: 10,
    },
    placeholderText: {
        color: "#C9C9C9",
        fontSize: 14,
        marginTop: 10,
    },

    // Modal styles
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.35)",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 24,
    },
    modal: {
        backgroundColor: "#fff",
        borderRadius: 16,
        width: "100%",
        paddingTop: 16,
        paddingBottom: 8,
        overflow: "hidden",
    },
    modalTitle: {
        color: "#0444B6",
        fontSize: 15,
        fontWeight: "600",
        paddingHorizontal: 16,
        marginBottom: 8,
    },
    option: {
        paddingVertical: 14,
        paddingHorizontal: 16,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: "#E5E5E5",
    },
    optionText: {
        fontSize: 15,
        color: "#333",
    },
    optionTextSelected: {
        color: "#0444B6",
        fontWeight: "600",
    },
    doneButton: {
        backgroundColor: "#2AA104",
        marginHorizontal: 16,
        marginTop: 12,
        marginBottom: 8,
        borderRadius: 30,
        paddingVertical: 14,
        alignItems: "center",
    },
    doneText: {
        color: "#fff",
        fontWeight: "700",
        fontSize: 15,
    },
})