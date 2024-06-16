import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import { Avatar } from "@nextui-org/avatar";
import NextLink from "next/link";
import clsx from "clsx";
import { Suspense } from "react";
import { Button } from "@nextui-org/button";

import { UserPanel } from "../user/user-panel";

import SearchBar from "@/components/feed/search-bar";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/icons";

export const Navbar = async () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      {/* Desktop Navbar */}
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink
            className="flex items-center justify-start gap-1"
            href="/feed"
          >
            <Logo />
          </NextLink>
        </NavbarBrand>
        <ul className="justify-start hidden gap-4 ml-2 sm:flex">
          {siteConfig.protectedRoutes.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem>
          <Link href="/feed/create" size="lg">
            <Button color="primary" variant="solid">
              Create a post
            </Button>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <SearchBar />
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <UserPanel />
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Navbar */}
      <NavbarContent className="sm:hidden" justify="center">
        <NavbarItem className="flex gap-2">
          <SearchBar />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="pl-4 sm:hidden basis-1" justify="end">
        <NavbarMenuToggle />
        <Suspense
          fallback={
            <Avatar showFallback src="https://images.unsplash.com/broken" />
          }
        >
          <UserPanel />
        </Suspense>
      </NavbarContent>

      {/* Mobile Navbar Items */}
      <NavbarMenu>
        <div className="flex flex-col gap-2 mx-4 mt-2">
          {siteConfig.protectedRoutes.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link href={item.href} size="lg">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
