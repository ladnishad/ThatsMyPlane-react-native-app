import React from "react";
import { View, ScrollView, StyleSheet, Image } from "react-native";
import { Text, Card, Button, Icon } from "react-native-elements";

export const FlightCard = ({
  flightAirlineInfo,
  flightDate,
  flightNumber,
  flightDetails,
  image
}) => {
  return (
    <Card borderRadius={20} containerStyle={styles.card}>
      <Card.Title>{`${flightDetails.aircraftRegistration}`}</Card.Title>
      <Card.Divider />
      <Card.Image
        style={{ padding: 0 }}
        source={{
          uri: image.url
        }}
      />
      <Text style={{ marginBottom: 10 }} h4>
        {`${flightAirlineInfo.airlineCode} ${flightNumber}`}
      </Text>

      <Text style={{ marginBottom: 10 }} h4>
        {`Date: ${flightDate}`}
      </Text>

      <Text style={{ marginBottom: 10 }} h4>
        <Icon name="flight-takeoff" />
        {` ${flightDetails.from}   `}
        <Icon name="flight-land" />
        {` ${flightDetails.to}   `}
      </Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  fonts: {
    marginBottom: 8
  },
  user: {
    flexDirection: "row",
    marginBottom: 6
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10
  },
  name: {
    fontSize: 16,
    marginTop: 5
  },
  card: {
    minWidth: "95%"
  }
});
