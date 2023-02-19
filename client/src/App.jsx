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
    <Route path="/" element={<Root />}>
      <Route index element={<Landing />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="about" element={<About />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
