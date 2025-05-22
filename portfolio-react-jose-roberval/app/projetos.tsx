import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';

export default function Projetos() {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Projetos</Text>
      <ProjectCard title="Jogo Senha (Bulls and Cows)" url="/jogo" />
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
});
