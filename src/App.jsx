import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/home/Home";

import "./reset.css";

function App() {
  return (
    <main className="page">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
