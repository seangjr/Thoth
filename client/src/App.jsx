import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";

//pages
import Landing from "./pages/landing/index";
import Register from "./pages/register/index";
import Login from "./pages/login/index";
import About from "./pages/about/index";

//layouts
import Root from "./layouts/root";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route index element={<Landing />} />
            <Route path="/" element={<Root />}>
                {/* TODO: Add routes to feed, profile, posts */}
                <Route path="about" element={<About />} />
            </Route>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
        </>,
    ),
);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
