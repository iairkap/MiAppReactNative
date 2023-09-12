import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

function Login({ onLogin }) {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (name, value) => {
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(value) => handleChange("email", value)}
        value={credentials.email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(value) => handleChange("password", value)}
        value={credentials.password}
      />
      <Button title="Login" onPress={() => onLogin(credentials)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
});

export default Login;
