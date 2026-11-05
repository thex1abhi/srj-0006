import { useState } from "react";
import { Link } from "react-router-dom";
import { COURSES, inr } from "../assets/data.js";

const filters = ["All", "Science", "Commerce", "Arts", "Postgraduate"];

export default function Courses() {
  const [filter, setFilter] = useState("All");
  const list = filter === "All" ? COURSES : COURSES.filter((c) => c.stream === filter);

  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="font-serif text-4xl font-bold text-slate-900">Courses and fees</h1>
      <p className="mt-4 max-w-2xl text-slate-600">
        Fees are per year and cover tuition. Exam, lab and other charges may be extra.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={
              "rounded-full border px-4 py-1.5 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 " +
              (filter === f ? "border-slate-900 bg-slate-900 text-white" : "border-slate-300 text-slate-700 hover:bg-slate-100")
            }
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-8 overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
          <thead>
            <tr className="bg-slate-900 text-white">
              <th className="p-3 font-semibold">Course</th>
              <th className="p-3 font-semibold">Stream</th>
              <th className="p-3 font-semibold">Duration</th>
              <th className="p-3 font-semibold">Eligibility</th>
              <th className="p-3 font-semibold">Seats</th>
              <th className="p-3 text-right font-semibold">Fee per year</th>
            </tr>
          </thead>
          <tbody>
            {list.map((c) => (
              <tr key={c.id} className="border-b border-slate-200 even:bg-slate-50">
                <td className="p-3 font-medium text-slate-900">{c.name}</td>
                <td className="p-3 text-slate-600">{c.stream}</td>
                <td className="p-3 text-slate-600">{c.duration}</td>
                <td className="p-3 text-slate-600">{c.eligibility}</td>
                <td className="p-3 text-slate-600">{c.seats}</td>
                <td className="p-3 text-right font-semibold text-slate-900">{inr(c.fee)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Link to="/admission" className="mt-10 inline-block rounded bg-amber-500 px-6 py-3 font-semibold text-slate-900 hover:bg-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900">
        Apply for admission
      </Link>
    </div>
  );
}