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
{
  /* <Box
        sx={{
          minHeight: "70vh",
          position: "relative",
        }}
      >
        <Typography
          sx={{
            position: "absolute",
            left: "10%", // move from left edge
            top: "30%", // align vertically with image area
            textAlign: "left",
            maxWidth: "3rem",
            fontFamily: "Quick",
            lineHeight: 1.8,
            textTransform: "uppercase",
            textAlign: "center",
          }}
          variant="h5"
        >
          mon <Box fontSize="0.8rem">00-09</Box> |{" "}
          <Box fontSize="0.8rem">21-00</Box> sat
        </Typography>
        <Typography
          sx={{
            position: "absolute",
            left: "1rem", // move from left edge
            bottom: "0", // align vertically with image area
            textAlign: "left",
            fontSize: "0.75rem",
            maxWidth: "9rem",
            fontFamily: "Legajo",
            lineHeight: 1.8,
          }}
        >
          和カフェ Namiでは、ラーメン、抹茶、寿司を通して
          お腹と心を満たすひとときを提供します
        </Typography>
        <Box
          component="img"
          src="foodArtboard.png"
          sx={{
            maxWidth: "25rem",
            position: "absolute",
            right: "-5rem",
            bottom: 0,
          }}
        />
      </Box>
      <Typography
        sx={{
          position: "absolute",
          right: 0,
          bottom: "0",
          fontSize: "2rem",
          fontFamily: "Legajo",
          lineHeight: 1.8,

          writingMode: "vertical-rl", // vertical text, right → left flow
          textOrientation: "upright", // keeps characters upright
        }}
      >
        旨味爆弾
      </Typography> */
}
