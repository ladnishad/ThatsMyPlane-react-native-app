import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Icon, SearchBar } from "react-native-elements";
import { useTheme } from 'react-native-elements';

export const HeaderCenterSearchComponent = ({
  color,
  enableSearch,
  setSearch,
  searchFor,
  setSearchFor
}) => {
  const { theme } = useTheme();
  const updateSearch = ({ searchText }) => {
    setSearchFor(searchText);
  };

  return (
    <SearchBar
      containerStyle={{ backgroundColor:  theme.colors.header.background, minWidth: 200, height: 20 }}
      inputContainerStyle={{
        backgroundColor:  theme.colors.header.background,
        minWidth: "100%",
        height: 20
      }}
      lightTheme={theme.colors.palletteType === "light" ? true : false}
      round
      placeholder="Type Here..."
      onChangeText={updateSearch}
      value={searchFor}
      showCancel
      onCancel={() => setSearch(false)}
    />
  );
};
