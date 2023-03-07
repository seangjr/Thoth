import { Box, Avatar, Badge } from "@chakra-ui/react";
const ListItem = () => {
    return (
        <Box display="flex" flexDirection="row" px={10} mt={5}>
            <Avatar src="https://bit.ly/dan-abramov" />
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                w="full"
                color="#FFF"
                ml={5}
            >
                <Box fontWeight="bold">Topic</Box>
                <Box display="flex" flexDirection="row">
                    <Box mr={2}>Author</Box>
                    <Box mr={2} color="gray.500">
                        Date
                    </Box>
                    <Box color="gray.500">Replies</Box>
                </Box>
            </Box>
            {/* Tags */}
            <Box>
                <Badge h={5} bg="#0CC5FF" color="#FFF">
                    #Test
                </Badge>
            </Box>
        </Box>
    );
};

export default ListItem;
