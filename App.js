import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { HeaderComponent } from "./components/Header/HeaderComponent";
import { FlightsListComponent } from "./components/FlightsList/FlightsListComponent";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";

export default function App() {
  const [flightsData, setFlightsData] = useState([
    {
      flightAirlineInfo: {
        airlineCode: "UA",
        airline: "United Airlines"
      },
      flightDate: 1641340800000,
      flightNumber: "1281",
      flightDetails: {
        from: "EWR",
        to: "DFW",
        aircraftRegistration: "N27256"
      }
    }
  ]);
  const [addFlight, setAddFlight] = useState(false);

  const [loaded] = useFonts({
    "Rubik-Regular": require("./node_modules/@shoutem/ui/fonts/Rubik-Regular.ttf")
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <View>
        <HeaderComponent addFlight={addFlight} setAddFlight={setAddFlight} />
        <FlightsListComponent flightsData={flightsData} />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
