import { createContext, PropsWithChildren } from "react";
import { StyleSheet } from "react-native";

const STYLE_CONTAINER_GLOBAL = StyleSheet.create({
  container: {
    flex: 1, // toda a tela
    justifyContent: "center",
    alignItems: "center",
  },
});

export const ContainerContext = createContext<typeof STYLE_CONTAINER_GLOBAL | null>(null);

export function ContainerContextProvider({ children }: PropsWithChildren) {
  return (
    <ContainerContext.Provider value={STYLE_CONTAINER_GLOBAL}>
      {children}
    </ContainerContext.Provider>
  );
}
