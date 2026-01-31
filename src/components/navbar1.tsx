"use client";

import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { useRole } from "@/hooks/useRole";
import StudentMenu from "@/app/components/navbar/StudentMenu";
import TutorMenu from "@/app/components/navbar/TutorMenu";
import AdminMenu from "@/app/components/navbar/AdminMenu";
import { useSession } from "@/hooks/useSession";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface NavbarProps {
  className?: string;
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
    className?: string;
  };
  menu?: MenuItem[];
  auth?: {
    login: { title: string; url: string };
    signup: { title: string; url: string };
  };
}

const Navbar1 = ({
  logo = {
    url: "/",
    src: "https://i.ibb.co/5gKqm97r/360-F-1562833067-i-MUS3-W5-R1z355geljjd-FWbg-F7g-Qv-Je0l-removebg-preview.png",
    alt: "logo",
    title: "SkillBridge 🎓",
  },
  menu = [
    { title: "Home", url: "/" },
    { title: "Tutors", url: "/tutors" },
    { title: "Profile", url: "/profile" },
  ],
  auth = {
    login: { title: "Login", url: "/login" },
    signup: { title: "Sign up", url: "/register" },
  },
  className,
}: NavbarProps) => {
  const { isStudent, isTutor, isAdmin } = useRole();
  const { user, loading } = useSession();

  const isLoggedIn = isStudent || isTutor || isAdmin;

  return (
    <section className={cn("py-4 bg-white dark:bg-gray-900 shadow-sm", className)}>
      <div className="container mx-auto px-4">
        {/* Desktop Navbar */}
        <nav className="hidden lg:flex items-center justify-between">
          {/* Left: Logo */}
          <a href={logo.url} className="flex items-center gap-2">
            <img src={logo.src} alt={logo.alt} className="max-h-8 dark:invert" />
            <span className="text-lg font-semibold tracking-tighter">{logo.title}</span>
          </a>

          {/* Center: Menu */}
          <div className="flex items-center gap-6">
            {!isLoggedIn && (
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            )}
            {isStudent && <StudentMenu />}
            {isTutor && <TutorMenu />}
            {isAdmin && <AdminMenu />}
          </div>

          {/* Right: Auth Buttons */}
          {!isLoggedIn && (
            <div className="flex gap-2">
              <Button asChild variant="outline" size="sm">
                <a href={auth.login.url}>{auth.login.title}</a>
              </Button>
              <Button asChild size="sm">
                <a href={auth.signup.url}>{auth.signup.title}</a>
              </Button>
            </div>
          )}
        </nav>

        {/* Mobile Navbar */}
        <div className="flex items-center justify-between lg:hidden">
          <a href={logo.url} className="flex items-center gap-2">
            <img src={logo.src} alt={logo.alt} className="max-h-8 dark:invert" />
          </a>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 sm:w-80">
              <SheetHeader>
                <SheetTitle>
                  <a href={logo.url} className="flex items-center gap-2">
                    <img src={logo.src} alt={logo.alt} className="max-h-8 dark:invert" />
                  </a>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-6 p-4">
                {!isLoggedIn && (
                  <Accordion type="single" collapsible className="flex flex-col gap-4">
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>
                )}
                {isStudent && <StudentMenu />}
                {isTutor && <TutorMenu />}
                {isAdmin && <AdminMenu />}

                {!isLoggedIn && (
                  <div className="flex flex-col gap-3">
                    <Button asChild variant="outline">
                      <a href={auth.login.url}>{auth.login.title}</a>
                    </Button>
                    <Button asChild>
                      <a href={auth.signup.url}>{auth.signup.title}</a>
                    </Button>
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </section>
  );
};

// Desktop menu rendering
const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground">
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="w-80">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="group inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition hover:bg-muted hover:text-accent-foreground"
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

// Mobile menu rendering
const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold">{item.title}</AccordionTrigger>
        <AccordionContent className="mt-2 flex flex-col gap-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a key={item.title} href={item.url} className="text-md font-semibold">
      {item.title}
    </a>
  );
};

// Submenu link component
const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <a
      className="flex gap-3 rounded-md p-2 transition hover:bg-muted hover:text-accent-foreground"
      href={item.url}
    >
      {item.icon && <div className="text-foreground">{item.icon}</div>}
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-sm text-muted-foreground">{item.description}</p>
        )}
      </div>
    </a>
  );
};

export { Navbar1 };
