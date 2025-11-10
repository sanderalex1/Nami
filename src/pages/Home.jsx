import Button from "@mui/material/Button";

function Home() {
  return (
    <>
      <div className="flex justify-between items-center min-h-dvh overflow-hidden px-36">
        <div className="text-2xl max-w-[15rem] leading-10">
          every{" "}
          <span className="text-3xl text-[var(--secondaryText)] font-bold">
            bite
          </span>{" "}
          is a wave of{" "}
          <span className="text-3xl text-[var(--blueText)] font-bold">
            flavor
          </span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            className="max-w-xl w-auto block"
            src="/bgImage.png"
            alt="sushi table"
          />
          <Button
            variant="outlined"
            size="large"
            sx={{ borderColor: "var(--border)", color: "var(--text)" }}
          >
            Book a table
          </Button>
        </div>
        <div className="flex flex-col gap-1 text-2xl leading-10">
          <div className="flex self-center">
            <p className="text-[var(--secondaryText)] font-bold text-3xl">
              mon
            </p>{" "}
            - <p className="text-[var(--blueText)] font-bold text-3xl">sat</p>
          </div>{" "}
          <p>09:00 - 21:00</p>{" "}
        </div>
      </div>
    </>
  );
}

export default Home;
