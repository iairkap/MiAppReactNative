import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import styles from "../../components/log-sig-styes/styles";
import Logo from "../../../assets/babyFood.png";
import Icon from "react-native-vector-icons/FontAwesome";
function CustomTextInput({
  icon,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  onRightIconPress,
  rightIcon,
}) {
  return (
    <View style={styles.inputContainer}>
      <Icon name={icon} size={20} color="#969AA8" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#969AA8"
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={secureTextEntry}
      />
      {rightIcon && (
        <TouchableOpacity
          onPress={onRightIconPress}
          style={styles.rightIconContainer}
        >
          <Icon
            name={rightIcon}
            size={20}
            color="#969AA8"
            style={styles.rightIcon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

function Registro({ onRegister, onPress, toggleView }) {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible((prev) => !prev);
  };

  const handleChange = (name, value) => {
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <View style={styles.generalContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>LactoLog</Text>
      </View>
      <View style={styles.idea}>
        <Image
          source={Logo}
          style={{
            width: 100,
            height: 130,
            alignSelf: "flex-end",
          }}
        />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.subText}>Registrate!</Text>
        <CustomTextInput
          icon="envelope"
          placeholder="Email"
          value={credentials.email}
          onChangeText={(value) => handleChange("email", value)}
        />
        <CustomTextInput
          icon="lock"
          placeholder="Contraseña"
          secureTextEntry={!isPasswordVisible}
          value={credentials.password}
          onChangeText={(value) => handleChange("password", value)}
          rightIcon={isPasswordVisible ? "eye-slash" : "eye"}
          onRightIconPress={togglePasswordVisibility}
        />
        <CustomTextInput
          icon="lock"
          placeholder="Confirmar Contraseña"
          secureTextEntry={!isConfirmPasswordVisible}
          value={credentials.confirmPassword}
          onChangeText={(value) => handleChange("confirmPassword", value)}
          rightIcon={isConfirmPasswordVisible ? "eye-slash" : "eye"}
          onRightIconPress={toggleConfirmPasswordVisibility}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => onRegister(credentials)}
        >
          <Text style={styles.buttonb}>Crear Cuenta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer} onPress={toggleView}>
          <Text style={styles.textLine1}>¿Ya tienes una cuenta?</Text>
          <Text style={styles.textLine2}>Inicia Sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Registro;
