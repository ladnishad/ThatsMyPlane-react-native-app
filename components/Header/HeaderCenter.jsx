import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Icon, SearchBar } from "react-native-elements";

export const HeaderCenterSearchComponent = ({
  color,
  enableSearch,
  setSearch,
  searchFor,
  setSearchFor
}) => {
  const updateSearch = ({ searchText }) => {
    setSearchFor(searchText);
  };

  return (
    <SearchBar
      containerStyle={{ backgroundColor: "white", minWidth: 200, height: 20 }}
      inputContainerStyle={{
        backgroundColor: "white",
        minWidth: "100%",
        height: 20
      }}
      lightTheme
      round
      placeholder="Type Here..."
      onChangeText={updateSearch}
      value={searchFor}
      showCancel
      onCancel={() => setSearch(false)}
    />
  );
};
