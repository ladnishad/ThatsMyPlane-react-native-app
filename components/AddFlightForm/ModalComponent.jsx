import React, { useState } from "react";
import axios from "axios";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput
} from "react-native";
import {
  AVIATION_EDGE_API_KEY,
  X_RAPIDAPI_HOST,
  X_RAPIDAPI_KEY
} from "../../config";

const ModalComponent = ({
  modalVisible,
  setModalVisible,
  flightsData,
  setFlightsData
}) => {
  const [flightNum, setFlightNum] = useState("");
  const [flightDataFetched, setFlightDataFetched] = useState();

  const onFlightDataSubmit = async ({ flightNumber }) => {
    const urlToHit = `http://aviation-edge.com/v2/public/flights?key=${AVIATION_EDGE_API_KEY}&flightIata=${flightNumber}`;
    const responseData = await axios.get(urlToHit);

    const imageFetchOptions = {
      method: "GET",
      url: `https://aerodatabox.p.rapidapi.com/aircrafts/reg/${responseData.data[0].aircraft.regNumber}/image/beta`,
      headers: {
        "x-rapidapi-host": X_RAPIDAPI_HOST,
        "x-rapidapi-key": X_RAPIDAPI_KEY
      }
    };
    const imageData = await axios.request(imageFetchOptions);

    const flightToAdd = {
      flightAirlineInfo: {
        airlineCode: responseData.data[0].airline.iataCode,
        airline: responseData.data[0].airline.icaoCode //Fetch airline
      },
      flightDate: 1641340800000, //Put date through day.js
      flightNumber: responseData.data[0].flight.number,
      flightDetails: {
        from: responseData.data[0].departure.iataCode,
        to: responseData.data[0].arrival.iataCode,
        aircraftRegistration: responseData.data[0].aircraft.regNumber
      },
      image: {
        url: imageData.data.url ? imageData.data.url : "#",
        author: imageData.data.author ? imageData.data.author : "",
        description: imageData.data.description
          ? imageData.data.description
          : ""
      }
    };

    setFlightsData([...flightsData, flightToAdd]);

    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.titleText}>Add Flight</Text>

            <TextInput
              style={styles.input}
              onChangeText={setFlightNum}
              value={flightNum}
              placeholder="Flight no."
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => onFlightDataSubmit({ flightNumber: flightNum })}
            >
              <Text style={styles.textStyle}>Save</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    alignItems: "flex-start",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    minWidth: 300,
    minHeight: 300,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    width: 200,
    padding: 10
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF"
  },
  buttonClose: {
    backgroundColor: "#2196F3"
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default ModalComponent;
