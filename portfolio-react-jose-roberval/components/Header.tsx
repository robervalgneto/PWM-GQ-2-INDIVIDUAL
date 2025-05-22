import { View, Text, StyleSheet, Image } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Image source={require('../assets/perfil.jpg')} style={styles.image} />
      <Text style={styles.name}>José Roberval Vieira Gomes Neto</Text>
      <Text style={styles.title}>Desenvolvedor</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#ffb6c1',
  },
  name: {
    fontSize: 20,
    color: '#d8bfd8',
    marginTop: 10,
  },
  title: {
    fontSize: 14,
    color: '#f0f0f5',
  },
});
