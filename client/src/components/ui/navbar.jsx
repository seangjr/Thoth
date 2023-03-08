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
} from "@chakra-ui/react";

import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";

import Logo from "../../assets/tlg.png";

import { NavLink } from "react-router-dom";

import { useRef } from "react";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
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
      <Box ml="50px" display="flex" alignItems="center" as={NavLink} to="/">
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
      <Box ml="50px" mr="50px" display="flex" gap="15px" alignItems="center">
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
                src="https://bit.ly/dan-abramov"
                as={NavLink}
                to="/feed"
              />
              <Heading ml="12px" size="sm">
                Username
              </Heading>
            </Box>
          </DrawerHeader>

          <Divider colorScheme="gray" mt="5px" mb="20px" />

          <DrawerBody color="#FCFCFD">
            <Box display="flex" flexDirection="column">
              <Heading ml="12px" mb="15px" size="lg" as={NavLink} to="/feed">
                My Profile
              </Heading>
              <Heading
                ml="12px"
                mb="15px"
                size="lg"
                as={NavLink}
                to="/profile/edit"
              >
                Edit Profile
              </Heading>
              <Heading ml="12px" mb="15px" size="lg" as={NavLink} to="/about">
                About Us
              </Heading>
              <Heading ml="12px" mb="15px" size="lg" as={NavLink} to="/about">
                Log Out
              </Heading>
            </Box>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
