import Button from "@mui/material/Button";

function Home() {
  return (
    <>
      <div className="flex justify-between items-center overflow-hidden px-36 ">
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
        <div className="flex flex-col justify-center items-center relative">
          <div className="relative inline-block">
            <img
              className="max-w-2xl w-auto block"
              src="/bgImage.png"
              alt="sushi table"
            />

            <div className="absolute bottom-0 right-0 w-56 h-70 flex justify-center items-center group">
              <img className="absolute" src="stick.svg" alt="stick 1" />
              <img
                className="absolute translate-x-5 translate-y-5 rotate-2 transition-transform duration-300 group-hover:rotate-8"
                src="stick.svg"
                alt="stick 2"
              />
              <img
                className="absolute -translate-x-23 translate-y-24 opacity-0 group-hover:opacity-100"
                src="sticksEffect.svg"
                alt="sticks effect"
              />
            </div>
          </div>
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
