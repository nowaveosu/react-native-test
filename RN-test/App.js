
import { StyleSheet, Text, View, Button} from 'react-native';

//html, css 없음. 유사한 요소들이 존재함
export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>한글</Text>
      </View>
      <Text>hi</Text>
      <Text>hello 3worsd!</Text>
      <Button title='tap me!'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
