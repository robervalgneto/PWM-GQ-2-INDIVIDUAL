import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 60,
    backgroundColor: '#1e1e2f',
    flex: 1,
  },
});