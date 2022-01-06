import React, { useState } from "react";
import { View, StyleSheet, Image, FlatList } from "react-native";
import {
  Text,
  ListItem,
  Avatar,
  Icon,
  Badge,
  ListItemProps,
  Button,
  Switch,
  colors
} from "react-native-elements";

export const FlightsListComponent = ({ flightsData }) => {
  return (
    <View>
      {flightsData.map(
        ({ flightAirlineInfo, flightDate, flightNumber, flightDetails }, i) => {
          return (
            <ListItem key={i} bottomDivider>
              <Icon name="flight-takeoff" />
              <ListItem.Content>
                <ListItem.Title>{`${flightAirlineInfo.airlineCode} ${flightNumber} (Reg No. ${flightDetails.aircraftRegistration})`}</ListItem.Title>
                <ListItem.Subtitle>{`${flightDetails.from} - ${flightDetails.to}`}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          );
        }
      )}
    </View>
  );
};
