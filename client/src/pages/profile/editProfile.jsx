/* 
TODO:
-Add breakpoints for different devices.
*/

import {
    Box,
    Heading,
    Text,
    Image,
    Button,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Textarea,
} from "@chakra-ui/react";
import { HiOutlineUpload } from "react-icons/hi";

const EditProfile = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            bgColor="#FFFFFF"
            overflow="hidden"
            h="100vh"
        >
            <Box w="70%">
                <Box id="heading" mb="35px">
                    <Heading mb="10px">Edit Profile</Heading>
                    <Text fontSize="sm">
                        You can set your prefered display name, create your
                        profile and manage other personal settings
                    </Text>
                </Box>
                <Box
                    id="content"
                    display="flex"
                    flexDirection="row"
                    justifyContent="between"
                >
                    <Box id="image" display="flex" flexDirection="column">
                        <Box
                            display="flex"
                            flexDirection="row"
                            alignItems="center"
                        >
                            <Box mr="15px">
                                <Image
                                    borderRadius="full"
                                    boxSize="120px"
                                    src="https://bit.ly/dan-abramov"
                                    alt="Dan Abramov"
                                />
                            </Box>
                            <Box w="40%">
                                <Heading mb="5px" fontSize="md">
                                    Profile Picture
                                </Heading>
                                <Text mb="5px" fontSize="xs">
                                    We recommend of an image of at least 400x400
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
                    </Box>
                    <Box id="details" w="50%">
                        <Heading fontSize="md">Account Info</Heading>
                        <br />
                        <FormControl isRequired>
                            <FormLabel fontSize="sm">Username:</FormLabel>
                            <Input mb="2rem" type="text" />
                            <FormLabel fontSize="sm">Display Name:</FormLabel>
                            <Input mb="2rem" type="text" />
                            <FormLabel fontSize="sm">Bio:</FormLabel>
                            <Textarea
                                mb="2rem"
                                placeholder="Tell everyone more about yourself"
                            ></Textarea>
                        </FormControl>
                        <Button>Update Profile</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default EditProfile;
