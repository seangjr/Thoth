import { Box, Container, Spinner, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
const Feed = () => {
    const toast = useToast();
    const navigate = useNavigate();
    const location = useLocation(); // Get the location object
    const [user, setUser] = useState(null);
    const fetchUser = () => {
        // Verify the user's token
        try {
            axios
                .get("http://localhost:5000/api/users/verify", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token",
                        )}`,
                    },
                })
                .then((res) => {
                    if (res.status === 200) {
                        setUser(res.data);
                    } else {
                        navigate("/login");
                    }
                })
                .catch(() => {
                    toast({
                        title: "An error occurred.",
                        description: "You are not logged in.",
                        status: "error",
                        duration: 9000,
                        isClosable: true,
                        position: "top",
                    });
                    navigate("/login");
                });
        } catch {
            toast({
                title: "An error occurred.",
                description: "An error occurred while fetching the user.",
                status: "error",
                duration: 9000,
                isClosable: true,
                position: "top",
            });
        }
    };
    useEffect(() => {
        fetchUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return user ? (
        <div>
            <h1>User ID Verified: {user.id}</h1>
            <h1>Username: {location.state.username}</h1>
        </div>
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

export default Feed;
