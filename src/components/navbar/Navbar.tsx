import Container from "../Container";
import Image from "../Image";
import logo from "@/assets/logo.svg";
import { Button } from "../ui/button";
import { NavLink } from "react-router-dom";
import { Moon, Sun } from "lucide-react";

import { Sidebar } from "../Sheet";
import { routes } from "@/routes/routes";
import { useTheme } from "@/actions/useTheme";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center w-full py-1 bg-white border-b dark:bg-black">
      <Container>
        <div className="flex items-center justify-between h-16">
          <NavLink to="/">
            <Image src={logo} alt="logo" width={200} height={200} />
          </NavLink>
          <div className="items-center hidden gap-4 sm:flex">
            {routes.map((route) => (
              <Button asChild key={route.href} variant="ghost">
                <NavLink to={route.href}>{route.label}</NavLink>
              </Button>
            ))}
            <Button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              variant="outline"
              size="icon"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </div>
          <Sidebar />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
