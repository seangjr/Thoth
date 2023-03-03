import axios from "axios";
import { useContext, useState, useEffect, createContext } from "react";
import { Box, Container, Spinner, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const toast = useToast();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const fetchUser = async () => {
        try {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${localStorage.getItem("token")}`;
            const {
                data: { id, username, role },
            } = await axios.get("http://localhost:5000/api/users/verify");
            setUser({ id, username, role });
        } catch {
            setUser(null);
            toast({
                title: "Unauthorized",
                description: "You are not logged in.",
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "top",
            });
            navigate("/login");
        }
    };
    useEffect(() => {
        fetchUser();
    }, []);
    useEffect(() => {
        setLoading(false);
    }, [user]);

    return loading === false ? (
        <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
    ) : (
        <Box>
            <Container
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                maxW="container.lg"
                centerContent
                h="100vh"
                p={4}
            >
                <Spinner />
            </Container>
        </Box>
    );
};

const useAuth = () => {
    return useContext(AuthContext);
};

export { AuthProvider, useAuth };
