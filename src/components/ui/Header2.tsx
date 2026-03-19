"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaChevronDown,
  FaUser,
  FaMapMarkerAlt,
  FaBars,
  FaTimes,
  FaArrowRight,
} from "react-icons/fa";
import { cn } from "@/lib/utils";
import Logo from "../Logo";
import { Squash as Hamburger } from "hamburger-react";

const navLinks = [
  { name: "Home", href: "/#home", hasDropdown: false },
  { name: "Model", href: "/model" },
  { name: "Test Drive", href: "/#request-demo", hasDropdown: false },

  { name: "HUBUNGI KAMI", href: "/#contact-us" },
];

export default function Header2() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();

  // Check if we're on homepage
  const isHomepage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detect active section on homepage
      if (isHomepage) {
        const sections = ["home", "request-demo", "contact-us"];
        const scrollPosition = window.scrollY + 200; // Offset for header

        for (const sectionId of sections) {
          const element = document.getElementById(sectionId);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (
              scrollPosition >= offsetTop &&
              scrollPosition < offsetTop + offsetHeight
            ) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      }
    };

    handleScroll(); // Initial check
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomepage]);

  // Show background if scrolled OR not on homepage
  const showBackground = isScrolled || !isHomepage;

  // Check if a link is active
  const isLinkActive = (link: (typeof navLinks)[0]) => {
    const linkPath = link.href.split("#")[0] || "/";
    const linkHash = link.href.split("#")[1];

    // For page routes (not hash links)
    if (!linkHash) {
      return linkPath === "/"
        ? pathname === "/"
        : pathname.startsWith(linkPath) && linkPath !== "/";
    }

    // For hash links on homepage
    if (isHomepage && linkHash) {
      return activeSection === linkHash;
    }

    return false;
  };
  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#252728] shadow-md",
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between px-6 transition-all duration-300",
          isScrolled ? "lg:py-3 py-1" : "lg:py-4 py-1.5",
        )}
      >
        <Logo width={50} height={50} />

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center">
          {navLinks.map((link) => {
            const isActive = isLinkActive(link);

            // Regular nav links
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "relative flex text-[15px] items-center gap-1 transition-colors group px-6 text-white uppercase tracking-wider",
                )}
              >
                {link.name}

                {link.hasDropdown && (
                  <FaChevronDown className="text-xs opacity-70" />
                )}

                {/* Underline */}
                <span
                  className={cn(
                    "absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 transition-all duration-300",
                    isActive ? "w-[60%]" : "w-0 group-hover:w-[60%]",
                    "bg-sky-100",
                  )}
                />
              </Link>
            );
          })}
        </nav>
        <Link
          key={"simulate-installment"}
          href={"/simulasi-cicilan"}
          className=" text-sm hidden lg:flex px-5 py-2 rounded-lg font-semibold items-center gap-2 transition-all duration-300 bg-white text-black hover:bg-gray-200 shadow-md border border-transparent"
        >
          Simulasi Cicilan
          <FaArrowRight className="transform -rotate-45" />
        </Link>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "lg:hidden text-xl transition-colors",
            showBackground
              ? "text-white hover:text-gray-300"
              : "text-white hover:text-gray-300",
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Hamburger
            toggled={mobileMenuOpen}
            toggle={setMobileMenuOpen}
            size={26}
            color="white"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className={cn(
            "lg:hidden absolute top-full left-0 right-0 border-t p-4 flex flex-col gap-4 shadow-xl bg-[#252728] border-[#3a3d3f]",
          )}
        >
          {navLinks.map((link) => {
            const isActive = isLinkActive(link);

            // Regular mobile nav links
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "py-2 block text-center font-medium transition-colors",
                  isActive
                    ? "text-white font-bold"
                    : "text-white hover:text-gray-300",
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            key={"simulate-installment"}
            href={"/simulasi-cicilan"}
            className="px-6 py-3 text-sm rounded-lg font-semibold text-center transition-all duration-300 flex items-center justify-center gap-2 bg-white text-black hover:bg-gray-100 border border-transparent border-gray-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            Simulasi Cicilan
            <FaArrowRight className="text-sm transform -rotate-45" />
          </Link>
        </div>
      )}
    </header>
  );
}
