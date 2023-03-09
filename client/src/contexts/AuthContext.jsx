import axios from "axios";
import { useContext, useState, useEffect, createContext } from "react";
import { Box, Container, Spinner, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({
    user: null,
    setUser: () => {},
});

const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const toast = useToast();
    const [loading, setLoading] = useState(true);
    const setUser = ({ id, username, role, display_name, image, bio }) => {
        setState({
            id,
            username,
            role,
            display_name,
            image,
            bio,
        });
    };
    const init = {
        id: null,
        username: null,
        role: null,
        display_name: null,
        image: null,
        bio: null,
    };
    const [state, setState] = useState(init);
    const fetchUser = async () => {
        try {
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${localStorage.getItem("token")}`;
            const {
                data: { id, username, role, display_name, image, bio },
            } = await axios.get("http://localhost:5000/api/users/verify");
            setUser({ id, username, role, display_name, image, bio });
        } catch {
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
    }, [state]);

    return loading === false ? (
        <AuthContext.Provider value={state}>{children}</AuthContext.Provider>
    ) : (
        <Box>
            <Container
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                maxW="container.lg"
                bg="#23262C"
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
