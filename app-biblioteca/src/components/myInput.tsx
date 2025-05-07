import React from "react";
import { TextInput } from "react-native-paper";

interface MyInputProps {
  label: string;
  iconName: string;
  value: string;
  onChangeText: (text: string) => void;
  type?: "text" | "password" | "number" | "email";
}

const MyInput: React.FC<MyInputProps> = ({
  label,
  iconName,
  value,
  onChangeText,
  type = "text",
}) => {
  const getKeyboardType = () => {
    switch (type) {
      case "number":
        return "numeric";
      case "email":
        return "email-address";
      default:
        return "default";
    }
  };

  return (
    <TextInput
      label={label}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={type === "password"}
      keyboardType={getKeyboardType()}
      right={<TextInput.Icon icon={iconName} />}
    />
  );
};

export default MyInput;
