import { Box, Typography } from "@mui/material";

const ShoppingCard = () => {
  <Box sx={{ display: "flex", alignItems: "center", gap: "2rem" }}>
    <Box
      sx={{
        width: "12rem",
        height: "10rem",
        border: "1.5px solid",
        overflow: "hidden",
      }}
    >
      <Box
        component="img"
        src={picture}
        alt={name}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </Box>

    <Box>
      <Typography>{name}</Typography>
      <Box>
        <span>+</span>
        {quantity}
        <span>-</span>
      </Box>
    </Box>
  </Box>;
};

export default ShoppingCard;
