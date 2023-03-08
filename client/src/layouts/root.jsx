import { Outlet } from "react-router-dom";
import Navbar from "../components/ui/navbar";
import Footer from "../components/ui/footer";
import { AuthProvider } from "../contexts/AuthContext";

export default function Root() {
  return (
    <AuthProvider>
      <Navbar />
      <Outlet />
      <Footer />
    </AuthProvider>
  );
}
