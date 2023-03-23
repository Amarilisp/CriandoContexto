import { useContext } from "react";
import { UsuarioContext } from "../context/usuarioContext";

function Item() {
  const usuario = useContext(UsuarioContext);
  return (
    <div>
      <h1>{usuario.nome}</h1>
      <h2>{usuario.idade}</h2>
      <h3>{usuario.email}</h3>
    </div>
  );
}

export default Item;
