import { SafeAreaView } from 'react-native-safe-area-context'
import { Alert, Button, Image, Pressable, StyleSheet, Text, View } from 'react-native'


export const Welcome = () => {
  const handlePress = () => {
    Alert.alert('Ingresar')
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* <Image source={require('../assets/welcome/Group2.png')} /> */}
      <View style={styles.texts}>
        <Text style={styles.title}>UNIVERSOS</Text>
        <Text style = {styles.texts}>Moda Infantil</Text>
      </View>
      <Button onPress={handlePress}>
        Ingresar
      </Button>
     
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    gap: 32,
    justifyContent: 'center',
    padding: 16,
  },
  texts: {
    alignItems: 'center',
    gap: 4,
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
  },
  title: {
    color: 'black',
    fontSize: 32,
  },
})