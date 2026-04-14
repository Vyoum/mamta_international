"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/new-arrivals", label: "NEW ARRIVALS" },
  { href: "/rockstud", label: "ROCKSTUD" },
  { href: "/women", label: "WOMEN" },
  { href: "/men", label: "MEN" },
  { href: "/bags", label: "BAGS" },
  { href: "/gifts", label: "GIFTS" },
  { href: "/m-universe", label: "M-UNIVERSE" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = isScrolled || isHovered;

  return (
    <div
      className={`navbar-wrapper ${isActive ? "navbar-active" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Bar */}
      <div className="top-bar">
        <span>Fireflies Woman&apos;s Collection</span>
        <span className="divider">|</span>
        <Link href="/shop">Shop Now</Link>
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <Link href="/" className="brand-container">
          <div className="brand-mamta didone-font">MAMTA</div>
          <div className="brand-intl sans-font">INTERNATIONAL</div>
        </Link>

        <div className="nav-center sans-font">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="group relative inline-block">
              {link.label}
              <span className="absolute -bottom-px left-0 h-[1px] w-full origin-left scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </Link>
          ))}
        </div>

        <div className="nav-right">
          {/* Search Icon */}
          <button className="nav-icon-btn" aria-label="Search">
            <svg
              className="nav-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          {/* Email/Contact Icon */}
          <button className="nav-icon-btn" aria-label="Contact">
            <svg
              className="nav-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </button>

          {/* User/Account Icon */}
          <button className="nav-icon-btn" aria-label="Account">
            <svg
              className="nav-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </button>

          {/* Cart Icon */}
          <button className="nav-icon-btn" aria-label="Shopping Bag">
            <svg
              className="nav-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  );
}
