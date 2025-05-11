import React from "react";
import { Button } from "react-native-paper";

interface MyButtonProps {
  icon: string;
  mode: "outlined" | "contained" | "elevated" | "contained-tonal";
  onPress: () => void;
}

function MyButton({ icon, mode, onPress }: MyButtonProps) {
  return (
    <Button icon={icon} mode={mode} onPress={onPress}>
      Logar
    </Button>
  );
}

export default MyButton;
