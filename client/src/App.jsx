import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Landing from "./pages/landing/index";
import Register from "./pages/register";
import Login from "./pages/login";
import About from "./pages/about";
import Feed from "./pages/feed";
import Contact from "./pages/contact";
import EditProfile from "./pages/profile/editProfile";
import Profile from "./pages/profile";
import Post from "./pages/post";
import EditPost from "./pages/post/editPost";
import CreatePost from "./pages/post/createPost";

//layouts
import Root from "./layouts/root";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route index element={<Landing />} />
                <Route path="/" element={<Root />}>
                    <Route path="feed" element={<Feed />} />
                    <Route path="profile/edit" element={<EditProfile />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="post" element={<Post />} />
                    <Route path="post/create" element={<CreatePost />} />
                    <Route path="post/edit" element={<EditPost />} />
                </Route>
                <Route path="/about" element={<About />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
};

export default App;
