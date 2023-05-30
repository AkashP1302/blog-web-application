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

export const BlogPost = ({ title, author, date, content,blogComments }) => {
  const firstLetter = author.split("");
  const navigate = useNavigate();
  const handleShare = () => {
    // Implement the sharing logic here
    // You can use external libraries or APIs to handle social media sharing
    console.log("Share button clicked");
  };
  const handleBlogPostDetails = () => {
    navigate("/blogDetails",{ state: { title, author, date, content,blogComments } })
  };
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
          subheader={` Written by ${author} | Published on ${date}`}
        />
        <CardContent sx={{ maxHeight: 300, overflow: "auto" }}>
          <Typography paragraph variant="body2" color="text.secondary">
            {/* {content} */}
            {truncatedContent + "..."}
          </Typography>
        </CardContent>
      </CardActionArea>
        <Box display="flex" justifyContent="flex-end" p={1}>
          <FormButton
            isCard={false}
            style={{
              background: "transparent",
              color: "#2F4F4F",
            }}
            startIcon={<Facebook />}
            onClick={handleShare}
          />
          <FormButton
            isCard={false}
            style={{
              background: "transparent",
              color: "#2F4F4F",
            }}
            startIcon={<TwitterIcon />}
            onClick={handleShare}
          />
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
