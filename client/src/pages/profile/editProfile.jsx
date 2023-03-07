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
            bgColor="#23262F"
            overflow="hidden"
            h="100vh"
        >
            <Box w="70%">
                <Box id="heading" mb="35px" mt="3em">
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
                    </Box>
                    <Box id="details" w="50%">
                        <Heading fontSize="md" color="#fff">
                            Account Info
                        </Heading>
                        <br />
                        <FormControl isRequired>
                            <FormLabel fontSize="sm" color="#fff">
                                Username
                            </FormLabel>
                            <Input mb="2rem" type="text" color="#fff" />
                            <FormLabel fontSize="sm" color="#fff">
                                Display Name
                            </FormLabel>
                            <Input mb="2rem" type="text" color="#fff" />
                            <FormLabel fontSize="sm" color="#fff">
                                Bio
                            </FormLabel>
                            <Textarea
                                mb="2rem"
                                color="#fff"
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
