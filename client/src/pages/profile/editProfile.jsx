import {
    Box,
    Heading,
    Text,
    Image,
    Button,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Spinner,
    useToast,
} from "@chakra-ui/react";
import { useAuth } from "../../contexts/AuthContext";
import { HiOutlineUpload } from "react-icons/hi";
import { useState } from "react";
import { MD5 } from "crypto-js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
    const user = useAuth();
    const toast = useToast();
    const navigate = useNavigate();
    const [data, setData] = useState({});
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:5000/api/users/update/${user.id}`, {
                ...data,
                password: MD5(data.password).toString(), // MD5 hash the password
            })
            .then((res) => {
                axios
                    .post("http://localhost:5000/api/users/login", {
                        // relog the user for a new token
                        email: res.data.email,
                        password: MD5(data.password).toString(),
                    })
                    .then((res) => {
                        localStorage.setItem("token", res.data.token);
                        localStorage.setItem("user", res.data.id);
                        toast({
                            title: "Profile updated successfully.",
                            description: "Your page will reload shortly.",
                            status: "success",
                            duration: 9000,
                            isClosable: true,
                            position: "top",
                        });
                        setTimeout(() => {
                            navigate(0);
                        }, 2000);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            })
            .catch((err) => {
                toast({
                    title: "An error occurred while updating your profile.",
                    description: err.response.data,
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                    position: "top",
                });
            });
    };
    const handleUpload = (e) => {
        e.preventDefault();
    };
    return user ? (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            bgColor="#23262F"
        >
            <Box w="70%" mt={20}>
                <Box id="heading" mb="35px" mt="5em">
                    <Heading mb="10px" color="#FFF">
                        Edit Profile
                    </Heading>
                    <Text fontSize="sm" color="#fff">
                        You can set your preferred display name, create your
                        profile and manage other personal settings
                    </Text>
                </Box>
                <Box
                    id="content"
                    display="flex"
                    flexDirection={{ base: "column", md: "row" }}
                    justifyContent="between"
                >
                    {/* <Box
                        id="image"
                        display="flex"
                        flexDirection="column"
                        w={{
                            base: "100%",
                            md: "50%",
                        }}
                        mb={{ base: "2rem", md: "0" }}
                    >
                        <Box
                            display="flex"
                            flexDirection="row"
                            alignItems="center"
                        >
                            <Box mr="15px">
                                <Image
                                    borderRadius="full"
                                    boxSize="120px"
                                    src="https://a.ppy.sh"
                                    alt="Dan Abramov"
                                />
                            </Box>
                            <Box w="40%">
                                <Heading mb="5px" fontSize="md" color="#fff">
                                    Profile Picture
                                </Heading>
                                <Text mb="5px" fontSize="xs" color="#fff">
                                    We recommend an image of at least 400x400
                                </Text>
                                <Button
                                    size="sm"
                                    rightIcon={<HiOutlineUpload />}
                                    colorScheme="pink"
                                    variant="solid"
                                    borderRadius="100"
                                >
                                    Upload
                                </Button>
                            </Box>
                        </Box>
                    </Box> */}
                    <Box id="details" w={{ base: "100%", md: "50%" }}>
                        <Heading fontSize="md" color="#fff">
                            Account Info
                        </Heading>
                        <br />
                        <form onSubmit={handleSubmit}>
                            <FormControl isRequired>
                                <FormLabel
                                    fontSize="sm"
                                    color="#fff"
                                    requiredIndicator={false}
                                >
                                    Username
                                </FormLabel>
                                <Input
                                    mb="2rem"
                                    type="text"
                                    color="#fff"
                                    name="username"
                                    onChange={(e) => handleChange(e)}
                                    required={false}
                                />
                                <FormLabel
                                    fontSize="sm"
                                    color="#fff"
                                    requiredIndicator={false}
                                >
                                    Display Name
                                </FormLabel>
                                <Input
                                    mb="2rem"
                                    type="text"
                                    color="#fff"
                                    name="display_name"
                                    onChange={(e) => handleChange(e)}
                                    required={false}
                                />
                                <FormLabel
                                    fontSize="sm"
                                    color="#fff"
                                    requiredIndicator={false}
                                >
                                    Bio
                                </FormLabel>
                                <Textarea
                                    mb="2rem"
                                    color="#fff"
                                    placeholder="Tell everyone more about yourself"
                                    name="bio"
                                    onChange={(e) => handleChange(e)}
                                    required={false}
                                ></Textarea>
                                <FormLabel fontSize="sm" color="#fff">
                                    Password
                                </FormLabel>
                                <Input
                                    mb="2rem"
                                    type="password"
                                    color="#fff"
                                    name="password"
                                    onChange={(e) => handleChange(e)}
                                />
                            </FormControl>
                            <Button type="submit">Update Profile</Button>
                        </form>
                    </Box>
                </Box>
            </Box>
        </Box>
    ) : (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            bgColor="#23262F"
            overflow="hidden"
            h="100vh"
        >
            <Spinner />
        </Box>
    );
};

export default EditProfile;
