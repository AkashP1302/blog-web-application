import { Box } from "@mui/material";
import { BlogPost } from "./BlogPost";

export const BlogList = ({ blogPosts }) => {

    return (
      <Box display="flex" flexDirection="row" flexWrap="wrap" gap={1} mt={5}>
        {blogPosts.map((post) => (
          <BlogPost
            key={post.id}
            title={post.title}
            author={post.author}
            date={post.date}
            content={post.content}
            blogComments={post.blogComments}
          />
        ))}
      </Box>
    );
  };