import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Game from "./pages/Game";
import Summary from "./pages/Summary";
import Main from "./layouts/Main";

function App() {
  return (
    <Main>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/game" element={<Game />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
    </Main>
  );
}

export default App;
