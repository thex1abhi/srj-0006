import { useState } from "react";
import { COLLEGE, COURSES } from "../assets/data";

const initial = { name: "", phone: "", email: "", course: "", contactTime: "", message: "" };

const inputClass = "mt-1 w-full rounded border border-slate-300 px-3 py-2 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500";

function Field({ label, error, children }) {
  return (
    <label className="block text-sm font-medium text-slate-800">
      {label}
      {children}
      {error && <span className="mt-1 block text-sm font-normal text-red-600">{error}</span>}
    </label>
  );
}

export default function Enquiry() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Enter your full name.";
    if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, ""))) e.phone = "Enter a valid 10-digit mobile number.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email address.";
    if (!form.course) e.course = "Select a course or choose General enquiry.";
    if (form.message.trim().length < 10) e.message = "Write your question in at least 10 characters.";
    return e;
  };

  const submit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      // Connect this to your backend or form service here (e.g. fetch("/api/enquiry", ...)).
      console.log("Enquiry:", form);
      setDone(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (done) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20 text-center">
        <h1 className="font-serif text-3xl font-bold text-slate-900">Enquiry received</h1>
        <p className="mt-4 text-slate-700">
          Thank you, {form.name}. We will reply on {form.phone} or {form.email} within 2 working days.
        </p>
        <button
          type="button"
          onClick={() => { setForm(initial); setDone(false); }}
          className="mt-8 rounded bg-slate-900 px-6 py-3 font-semibold text-white hover:bg-slate-800"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 lg:grid-cols-3">
      <aside>
        <h1 className="font-serif text-4xl font-bold text-slate-900">Enquiry</h1>
        <p className="mt-4 leading-relaxed text-slate-700">
          Have a question about courses, fees, eligibility or admission? Send us a message and
          our office will get back to you.
        </p>
        <ul className="mt-8 space-y-2 text-slate-700">
          <li>Phone: <a className="font-semibold underline" href={`tel:${COLLEGE.phoneLink}`}>{COLLEGE.phone}</a></li>
          <li>Email: <a className="break-all font-semibold underline" href={`mailto:${COLLEGE.email}`}>{COLLEGE.email}</a></li>
        </ul>
      </aside>

      <form onSubmit={submit} noValidate className="space-y-5 bg-slate-50 p-6 lg:col-span-2">
        <h2 className="font-serif text-2xl font-bold text-slate-900">Send your enquiry</h2>

        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Full name" error={errors.name}>
            <input className={inputClass} value={form.name} onChange={set("name")} autoComplete="name" />
          </Field>
          <Field label="Mobile number" error={errors.phone}>
            <input type="tel" inputMode="numeric" className={inputClass} value={form.phone} onChange={set("phone")} autoComplete="tel" placeholder="10-digit number" />
          </Field>
        </div>

        <Field label="Email address" error={errors.email}>
          <input type="email" className={inputClass} value={form.email} onChange={set("email")} autoComplete="email" />
        </Field>

        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Enquiring about" error={errors.course}>
            <select className={inputClass} value={form.course} onChange={set("course")}>
              <option value="">Select</option>
              <option value="General enquiry">General enquiry</option>
              {COURSES.map((c) => <option key={c.id} value={c.name}>{c.name}</option>)}
            </select>
          </Field>
          <Field label="Best time to contact you (optional)">
            <select className={inputClass} value={form.contactTime} onChange={set("contactTime")}>
              <option value="">Any time</option>
              <option>Morning (9 am – 12 pm)</option>
              <option>Afternoon (12 pm – 4 pm)</option>
              <option>Evening (4 pm – 6 pm)</option>
            </select>
          </Field>
        </div>

        <Field label="Your question" error={errors.message}>
          <textarea rows="5" className={inputClass} value={form.message} onChange={set("message")} />
        </Field>

        <button type="submit" className="rounded bg-amber-500 px-8 py-3 font-semibold text-slate-900 hover:bg-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900">
          Send enquiry
        </button>
      </form>
    </div>
  );
}