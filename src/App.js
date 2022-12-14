import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BlogDetails from "./pages/BlogDetails";
import Home from "./pages/Home";
import Loading from "./components/Loading/Loading";
import ReadingHistory from "./pages/ReadingHistory";
import Admin from "./pages/Admin";
import AddNewBlog from "./pages/AddNewBlog";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/reading-history" element={<ReadingHistory />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/add-new" element={<AddNewBlog />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
    </>
  );
}

export default App;
