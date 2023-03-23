import { UsuarioContext } from "./context/UsuarioContext";
import { useContext } from "react";
import Item from "./components/Item";

function App() {
  const usuario = useContext(UsuarioContext);
  return (
    <div className="App">
      <UsuarioContext.Provider value={usuario}>
        <Item />
      </UsuarioContext.Provider>
    </div>
  );
}

export default App;
