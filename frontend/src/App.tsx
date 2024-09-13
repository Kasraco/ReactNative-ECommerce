import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Manager from "./pages/Manager";
import { Toaster } from "react-hot-toast";
import MainDashboard from "./components/admin/MainDashboard";
import CategoryIndex from "./components/admin/category/categoryIndex";
import CategoryCreate from "./components/admin/category/categoryCreate";
import CategoryEdit from "./components/admin/category/categoryEdit";
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

          {/* Backend dashborad links */}

          {/* Categort links */}
          <Route path="/dashboard-category" element={<CategoryIndex />} />
          <Route
            path="/dashboard-categoryCreate"
            element={<CategoryCreate />}
          />
          <Route
            path="/dashboard-categoryEdit/:id"
            element={<CategoryEdit />}
          />

          {/* Categort links */}

          {/* Backend dashborad links */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
