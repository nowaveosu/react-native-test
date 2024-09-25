
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

//html, css 없음. 유사한 요소들이 존재함, 코어컴포넌트를 직접import해야함
export default function App() {
  return (
    <View style={styles.appContainer}>
      <View>
        <TextInput placeholder='Your course goal!'/>
        <Button title="Add Goal" />
      </View>
      <View>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    padding: 70
  }
});
