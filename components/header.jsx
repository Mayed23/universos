import { StyleSheet, Text, View } from 'react-native'
import { astronaut } from '../icons/ astronaut.jsx'

export const Header = () => (
  <View style={styles.header}>
    <Astronaut/>
    <Text style={styles.text}>Universos</Text>
  </View>
)

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  text: {
    fontFamily: 'Unbounded-Bold',
    fontSize: 18,
  },
})