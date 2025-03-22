import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { DevToolsSettingsManager, StyleSheet, Text, TouchableOpacity, View, Image
 } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {
  const [tarefas, setTarefas] = useState([])
  const [tarefaNova, setTarefaNova] = useState("")
  const [mensagem, setMensagem] = useState("")

  const handleAddTarefa = () =>{
    setTarefas([...tarefas, tarefaNova])
    setTarefaNova("")
    if (tarefaNova.trim ==''){
      setMensagem("Adicione uma tarefa!!!")
    } else{
    setMensagem("Adicione outra tarefa")
  }
}

  useEffect(() => {
    if (tarefas.length > 0) {
      console.log('Tarefa adicionada: ', tarefas[tarefas.length - 1]); 
    }
  }, [tarefas]); 
  
  return (
    <View style={styles.container}>
      <Image source={require('./assets/FIAP-Apoiador.png')}
      style={styles.image}/>
      <Text style={styles.title}>BEM VINDO AO FIAPLANNER!</Text>
      <Text style={styles.subtitle}>{mensagem}</Text>

      <View style={styles.viewMain}>
      <TextInput
      style={styles.input}
      placeholder='Digite a tarefa'
      value={tarefaNova}
      onChangeText={setTarefaNova}/>

      <TouchableOpacity
      style={styles.button}
      onPress={() => 
        handleAddTarefa()
      }>
        <Text style={styles.textoButton}>Adicionar Tarefa</Text>
        </TouchableOpacity>

        
        <View style={styles.map}>
        {tarefas.map((tarefa, index) => (
    <Text key={index} style={styles.textoButton}>{tarefa}</Text>
  ))}
        </View>
        </View>
 

 


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30
  },
  viewMain: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10
  },
  button: {
    backgroundColor: '#b53d34',
    borderRadius: 10,
    width: '60vw',
    height: '5vh',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textoButton:{
    color: '#ffff',
    fontWeight: 'bold'
  },
  map:{
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    color: '#fff'
  },
  input:{
    backgroundColor: '#fff',
    width: '60vw',
    height: '5vh',
    borderRadius: 10,
    padding: 5
  },
  title:{
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#fff'
  },
  subtitle:{
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#fff'
  },
  image: {
    width: '200px',
    height: '100px'
  }
});
