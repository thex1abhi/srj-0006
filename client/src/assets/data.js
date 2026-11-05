export const COLLEGE = {
    name: "St. John's College of Arts, Science and Commerce",
    short: "St. John's College",
    phone: "99708 80809",
    phoneLink: "+919970880809",
    email: "stjohnsupport@gmail.com",
};
 



// Fees are per year in Indian Rupees. Edit these to match your official fee structure.
export const COURSES = [
    { id: "bsc-cs", name: "B.Sc. Computer Science", stream: "Science", duration: "3 years", eligibility: "12th Science (PCM / PCB) with 50% marks", seats: 60, fee: 45000 },
    { id: "bsc-phy", name: "B.Sc. Physics", stream: "Science", duration: "3 years", eligibility: "12th Science with Physics and Mathematics", seats: 40, fee: 38000 },
    { id: "bsc-chem", name: "B.Sc. Chemistry", stream: "Science", duration: "3 years", eligibility: "12th Science with Chemistry", seats: 40, fee: 38000 },
    { id: "bsc-bio", name: "B.Sc. Biotechnology", stream: "Science", duration: "3 years", eligibility: "12th Science with Biology", seats: 40, fee: 48000 },
    { id: "bcom", name: "B.Com. General", stream: "Commerce", duration: "3 years", eligibility: "12th pass in any stream", seats: 120, fee: 28000 },
    { id: "bcom-acc", name: "B.Com. Accounting and Finance", stream: "Commerce", duration: "3 years", eligibility: "12th Commerce with 45% marks", seats: 60, fee: 35000 },
    { id: "bba", name: "BBA (Business Administration)", stream: "Commerce", duration: "3 years", eligibility: "12th pass in any stream", seats: 60, fee: 42000 },
    { id: "ba-eng", name: "B.A. English Literature", stream: "Arts", duration: "3 years", eligibility: "12th pass in any stream", seats: 60, fee: 20000 },
    { id: "ba-eco", name: "B.A. Economics", stream: "Arts", duration: "3 years", eligibility: "12th pass in any stream", seats: 60, fee: 22000 },
    { id: "ba-psy", name: "B.A. Psychology", stream: "Arts", duration: "3 years", eligibility: "12th pass in any stream", seats: 50, fee: 26000 },
    { id: "msc-cs", name: "M.Sc. Computer Science", stream: "Postgraduate", duration: "2 years", eligibility: "B.Sc. / BCA with 50% marks", seats: 30, fee: 55000 },
    { id: "mcom", name: "M.Com.", stream: "Postgraduate", duration: "2 years", eligibility: "B.Com. or equivalent degree with 50% marks", seats: 40, fee: 32000 },
];

export const inr = (n) => "₹" + n.toLocaleString("en-IN");