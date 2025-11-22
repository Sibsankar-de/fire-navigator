import GestureCanvas from "@/components/canvas/gesture-canvas";
import { PathLine } from "@/components/canvas/path-line";
import RectWithText from "@/components/canvas/RectWithText";
import { Entypo, FontAwesome5, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";


export default function MapScreen() {
    const edges = [
        { v1: { x: 20, y: 20 }, v2: { x: 150, y: 80 } },
        { v1: { x: 150, y: 80 }, v2: { x: 280, y: 160 } },
        { v1: { x: 280, y: 160 }, v2: { x: 80, y: 200 } },
    ];
    return (
        <>
            <Stack.Screen
                options={{
                    headerBackVisible: false,
                    headerStyle: {
                        backgroundColor: "#f0bd66ff",
                    },
                    headerTitle: () => (
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                            <FontAwesome5 name="building" size={20} />
                            <Text style={{ fontSize: 20, fontWeight: "600" }}>JGEC Admin building</Text>
                        </View>
                    ),
                    headerLeft: () => (
                        <Pressable onPress={() => router.push("/")}>
                            <Ionicons name="arrow-back-outline" size={24} style={{ marginRight: 15, color: "black" }} />
                        </Pressable>
                    ),
                }}
            />
            <GestureCanvas>
                <RectWithText x={20} y={30} width={200} height={100} label="Hello" />
                <RectWithText x={20} y={300} width={200} height={100} label="Hello" />
                <PathLine edges={edges} />
            </GestureCanvas>
            <View style={styles.bottomNav}>
                <Pressable
                    style={({ pressed }) => [
                        styles.refreshButton,
                        pressed && { transform: "scale(0.9)" }
                    ]}
                    onPress={() => { }}
                    android_ripple={{
                        color: "#7cbac450",
                        radius: 25,
                        borderless: false,
                        foreground: true
                    }}
                >
                    <MaterialCommunityIcons name="refresh" size={30} color="black" />
                </Pressable>
                <View style={styles.roomSelectBox}>
                    <Text style={{ fontSize: 16, textAlign: "center", marginBottom: 5 }}>Current floor</Text>
                    <RoomSelector />
                </View>
            </View>
        </>
    )
}

function RoomSelector() {
    const [isDropdownOpen, setIsDropDownOpen] = useState(false);
    const [selectedFloor, setSelectedFloor] = useState(5);
    const floorMap = Array(10).fill(0);
    return (
        <View style={{ alignItems: "center" }}>
            {isDropdownOpen &&
                <View style={{ alignItems: "center", justifyContent: "flex-end", marginBottom: 10 }}>
                    <ScrollView style={styles.selectionDropdown}>
                        {floorMap.map((_, index: number) => (
                            <Pressable
                                key={index}
                                style={{
                                    padding: 10,
                                    backgroundColor: selectedFloor === index + 1 ? "#f3dd8fff" : "transparent"
                                }}
                                android_ripple={{
                                    color: "#b3cccf50",
                                    radius: 100,
                                    borderless: false,
                                    foreground: true
                                }}
                                onPress={() => {
                                    setSelectedFloor(index + 1);
                                    setIsDropDownOpen(false);
                                }}
                            >
                                <Text style={{ fontSize: 15 }}>Floor {index + 1}</Text>
                            </Pressable>
                        ))}
                    </ScrollView>
                </View>
            }
            <Pressable style={styles.selectButton} onPress={() => setIsDropDownOpen(prev => !prev)}>
                <Text style={{ fontSize: 18 }}>{selectedFloor}</Text>
                <Entypo
                    name="chevron-small-down"
                    size={24}
                    color="black"
                    style={{ transform: isDropdownOpen ? "rotate(0deg)" : "rotate(180deg)" }}
                />
            </Pressable>
        </View>
    )
}


const styles = StyleSheet.create({
    bottomNav: {
        position: "absolute",
        bottom: 25,
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        alignItems: "flex-end"
    },
    roomSelectBox: {
        padding: 10,
        backgroundColor: "white",
        boxShadow: "3px 5px 10px 0 #a3a3a3ff",
        width: 150,
        alignSelf: "flex-end",
        borderRadius: 15
    },
    refreshButton: {
        height: 50,
        width: 50,
        backgroundColor: "white",
        boxShadow: "3px 5px 10px 0 #d2d4d5ff",
        borderRadius: "50%",
        justifyContent: "center",
        alignItems: "center",
    },
    selectButton: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        backgroundColor: "#97d0ec29",
        borderRadius: 15,
        paddingHorizontal: 15
    },
    selectionDropdown: {
        maxHeight: 200,
        width: 150,
        paddingVertical: 10,
        backgroundColor: "white",
        position: "absolute",
        zIndex: 50,
        boxShadow: "3px 5px 10px 0 #a3a3a37e",
        borderRadius: 10,
    }
});
