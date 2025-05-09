import React from "react";
import MyInput from "../../components/myInput/myInput";
import loginStyle from "./login.style";
import { View } from "react-native";
function Login() {
  const [email, setEmail] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  return (
    <View style={loginStyle.container}>
        <MyInput
          label="Email"
          iconName="email"
          value={email}
          onChangeText={setEmail}
          type="text"
        />

        <MyInput
          label="Senha"
          iconName="eye"
          value={pwd}
          onChangeText={setPwd}
          type="text"
        />
    </View>
  );
}

export default Login;
