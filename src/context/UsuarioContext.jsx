import { createContext } from "react";
import { useContext } from "react";

export const UsuarioContext = createContext({
  nome: "Amarilis",
  idade: 42,
  email: "amarilix@gmail.com",
});
