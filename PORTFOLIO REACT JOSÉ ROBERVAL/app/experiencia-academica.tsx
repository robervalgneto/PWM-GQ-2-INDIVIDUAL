import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';

export default function ExperienciaAcademica() {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Experiência Acadêmica</Text>
      <Text style={styles.text}>Universidade Católica de Pernambuco (Ago 2022 -- Jul 2026)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1e1e2f',
  },
  title: {
    fontSize: 20,
    color: '#ffdab9',
    marginBottom: 12,
  },
  text: {
    color: '#f0f0f5',
  },
});