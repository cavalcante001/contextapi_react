import { Link } from "react-router-dom";
import { useContext } from "react";

import { Context } from "../contexts/Context";

export const Signup = () => {
  const { name, age } = useContext(Context);

  return (
    <div>
      Tela Signup de {name} que tem {age} anos.
      <br />
      <Link to="/exibir">Ir para ShowDAta</Link>
    </div>
  );
};
