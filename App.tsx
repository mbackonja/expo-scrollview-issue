import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text>Click on any inputs in upper area - you can't scroll</Text>
          <Text>Click on any inputs in lower area - you can scroll but it's also broken after dismissing keyboard</Text>
          <StatusBar style="auto" />

          <ScrollView contentContainerStyle={styles.scrollViewContent} automaticallyAdjustKeyboardInsets={true}>
            <View>
              <Text>Some input</Text>
              <TextInput style={styles.button} />
            </View>

            <View>
              <Text>Some input</Text>
              <TextInput style={styles.button} />
            </View>

            <View>
              <Text>Some input</Text>
              <TextInput style={styles.button} />
            </View>

            <View>
              <Text>Some input</Text>
              <TextInput style={styles.button} />
            </View>

            <View>
              <Text>Some input</Text>
              <TextInput style={styles.button} />
            </View>

            <View>
              <Text>Some input</Text>
              <TextInput style={styles.button} />
            </View>

            <View>
              <Text>Some input</Text>
              <TextInput style={styles.button} />
            </View>

            <View>
              <Text>Some input</Text>
              <TextInput style={styles.button} />
            </View>

            <View>
              <Text>Some input</Text>
              <TextInput style={styles.button} />
            </View>

            <View>
              <Text>Some input</Text>
              <TextInput style={styles.button} />
            </View>

            <Button title="Button!" />
          </ScrollView>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    gap: 10
  },
  scrollViewContent: {
    gap: 20,
    marginHorizontal: 10
  },
  button: {
    borderWidth: 1,
    height: 50
  }
});
