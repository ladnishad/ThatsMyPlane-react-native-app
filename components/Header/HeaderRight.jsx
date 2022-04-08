import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Icon, SearchBar } from "react-native-elements";

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
        color={color}
        enableSearch={enableSearch}
        setSearch={setSearch}
        searchFor={searchFor}
        setSearchFor={setSearchFor}
      />
      <AddFlightButton
        color={color}
        addFlight={addFlight}
        setAddFlight={setAddFlight}
      />
      <NotificationsBell color={color} count={2} />
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
  color,
  enableSearch,
  setSearch,
  searchFor,
  setSearchFor
}) => {
  return (
    <TouchableOpacity
      style={{ marginLeft: 10 }}
      onPress={() => setSearch(!enableSearch)}
    >
      <Icon type="material" name="search" color={color} />
    </TouchableOpacity>
  );
};
const NotificationsBell = ({ color, count }) => {
  return (
    <TouchableOpacity
      style={{ marginLeft: 10 }}
      onPress={() => console.log("search")}
    >
      <Icon type="material" name="notifications" color={color} />
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

const AddFlightButton = ({ color, addFlight, setAddFlight }) => {
  return (
    <TouchableOpacity
      style={{ marginLeft: 10 }}
      onPress={() => setAddFlight(!addFlight)}
    >
      {addFlight ? (
        <Icon type="material" name="close" color={color} />
      ) : (
        <Icon type="material" name="add" color={color} />
      )}
    </TouchableOpacity>
  );
};
