import React from "react";
import MyInput from "../../components/myInput";
function Login() {
  const [email, setEmail] = React.useState("");
  const[pwd,setPwd] = React.useState("");
  return (
    <>
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
    </>
  );
}

export default Login;
