import { useState } from "react";
import { COLLEGE, COURSES } from "../assets/data.js";

const initial = { name: "", dob: "", gender: "", phone: "", email: "", address: "", course: "", prevSchool: "", percentage: "", agree: false };

const steps = [
  "Fill in the form below and submit it.",
  "Our office will call you within 2 working days to confirm receipt.",
  "Visit the college with your original documents for verification.",
  "Pay the  fee to confirm your seat.",
];

const documents = [
  "10th and 12th mark sheets (originals and 2 photocopies)",
  "Transfer certificate and migration certificate",
  "Passport-size photographs (4)",
  "Aadhaar card copy",
  "Caste certificate (if applicable)",
];

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

export default function AdmissionForm() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value });

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Enter the student's full name.";
    if (!form.dob) e.dob = "Select the date of birth.";
    if (!form.gender) e.gender = "Select a gender.";
    if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, ""))) e.phone = "Enter a valid 10-digit mobile number.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email address.";
    if (!form.address.trim()) e.address = "Enter the address.";
    if (!form.course) e.course = "Select a course.";
    if (!form.prevSchool.trim()) e.prevSchool = "Enter the previous school or college.";
    const p = Number(form.percentage);
    if (form.percentage === "" || isNaN(p) || p < 0 || p > 100) e.percentage = "Enter a percentage between 0 and 100.";
    if (!form.agree) e.agree = "Confirm that the details are correct.";
    return e;
  };

  const submit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      // Connect this to your backend or form service here (e.g. fetch("/api/admission", ...)).
      console.log("Admission application:", form);
      setDone(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (done) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20 text-center">
        <h1 className="font-serif text-3xl font-bold text-slate-900">Application received</h1>
        <p className="mt-4 text-slate-700">
          Thank you, {form.name}. We will contact you on {form.phone} within 2 working days.
          For urgent queries, call {COLLEGE.phone}.
        </p>
        <button
          type="button"
          onClick={() => { setForm(initial); setDone(false); }}
          className="mt-8 rounded bg-slate-900 px-6 py-3 font-semibold text-white hover:bg-slate-800"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 lg:grid-cols-3">
      <aside className="lg:col-span-1">
        <h1 className="font-serif text-4xl font-bold text-slate-900">Admission</h1>
        <h2 className="mt-8 text-xl font-semibold text-slate-900">Admission process</h2>
        <ol className="mt-4 space-y-4">
          {steps.map((s, i) => (
            <li key={s} className="flex gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">{i + 1}</span>
              <p className="text-slate-700">{s}</p>
            </li>
          ))}
        </ol>
        <h2 className="mt-8 text-xl font-semibold text-slate-900">Documents to bring</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
          {documents.map((d) => <li key={d}>{d}</li>)}
        </ul>
        <p className="mt-8 text-sm text-slate-600">
          Need help? Call <a className="font-semibold underline" href={`tel:${COLLEGE.phoneLink}`}>{COLLEGE.phone}</a> or
          email <a className="break-all font-semibold underline" href={`mailto:${COLLEGE.email}`}>{COLLEGE.email}</a>.
        </p>
      </aside>

      <form onSubmit={submit} noValidate className="space-y-5 bg-slate-50 p-6 lg:col-span-2">
        <h2 className="font-serif text-2xl font-bold text-slate-900">Admission form</h2>

        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Full name" error={errors.name}>
            <input className={inputClass} value={form.name} onChange={set("name")} autoComplete="name" />
          </Field>
          <Field label="Date of birth" error={errors.dob}>
            <input type="date" className={inputClass} value={form.dob} onChange={set("dob")} />
          </Field>
          <Field label="Gender" error={errors.gender}>
            <select className={inputClass} value={form.gender} onChange={set("gender")}>
              <option value="">Select</option>
              <option>Female</option>
              <option>Male</option>
              <option>Other</option>
            </select>
          </Field>
          <Field label="Mobile number" error={errors.phone}>
            <input type="tel" inputMode="numeric" className={inputClass} value={form.phone} onChange={set("phone")} autoComplete="tel" placeholder="10-digit number" />
          </Field>
        </div>

        <Field label="Email address" error={errors.email}>
          <input type="email" className={inputClass} value={form.email} onChange={set("email")} autoComplete="email" />
        </Field>

        <Field label="Address" error={errors.address}>
          <textarea rows="3" className={inputClass} value={form.address} onChange={set("address")} />
        </Field>

        <Field label="Course applying for" error={errors.course}>
          <select className={inputClass} value={form.course} onChange={set("course")}>
            <option value="">Select a course</option>
            {COURSES.map((c) => <option key={c.id} value={c.name}>{c.name}</option>)}
          </select>
        </Field>

        <div className="grid gap-5 md:grid-cols-2">
          <Field label="Previous school or college" error={errors.prevSchool}>
            <input className={inputClass} value={form.prevSchool} onChange={set("prevSchool")} />
          </Field>
          <Field label="Marks in last exam (%)" error={errors.percentage}>
            <input type="number" min="0" max="100" step="0.01" className={inputClass} value={form.percentage} onChange={set("percentage")} />
          </Field>
        </div>

        <div>
          <label className="flex items-start gap-2 text-sm text-slate-700">
            <input type="checkbox" className="mt-1" checked={form.agree} onChange={set("agree")} />
            I confirm that the details above are correct.
          </label>
          {errors.agree && <span className="mt-1 block text-sm text-red-600">{errors.agree}</span>}
        </div>

        <button type="submit" className="rounded bg-amber-500 px-8 py-3 font-semibold text-slate-900 hover:bg-amber-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900">
          Submit application
        </button>
      </form>
    </div>
  );
}
