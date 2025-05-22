import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';

export default function Sobre() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <Text style={styles.title}>Tecnologias e Módulos Usados</Text>
      <Text style={styles.item}>Expo</Text>
      <Text style={styles.item}>React Native</Text>
      <Text style={styles.item}>Expo Router</Text>
      <Text style={styles.item}>TypeScript</Text>
      <Text style={styles.item}>StyleSheet</Text>
      <Text style={styles.item}>FlatList, ScrollView</Text>
      <Text style={styles.item}>Expo Go</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e2f',
    padding: 20,
  },
  title: {
    fontSize: 22,
    color: '#ffdab9',
    marginBottom: 12,
  },
  item: {
    color: '#f0f0f5',
    marginBottom: 6,
  },
});