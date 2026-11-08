import { Link } from "react-router-dom";
import { COLLEGE } from "../assets/data.js";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-5xl gap-8 px-4 py-5 md:grid-cols-3">
        <div>
          <h3 className="font-serif text-xl text-white">{COLLEGE.name}</h3>
          <p className="mt-3 max-w-xs text-sm leading-relaxed">
          Address :  {COLLEGE.address}
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-white">Quick links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link className="hover:text-amber-400" to="/">Home</Link></li>
            <li><Link className="hover:text-amber-400" to="/about">About</Link></li>
            <li><Link className="hover:text-amber-400" to="/courses">Courses and fees</Link></li>
            <li><Link className="hover:text-amber-400" to="/admission">Apply for admission</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-white">Contact us</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Phone: <a className="hover:text-amber-400" href={`tel:${COLLEGE.phoneLink}`}>{COLLEGE.phone}</a></li>
            <li>Email: <a className="break-all hover:text-amber-400" href={`mailto:${COLLEGE.email}`}>{COLLEGE.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs">
        © {new Date().getFullYear()} {COLLEGE.name}. All rights reserved.
      </div>
    </footer>
  );
}