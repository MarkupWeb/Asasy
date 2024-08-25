"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import { CiShoppingCart } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";

import AsasyLogo1 from "../../../../public/images/Logos/Asasy_logo1.png";

import { useTranslations } from "next-intl";
import LocalSwitcher from "../../LocalSwitcher/local-switcher";
import { useLocale } from "next-intl";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Content translation
  const t = useTranslations("Menu");
  const menuLinks = menuData(t);

  const locale = useLocale();

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  const pathname = usePathname();

  // Dark mode handling
  const { theme } = useTheme();

  return (
    <>
      <header
        className={`header bg-white/90 shadow-sm fixed z-[9999] flex w-full items-center ${
          sticky ? "top-0" : ""
        } `}
      >
        <div className="container">
          <div className="  flex items-center justify-between ">
            <div className="w-20  max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo block w-full ${
                  sticky ? "py-5 lg:py-2" : "py-4"
                } `}
              >
                <div
                  className={`w-[65px] h-[65px] bg-white rounded-full ${
                    sticky ? "" : "w-[50px] h-[50px]"
                  }`}
                >
                  <Image
                    src={AsasyLogo1}
                    alt="logo"
                    width={140}
                    height={30}
                    className="w-full"
                  />
                </div>
              </Link>
            </div>

            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0 " : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>

                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul
                    className={`block lg:flex lg:text-center lg:items-center lg:justify-center light:font-[400] lg:gap-8 ${
                      locale === "ar" ? " __rtl_lang font-[500]  " : ""
                    } `}
                  ></ul>
                  <div className="lg:hidden cursor-pointer">
                    <LocalSwitcher />
                  </div>
                </nav>
              </div>
            </div>
            <div className="flex items-center justify-end pr-16 lg:pr-0">
              <div className="flex items-center gap-3">
                <div className="text-3xl flex items-center lg:gap-2 ">
                  <span className="cursor-pointer">
                  <CiShoppingCart />

                  </span>
                  
                  <div className=" xss:hidden lg:block cursor-pointer">
                    <LocalSwitcher />
                  </div>
                </div>

                {/* <ThemeToggler /> */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
