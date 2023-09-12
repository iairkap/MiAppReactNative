import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window");

export default StyleSheet.create({
  generalContainer: {
    flex: 1,
    backgroundColor: "#74AAFF",
  },
  headerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#74AAFF",
    paddingBottom: 10,
    paddingTop: 50,
  },
  headerText: {
    color: "#FFF",
    fontSize: 50,
    fontWeight: "900",
    letterSpacing: 0.03,
    textAlign: "center",
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 0,
    paddingTop: 30,
  },
  formContainer: {
    flex: 3, // Esto hará que formContainer tome el resto del espacio disponible, que es el 75%.
    backgroundColor: "#F0F0F0",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 18,
    paddingTop: 40,
    paddingLeft: 30,
    gap: 20,
  },
  input: {
    height: 60,
    borderColor: "transparent",
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginTop: 10,
    paddingLeft: 15,
  },
  subText: {
    color: "#969AA8",
    fontSize: 24,
    fontWeight: "600",
  },
  button: {
    backgroundColor: "#FF5F5F",
    color: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
    fontSize: 20,
    fontWeight: "600",
  },
  buttonb: {
    backgroundColor: "#FF5F5F",
    color: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
    fontSize: 20,
    fontWeight: "600",
  },
  idea: {
    paddingRight: 29,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "transparent",
    borderWidth: 1,
    marginBottom: 12,
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginTop: 10,
  },
  input: {
    height: 60,
    flex: 1, // Esto hará que el TextInput ocupe todo el espacio restante en el contenedor
    paddingLeft: 45, // Ajusta según el tamaño de tu ícono
  },
  icon: {
    position: "absolute",
    left: 15, // Ajusta según tus preferencias
  },
  rightIconContainer: {
    position: "absolute",
    right: 15, // Ajusta según tus preferencias
  },
  rightIcon: {
    color: "#FFC95F",
  },
  buttonContainer: {
    alignSelf: "center",
    alignItems: "center",
  },
  textLine2: {
    color: "#FF5F5F",
    fontWeight: "bold",
  },
});
