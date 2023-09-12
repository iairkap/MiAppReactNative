import React, { useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import Login from "../login/login";
import Registro from "../signUp/signUp";

function AuthContainer() {
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = (credentials) => {
    console.log("Logging in with", credentials);
    // Aquí llamarías a tu API para manejar el inicio de sesión
  };

  const handleRegister = (credentials) => {
    console.log("Registering with", credentials);
    // Aquí llamarías a tu API para manejar el registro
  };

  return (
    <View style={styles.container}>
      {isLogin ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Registro
          onRegister={handleRegister}
          toggleView={() => setIsLogin((prev) => !prev)}
        />
      )}
      <Button title="Toggle View" onPress={() => setIsLogin((prev) => !prev)} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default AuthContainer;
