function Home() {
  return (
    <>
      <div className="flex justify-between items-center min-h-dvh overflow-hidden px-36">
        <div className="text-2xl max-w-[15rem]">
          every{" "}
          <span className="text-3xl text-[var(--secondaryText)] font-bold">
            bite
          </span>{" "}
          is a wave of{" "}
          <span className="text-3xl text-[var(--blueText)] font-bold">
            flavor
          </span>
        </div>
        <img
          className="max-w-xl w-auto block"
          src="/bgImage.png"
          alt="sushi table"
        />
        <div className="flex flex-col gap-1 text-2xl">
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
