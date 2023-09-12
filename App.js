import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Loading from "./src/components/Loading";
import Main from "./src/components/main/Main";

export default function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  console.log("App rendered, loadingComplete:", loadingComplete); // Nuevo console.log

  return (
    <View style={styles.container}>
      {loadingComplete ? (
        <Main />
      ) : (
        <Loading setLoadingComplete={setLoadingComplete} />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Esto hará que el contenedor ocupe todo el espacio disponible.
    backgroundColor: "#F0F0F0",
    justifyContent: "center",
  },
});
