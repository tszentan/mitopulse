import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import logo from "../assets/logo.png";

type NavLink = {
  label: string;
  href?: string;
  dropdown?: { label: string; href: string }[];
};

const navLinks: NavLink[] = [
  {
    label: "SOLUTIONS",
    dropdown: [
      { label: "BIXEPS", href: "/solutions/bixeps" },
      { label: "BIXEPS PRO", href: "/solutions/bixeps-pro" },
      { label: "QMT", href: "/solutions/qmt" },
    ],
  },
  { label: "LOCATIONS", href: "/locations" },
  { label: "ABOUT", href: "/about" },
  { label: "SUPPORT", href: "/support" },
];

const AnimatedMenuIcon = ({ open, toggle }: { open: boolean; toggle: () => void }) => {
  // Animation configs for both lines: [initial top, open rotate]
  const lines = [
    { topClosed: 17, topOpen: 24, rotateOpen: 45 },
    { topClosed: 29, topOpen: 24, rotateOpen: -45 },
  ];
  
  return (
    <button
      className="md:hidden flex flex-col items-center justify-center w-12 h-12 relative"
      aria-label="Open mobile menu"
      onClick={toggle}
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      {lines.map((line, idx) => (
        <motion.span
          key={idx}
          className="block absolute left-1/2 w-7 h-1 rounded bg-white"
          initial={false}
          animate={{
            top: open ? `${line.topOpen}px` : `${line.topClosed}px`,
            rotate: open ? line.rotateOpen : 0,
            transition: {
              top: { duration: 0.10, delay: open ? 0.07 : 0.15 },
              rotate: { duration: 0.10, delay: open ? 0.2 : 0 },
            },
          }}
          style={{ transform: "translateX(-50%)" }}
        />
      ))}
    </button>
  );
};

const Navbar: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const location = useLocation();

  // Close dropdown and mobile menu on route change
  React.useEffect(() => {
    setOpenDropdown(null);
    setMobileMenuOpen(false);
  }, [location]);

  // Handle outside click to close dropdowns
  React.useEffect(() => {
    if (!openDropdown) return;
    const handleClick = (e: MouseEvent) => {
      const nav = document.getElementById("navbar");
      if (nav && !nav.contains(e.target as Node)) setOpenDropdown(null);
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [openDropdown]);

  // Prevent body scroll when mobile menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    // Clean up on unmount
    return () => document.body.classList.remove("overflow-hidden");
  }, [mobileMenuOpen]);

  return (
    <div className="relative">
      <nav
        id="navbar"
        className="fixed top-0 left-0 z-40 w-full h-16 flex items-center bg-primary shadow"
      >
        <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-4 md:px-0">
          {/* Logo & Brand */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="MitoPulse Logo" className="h-12 w-12 object-contain" />
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold text-white font-exo2">MitoPulse</span>
              <span className="text-lg text-white tracking-wide font-mashanzheng">线粒脉</span>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-20 text-white font-medium font-exo2">
            {navLinks.map((nav) => (
              <li key={nav.label} className="relative">
                {nav.dropdown ? (
                  <button
                    type="button"
                    className={`hover:text-accent transition flex items-center ${
                      openDropdown === nav.label ? "text-accent" : ""
                    }`}
                    onClick={() =>
                      setOpenDropdown(openDropdown === nav.label ? null : nav.label)
                    }
                  >
                    {nav.label}
                    <svg
                      className={`w-4 h-4 ml-1 transition-transform ${
                        openDropdown === nav.label ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M19 9l-7 7-7-7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                ) : (
                  <Link to={nav.href!} className="hover:text-accent transition">
                    {nav.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <AnimatedMenuIcon open={mobileMenuOpen} toggle={() => setMobileMenuOpen((v) => !v)} />
        </div>

        {/* Render individual dropdown */}
        <AnimatePresence>
          {navLinks.map(
            (nav) =>
              nav.dropdown &&
              openDropdown === nav.label && (
                <motion.div
                  key={nav.label}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                  className="fixed top-16 left-0 right-0 w-full z-20 bg-white shadow-lg overflow-hidden"
                >
                  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-end gap-10 py-5">
                    {nav.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        to={item.href}
                        className="font-exo2 text-lg text-primary hover:text-secondary transition"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </nav>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.35 }}
            className="fixed top-16 right-0 w-4/5 max-w-xs h-[calc(100vh-4rem)] bg-white text-primary z-30 shadow-lg md:hidden overflow-y-auto"
          >
            <ul className="flex flex-col py-8 gap-7 font-exo2">
              {navLinks.map((nav) => (
                <li key={nav.label} className="px-8">
                  {nav.dropdown ? (
                    <div>
                      <button
                        type="button"
                        className="w-full flex items-center justify-between hover:text-accent transition text-lg"
                        onClick={() =>
                          setMobileDropdown(
                            mobileDropdown === nav.label ? null : nav.label
                          )
                        }
                      >
                        {nav.label}
                        <svg
                          className={`w-4 h-4 ml-2 transition-transform ${
                            mobileDropdown === nav.label ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M19 9l-7 7-7-7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                      <AnimatePresence>
                        {mobileDropdown === nav.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.22 }}
                            className="flex flex-col mt-2 pl-4 border-l border-secondary"
                          >
                            {nav.dropdown.map((item) => (
                              <Link
                                key={item.label}
                                to={item.href}
                                className="py-2 text-secondary hover:text-accent transition text-base"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={nav.href!}
                      className="block hover:text-accent transition text-lg"
                    >
                      {nav.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 bg-black z-20 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
