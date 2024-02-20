"use client";

import Link from "next/link";

import pyconLogo from "@/assets/pycon.png";
import pyconText from "@/assets/pycon_text.svg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useAuth } from "@/context/AuthContext";
import { ChevronDown, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";

export const AdminNavbar = () => {
  const { user, logOut } = useAuth();
  const { theme, setTheme } = useTheme();
  return (
    <nav className="flex bg-white drop-shadow-xl p-5 justify-between dark:bg-[#0B142E]">
      <div className="flex gap-5">
        <Image
          src={pyconLogo}
          width={65}
          alt="Accred Logo"
          priority
        />
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/admin/home" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Help
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            {/* <NavigationMenuItem>
              <button
                onClick={() =>
                  theme === "dark" ? setTheme("light") : setTheme("dark")
                }
              >
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {theme === "dark" ? <Sun /> : <Moon />}
                </NavigationMenuLink>
              </button>
            </NavigationMenuItem> */}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex gap-1">
        <Avatar>
          {user ? (
            <AvatarImage src={user.photoURL || undefined} alt="@blurridge" />
          ) : (
            <AvatarFallback>ZM</AvatarFallback>
          )}
        </Avatar>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button>
              <ChevronDown />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={logOut}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export const GuestNavbar = () => {
  const { user, logOut, checkIfUserIsAdmin } = useAuth();
  const { theme, setTheme } = useTheme();
  return (
    <nav className="flex bg-white drop-shadow-xl p-5 justify-between dark:bg-[#0B142E]">
      <div className="flex gap-5">
        <Image
          src={pyconLogo}
          width={65}
          alt="Accred Logo"
          priority
        />
        <Image
          src={pyconText}
          width={65}
          alt="Accred Logo"
          priority
        />
        <NavigationMenu>
          <NavigationMenuList>
            {/* <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem> */}
            {user && checkIfUserIsAdmin(user) ? (
              <NavigationMenuItem>
                <Link href="/admin/home" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Admin
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ) : null}
            {/* <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Help
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem> */}
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            {/* <NavigationMenuItem>
              <button
                onClick={() =>
                  theme === "dark" ? setTheme("light") : setTheme("dark")
                }
              >
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {theme === "dark" ? <Sun /> : <Moon />}
                </NavigationMenuLink>
              </button>
            </NavigationMenuItem> */}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex gap-1">
        {user ? (
          <>
            <Avatar>
              <AvatarImage src={user.photoURL || undefined} alt="@blurridge" />
              <AvatarFallback>ZM</AvatarFallback>
            </Avatar>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button>
                  <ChevronDown />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={logOut}>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        ) : null}
      </div>
    </nav>
  );
};
