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
  console.log(enableSearch);
  return (
    <HeaderRNE
      barStyle="light-content"
      containerStyle={{ backgroundColor: "white" }}
      leftComponent={{
        icon: "menu",
        color: "black"
      }}
      centerComponent={
        enableSearch
          ? () => (
              <HeaderCenterSearchComponent
                color="black"
                enableSearch={enableSearch}
                setSearch={setSearch}
                searchFor={searchFor}
                setSearchFor={setSearchFor}
              />
            )
          : { text: AppStrings["app-name"], style: styles.heading }
      }
      centerContainerStyle={{
        justifyContent: "flex-start",
        alignItems: "left"
      }}
      rightComponent={() => (
        <HeaderRightComponent
          color="black"
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

const styles = StyleSheet.create({
  heading: {
    color: "black",
    fontSize: 22,
    fontWeight: "bold"
  }
});
