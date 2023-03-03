import { Box, Heading, Image, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const about = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            bgColor="#23262F"
            overflow="hidden"
        >
            <Box>
                <Heading
                    size="md"
                    mt="30px"
                    mb="20px"
                    color="#FCFCFD"
                ></Heading>
            </Box>
            <Box
                w="100vw"
                h={{ lg: "100vh", md: "200vh", base: "200vh" }}
                display="flex"
                flexDirection="column"
                justifyContent="center"
            >
                <Box
                    w="100vw"
                    h="100vh"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                >
                    <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        w="100vw"
                        h="100vh"
                        rowGap="1000px"
                    >
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            flexDirection={{
                                lg: "row",
                                md: "row",
                                base: "column",
                            }}
                            columnGap="2.5%"
                            rowGap="2.5%"
                        >
                            <Box
                                mb="40px"
                                w={{ lg: "300px", md: "200px", base: "300px" }}
                                h={{ lg: "300px", md: "200px", base: "400px" }}
                                borderRadius="25px"
                                textAlign="center"
                            >
                                <Image
                                    borderRadius="full"
                                    src="https://bit.ly/dan-abramov"
                                    alt="Dan Abramov"
                                />

                                <Heading
                                    size="md"
                                    mt="30px"
                                    mb="20px"
                                    color="#FCFCFD"
                                >
                                    Business Analytic
                                </Heading>
                            </Box>
                            <Box
                                mb="40px"
                                w={{ lg: "300px", md: "200px", base: "300px" }}
                                h={{ lg: "300px", md: "200px", base: "400px" }}
                                borderRadius="25px"
                                textAlign="center"
                            >
                                <Image
                                    borderRadius="full"
                                    src="https://bit.ly/dan-abramov"
                                    alt="Dan Abramov"
                                />

                                <Heading
                                    size="md"
                                    mt="30px"
                                    mb="20px"
                                    color="#FCFCFD"
                                >
                                    Business Analytic
                                </Heading>
                            </Box>
                            <Box
                                mb="40px"
                                w={{ lg: "300px", md: "200px", base: "300px" }}
                                h={{ lg: "300px", md: "200px", base: "400px" }}
                                borderRadius="25px"
                                textAlign="center"
                            >
                                <Image
                                    borderRadius="full"
                                    src="https://bit.ly/dan-abramov"
                                    alt="Dan Abramov"
                                />
                                <Heading
                                    size="md"
                                    mt="30px"
                                    mb="20px"
                                    color="#FCFCFD"
                                >
                                    Graphic Design
                                </Heading>
                            </Box>
                            <Box
                                mb="40px"
                                w={{ lg: "300px", md: "200px", base: "300px" }}
                                h={{ lg: "300px", md: "200px", base: "400px" }}
                                borderRadius="25px"
                                textAlign="center"
                            >
                                <Image
                                    borderRadius="full"
                                    src="https://bit.ly/dan-abramov"
                                    alt="Dan Abramov"
                                />
                                <Heading
                                    size="md"
                                    mt="30px"
                                    mb="20px"
                                    color="#FCFCFD"
                                >
                                    Graphic Design
                                </Heading>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                <Button colorScheme="messenger" as={NavLink} to="/contact">
                    Lets Talk
                </Button>
            </Box>
        </Box>
    );
};
export default about;
