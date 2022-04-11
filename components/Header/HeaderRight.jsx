import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Icon, SearchBar } from "react-native-elements";
import { useTheme } from 'react-native-elements';

export const HeaderRightComponent = ({
  color,
  addFlight,
  setAddFlight,
  enableSearch,
  setSearch,
  searchFor,
  setSearchFor
}) => {
  return (
    <View style={styles.headerRight}>
      <SearchFlightButton
       enableSearch={enableSearch}
        setSearch={setSearch}
        searchFor={searchFor}
        setSearchFor={setSearchFor}
      />
      <AddFlightButton
        addFlight={addFlight}
        setAddFlight={setAddFlight}
      />
      <NotificationsBell count={2} />
    </View>
  );
};

// <DarkModeToggle color={color} />
const styles = StyleSheet.create({
  headerRight: {
    display: "flex",
    flexDirection: "row",
    marginTop: 5
  }
});

const SearchFlightButton = ({
  enableSearch,
  setSearch,
  searchFor,
  setSearchFor
}) => {
  const { theme } = useTheme();
  return (
    <TouchableOpacity
      style={{ marginLeft: 10 }}
      onPress={() => setSearch(!enableSearch)}
    >
      <Icon type="material" name="search" color={theme.colors.header.text} />
    </TouchableOpacity>
  );
};
const NotificationsBell = ({  count }) => {
  const { theme } = useTheme();
  return (
    <TouchableOpacity
      style={{ marginLeft: 10 }}
      onPress={() => console.log("search")}
    >
      <Icon type="material" name="notifications" color={theme.colors.header.text} />
    </TouchableOpacity>
  );
};

// const DarkModeToggle = ({ color }) => {
//   return (
//     <TouchableOpacity
//       style={{ marginLeft: 10 }}
//       onPress={() => console.log("dark mode")}
//     >
//       <Icon type="material-icons" name="light_mode" color={color} />
//     </TouchableOpacity>
//   );
// };

const AddFlightButton = ({  addFlight, setAddFlight }) => {
  const { theme } = useTheme();
  return (
    <TouchableOpacity
      style={{ marginLeft: 10 }}
      onPress={() => setAddFlight(!addFlight)}
    >
      {addFlight ? (
        <Icon type="material" name="close" color={theme.colors.header.text} />
      ) : (
        <Icon type="material" name="add" color={theme.colors.header.text} />
      )}
    </TouchableOpacity>
  );
};
