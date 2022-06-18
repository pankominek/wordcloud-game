import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Game from "./pages/Game";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  );
}

export default App;
