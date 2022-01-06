import React, { useState } from "react";
import { StyleSheet, View, StyleProp, TouchableOpacity } from "react-native";

import { Text, Card, Button, Icon } from "react-native-elements";

export const BaseFormComponent = ({ addFlight }) => {
  const [airlines, setAirlines] = useState([
    { airline: "American Airlines", code: "AA" },
    { airline: "Delta Airlines", code: "DL" },
    { airline: "Air Canada", code: "AC" },
    { airline: "United Airlines", code: "UA" },
    { airline: "Lufthansa", code: "LH" },
    { airline: "Air France", code: "AF" },
    { airline: "KLM Royal Dutch Airlines", code: "KL" },
    { airline: "Quantas Airways", code: "QF" },
    { airline: "Air New Zealand", code: "NZ" },
    { airline: "Air India", code: "AI" },
    { airline: "British Airways", code: "BA" },
    { airline: "Cathay Pacific", code: "CX" },
    { airline: "Emirates", code: "EK" },
    { airline: "Thai Airways", code: "TG" },
    { airline: "Malaysian Airlines", code: "MH" },
    { airline: "Turkish Airlines", code: "TK" },
    { airline: "Southwest", code: "WN" }
  ]);
  const [flightDetails, setFlightDetails] = useState({});
};
