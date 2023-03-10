import {
    Box,
    Avatar,
    Text,
    Button,
    Stack,
    SkeletonCircle,
    Skeleton,
} from "@chakra-ui/react";
import { useAuth } from "../../contexts/AuthContext";

const Profile = () => {
    const user = useAuth();
    return user ? (
        <Box
            display="flex"
            flexDir="column"
            bg="#23262F"
            h="100vh"
            p="8"
            alignItems="center"
            justifyContent="center"
        >
            <Avatar size="2xl" name="John Doe" src="https://a.ppy.sh" />
            <Text color="white" fontSize="4xl" fontWeight="bold" mt="4">
                {user.username}
            </Text>
            <Text color="gray.400" fontSize="lg" mt="2">
                {user.bio}
            </Text>
            <Box mt="8" display="flex" alignItems="center">
                <Button colorScheme="blue" mr="4">
                    Edit Profile
                </Button>
                <Button colorScheme="red">Logout</Button>
            </Box>
        </Box>
    ) : (
        <Box
            bg="#23262F"
            display="flex"
            h="100vh"
            alignItems="center"
            justifyContent="center"
        >
            <Stack>
                <SkeletonCircle size="10" />
                <Skeleton height="20px" />
            </Stack>
        </Box>
    );
};

export default Profile;
