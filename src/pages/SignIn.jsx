import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
function SignIn() {
  return (
    <div className="flex flex-col items-center gap-5 pt-12 pr-32">
      <div>
        <img className="h-60 w-60" src="logo.svg" alt="" />
      </div>
      <div className="flex flex-col gap-10 text-xl">
        <div>
          <p className="pb-2">Email address</p>
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
          <p className="pb-2">Password</p>
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
          <Button sx={{ width: 400 }} variant="outlined">
            Sign In
          </Button>
          <p>
            You dont have an account? <span>Sign Up</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
