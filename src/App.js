import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Comunatee from "./pages/Comunatee";
import Post from "./pages/Post";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout displays on every page */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="u/:username" element={<Profile />} />
          <Route path="c/:comunatee" element={<Comunatee />} />
          <Route path="c/:comunatee/:username/:postId" element={<Post />} />

          {/* <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
