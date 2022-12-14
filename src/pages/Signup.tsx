import { Link } from "react-router-dom";
import React, { useContext } from "react";

import { Context } from "../contexts/Context";

export const Signup = () => {
  const { state, dispath } = useContext(Context);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispath({
      type: "CHANGE_NAME",
      payload: {
        name: e.target.value,
      },
    });
  };

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispath({
      type: "CHANGE_AGE",
      payload: {
        age: parseInt(e.target.value),
      },
    });
  };

  return (
    <div>
      <h3>Tela SignUp</h3>

      <input
        type="text"
        placeholder="Digite um nome"
        value={state.user.name}
        onChange={handleNameChange}
      />

      <input
        type="number"
        placeholder="Digite uma idade"
        value={state.user.age}
        onChange={handleAgeChange}
      />

      <Link to="/exibir">Ir para ShowDAta</Link>
    </div>
  );
};
