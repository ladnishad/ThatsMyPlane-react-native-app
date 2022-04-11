import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
import { FlightsListComponent } from "../FlightsList/FlightsListComponent";

const Tab = createBottomTabNavigator();

const DiscoverScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Discover!</Text>
    </View>
  );
};

export const FooterTabs = ({ flightsData }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Tab.Screen name="Home">
        {() => <FlightsListComponent flightsData={flightsData} />}
      </Tab.Screen>
      <Tab.Screen name="Discover">{() => <DiscoverScreen />}</Tab.Screen>
      <Tab.Screen name="Account">
        {() => <FlightsListComponent flightsData={flightsData} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};
