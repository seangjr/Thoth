import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Text,
    Textarea,
} from "@chakra-ui/react";
const EditPost = () => {
    return (
        <Box
            bgColor="#23262F"
            minHeight="100vh"
            px={{ base: "5%", md: "10%" }}
            py="5%"
        >
            <Box color="white">
                <Heading size="2xl">Edit Post</Heading>
                <Text mt="4" fontSize="lg">
                    Edit the title and details of your post!
                </Text>
            </Box>
            <Box mt="8">
                <form>
                    <FormControl isRequired>
                        <FormLabel color="gray.400">POST TITLE</FormLabel>
                        <Box w={{ base: "100%", md: "50%" }}>
                            <Input type="email" w="100%" color="#fff" />
                        </Box>
                    </FormControl>
                    <FormControl mt="4" isRequired>
                        <FormLabel color="gray.400">POST DETAILS</FormLabel>
                        <Box w={{ base: "100%", md: "50%" }}>
                            <Textarea
                                placeholder="Type your message here..."
                                placeholderTextColor="gray.400"
                                h={{ base: "8rem", md: "10rem" }}
                                w="100%"
                                color="#fff"
                            />
                        </Box>
                    </FormControl>
                    <FormControl mt="4" isRequired>
                    <FormLabel color="gray.400">IMAGES</FormLabel>
                    <Box w={{ base: "100%", md: "50%" }}>
                        <Box borderWidth="1px" p="2" borderColor="gray.300" borderRadius="md" h={{ base: "8rem", md: "10rem" }}>
                        <Input type="file" color="#fff" onChange={(e) => console.log(e.target.files[0])} style={{display: 'none'}} />
                        </Box>
                    </Box>
                    </FormControl>
                    <Button mt="2" colorScheme="#23262F" size="md" variant="outline" sx={{ borderColor: "white", color: "white" }}>
                    Upload
                    </Button>
                    <FormControl mt="4" isRequired>
                        <FormLabel color="gray.400">TAGS</FormLabel>
                        <Box w={{ base: "100%", md: "50%" }}>
                            <Input type="email" w="100%" color="#fff" placeholder="Post Tags goes here" />
                        </Box>
                    </FormControl>
                        <Button mt="4" colorScheme="blue" size="lg">
                            Update post
                        </Button>
                
                </form>
            </Box>
            
            <Box mt="16" borderTopWidth="1px" borderTopColor="white">
                <Text fontSize="sm" color="white" mt="4">
                    &copy; {new Date().getFullYear()} Thoth. All rights
                    reserved.
                </Text>
            </Box>
        </Box>
    );
};
export default EditPost;
