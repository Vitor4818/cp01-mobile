import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { DevToolsSettingsManager, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {
  const [tarefas, setTarefas] = useState([])
  const [tarefaNova, setTarefaNova] = useState("")

  const handleAddTarefa = () =>{
    setTarefas([...tarefas, tarefaNova])
    setTarefaNova("")
  }

  useEffect(() => {
    if (tarefas.length > 0) {
      console.log('Tarefa adicionada: ', tarefas[tarefas.length - 1]); // Mostra a última tarefa no console
    }
  }, [tarefas]); // O useEffect depende de 'tarefas'
  
  return (
    <View style={styles.container}>
      <Text>Bem vindo ao FiaPlanner!</Text>
      <TextInput
      placeholder='Digite a tarefa'
      value={tarefaNova}
      onChangeText={setTarefaNova}/>

      <TouchableOpacity
      onPress={() => 
        handleAddTarefa()
      }>
        <Text>Adicionar Tarefa</Text>
        </TouchableOpacity>

        {tarefas.map((tarefa, index) => (
    <Text key={index}>{tarefa}</Text>
  ))}
 

      


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
