import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, Alert, StyleSheet } from 'react-native';
import Header from '../components/Header';

export default function Jogo() {
  const [guess, setGuess] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [secret, setSecret] = useState(generateSecret());

  function generateSecret() {
    const digits: number[] = [];
    while (digits.length < 4) {
      const rand = Math.floor(Math.random() * 10);
      if (!digits.includes(rand)) digits.push(rand);
    }
    return digits;
  }

  function evaluateGuess(guessArr: number[]) {
    let bulls = 0, cows = 0;
    guessArr.forEach((num, idx) => {
      if (num === secret[idx]) bulls++;
      else if (secret.includes(num)) cows++;
    });
    return { bulls, cows };
  }

  function submitGuess() {
    const guessArr = guess.split('').map(Number);
    if (guessArr.length !== 4 || new Set(guessArr).size !== 4 || guessArr.some(isNaN)) {
      Alert.alert('Erro', 'Digite 4 dígitos únicos!');
      return;
    }
    const { bulls, cows } = evaluateGuess(guessArr);
    setHistory([`${guess} - ${bulls} Bulls, ${cows} Cows`, ...history]);
    setGuess('');
  }

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Jogo da Senha</Text>
      <TextInput
        placeholder="Digite 4 dígitos únicos"
        keyboardType="numeric"
        value={guess}
        onChangeText={setGuess}
        maxLength={4}
        style={styles.input}
      />
      <Button title="Enviar" onPress={submitGuess} />
      <Button title="Mostrar Senha" color="#aaa" onPress={() => Alert.alert('Senha', secret.join(''))} />
      <FlatList
        data={history}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        style={{ marginTop: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e2f',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#f0f0f5',
    marginBottom: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    padding: 8,
    marginBottom: 10,
    color: '#fff'
  },
  item: {
    color: '#f0f0f5',
    paddingVertical: 4,
  },
});
