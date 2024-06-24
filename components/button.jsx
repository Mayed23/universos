import { Pressable, StyleSheet, Text } from "react-native"


export const Button = ({ onPress }) => (
<Pressable on Press= {onPress} stule= {styles.button}>
<Text style= {styles.buttonText}>Exporar</Text>
</Pressable>
)


const styles = StyleSheet.create({
    button: {
      backgroundColor: "ffffff",
      paddingHorizontal: 16,
      paddingVertical: 8,
    },
    buttonText: {
      color: theme.colors.white,
      fontSize: 16,
      fontWeight: 'bold',
    },
  })