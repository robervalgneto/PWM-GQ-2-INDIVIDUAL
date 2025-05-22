import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';

export default function ExperienciaProfissional() {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Experiência Profissional</Text>
      <Text style={styles.text}>Buscando oportunidade de estágio na área de tecnologia, com foco em Machine Learning e Desenvolvimento.</Text>
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
