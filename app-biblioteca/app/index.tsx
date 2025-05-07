import { View, StyleSheet } from "react-native";
import Welcome from "../src/screens/welcome";
import Login from "../src/screens/login/login";
export default function Index() {
  return (
      <View style={styles.container}>
        <Login/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Garante que ocupa toda a tela
    justifyContent: "center"
  },
});
