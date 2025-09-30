"use client";
import React, { useLayoutEffect, useState } from "react";
import { AppBar, Toolbar, Button, Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { navItems } from "@/json/page";

// Type for navigation item
type NavItem = {
  id: string;
  label: string;
  href: string;
};

const Header: React.FC = () => {
  const [headerClass, setHeaderClass] = useState("header transparent");
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle scroll behavior for header
  useLayoutEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {
      if (menuOpen) return;

      const currentScrollY = window.scrollY;
      let newClass = "header";

      if (currentScrollY > 0) newClass += " black";
      else newClass += " transparent";

      const heroHeight =
        document.getElementById("hero-container")?.offsetHeight || 0;

      if (currentScrollY > heroHeight) {
        if (currentScrollY > lastScrollY) newClass += " hidden";
        else newClass += " black";
      }

      setHeaderClass(newClass);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  // Smooth scroll to section
  const handleScrollTo = (idOrHref: string) => {
    const id = idOrHref.startsWith("#") ? idOrHref.slice(1) : idOrHref;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // close mobile menu if open
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    const newMenuState = !menuOpen;
    setMenuOpen(newMenuState);

    if (newMenuState) {
      setHeaderClass("header black mobile-menu-open");
    } else {
      const currentScrollY = window.scrollY;
      const heroHeight =
        document.getElementById("hero-container")?.offsetHeight || 0;

      let newClass = "header";
      if (currentScrollY > 0) newClass += " black";
      else newClass += " transparent";

      if (currentScrollY > heroHeight && currentScrollY > 0)
        newClass += " black";

      setHeaderClass(newClass);
    }
  };

  return (
    <AppBar position="fixed" className={headerClass}>
      <Toolbar className="header-toolbar">
        {/* Logo */}
        <Box className="logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/Images/Logo.avif" alt="MyLogo" />
        </Box>

        {/* Desktop Navigation */}
        <Box className="navbar">
          {navItems.map((item: NavItem) => (
            <Button
              key={item.id}
              className={`nav-button ${
                item.id === "contact" ? "contact-btn" : ""
              }`}
              onClick={() => handleScrollTo(item.href)}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        {/* Mobile Navigation: Contact button + Hamburger */}
        <Box className="mobile-navbar">
          <Button
            className="nav-button contact-btn"
            onClick={() => handleScrollTo("#contact")}
          >
            Contact
          </Button>
          <IconButton onClick={toggleMenu} color="inherit">
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Box>
      </Toolbar>

      {/* Mobile Dropdown Menu */}
      <Box className={`mobile-dropdown ${menuOpen ? "open" : ""}`}>
        {navItems
          .filter((item: NavItem) => item.id !== "contact")
          .map((item: NavItem) => (
            <Button
              key={item.id}
              className="mobile-dropdown-item"
              onClick={() => handleScrollTo(item.href)}
            >
              {item.label}
            </Button>
          ))}
      </Box>
    </AppBar>
  );
};

export default Header;
