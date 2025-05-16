import { Slot } from "expo-router";
import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { ContainerContextProvider } from "../src/contexts/ContainerContext";
import { TokenContextProvider } from '../src/contexts/TokenContext';

function _layout() {
  return (
    <ContainerContextProvider>
      <PaperProvider>
        <TokenContextProvider>
          <Slot />
        </TokenContextProvider>
      </PaperProvider>
    </ContainerContextProvider>
  );
}

export default _layout;
