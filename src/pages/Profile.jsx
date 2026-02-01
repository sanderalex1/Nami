import { Box, Button, Typography } from "@mui/material";
import profile from "../assets/profile.svg";
import styled from "@emotion/styled";

const ProfileButton = styled(Button)(({ theme }) => ({
  width: "13.5rem",
  paddingTop: "0.5rem",
  paddingLeft: "0.9rem",
  paddingRight: "0.9rem",
  border: "1px solid black",
  borderRadius: "0.3rem",
  color: theme.palette.text.primary,
}));

const Profile = () => {
  return (
    <Box
      sx={{
        minHeight: "80dvh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        component="img"
        src={profile}
        alt="hero image"
        sx={{
          maxWidth: "100%",
          height: "auto",
          paddingBottom: "4rem",
          width: "18rem",
        }}
      />
      <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <ProfileButton>
          <Typography variant="h6" textTransform="lowercase">
            continue with apple
          </Typography>
        </ProfileButton>
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "JMH Legajo",
            fontSize: "23px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "140%",
            letterSpacing: "3.7px",
            textTransform: "lowercase",
          }}
        >
          _ _ _ or _ _ _
        </Typography>
        <ProfileButton>
          <Typography variant="h6" textTransform="lowercase">
            continue with google
          </Typography>
        </ProfileButton>
      </Box>
    </Box>
  );
};

export default Profile;
