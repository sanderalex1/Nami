function ProductCard({ picture, name, description, price }) {
  return (
    <div className="w-[280px] h-[344px] flex flex-col items-center gap-[16px] p-[16px]">
      <img src={picture} alt={name} className="w-[208px] h-[139px] mx-auto" />
      <h1 className="font-['IBM_Plex_Mono'] text-[16px] font-[500] uppercase text-center">
        {name}
      </h1>
      <p className="text-center font-['IBM_Plex_Mono'] text-[14px] font-[400] text-[#666666]">
        {description}
      </p>
      <div className="flex gap-4 items-center">
        <button className="rounded-[94px] w-[150px] h-[33px] px-[12px] bg-[#3C3C43] text-white">
          Add to cart
        </button>
        <p className="font-['IBM_Plex_Mono'] text-[16px] font-[500] uppercase ">
          <span className="pr-2">{price}</span>NOK
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
