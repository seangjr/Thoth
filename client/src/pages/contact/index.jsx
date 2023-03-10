import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Text,
    Textarea,
    Divider,
} from "@chakra-ui/react";

const Contact = () => {
    return (
        <Box
            bgColor="#23262F"
            minHeight="100vh"
            px={{ base: "5%", md: "10%" }}
            py="5%"
        >
            <Box color="white">
                <Heading size="2xl">How Can We Help?</Heading>
                <Text mt="4" fontSize="lg">
                    Please enter your topic related to your inquiry. Feel free
                    to email us to get in touch with us.
                </Text>
            </Box>
            <Box mt="8">
                <form>
                    <FormControl isRequired>
                        <FormLabel color="gray.400">Email address</FormLabel>
                        <Box w={{ base: "100%", md: "50%" }}>
                            <Input type="email" w="100%" color="#fff" />
                        </Box>
                    </FormControl>
                    <FormControl mt="4" isRequired>
                        <FormLabel color="gray.400">Your message</FormLabel>
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
                    <Button mt="4" colorScheme="blue" size="lg">
                        Send Now
                    </Button>
                </form>
            </Box>
            <Box height={{ base: "4rem", md: "10rem" }}></Box>
            <Flex mt="16" justifyContent="center" flexWrap="wrap">
                <Box textAlign="center" mx="4" my="2">
                    <Text fontSize="md" color="gray.400">
                        Address
                    </Text>
                    <Text fontSize="md" color="gray.400">
                        1234 Main St.
                    </Text>
                </Box>
                <Divider
                    orientation="vertical"
                    mx="4"
                    my="2"
                    display={{ base: "none", md: "block" }}
                />
                <Box textAlign="center" mx="4" my="2">
                    <Text fontSize="md" color="gray.400">
                        Contact phone
                    </Text>
                    <Text fontSize="md" color="gray.400">
                        (123) 456-7890
                    </Text>
                </Box>
                <Divider
                    orientation="vertical"
                    mx="4"
                    my="2"
                    display={{ base: "none", md: "block" }}
                />
                <Box textAlign="center" mx="4" my="2">
                    <Text fontSize="md" color="gray.400">
                        Email
                    </Text>
                    <Text fontSize="md" color="gray.400">
                        contact@thoth.edu
                    </Text>
                </Box>
            </Flex>
            <Box mt="16" borderTopWidth="1px" borderTopColor="white">
                <Text fontSize="sm" color="white" mt="4">
                    &copy; {new Date().getFullYear()} Thoth. All rights
                    reserved.
                </Text>
            </Box>
        </Box>
    );
};
export default Contact;
