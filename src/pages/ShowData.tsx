import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../contexts/Context";

export const ShowData = () => {
  const { state, dispath } = useContext(Context);
  return (
    <div>
      <h3>Tela ShowDAta</h3>
      Meu nome é: {state.user.name}
      <br />
      Eu tenho {state.user.age} anos.
      <Link to="/">Voltar para Signup</Link>
    </div>
  );
};
