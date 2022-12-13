import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BlogDetails from "./pages/BlogDetails";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogDetails/>} />
      </Routes>
    </>
  );
}

export default App;
