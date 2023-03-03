import {
    Heading,
    Box,
    Input,
    IconButton,
    InputGroup,
    InputLeftElement,
    Image,
} from "@chakra-ui/react";

import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";

import Logo from "../../assets/tlg.png";

import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            position="fixed"
            w="100%"
            h="10%"
            bg="#1B1D24"
            zIndex="10"
        >
            <Box
                ml="50px"
                display="flex"
                alignItems="center"
                as={NavLink}
                to="/"
            >
                <Image
                    src={Logo}
                    alt="Thoth logo"
                    mr="20px"
                    boxSize={{ lg: "40px", md: "69px", base: "40px" }}
                />
                <Heading
                    color="#FCFCFD"
                    visibility={{
                        lg: "visible",
                        md: "visible",
                        base: "hidden",
                    }}
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
                    <Input placeholder="Search Questions" color="gray.300" />
                </InputGroup>

                <IconButton
                    aria-label="Hamburger menu"
                    colorScheme="messenger"
                    icon={<HamburgerIcon />}
                />
            </Box>
        </Box>
    );
};

export default Navbar;
