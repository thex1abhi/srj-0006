import { Link } from "react-router-dom";
import Footer from "./Footer";
import { COLLEGE, COURSES, inr } from "../assets/data.js";
import Enquiry from "./EnquiryForm.jsx";


const streams = [
    { name: "Science", text: "Laboratory-based degrees in computer science, physics, chemistry and biotechnology." },
    { name: "Commerce", text: "Accounting, finance and business programmes built around real industry practice." },
    { name: "Arts", text: "English, economics and psychology taught through reading, writing and discussion." },
];

const steps = [
    "Choose your course on the Courses page.",
    "Fill in the online admission form.",
    "Submit your documents at the college office.",
    "Pay the fees to confirm your seat.",
];

export default function Home() {
    const featured = COURSES.filter((c) => ["bsc-cs", "bcom", "ba-eng"].includes(c.id));

    return (
        <>
            <div className="bg-slate-900 text-white">
                <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
                    <div>
                        <h1 className="font-serif text-4xl font-bold leading-tight md:text-5xl">
                            Learn here. Lead anywhere.
                        </h1>
                        <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
                            {COLLEGE.name} offers undergraduate and postgraduate programmes in three streams.
                            Admissions are now open.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link
                                to="/admission"
                                className="rounded bg-amber-500 px-6 py-3 font-semibold text-slate-900 hover:bg-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                            >
                                Apply now
                            </Link>
                            <Link
                                to="/courses"
                                className="rounded border border-white/40 px-6 py-3 font-semibold hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                            >
                                View courses and fees
                            </Link>
                        </div>
                    </div>

                    <img
                        src="/college.jpg"
                        alt="St. John's College campus"
                        className="h-64 w-full rounded object-cover md:h-96"
                    />
                </div>
            </div>

            <div className="mx-auto max-w-6xl px-4 py-16">
                <h2 className="font-serif text-3xl font-bold text-slate-900">Three streams, one campus</h2>
                <div className="mt-8 grid gap-6 md:grid-cols-3">
                    {streams.map((s) => (
                        <div key={s.name} className="border-l-4 border-amber-500 bg-slate-50 p-6">
                            <h3 className="text-xl font-semibold text-slate-900">{s.name}</h3>
                            <p className="mt-2 leading-relaxed text-slate-600">{s.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-slate-100">
                <div className="mx-auto max-w-6xl px-4 py-16">
                    <h2 className="font-serif text-3xl font-bold text-slate-900">Popular courses</h2>
                    <div className="mt-8 grid gap-6 md:grid-cols-3">
                        {featured.map((c) => (
                            <div key={c.id} className="rounded bg-white p-6 shadow-sm">
                                <h3 className="text-lg font-semibold text-slate-900">{c.name}</h3>
                                <p className="mt-1 text-sm text-slate-500">{c.duration}</p>
                                <p className="mt-4 text-2xl font-bold text-slate-900">{inr(c.fee)}<span className="text-sm font-normal text-slate-500"> per year</span></p>
                            </div>
                        ))}
                    </div>
                    <Link to="/courses" className="mt-8 inline-block font-semibold text-slate-900 underline decoration-amber-500 decoration-2 underline-offset-4">
                        See all courses
                    </Link>
                </div>
            </div>

            <div className="mx-auto max-w-6xl px-4 py-16">
                <h2 className="font-serif text-3xl font-bold text-slate-900">How to get admission</h2>
                <ol className="mt-8 grid gap-6 md:grid-cols-4">
                    {steps.map((s, i) => (
                        <li key={s} className="flex gap-4">
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-900 font-semibold text-white">{i + 1}</span>
                            <p className="leading-relaxed text-slate-700">{s}</p>
                        </li>
                    ))}
                </ol>
            </div>

            <Enquiry />


            <Footer />
        </>
    );
}