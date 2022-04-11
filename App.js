import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native-appearance";
import { ThemeProvider } from "react-native-elements";
import { StyleSheet, Text, View } from "react-native";
import { HeaderComponent } from "./components/Header/HeaderComponent";
import { FooterTabs } from "./components/FooterTabs/AppTabs";
import { DialogComponent } from "./components/AddFlightForm/FormDialogComponent";
import ModalComponent from "./components/AddFlightForm/ModalComponent";
import { FlightsListComponent } from "./components/FlightsList/FlightsListComponent";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme
} from "@react-navigation/native";
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

  // let colorScheme = useColorScheme();
  let colorScheme = "light";
  const theme = {
    colors: {
      palletteType: colorScheme === "dark" ? "dark" : "light",
      header: {
        background: colorScheme === "dark" ? "#000000" : "#FFFFFF",
        text: colorScheme === "dark" ? "#FFFFFF" : "#000000"
      },
      footer: {
        background: colorScheme === "dark" ? "#000000" : "#FFFFFF",
        text: colorScheme === "dark" ? "#FFFFFF" : "#000000"
      }
    }
  };

  const [componentIndex, setComponentIndex] = useState(0);
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
        url:
          "https://live.staticflickr.com/65535/51678760730_29d746f4f5_5k.jpg",
        author: "",
        description: ""
      }
    },
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
        url:
          "https://live.staticflickr.com/65535/51678760730_29d746f4f5_5k.jpg",
        author: "",
        description: ""
      }
    }
  ]);

  const [addFlight, setAddFlight] = useState(false);
  const [enableSearch, setSearch] = useState(false);
  const [searchFor, setSearchFor] = useState("");

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
    <NavigationContainer
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <ThemeProvider useDark={colorScheme === "dark"} theme={theme}>
        <SafeAreaProvider>
          <View style={{ flex: 1 }}>
            <HeaderComponent
              addFlight={addFlight}
              setAddFlight={setAddFlight}
              enableSearch={enableSearch}
              setSearch={setSearch}
              searchFor={searchFor}
              setSearchFor={setSearchFor}
            />
            <FooterTabs flightsData={flightsData} />
            <ModalComponent
              modalVisible={addFlight}
              setModalVisible={handleCloseForm}
              flightsData={flightsData}
              setFlightsData={setFlightsData}
            />
          </View>
        </SafeAreaProvider>
      </ThemeProvider>
    </NavigationContainer>
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
