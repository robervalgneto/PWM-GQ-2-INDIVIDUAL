import { Pressable, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

type Props = {
  title: string;
  url: string;
};

export default function ProjectCard({ title, url }: Props) {
  const router = useRouter();

  return (
    <Pressable onPress={() => router.push(url)} style={styles.card}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#2e2e3e',
    padding: 16,
    marginBottom: 10,
    borderRadius: 10,
  },
  text: {
    color: '#98fb98',
    fontWeight: 'bold',
  },
});
