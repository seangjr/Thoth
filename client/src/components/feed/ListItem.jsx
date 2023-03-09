import { Box, Avatar, Badge, Divider } from "@chakra-ui/react";
import { useEffect } from "react";
const ListItem = ({ topic, author, date, upvotes, tags }) => {
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
                <Box
                    fontWeight="bold"
                    _hover={{
                        color: "#0CC5FF",
                        cursor: "pointer",
                        textDecor: "underline",
                    }}
                >
                    {topic}
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
                    <Box
                        mr={2}
                        _hover={{
                            color: "#0CC5FF",
                            cursor: "pointer",
                            textDecor: "underline",
                        }}
                    >
                        {author}
                    </Box>
                    <Box mr={2} color="gray.500">
                        {date}
                    </Box>
                    <Box color="gray.500">{upvotes}</Box>
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
                        bg="#0CC5FF"
                        color="#FFF"
                        _hover={{
                            cursor: "pointer",
                            textDecor: "underline",
                        }}
                        key={tag}
                    >
                        {tag}
                    </Badge>
                ))}
            </Box>
        </Box>
    );
};

export default ListItem;
