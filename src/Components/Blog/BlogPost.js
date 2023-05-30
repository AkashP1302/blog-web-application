import { Facebook } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FormButton from "../editors/buttonComponent";
import { useNavigate } from "react-router-dom";

export const BlogPost = ({ title, author, date, content, blogComments }) => {
  // Split the author name to get the first letter
  const firstLetter = author.split("");
  // Get the navigation function from react-router-dom
  const navigate = useNavigate();
  
  
  const handleShare = () => {
    // Implement the sharing logic here
    // You can use external libraries or APIs to handle social media sharing
    console.log("Share button clicked");
  };

  const handleBlogPostDetails = () => {
    // Navigate to the blog post details page and pass the necessary data as state
    navigate("/blogDetails", { state: { title, author, date, content, blogComments } });
  };

  // Truncate the content to display a preview
  const truncatedContent = content?.split(" ").slice(0, 20).join(" ");

  return (
    <div className="blog-post">
      <Card sx={{ width: 400, height: 250, overflow: "auto", marginBottom: 2 }}>
        <CardActionArea onClick={handleBlogPostDetails}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: "#FFD58E" }} aria-label="recipe">
                {firstLetter[0]}
              </Avatar>
            }
            title={title}
            subheader={`Written by ${author} | Published on ${date}`}
          />
          <CardContent sx={{ maxHeight: 300, overflow: "auto" }}>
            <Typography paragraph variant="body2" color="text.secondary">
              {truncatedContent + "..."}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Box display="flex" justifyContent="flex-end" p={1}>
          {/* Button for sharing on Facebook */}
          <FormButton
            isCard={false}
            style={{
              background: "transparent",
              color: "#2F4F4F",
            }}
            startIcon={<Facebook />}
            onClick={handleShare}
          />
          {/* Button for sharing on Twitter */}
          <FormButton
            isCard={false}
            style={{
              background: "transparent",
              color: "#2F4F4F",
            }}
            startIcon={<TwitterIcon />}
            onClick={handleShare}
          />
          {/* Button for sharing on LinkedIn */}
          <FormButton
            isCard={false}
            style={{
              background: "transparent",
              color: "#2F4F4F",
            }}
            startIcon={<LinkedInIcon />}
            onClick={handleShare}
          />
        </Box>
      </Card>
    </div>
  );
};
