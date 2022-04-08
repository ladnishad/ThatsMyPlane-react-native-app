import React, { useState } from "react";
import Dialog from "react-native-dialog";
import { StyleSheet, Text, View } from "react-native";

export const DialogComponent = ({ handleCloseForm, openDialog }) => {
  const [flightNo, setFlightNo] = useState("");
  const handleAddForm = ({ flight }) => {
    console.log(flight);
    handleCloseForm();
  };

  return (
    <View>
      <Dialog.Container visible={openDialog} onBackdropPress={handleCloseForm}>
        <Dialog.Title>Add Flight</Dialog.Title>
        <Dialog.Description>
          Select Airline and enter the flight number below.
        </Dialog.Description>
        <Dialog.Input
          label="Flight No."
          onChangeText={text => setFlightNo(text)}
        />
        <Dialog.Button label="Cancel" onPress={handleCloseForm} />
        <Dialog.Button
          label="Add"
          onPress={() => handleAddForm({ flight: flightNo })}
        />
      </Dialog.Container>
    </View>
  );
};
