import { View, StyleSheet } from "react-native";

import Login from "../src/screens/login/login";
import Books from "../src/screens/books/books";
export default function Index() {
  return (
    <View style={styles.container}>
      <Books></Books>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Garante que ocupa toda a tela
    justifyContent: "center",
  },
});
