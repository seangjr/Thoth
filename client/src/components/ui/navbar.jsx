import {
    Heading,
    Box,
    Input,
    IconButton,
    InputGroup,
    InputLeftElement,
    Image,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Avatar,
    Divider,
    Text,
} from "@chakra-ui/react";

import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";

import Logo from "../../assets/tlg.png";

import { NavLink, useNavigate } from "react-router-dom";

import { useEffect, useRef } from "react";
import { useAuth } from "../../contexts/AuthContext";

const Navbar = () => {
    const navigate = useNavigate();
    const user = useAuth();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();
    const handleInput = (e) => {
        e.preventDefault();
        // if url is not in feed, redirect to feed
        if (window.location.pathname !== "/feed") {
            navigate("/feed");
        }
        // send input to feed
        window.dispatchEvent(
            new CustomEvent("search", {
                detail: e.target.value,
            }),
        );
    };
    const handleLogout = () => {
        localStorage.clear();
        navigate("/login");
    };
    useEffect(() => {
        console.log(user);
    }, []);
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            position="fixed"
            w="100%"
            h="13vh"
            bg="#1B1D24"
            zIndex="10"
        >
            <Box
                ml="50px"
                display="flex"
                alignItems="center"
                as={NavLink}
                to="/feed"
            >
                <Image
                    src={Logo}
                    alt="Thoth logo"
                    mr="20px"
                    boxSize={{ lg: "40px", md: "40px", base: "40px" }}
                />
                <Heading
                    color="#FCFCFD"
                    visibility={{
                        lg: "visible",
                        md: "visible",
                        base: "hidden",
                    }}
                    size={{ lg: "md", md: "md", base: "md" }}
                >
                    Thoth
                </Heading>
            </Box>
            <Box
                ml="50px"
                mr="50px"
                display="flex"
                gap="15px"
                alignItems="center"
            >
                <InputGroup>
                    <InputLeftElement
                        pointerEvents="none"
                        children={<SearchIcon color="gray.300" />}
                    />
                    <Input
                        placeholder="Search questions"
                        color="gray.300"
                        onChange={handleInput}
                    />
                </InputGroup>

                <IconButton
                    aria-label="Hamburger menu"
                    colorScheme="messenger"
                    icon={<HamburgerIcon />}
                    ref={btnRef}
                    onClick={onOpen}
                />
            </Box>
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent bg="#1B1D24">
                    <DrawerCloseButton color="#FCFCFD" />
                    <DrawerHeader color="#FCFCFD">
                        <Box display="flex" alignItems="center">
                            <Avatar
                                name="user"
                                src="https://a.ppy.sh/"
                                as={NavLink}
                                to="/feed"
                            />
                            <Heading ml="12px" size="sm">
                                {user ? user.username : "User"}
                            </Heading>
                        </Box>
                    </DrawerHeader>

                    <Divider colorScheme="gray" mt="5px" mb="20px" />

                    <DrawerBody color="#FCFCFD">
                        <Box display="flex" flexDirection="column">
                            <Text
                                as={NavLink}
                                to="/profile"
                                fontWeight="bold"
                                _hover={{ color: "grey" }}
                                transition={"0.3s ease"}
                                mb="10px"
                                onClick={onClose}
                            >
                                My Profile
                            </Text>
                            <Text
                                as={NavLink}
                                to="/profile/edit"
                                fontWeight="bold"
                                _hover={{ color: "grey" }}
                                transition={"0.3s ease"}
                                mb="10px"
                                onClick={onClose}
                            >
                                Edit Profile
                            </Text>
                            <Text
                                as={NavLink}
                                to="/about"
                                fontWeight="bold"
                                _hover={{ color: "grey" }}
                                transition={"0.3s ease"}
                                mb="10px"
                                onClick={onClose}
                            >
                                About Us
                            </Text>
                            <Text
                                fontWeight="bold"
                                _hover={{ color: "grey" }}
                                transition={"0.3s ease"}
                                mb="10px"
                                cursor="pointer"
                                onClick={handleLogout}
                            >
                                Log Out
                            </Text>
                        </Box>
                    </DrawerBody>

                    <DrawerFooter></DrawerFooter>
                </DrawerContent>
            </Drawer>
        </Box>
    );
};

export default Navbar;
