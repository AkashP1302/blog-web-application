import { Box } from "@mui/material";
import { BlogPost } from "./BlogPost";

export const BlogList = ({ blogPosts }) => {
  // Display a list of blog posts
  return (
    <Box display="flex" flexDirection="row" flexWrap="wrap" gap={1} mt={5}>
      {/* Map through the blogPosts array and create a BlogPost component for each post */}
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
