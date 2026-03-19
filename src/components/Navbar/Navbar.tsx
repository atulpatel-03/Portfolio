import { useState, useEffect } from "react";

import { RESUME_URL } from "../../data/portfolio";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [is_scrolled, set_is_scrolled] = useState(false);
  const [is_menu_open, set_is_menu_open] = useState(false);
  const [active_section, set_active_section] = useState("");

  useEffect(() => {
    const on_scroll = () => {
      set_is_scrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section[id]");
      const scroll_y = window.scrollY + 100;

      sections.forEach((section) => {
        const el = section as HTMLElement;
        const top = el.offsetTop - 100;
        const height = el.offsetHeight;
        const id = el.getAttribute("id") || "";

        if (scroll_y >= top && scroll_y < top + height) {
          set_active_section(id);
        }
      });
    };

    window.addEventListener("scroll", on_scroll);
    return () => window.removeEventListener("scroll", on_scroll);
  }, []);

  const handle_nav_click = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    set_is_menu_open(false);
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: "smooth" });
  };

  const handle_toggle = () => {
    set_is_menu_open((prev) => !prev);
  };

  return (
    <nav className={`nav${is_scrolled ? " scrolled" : ""}`}>
      <div className="nav_container">
        <a
          href="#hero"
          className="nav_logo"
          onClick={(e) => handle_nav_click(e, "#hero")}
        >
          &lt;AP /&gt;
        </a>
        <ul className={`nav_links${is_menu_open ? " open" : ""}`}>
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={
                  active_section === item.href.slice(1) ? "active" : ""
                }
                onClick={(e) => handle_nav_click(e, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={RESUME_URL}
              className="nav_resume_btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
        <div className="nav_right">
          <ThemeToggle />
          <button
            className={`nav_toggle${is_menu_open ? " active" : ""}`}
            onClick={handle_toggle}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
