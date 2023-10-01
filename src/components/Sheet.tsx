import { Button } from "@/components/ui/button";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { routes } from "@/routes/routes";
import { Menu } from "lucide-react";

import { NavLink } from "react-router-dom";

export function Sidebar() {
  return (
    <div className="block sm:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-[260px]">
          <div className="flex flex-col justify-center py-6">
            {routes.map((route) => (
              <Button asChild key={route.href} variant="ghost">
                <NavLink to={route.href}>{route.label}</NavLink>
              </Button>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
