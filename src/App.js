import { Route, Routes } from "react-router-dom";
import "../src/styles/index.css";
import "./App.css";
import CreateBlog from "./Components/Blog";
import { CreateBlogForm } from "./Components/Blog/CreateBlogForm";
import BlogPostDetails from "./Components/Blog/BlogPostDetails";

function App() {
  return (
    <div style={{ maxHeight: "100vh" }}>
      <Routes>
        <Route path="/" element={<CreateBlog />} />
        <Route path="/addNewBlog" element={<CreateBlogForm />} />
        <Route path="/blogDetails" element={<BlogPostDetails />} />
      </Routes>
    </div>
  );
}

export default App;
