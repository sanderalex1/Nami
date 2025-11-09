import { NavLink } from "react-router-dom";

function Header() {
  const navLinks = [
    { label: "Menu", path: "/menu" },
    { label: "Nami", path: "/", subLabel: "ナミ" },
    { label: "Sign In", path: "/signIn" },
  ];

  return (
    <header className="px-36 py-10">
      <div className="flex justify-between text-lg">
        {navLinks.map(({ label, path, subLabel }, index) => (
          <NavLink
            key={label}
            to={path}
            className={`block ${
              index === 1
                ? "flex flex-col items-center font-['Zen_Maru_Gothic'] font-bold text-5xl text-[var(--secondaryText)]"
                : "font-['IBM_Plex_Mono'] font-normal text-[var(--text)] text-xl"
            }`}
          >
            <span>{label}</span>
            {index === 1 && subLabel && (
              <span className="text-base font-normal">{subLabel}</span>
            )}
          </NavLink>
        ))}
      </div>
    </header>
  );
}

export default Header;
