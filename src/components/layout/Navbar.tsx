import { useTheme } from "@/providers/ThemeProvider";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const { setTheme } = useTheme();
  const location = useLocation();

  return (
    <nav className="shadow-md">
      <div
        className={cn(
          "flex items-center justify-between py-3",
          location?.pathname?.includes("/dashboard")
            ? "px-5"
            : "section-wrapper"
        )}
      >
        {/* left side */}
        <h1 className="font-bold text-xl">
          <span className="text-light-coral">Giver's</span> Heaven
        </h1>

        {/* middle */}
        <div className="flex justify-between gap-5">
          <Link to="/donations">All Donations</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>

        {/* right side */}
        <div className="flex items-center justify-between gap-3">
          <Button>Login</Button>

          {/* theme switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="rounded-md" variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
