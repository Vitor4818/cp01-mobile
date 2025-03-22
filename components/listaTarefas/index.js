import { View, Text, StyleSheet } from "react-native";

export default function ListaTarefas({ tarefas }) {
  return (
    <View style={styles.map}>
      {tarefas.map((tarefa, index) => (
        <Text key={index} style={styles.textoTarefa}>
          {tarefa}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  textoTarefa: {
    color: "#ffff",
    fontWeight: "bold",
  },
  map: {
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    color: "#fff",
  },
});
