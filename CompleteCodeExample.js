//How to Customize Text Input in Form Fields
// By: Onyeka Anene

import React, { useState } from "react";
import { StyleSheet, Button, Text, View, TextInput } from "react-native";

const MyForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registration Form</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        onChangeText={(text) => setName(text)}
        value={name}
        autoCapitalize="words"
        autoCorrect={false}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        autoCompleteType="email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
        autoCompleteType="password"
      />
      <Button title="Submit" onPress={console.log} />
    </View>
  );
};

export default MyForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    marginTop: 50,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    marginBottom: 10,
  },
  input: {
    width: "70%",
    height: 35,
    margin: 11,
    borderWidth: 1,
    padding: 10,
  },
});
