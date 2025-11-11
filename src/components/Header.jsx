import { NavLink } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function Header() {
  const navLinks = [
    { label: "Menu", path: "/menu" },
    { label: "Nami", path: "/", subLabel: "ナミ" },
  ];

  return (
    <header className="px-48 py-6 w-full">
      <div className="flex justify-between text-lg ">
        {navLinks.map(({ label, path, subLabel }, index) => (
          <NavLink
            key={label}
            to={path}
            className={`block ${
              index === 1
                ? "flex flex-col items-center gap-2 tracking-[8px] font-['Zen_Maru_Gothic'] font-bold text-5xl text-[var(--secondaryText)]"
                : "flex items-center gap-3 font-['IBM_Plex_Mono']  font-normal text-[var(--text)] text-2xl"
            }`}
          >
            <span>{label.toLocaleUpperCase()}</span>

            {index === 1 && subLabel && (
              <span className="text-2xl font-normal ">{subLabel}</span>
            )}
          </NavLink>
        ))}

        <div className="flex items-center min-w-min gap-4">
          <NavLink to="/cart">
            <ShoppingCartOutlinedIcon className="w-6 h-6 text-[var(--text)]" />{" "}
          </NavLink>
          |
          <NavLink
            to="/signIn"
            className="font-['IBM_Plex_Mono'] font-normal text-[var(--text)]  text-2xl uppercase whitespace-nowrap"
          >
            Sign In
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
