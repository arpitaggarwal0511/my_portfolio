"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // ESC key closes menu
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Outside click / tap (mobile safe)
  useEffect(() => {
    const onPointerDown = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("pointerdown", onPointerDown);
    return () =>
      document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Resume", href: "/resume" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="relative mx-auto max-w-6xl px-6 md:px-12 py-6">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-semibold bg-gradient-to-r from-yellow-200 via-orange-400 to-yellow-300 bg-[length:400%_400%] bg-clip-text text-transparent animate-text"
        >
          Arpit Aggarwal
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm tracking-wide">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="opacity-70 hover:opacity-100 transition border-b border-transparent hover:border-white pb-1"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button (ALWAYS "Menu") */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setOpen(true);
          }}
          aria-label="Open navigation menu"
          aria-expanded={open}
          className="md:hidden text-sm opacity-80 hover:opacity-100"
        >
          Menu
        </button>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      {open && (
        <nav
          ref={menuRef}
          className="absolute right-6 mt-6 z-50 md:hidden
                     flex flex-col gap-6 text-sm
                     bg-[#2f2f2f] p-6 rounded-xl shadow-xl"
        >
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="opacity-80 hover:opacity-100 transition"
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
