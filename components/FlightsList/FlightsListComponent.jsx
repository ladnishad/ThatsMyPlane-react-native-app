import React, { useState } from "react";
import { View, StyleSheet, Image, FlatList, ScrollView } from "react-native";
import { FlightCard } from "./FlightCard";
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
    <ScrollView>
      <View>
        {flightsData.map(
          (
            {
              flightAirlineInfo,
              flightDate,
              flightNumber,
              flightDetails,
              image
            },
            i
          ) => {
            return (
              <ListItem key={i}>
                <ListItem.Content>
                  <FlightCard
                    flightAirlineInfo={flightAirlineInfo}
                    flightDate={flightDate}
                    flightNumber={flightNumber}
                    flightDetails={flightDetails}
                    image={image}
                  />
                </ListItem.Content>
              </ListItem>
            );
          }
        )}
      </View>
    </ScrollView>
  );
};
