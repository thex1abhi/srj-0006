import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { COLLEGE } from "../assets/data";


const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/courses", label: "Courses" },
  { to: "/admission", label: "Admission" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    "block rounded px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 " +
    (isActive ? "bg-amber-500 text-slate-900" : "text-slate-100 hover:bg-white/10");

  return (
    <header className="sticky top-0 z-50 bg-slate-900 shadow">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-full  ">
            <img src="logo.png" alt="" />
          </span>
          <span className="font-serif text-lg leading-tight text-white">
            {COLLEGE.short}
            <span className="block font-sans text-xs text-slate-300">Science, Commerce and Arts</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} end className={linkClass}>{l.label}</NavLink>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="rounded p-2 text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 md:hidden"
          onClick={() => setOpen(!open)}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {open ? <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" /> : <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <ul className="space-y-1 border-t border-white/10 px-4 pb-4 pt-2 md:hidden">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} end className={linkClass} onClick={() => setOpen(false)}>{l.label}</NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
