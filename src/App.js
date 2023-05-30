import { Route, Routes } from "react-router-dom";
import "../src/styles/index.css";
import "./App.css";
import LoginScreen from "./Components/Login/LoginScreen";
import OtpScreen from "./Components/Otp/OtpScreen";
import CreateBlog from "./Components/Blog";
import { CreateBlogForm } from "./Components/Blog/CreateBlogForm";
import BlogPostDetails from "./Components/Blog/BlogPostDetails";
const blogs =[
  {
    title: "The Fascinating World of Animals",
    author: "John",
    date: "12/12/2022",
    content: "The Earth is home to a diverse array of fascinating creatures, each with its unique characteristics and adaptations. From the mighty elephants roaming the African savannah to the tiny insects that thrive in our backyards, animals play a crucial role in maintaining the balance of ecosystems. In this blog post, we will explore the captivating world of animals, their remarkable abilities, and the importance of preserving their habitats Animals have evolved incredible adaptations that allow them to survive and thrive in various environments. For example, the chameleon's ability to change its skin color helps it blend into its surroundings, providing camouflage from predators. The giraffe's long neck enables it to reach high tree leaves, while the kangaroo's powerful hind legs allow it to hop efficiently across long distances. These adaptations are a testament to the ingenuity of nature and the remarkable diversity of life on our planet.",
    blogComments:[
      {
        id:1,
        comment:"Good"
      }
    ]
  },
  {
    title: "Unleashing the Power of Artificial Intelligence",
    author: "Mask",
    date: "13/02/2023",
    content:
    "In recent years, Artificial Intelligence (AI) has emerged as a transformative technology with the potential to revolutionize various aspects of our lives. From self-driving cars to voice assistants and medical diagnostics, AI is making significant strides in enhancing efficiency, solving complex problems, and driving innovation. In this blog post, we will explore the fascinating world of AI, its applications, and the implications it holds for the future. Artificial Intelligence refers to the development of computer systems that can perform tasks that typically require human intelligence. These systems can analyze vast amounts of data, learn from patterns, make predictions, and even interact with humans. AI encompasses various subfields, including machine learning, natural language processing, computer vision, and robotics. Through advanced algorithms and computational power, AI systems can process information and make decisions, often surpassing human capabilities in speed and accuracy.",
    id:1,
    comment:"Thank you for shedding light on the incredible potential of Artificial Intelligence. It's fascinating to see how AI has already become a part of our daily lives, from virtual assistants to personalized recommendations."
  },
]
function App() {

  return (
    <div style={{ maxHeight: "100vh" }}>
      {/* <LoginScreen /> */}
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/otp" element={<OtpScreen />} />
        <Route path="/blog" element={<CreateBlog />} />
        <Route path="/addNewBlog" element={<CreateBlogForm />} />
        <Route path="/blogDetails" element={<BlogPostDetails />} />
      </Routes>
    </div>
  );
}

export default App;
