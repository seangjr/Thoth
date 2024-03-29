import { Box, Avatar, Badge, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const ListItem = ({ id, user_id, topic, author, date, tags, content }) => {
    const tagsArr = [];
    if (tags) {
        tags.split(" ").forEach((tag) => {
            tagsArr.push(tag);
        });
    }
    return (
        <Box display="flex" flexDirection="row" px={10} mt={5} mb={3}>
            <Avatar src="https://a.ppy.sh" />
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                w="full"
                color="#FFF"
                ml={5}
            >
                <Box fontWeight="bold">
                    <Text
                        as={Link}
                        to="/post"
                        state={{
                            post_id: id,
                            user_id: user_id,
                            title: topic,
                            author: author,
                            date: date,
                            tags: tags,
                            content: content,
                        }}
                        w="fit-content"
                        _hover={{
                            color: "#0CC5FF",
                            cursor: "pointer",
                            textDecor: "underline",
                        }}
                        transition="0.2s ease"
                    >
                        {topic}
                    </Text>
                </Box>
                <Box
                    display="flex"
                    flexDirection="row"
                    visibility={{
                        lg: "visible",
                        md: "visible",
                        base: "hidden",
                    }}
                >
                    <Box mr={2}>
                        <Text w="fit-content" transition="0.2s ease">
                            {author}
                        </Text>
                    </Box>
                    <Box mr={2} color="gray.500">
                        {date}
                    </Box>
                </Box>
            </Box>
            {/* Tags */}
            <Box
                visibility={{
                    lg: "visible",
                    md: "visible",
                    base: "hidden",
                }}
            >
                {tagsArr.map((tag) => (
                    <Badge
                        h={5}
                        colorScheme="blue"
                        _hover={{
                            cursor: "pointer",
                            textDecor: "underline",
                        }}
                        key={tag}
                        borderRadius={8}
                    >
                        {tag}
                    </Badge>
                ))}
            </Box>
        </Box>
    );
};

export default ListItem;
