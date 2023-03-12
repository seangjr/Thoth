import { Box, Flex, Avatar, Textarea } from "@chakra-ui/react";
const CommentEditor = () => {
    return (
        <Box>
            <Flex alignItems="start" justifyContent="space-between">
                {/* image */}
                <Avatar src="https://a.ppy.sh" />
                <Textarea />
            </Flex>
        </Box>
    );
};
export default CommentEditor;
