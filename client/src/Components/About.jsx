import { COLLEGE } from "../assets/data.js";

const values = [
  { title: "Academic excellence", text: "Experienced faculty, practical labs and regular assessment keep learning focused and honest." },
  { title: "Character first", text: "We value discipline, integrity and service alongside marks." },
  { title: "Career ready", text: "Workshops, internships and placement guidance prepare students for work or higher study." },
];

export default function About() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="font-serif text-4xl font-bold text-slate-900">About {COLLEGE.short}</h1>
      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-700">
        {COLLEGE.name} is a co-educational institution offering undergraduate and postgraduate
        programmes in Science, Commerce and Arts. Our aim is to give every student a strong
        academic foundation, practical skills and the confidence to build a career.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <section className="bg-slate-50 p-6">
          <h2 className="font-serif text-2xl font-bold text-slate-900">Our mission</h2>
          <p className="mt-3 leading-relaxed text-slate-700">
            To provide affordable, high-quality education that develops knowledge, skills and
            responsible citizens.
          </p>
        </section>
        <section className="bg-slate-50 p-6">
          <h2 className="font-serif text-2xl font-bold text-slate-900">Our vision</h2>
          <p className="mt-3 leading-relaxed text-slate-700">
            To be a college where students from every background discover their potential and
            graduate ready to lead.
          </p>
        </section>
      </div>

      <h2 className="mt-14 font-serif text-3xl font-bold text-slate-900">What we stand for</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {values.map((v) => (
          <div key={v.title} className="border-l-4 border-amber-500 p-4">
            <h3 className="text-lg font-semibold text-slate-900">{v.title}</h3>
            <p className="mt-2 leading-relaxed text-slate-600">{v.text}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-14 font-serif text-3xl font-bold text-slate-900">Facilities</h2>
      <ul className="mt-4 grid list-disc gap-2 pl-5 text-slate-700 md:grid-cols-2">
        <li>Science laboratories and computer lab</li>
        <li>Library and reading room</li>
        <li>Smart classrooms</li>
        <li>Sports ground and indoor games</li>
        <li>Canteen</li>
        <li>Career guidance and placement cell</li>
      </ul>

      <p className="mt-12 text-slate-700">
        Questions? Call <a className="font-semibold underline" href={`tel:${COLLEGE.phoneLink}`}>{COLLEGE.phone}</a> or
        email <a className="font-semibold underline" href={`mailto:${COLLEGE.email}`}>{COLLEGE.email}</a>.
      </p>
    </div>
  );
}