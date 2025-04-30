import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
} from "react-native";

export default function App() {

  const [T1, setT1] = useState("");
  const [T2, setT2] = useState("");
  const [P1, setP1] = useState("");
  const [P2, setP2] = useState("");
  const [notaFinal, setNotaFinal] = useState(null);
  const [Resultado, setResultado] = useState("");

  const CalcularNotaFinal = () => {
    try {
    
      const NotaTrabalho =  parseFloat(T1) + parseFloat(T2);
      const NotaProva = parseFloat(P1) + parseFloat(P2);
      const NotaMedia = (NotaTrabalho + NotaProva) / 2
      console.log("NotaMedia", NotaMedia)

      if (NotaMedia < 7) {
        setResultado("Aluno está de P3 e precisa tirar " + (12 - NotaMedia) + " pontos para ser aprovado.")
      } else {
        setResultado("Aluno foi aprovado com " + NotaMedia + " pontos.")
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nota do Trabalho 1:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={T1}
        onChangeText={setT1}
        placeholder="Digite sua Nota de Trabalho"
      />

<Text style={styles.label}>Nota do Trabalho 2:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={T2}
        onChangeText={setT2}
        placeholder="Digite sua Nota de Trabalho"
      />

<Text style={styles.label}>Nota da Prova 1:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={P1}
        onChangeText={setP1}
        placeholder="Digite sua Nota da Prova"
      />

<Text style={styles.label}>Nota da Prova 2:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={P2}
        onChangeText={setP2}
        placeholder="Digite sua Nota da Prova"
      />

      <TouchableOpacity style={styles.botao} onPress={CalcularNotaFinal}>
        <Text style={styles.botaoTexto}>Calcular Nota</Text>
      </TouchableOpacity>
      <Text>
        {Resultado}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 40,
    backgroundColor: "#FFF",
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  botao: {
    backgroundColor: "#FFD700",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
  },
  botaoTexto: {
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
  },
  notaFinal: {
    fontSize: 18,
    color: "#000",
    fontWeight: "bold"
  },
});