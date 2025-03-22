import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Button({ onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.textoButton}>Adicionar Tarefa</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#b53d34",
    borderRadius: 10,
    width: "60vw",
    height: "5vh",
    justifyContent: "center",
    alignItems: "center",
  },
  textoButton: {
    color: "#ffff",
    fontWeight: "bold",
  },
});
