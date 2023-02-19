import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";

//pages
import Landing from "./pages/landing/index";
import Login from "./pages/login/index";

//layouts
import Root from "./layouts/root";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route index element={<Landing />} />
            <Route path="login" element={<Login />} />
        </Route>,
    ),
);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
