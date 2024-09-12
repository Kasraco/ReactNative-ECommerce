import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Manager from "./pages/Manager";
import { Toaster } from "react-hot-toast";
import MainDashboard from "./components/admin/MainDashboard";
function App() {
  return (
    <>
      <Toaster position="top-center" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Manager" element={<Manager />} />
          <Route path="/dashboard" element={<MainDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
