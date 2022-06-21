import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Game from "./pages/Game";
import Summary from "./pages/Summary";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/game" element={<Game />} />
      <Route path="/summary" element={<Summary />} />
    </Routes>
  );
}

export default App;
