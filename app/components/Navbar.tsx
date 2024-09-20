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
    <div className="flex justify-center sticky z-50 top-6">
      <NavigationMenu className="flex w-full py-1 px-1 rounded-full glass">
        <NavigationMenuList className="flex gap-6">
          <NavigationMenuItem className="flex justify-center">
            <NavigationMenuLink
              href="/"
              className="flex gap-2 items-center justify-center px-3"
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
            <NavigationMenuLink href="/" className="text-neutral-500 ">
              About Us
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/" className="text-neutral-500 ">
              Features
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/" className="text-neutral-500 ">
              Pricing
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button size={"sm"} className="rounded-full flex justify-center font-bold">
              Sign Up
            </Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
