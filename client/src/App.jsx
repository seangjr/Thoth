import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Landing from "./pages/landing/index";
import Register from "./pages/register";
import Login from "./pages/login";
import About from "./pages/about";
import Feed from "./pages/feed";

//layouts
import Root from "./layouts/root";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route index element={<Landing />} />
                <Route path="/" element={<Root />}>
                    {/* TODO: Add routes to feed, profile, posts */}
                    <Route path="about" element={<About />} />
                </Route>
                <Route path="/feed" element={<Feed />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
};

export default App;
