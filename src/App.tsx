import "./App.css";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Hello from "./pages/Hello";
import Person from "./pages/Per";
import HomePage from "./pages/Home";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/hello" element={<Hello />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/person" element={<Person />} /> */}
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
