import { View, StyleSheet } from "react-native";
import Welcome from "../src/screens/welcome";

export default function Index() {
  return (
      <View style={styles.container}>
        <Welcome></Welcome>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Garante que ocupa toda a tela
    justifyContent: "center",
    alignItems: "center",
  },
});
