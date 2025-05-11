import React, { useState } from "react";
import { useAuth } from "../../hooks/login/useAuth";
import { useTokenContext } from "../../contexts/TokenContext";

import { View } from "react-native";
import MyButton from "../../components/my-button/mybutton";
import MyInput from "../../components/myInput/myInput";

import loginStyle from "./login.style";

function Login() {
  const { token, setToken } = useTokenContext();
  const { login } = useAuth();
  const [email, setEmail] = React.useState("testador@bol.com");
  const [password, setPwd] = React.useState("123456789");
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
        value={password}
        onChangeText={setPwd}
        type="text"
      />

      <MyButton
        icon="send"
        mode="contained"
        onPress={async () => {
          const user = await login(email, password);
          setToken(user);
          console.log(user);
          console.log(`TOKEN = ${token}`);
        }}
      ></MyButton>
    </View>
  );
}

export default Login;
