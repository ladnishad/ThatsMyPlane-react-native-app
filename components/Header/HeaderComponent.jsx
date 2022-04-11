import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Linking,
  StyleProp,
  TextStyle,
  ViewStyle,
  TouchableOpacity
} from "react-native";
import {
  Header as HeaderRNE,
  SearchBar,
  HeaderProps,
  Icon
} from "react-native-elements";
import { useTheme } from "react-native-elements";

import { HeaderLeftComponent } from "./HeaderLeft";
import { HeaderCenterSearchComponent } from "./HeaderCenter";
import { HeaderRightComponent } from "./HeaderRight";

import { AppStrings } from "../../assets/app-strings";

export const HeaderComponent = ({
  addFlight,
  setAddFlight,
  enableSearch,
  setSearch,
  searchFor,
  setSearchFor
}) => {
  const { theme } = useTheme();

  return (
    <HeaderRNE
      barStyle="light-content"
      containerStyle={{ backgroundColor: theme.colors.header.background }}
      leftComponent={{
        icon: "menu",
        color: theme.colors.header.text
      }}
      centerComponent={
        enableSearch
          ? () => (
              <HeaderCenterSearchComponent
                enableSearch={enableSearch}
                setSearch={setSearch}
                searchFor={searchFor}
                setSearchFor={setSearchFor}
              />
            )
          : {
              text: AppStrings["app-name"],
              style: {
                color: theme.colors.header.text,
                fontSize: 22,
                fontWeight: "bold"
              }
            }
      }
      centerContainerStyle={{
        justifyContent: "flex-start",
        alignItems: "left"
      }}
      rightComponent={() => (
        <HeaderRightComponent
          addFlight={addFlight}
          setAddFlight={setAddFlight}
          enableSearch={enableSearch}
          setSearch={setSearch}
          searchFor={searchFor}
          setSearchFor={setSearchFor}
        />
      )}
    />
  );
};
