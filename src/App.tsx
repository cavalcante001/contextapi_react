import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { ShowData } from "./pages/ShowData";

import { Context } from "./contexts/Context";
import { useContext } from "react";

const App = () => {
  const { state, dispath } = useContext(Context);

  const handleSwitchTheme = () => {
    if (state.theme.status === "light") {
      dispath({
        type: "CHANGE_STATUS",
        payload: {
          status: "dark",
        },
      });
    } else {
      dispath({
        type: "CHANGE_STATUS",
        payload: {
          status: "light",
        },
      });
    }
  };

  return (
    <BrowserRouter>
      <div
        style={{
          backgroundColor: state.theme.status === "light" ? "#fff" : "#000",
          color: state.theme.status === "light" ? "#000" : "#fff",
        }}
      >
        <h1>Título da página</h1>
        Tema: {state.theme.status}
        <button onClick={handleSwitchTheme}>Switch theme</button>
        <hr />
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/exibir" element={<ShowData />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
