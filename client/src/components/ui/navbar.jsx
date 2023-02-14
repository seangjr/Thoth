import {
  Heading,
  Box,
  Input,
  IconButton,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";

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
      <Box ml="50px">
        {/* insert logo */}
        <Heading color="#FCFCFD">Thoth</Heading>
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
        />
      </Box>
    </Box>
  );
};

export default Navbar;
