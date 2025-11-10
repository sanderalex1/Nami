import { NavLink } from "react-router-dom";

function Header() {
  const navLinks = [
    { label: "Menu", path: "/menu" },
    { label: "Nami", path: "/", subLabel: "ナミ" },
    // { label: "Shoping Cart" },
    { label: "Sign In", path: "/signIn" },
  ];

  return (
    <header className="px-20 py-6 w-full">
      <div className="flex justify-between text-lg ">
        {navLinks.map(({ label, path, subLabel }, index) => (
          <NavLink
            key={label}
            to={path}
            className={`block ${
              index === 1
                ? "flex flex-col items-center gap-2 tracking-[8px] font-['Zen_Maru_Gothic'] font-bold text-5xl text-[var(--secondaryText)]"
                : "flex items-center font-['IBM_Plex_Mono']  font-normal text-[var(--text)] text-2xl"
            }`}
          >
            <span>{label.toLocaleUpperCase()}</span>
            {index === 1 && subLabel && (
              <span className="text-2xl font-normal ">{subLabel}</span>
            )}
          </NavLink>
        ))}
      </div>
    </header>
  );
}

export default Header;
