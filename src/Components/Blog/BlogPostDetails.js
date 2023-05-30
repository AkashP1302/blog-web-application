import { Box, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import FormButton from "../editors/buttonComponent";
import TextInput from "../editors/TextInput";

const BlogPostDetails = () => {
  // Access the location object from react-router-dom
  const location = useLocation();
  const { title, author, date, content, blogComments } = location.state;

  // State for the comment input field and comments list
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(blogComments || []);

  // Event handler for comment input change
  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  // Event handler for submitting a comment
  const handleCommentSubmit = () => {
    if (comment.trim() !== "") {
      const newComment = {
        id: comments.length + 1,
        text: comment,
      };
      setComments([...comments, newComment]);
      setComment("");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        width: "50%",
        mx: "auto",
        bgcolor: "#fff",
        padding: "20px",
      }}
    >
      <Box sx={{ maxWidth: 800, width: "100%", p: 2 }}>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h5" gutterBottom>
            {title}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Written by {author} | Published on {date}
          </Typography>
          <Typography variant="body1" sx={{ fontSize: 14 }}>
            {content}
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Comments
          </Typography>
          {comments.length === 0 ? (
            <Typography variant="body2" gutterBottom>
              No comments yet.
            </Typography>
          ) : (
            comments.map((comment) => (
              <>
                <Typography
                  sx={{ mb: 2, mt: 2 }}
                  key={comment.id}
                  variant="body2"
                  gutterBottom
                >
                  {comment.text}
                </Typography>

                <Typography
                  sx={{ border: 1, mt: 1, color: "#2f4f4f" }}
                ></Typography>
              </>
            ))
          )}
        </Box>

        <Box sx={{ mb: 4 }}>
          <TextInput
            multiLineInput={true}
            inputLabelStyle={{
              top: "-13px",
              color: "#2f4f4f",
              fontSize: "18px",
              fontWeight: 600,
              fontFamily: "Poppins",
            }}
            label="Add a comment"
            placeholder="Enter Comments"
            id="content"
            name="content"
            value={comment}
            type="text"
            inputStyle={{
              fontWeight: 500,
              fontSize: "15px",
              fontFamily: "Poppins",
              opacity: "0.75",
              color: "rgba(0, 0, 0, 0.87)",
            }}
            formStyle={{ width: "100%" }}
            onChange={handleCommentChange}
          />
          <FormButton
            label="Add Comment"
            type="submit"
            style={{
              background: "#FFD58E",
              borderRadius: "35.5px",
              marginTop: "20px",
              width: "30%",
              height: "46px",
              color: "#2F4F4F",
              fontWeight: "500",
              textTransform: "capitalize",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={handleCommentSubmit}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default BlogPostDetails;
