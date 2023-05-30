import { Route, Routes } from "react-router-dom";
import "../src/styles/index.css";
import "./App.css";
import CreateBlog from "./Components/Blog";
import { CreateBlogForm } from "./Components/Blog/CreateBlogForm";
import BlogPostDetails from "./Components/Blog/BlogPostDetails";

function App() {
  return (
    <div style={{ maxHeight: "100vh" }}>
      {/* Set up the routing configuration */}
      <Routes>
        {/* Define a route for the home page */}
        <Route path="/blog-web-application" element={<CreateBlog />} />
        
        {/* Define a route for the "add new blog" page */}
        <Route path="/addNewBlog" element={<CreateBlogForm />} />
        
        {/* Define a route for the "blog details" page */}
        <Route path="/blogDetails" element={<BlogPostDetails />} />
      </Routes>
    </div>
  );
}

export default App;
