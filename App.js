import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { HeaderComponent } from "./components/Header/HeaderComponent";
import { DialogComponent } from "./components/AddFlightForm/FormDialogComponent";
import ModalComponent from "./components/AddFlightForm/ModalComponent";
import { FlightsListComponent } from "./components/FlightsList/FlightsListComponent";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";

export default function App() {
  const [airlines, setAirlines] = useState([
    { airline: "American Airlines", code: "AA" },
    { airline: "Delta Airlines", code: "DL" },
    { airline: "Air Canada", code: "AC" },
    { airline: "United Airlines", code: "UA" },
    { airline: "Lufthansa", code: "LH" },
    { airline: "Air France", code: "AF" },
    { airline: "KLM Royal Dutch Airlines", code: "KL" },
    { airline: "Quantas Airways", code: "QF" },
    { airline: "Air New Zealand", code: "NZ" },
    { airline: "Air India", code: "AI" },
    { airline: "British Airways", code: "BA" },
    { airline: "Cathay Pacific", code: "CX" },
    { airline: "Emirates", code: "EK" },
    { airline: "Thai Airways", code: "TG" },
    { airline: "Malaysian Airlines", code: "MH" },
    { airline: "Turkish Airlines", code: "TK" },
    { airline: "Southwest", code: "WN" }
  ]);

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
      },
      image: {
        url: "https://www.flickr.com/photos/icon0/45388005135",
        author: "",
        description: ""
      }
    }
  ]);
  const [addFlight, setAddFlight] = useState(false);

  const handleCloseForm = () => {
    setAddFlight(false);
  };

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
        <ModalComponent
          modalVisible={addFlight}
          setModalVisible={handleCloseForm}
          flightsData={flightsData}
          setFlightsData={setFlightsData}
        />
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
