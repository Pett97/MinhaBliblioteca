import { Slot } from "expo-router";
import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { ContainerContextProvider } from "../src/contexts/ContainerContext";

function _layout() {
  return (
    <ContainerContextProvider>
      <PaperProvider>
        <Slot />
      </PaperProvider>
    </ContainerContextProvider>
  );
}

export default _layout;
