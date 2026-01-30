import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box sx={{ height: "100dvh", overflow: "hidden" }}>
      <Box
        sx={{
          height: "100%",
          width: "100%",
          backgroundImage: `url(${import.meta.env.BASE_URL}123.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      ></Box>
    </Box>
  );
};

export default Home;
