import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
function SignUp() {
  return (
    <div className="flex flex-col items-center gap-5 pt-12 pr-32">
      <div>
        <img className="h-60 w-60" src="logo.svg" alt="" />
      </div>
      <div className="flex flex-col gap-8 text-xl">
        <div>
          <p>Email address</p>
          <TextField
            sx={{
              width: 400,
              "& .MuiOutlinedInput-root": {
                borderRadius: 3,
                "& fieldset": {
                  borderRadius: 3,
                },
                "&:hover fieldset": {
                  borderColor: "var(--secondaryBorder)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "var(--secondaryBorder)",
                },
              },
            }}
            id="outlined-basic"
            variant="outlined"
          />
        </div>
        <div>
          <p>Name</p>
          <TextField
            sx={{
              width: 400,
              "& .MuiOutlinedInput-root": {
                borderRadius: 3,
                "& fieldset": {
                  borderRadius: 3, // adjust to your liking
                },
                "&:hover fieldset": {
                  borderColor: "var(--secondaryBorder)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "var(--secondaryBorder)",
                },
              },
            }}
            id="outlined-basic"
            variant="outlined"
          />
        </div>
        <div>
          <Button
            sx={{
              width: 400,
              height: "62px",
              padding: "0px 125px",
              borderRadius: 3,
              fontSize: "1.5rem",
              textTransform: "none",
              font: "var(--font-heading)",
              "&:hover": {
                backgroundColor: "#ff7b8654",
              },
            }}
            color="none"
            variant="outlined"
          >
            Sign Up
          </Button>
          <p className="pt-2">
            Already have an account?
            <Link
              sx={{
                color: "black",
                textDecorationColor: "black",
                pl: 1,
              }}
              href="/signin"
              underline="always"
            >
              Sign In!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
