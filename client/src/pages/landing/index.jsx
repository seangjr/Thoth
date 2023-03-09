import { Button, Heading, Text, Box } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useEffect } from "react";

const Landing = () => {
    const user = localStorage.getItem("token");
    return (
        <Box
            display="flex"
            flexDirection="column"
            bgColor="#23262F"
            overflow="hidden"
        >
            {/* section 1 */}
            <Box
                w="100vw"
                h="100vh"
                display="flex"
                flexDirection="column"
                justifyContent="center"
            >
                <Box pl="10%">
                    <Heading size="3xl" mb="20px" color="#FCFCFD">
                        <b>Thoth</b>
                    </Heading>
                    <Text fontSize="lg" mb="20px" color="#777E90">
                        The next online educational forum.
                    </Text>
                    {user ? (
                        <Button colorScheme="messenger" as={NavLink} to="feed">
                            Open Feed
                        </Button>
                    ) : (
                        <Button
                            colorScheme="messenger"
                            as={NavLink}
                            to="register"
                        >
                            Get Started
                        </Button>
                    )}
                </Box>
                {/* TODO add image */}
            </Box>
            {/* section 2 */}
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
                        rowGap="100px"
                    >
                        <Box
                            display="flex"
                            alignItems="center"
                            flexDirection="column"
                        >
                            <Heading
                                size="xl"
                                mb="40px"
                                color="#FCFCFD"
                                textAlign="center"
                            >
                                We inspire students to collaborate and learn.
                            </Heading>
                            {user ? (
                                <Button
                                    colorScheme="messenger"
                                    as={NavLink}
                                    to="feed"
                                >
                                    Open Feed
                                </Button>
                            ) : (
                                <Button
                                    colorScheme="messenger"
                                    as={NavLink}
                                    to="register"
                                >
                                    Get Started
                                </Button>
                            )}
                        </Box>

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
                            {/* card 1 */}
                            <Box
                                bg="#353945"
                                mb="40px"
                                w={{ lg: "400px", md: "300px", base: "300px" }}
                                h={{ lg: "400px", md: "400px", base: "400px" }}
                                borderRadius="25px"
                                justifyContent="center"
                            >
                                <Box padding="10%">
                                    <InfoIcon
                                        boxSize={7}
                                        color="blue.600"
                                        mt="10px"
                                    />
                                    <Heading
                                        size="md"
                                        mt="30px"
                                        mb="20px"
                                        color="#FCFCFD"
                                    >
                                        Review Material
                                    </Heading>
                                    <Text mb="20px" color="#777E90" w="100%">
                                        Our platform offers a wide variety of
                                        review materials, including study
                                        guides, practice quizzes, and
                                        interactive flashcards, to help you
                                        prepare for exams and improve your
                                        understanding of the subject matter.
                                    </Text>
                                </Box>
                            </Box>

                            {/* card 2 */}
                            <Box
                                bg="#353945"
                                mb="40px"
                                w={{ lg: "400px", md: "300px", base: "300px" }}
                                h={{ lg: "400px", md: "400px", base: "400px" }}
                                borderRadius="25px"
                                justifyContent="center"
                            >
                                <Box padding="10%">
                                    <InfoIcon
                                        boxSize={7}
                                        color="purple.600"
                                        mt="10px"
                                    />
                                    <Heading
                                        size="md"
                                        mt="30px"
                                        mb="20px"
                                        color="#FCFCFD"
                                    >
                                        Collaboration
                                    </Heading>
                                    <Text mb="20px" color="#777E90" w="100%">
                                        Thoth provides a community-driven
                                        environment where students can ask
                                        questions, share insights, and
                                        collaborate with their peers, which
                                        brings the opportunity to gain different
                                        perspectives on the material and improve
                                        your critical thinking skills.
                                    </Text>
                                </Box>
                            </Box>

                            {/* card 3 */}
                            <Box
                                bg="#353945"
                                mb="40px"
                                w={{ lg: "400px", md: "300px", base: "300px" }}
                                h={{ lg: "400px", md: "400px", base: "400px" }}
                                borderRadius="25px"
                                justifyContent="center"
                            >
                                <Box padding="10%">
                                    <InfoIcon
                                        boxSize={7}
                                        color="green.600"
                                        mt="10px"
                                    />
                                    <Heading
                                        size="md"
                                        mt="30px"
                                        mb="20px"
                                        color="#FCFCFD"
                                    >
                                        Learn more
                                    </Heading>
                                    <Text mb="20px" color="#777E90" w="100%">
                                        Thoth offers a variety of resources,
                                        including articles and videos, to
                                        supplement your learning. By exploring
                                        these resources, you will gain a deeper
                                        understanding of the material and be
                                        able to apply what you've learned in
                                        real-world situations.
                                    </Text>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            {/* section 3 */}
            <Box
                w="100vw"
                h="100vh"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                {user ? (
                    <>
                        <Heading
                            textAlign="center"
                            size="2xl"
                            color="#FCFCFD"
                            mb="40px"
                        >
                            Thanks for starting your journey with us.
                        </Heading>
                        <Text fontSize="lg" mb="40px" color="#777E90">
                            Click the button below to view your feed.
                        </Text>
                        <Button colorScheme="messenger" as={NavLink} to="feed">
                            Open Feed
                        </Button>
                    </>
                ) : (
                    <>
                        <Heading
                            textAlign="center"
                            size="2xl"
                            color="#FCFCFD"
                            mb="40px"
                        >
                            Sign up for an account now!
                        </Heading>
                        <Text fontSize="lg" mb="40px" color="#777E90">
                            Let's start learning with Thoth
                        </Text>
                        <Button
                            colorScheme="messenger"
                            as={NavLink}
                            to="register"
                        >
                            Get started
                        </Button>
                    </>
                )}
            </Box>
        </Box>
    );
};

export default Landing;
