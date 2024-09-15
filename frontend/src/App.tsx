import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Manager from "./pages/Manager";
import { Toaster } from "react-hot-toast";
import MainDashboard from "./components/admin/MainDashboard";
import CategoryIndex from "./components/admin/category/CategoryIndex";
import CategoryCreate from "./components/admin/category/CategoryCreate";
import CategoryEdit from "./components/admin/category/CategoryEdit";
import IndexPost from "./components/admin/posts/IndexPost";
import CreatePost from "./components/admin/posts/CreatePost";
import EditPost from "./components/admin/posts/EditPost";
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
          <Route path="/dashboard-category-create" element={<CategoryCreate />} />
          <Route path="/dashboard-category-Edit/:id" element={<CategoryEdit />} />

          {/* Categort links */}

          {/* Post links */}
          <Route path="/post-index" element={<IndexPost />} />
          <Route path="/post-create" element={<CreatePost />} />
          <Route path="/post-edit/:id" element={<EditPost />} />

          {/* Post links */}

          {/* Backend dashborad links */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

