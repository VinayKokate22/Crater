import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./Page/Home/Home";

function App() {
  return (
    <div className="gradient">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
