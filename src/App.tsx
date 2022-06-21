import { Routes, Route } from "react-router-dom";
import { ProfileStateContextProvider } from "./context/ProfileContext";
import Welcome from "./pages/Welcome";
import Game from "./pages/Game";
import Summary from "./pages/Summary";
import Main from "./layouts/Main";

function App() {
  return (
    <ProfileStateContextProvider>
      <Main>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/game" element={<Game />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </Main>
    </ProfileStateContextProvider>
  );
}

export default App;
