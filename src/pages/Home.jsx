import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        minHeight: "100%",
        minWidth: "100%",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          minHeight: "70vh",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
      >
        <Typography>
          和カフェ Namiでは、 ラーメン、抹茶、寿司を通して お腹と心を満たす
          ひとときを提供します
        </Typography>
        <Box
          component="img"
          src="foodArtboard.png"
          sx={{
            maxWidth: "20rem",
          }}
        />
      </Box>
    </Box>
  );
};

export default Home;
