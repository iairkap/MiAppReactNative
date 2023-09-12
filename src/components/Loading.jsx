import React, { useEffect } from "react";
import { View, Image } from "react-native";
import * as Progress from "react-native-progress";
import styles from "../../styles/LoadingStyles";
import Logo from "../../assets/babyIcon.png";

function Loading({ setLoadingComplete }) {
  const [progress, setProgress] = React.useState(0);
  useEffect(() => {
    const simulateProgress = setInterval(() => {
      setProgress((prev) => {
        const newValue = Math.min(prev + 0.1, 1);
        console.log("Progress:", newValue); // Nuevo console.log
        return newValue;
      });
    }, 1000);

    return () => {
      console.log("Cleaning up interval"); // Nuevo console.log
      clearInterval(simulateProgress);
    };
  }, []);

  useEffect(() => {
    if (progress === 1) {
      console.log("Setting loading to complete"); // Nuevo console.log
      setLoadingComplete(true);
    }
  }, [progress]);

  return (
    <View style={styles.container}>
      <Image source={Logo} style={{ width: 100, height: 100 }} />
      <Progress.Bar
        progress={progress}
        width={228}
        height={25}
        color={"#CA4D65"}
        style={styles.progressBar}
      />
    </View>
  );
}

export default Loading;
