# IFinCert

**Islamic Finance Certification Accelerator** — a FinTech/EdTech platform that helps Nigerians access internationally recognised Islamic finance credentials through structured savings, scholarships, Candidate-Investor sponsorship, and career placement.

IFinCert addresses a practical barrier: globally accredited certifications from bodies such as AAOIFI, CISI, and INCEIF often cost between ₦540,000 and ₦3,400,000, putting them out of reach for most students and early-career professionals in Nigeria. The platform breaks that cost into achievable steps while keeping every financial structure Sharia-compliant.

## What IFinCert provides

- **Certification pathways** — CSAA, CIPA, CPSS, IFQ, CPIF, CIFE, and ACIFE programmes, from foundation to professional level
- **Savings & investment plans** — goal-based contributions in Naira toward certification costs
- **Scholarships** — full and partial awards for eligible candidates
- **Candidate-Investor (C/I) Support** — Qard Hasan–based sponsorship arrangements
- **Job placement** — connections to roles at partner Islamic financial institutions across Nigeria

## Tech stack

| Layer | Technology |
|-------|------------|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| UI | React 19, Tailwind CSS 4, Radix UI |
| Language | TypeScript |
| Forms | React Hook Form, Zod |

## Getting started

**Requirements:** Node.js 20.9+

```bash
git clone https://github.com/aadam-dev/IFinCert.git
cd IFinCert
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The app redirects to `/home`.

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |

## Project structure

```
src/
├── app/
│   ├── (marketing)/     # Public pages — home, certifications, about, FAQ
│   ├── (auth)/          # Login, register, password reset
│   ├── (dashboard)/     # Authenticated user dashboard
│   └── legal/           # Privacy, terms, cookies
├── components/
│   ├── marketing/       # Nav, footer, hero, certification UI
│   ├── dashboard/       # Sidebar, savings ring
│   └── ui/              # Shared design-system components
├── lib/                 # Mock data, utilities, image paths
└── types/               # Shared TypeScript types
```

## Current status

This repository contains the **frontend application** with mock data for demonstration and development. Backend services, payment integrations, and production authentication are not yet connected.

## Contact

IFinCert is based in Ilorin, Kwara State, Nigeria.

- Website: [ifincert.ng](https://ifincert.ng) *(when live)*
- Repository: [github.com/aadam-dev/IFinCert](https://github.com/aadam-dev/IFinCert)

## Licence

All rights reserved. Source is published for transparency and collaboration; redistribution or commercial use requires permission from the IFinCert team.
