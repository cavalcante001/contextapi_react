import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../contexts/Context";

export const ShowData = () => {
  const { name } = useContext(Context);
  return (
    <div>
      Tela ShowData de {name};
      <br />
      <Link to="/">Voltar para Signup</Link>
    </div>
  );
};
