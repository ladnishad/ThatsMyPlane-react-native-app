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
import { Header as HeaderRNE, HeaderProps, Icon } from "react-native-elements";

export const HeaderComponent = ({ addFlight, setAddFlight }) => {
  return (
    <HeaderRNE
      leftComponent={{
        icon: "menu",
        color: "#fff"
      }}
      centerComponent={{ text: "FlightsApp", style: styles.heading }}
      rightComponent={
        <View style={styles.headerRight}>
          <TouchableOpacity
            style={{ marginLeft: 10 }}
            onPress={() => setAddFlight(!addFlight)}
          >
            {addFlight ? (
              <Icon type="material" name="close" color="white" />
            ) : (
              <Icon type="material" name="add" color="white" />
            )}
          </TouchableOpacity>
        </View>
      }
    />
  );
};

const styles = StyleSheet.create({
  heading: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold"
  },
  headerRight: {
    display: "flex",
    flexDirection: "row",
    marginTop: 5
  }
});
