import Header from "./components/Header/Header.jsx";
import NavPanel from "./components/NavPanel/NavPanel.jsx";
import TopBar from "./components/TopBar/TopBar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <TopBar />
      <NavPanel />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/" element={<Header />} />
      </Routes>
    </Router>
  );
}
//<h2>Top-Selling Courses:</h2>

export default App;
