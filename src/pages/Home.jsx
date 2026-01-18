import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        width: "19rem",
        height: "27rem",
        aspectRatio: "305/433",
        minHeight: "70vh",
        minWidth: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <img
        src="home.png"
        alt=""
        sx={{
          maxWidth: "100%",
          maxHeight: "100%",
          objectFit: "contain",
        }}
      />
    </Box>
  );
};

export default Home;
