import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Navbar = () => {
  return (
    <div className="sticky top-6 z-50 flex justify-center">
      <NavigationMenu className="glass flex w-full rounded-full px-1 py-1">
        <NavigationMenuList className="flex gap-6">
          <NavigationMenuItem className="flex justify-center">
            <NavigationMenuLink
              href="/"
              className="flex items-center justify-center gap-2 px-3"
            >
              <Image src="/v.svg" width={25} height={25} alt="" />
              Vaguard
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/" className="text-white">
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/" className="text-neutral-500">
              About Us
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/" className="text-neutral-500">
              Features
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/" className="text-neutral-500">
              Pricing
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button
              size={"sm"}
              className="flex justify-center rounded-full font-bold"
            >
              Sign Up
            </Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
