import type {
  User,
  SavingsPlan,
  InvestmentPlan,
  Certification,
  TrainingCohort,
  JobOpening,
  ScholarshipListing,
  Notification,
} from "@/types";

export const mockUser: User = {
  id: "u001",
  name: "Yusuf Toyeeb Olanrewaju",
  email: "numerouno081@gmail.com",
  role: "student",
  gender: "male",
  address: "XX Ojuro, Ilorin, Kwara State, Nigeria",
  phone: "08000777007",
  career: {
    fieldOfExpertise: "Islamic Finance and SDGs",
    yearsOfEngagement: 4,
    professionalBodies: [],
    papersPublished: [],
  },
  createdAt: new Date("2025-01-15"),
};

export const mockSavings: SavingsPlan = {
  id: "s001",
  userId: "u001",
  certCode: "CSAA",
  goalAmount: 2_000_000,
  amountSaved: 500_000,
  cadence: "Save 20% every month",
  transfers: [
    {
      id: "t001",
      method: "bank",
      amount: 250_000,
      status: "confirmed",
      createdAt: new Date("2025-03-01"),
    },
    {
      id: "t002",
      method: "wallet",
      amount: 250_000,
      status: "confirmed",
      createdAt: new Date("2025-04-01"),
    },
  ],
};

export const mockInvestment: InvestmentPlan = {
  id: "i001",
  userId: "u001",
  certCode: "CIPA",
  goalAmount: 2_000_000,
  amountInvested: 250_000,
  cadence: "Invest 25% every six months",
};

export const certifications: Certification[] = [
  {
    code: "CSAA",
    name: "Certified Sharia Auditor",
    body: "AAOIFI",
    description:
      "The globally recognised standard for Sharī'ah audit professionals in Islamic financial institutions. AAOIFI accredited.",
    costUSD: 520,
    costNGN: 800_000,
    status: "enrolled",
    level: "intermediate",
  },
  {
    code: "CIPA",
    name: "Certified Islamic Professional Accountant",
    body: "AAOIFI",
    description:
      "Covers Islamic accounting standards, financial reporting, and Sharī'ah-compliant financial instruments for accountants.",
    costUSD: 850,
    costNGN: 1_300_000,
    status: "eligible",
    level: "professional",
  },
  {
    code: "CPSS",
    name: "Certificate of Proficiency, Sharia Standards",
    body: "AAOIFI",
    description:
      "Foundational proficiency in AAOIFI Sharī'ah Standards — ideal for compliance officers and legal professionals.",
    costUSD: 350,
    costNGN: 540_000,
    status: "eligible",
    level: "foundation",
  },
  {
    code: "ACIFE (Fin.)",
    name: "Advanced Certified Islamic Finance Executive (Financial Analysis)",
    body: "CIFE",
    description:
      "Advanced-level qualification covering Islamic financial analysis, investment structuring, and product development.",
    costUSD: 1_200,
    costNGN: 1_850_000,
    status: "locked",
    level: "advanced",
  },
  {
    code: "ACIFE (Acct.)",
    name: "Advanced Certified Islamic Finance Executive (Accountant)",
    body: "CIFE",
    description:
      "Targets senior accountants seeking specialisation in Islamic finance accounting and audit frameworks.",
    costUSD: 1_200,
    costNGN: 1_850_000,
    status: "locked",
    level: "advanced",
  },
  {
    code: "IFQ",
    name: "Islamic Finance Qualification",
    body: "CISI / BIBF",
    description:
      "Entry-level qualification providing a comprehensive overview of Islamic finance principles and practice.",
    costUSD: 680,
    costNGN: 1_050_000,
    status: "eligible",
    level: "foundation",
  },
  {
    code: "CPIF",
    name: "Chartered Professional in Islamic Finance",
    body: "INCEIF",
    description:
      "A chartered professional designation for senior Islamic finance practitioners seeking global recognition.",
    costUSD: 2_200,
    costNGN: 3_400_000,
    status: "locked",
    level: "professional",
  },
  {
    code: "CIFE",
    name: "Certified Islamic Finance Accountant Executive",
    body: "CIFE",
    description:
      "Executive-level certification bridging Islamic finance management and accounting leadership roles.",
    costUSD: 950,
    costNGN: 1_460_000,
    status: "locked",
    level: "advanced",
  },
];

export const trainingCohorts: TrainingCohort[] = [
  { cert: "CIPA", date: "August, 2025", costNGN: 2_000_000 },
  { cert: "CIFA", date: "August, 2025", costNGN: 2_000_000 },
  { cert: "CSAA", date: "August, 2025", costNGN: 2_000_000 },
];

export const jobOpenings: JobOpening[] = [
  { institution: "JAIZ Bank", role: "Sharia Compliance Officer", applyUrl: "#" },
  { institution: "Lotus Bank", role: "Sharia Auditor", applyUrl: "#" },
  { institution: "IFNG", role: "Risk Management Officer", applyUrl: "#" },
  { institution: "IsBD", role: "Sharia Accountancy Manager", applyUrl: "#" },
  { institution: "TAJ Bank", role: "ACIFE Accountant", applyUrl: "#" },
  { institution: "AAOIFI", role: "Sharia Advisor", applyUrl: "#" },
  { institution: "Halvest", role: "Islamic Finance Analyst", applyUrl: "#" },
  { institution: "STEC", role: "Islamic Finance Specialist", applyUrl: "#" },
];

export const scholarships: ScholarshipListing[] = [
  { cert: "CIPA", tier: "full", applyUrl: "#" },
  { cert: "CSAA", tier: "full", applyUrl: "#" },
  { cert: "IFQ", tier: "full", applyUrl: "#" },
  { cert: "CIFA", tier: "full", applyUrl: "#" },
  { cert: "CIPA", tier: "partial", applyUrl: "#" },
  { cert: "CSAA", tier: "partial", applyUrl: "#" },
  { cert: "IFQ", tier: "partial", applyUrl: "#" },
  { cert: "CIFA", tier: "partial", applyUrl: "#" },
];

export const notifications: Notification[] = [
  {
    id: "n001",
    title: "August Cohort Now Open",
    message: "CSAA & CIPA training registration for August 2025 is now open.",
    read: false,
    createdAt: new Date("2025-06-01"),
  },
  {
    id: "n002",
    title: "Scholarship Applications Open",
    message: "Full scholarship applications for CIPA and IFQ are now being accepted.",
    read: false,
    createdAt: new Date("2025-06-01"),
  },
  {
    id: "n003",
    title: "Savings Milestone",
    message: "You've saved ₦500,000 — you are 75% away from your CSAA goal!",
    read: true,
    createdAt: new Date("2025-05-28"),
  },
  {
    id: "n004",
    title: "New Job Opening",
    message: "JAIZ Bank is looking for a Sharia Compliance Officer. Apply today.",
    read: true,
    createdAt: new Date("2025-05-20"),
  },
  {
    id: "n005",
    title: "Profile Incomplete",
    message: "Add your professional body memberships to strengthen your scholarship application.",
    read: false,
    createdAt: new Date("2025-06-02"),
  },
  {
    id: "n006",
    title: "Investment Reminder",
    message: "Your 6-month investment contribution is due. Add ₦500,000 to stay on track.",
    read: false,
    createdAt: new Date("2025-06-02"),
  },
  {
    id: "n007",
    title: "C/I Support Available",
    message: "Three new investors are available for Candidate-Investor Support agreements.",
    read: false,
    createdAt: new Date("2025-06-01"),
  },
  {
    id: "n008",
    title: "Welcome to MIFEA",
    message: "Your account has been created. Start by setting your savings goal.",
    read: true,
    createdAt: new Date("2025-01-15"),
  },
];

export const bankDetails = {
  savings: {
    accountNumber: "00077722312",
    bankName: "FINACCESS",
    walletId: "22DDS1200",
  },
  support: {
    accountNumber: "900011109",
    bankName: "FINACCESS SUPPORT",
    walletId: "33211BG112",
  },
};

export const contactInfo = {
  email: "numerouno081@gmail.com",
  phones: ["+2348126844811", "+2348073881404"],
  address: "Taiwo Isale, Unity Rd, Ilorin, Kwara State, Nigeria",
};
