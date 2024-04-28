import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/home/Home";
import Victim from "./components/Victim/Victim";
import Helper from "./components/helper/Helper";

import "./reset.css";

function App() {
  return (
    <main className="page">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/victim" element={<Victim />}></Route>
          <Route path="/helper" element={<Helper />}></Route>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
