import { Entypo, FontAwesome5, MaterialCommunityIcons, MaterialIcons, Octicons } from '@expo/vector-icons';
import { Stack } from 'expo-router';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';


export default function HomeScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#f0bd66ff",
          },
          headerTitle: () => (
            <View style={{ flexDirection: "column" }}>
              <Text style={{ fontSize: 20, fontWeight: "600" }}>Fire Navigator</Text>
            </View>
          ),
          headerLeft: () => (
            <FontAwesome5 name="fire" size={30} style={{ marginRight: 10, color: "#c46a0aff" }} />
          ),
        }}
      />
      <View>
        <View style={{ padding: 13}}>
          <View style={{ marginBottom: 13 }}>
            <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
              <FontAwesome5 name="building" size={15} />
              <Text style={{ fontSize: 20 }}>Buildings</Text>
            </View>
            <Text style={[{ fontSize: 14 }, styles.textLight]}>Select or search a building to navigate.</Text>
          </View>
          <TextInput
            placeholder="Search buildings"
            // value={text}
            // onChangeText={setText}
            style={styles.searchInput}
          />
        </View>
        <ScrollView style={{ padding: 13 }}>

          <View>
            <BuildingCard />
            <BuildingCard />
            <BuildingCard />
            <BuildingCard />
            <BuildingCard />
            <BuildingCard />
            <BuildingCard />
            <BuildingCard />
            <BuildingCard />
            <BuildingCard />
            <BuildingCard />
            <BuildingCard />
            <BuildingCard />
            <BuildingCard />
          </View>
        </ScrollView>
      </View>
    </>
  );
}

function BuildingCard() {
  return (
    <View style={styles.cardBox}>
      <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
        <View style={styles.buildingIconBox}>
          <MaterialCommunityIcons name="office-building" size={40} style={styles.buildingIcon} />
        </View>
        <View>
          <Text style={{ fontSize: 20 }}>Lorem, ipsum.</Text>
          <View style={{ flexDirection: "row", gap: 2, alignItems: "center", marginBottom: 10 }}>
            <Entypo name="location-pin" size={15} style={styles.textLight} />
            <Text style={styles.textLight}>Lorem ipsum dolor sit amet consectetu</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 15, alignItems: "center" }}>
            <View style={{ flexDirection: "row", gap: 2, alignItems: "center" }}>
              <Octicons name="stack" size={15} style={styles.textLight} />
              <Text style={styles.textLight}>8 floors</Text>
            </View>
            <View style={{ flexDirection: "row", gap: 2, alignItems: "center" }}>
              <MaterialIcons name="sensors" size={15} style={styles.textLight} />
              <Text style={styles.textLight}>40 sensors</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buildingIconBox: {
    padding: 8,
    backgroundColor: 'rgba(172, 215, 229, 0.28)',
    borderRadius: 10
  },
  buildingIcon: {
    color: 'rgba(95, 139, 140, 0.53)'
  },
  cardBox: {
    marginVertical: 8,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    borderLeftWidth: 3,
    borderLeftColor: "rgba(96, 212, 94, 1)"
  },
  textLight: {
    color: "rgba(87, 87, 87, 1)"
  },
  searchInput: {
    height: 50,
    backgroundColor: "#ccebf084",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    borderColor: "#b3b3b3ff",
  }
});
