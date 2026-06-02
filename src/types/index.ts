export type UserRole = "student" | "non-student";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  gender: "male" | "female" | "prefer-not-to-say";
  address: string;
  phone: string;
  avatarUrl?: string;
  career: {
    fieldOfExpertise: string;
    yearsOfEngagement: number;
    professionalBodies: string[];
    papersPublished: string[];
  };
  createdAt: Date;
}

export interface Transfer {
  id: string;
  method: "bank" | "wallet";
  amount: number;
  status: "pending" | "confirmed";
  createdAt: Date;
}

export interface SavingsPlan {
  id: string;
  userId: string;
  certCode: string;
  goalAmount: number;
  amountSaved: number;
  cadence: string;
  transfers: Transfer[];
}

export interface InvestmentPlan {
  id: string;
  userId: string;
  certCode: string;
  goalAmount: number;
  amountInvested: number;
  cadence: string;
}

export type CertStatus = "enrolled" | "eligible" | "completed" | "locked";

export interface Certification {
  code: string;
  name: string;
  body: string;
  description: string;
  costUSD: number;
  costNGN: number;
  status: CertStatus;
  level: "foundation" | "intermediate" | "advanced" | "professional";
}

export interface TrainingCohort {
  cert: string;
  date: string;
  costNGN: number;
}

export interface JobOpening {
  institution: string;
  role: string;
  applyUrl?: string;
}

export type ScholarshipTier = "full" | "partial";

export interface ScholarshipListing {
  cert: string;
  tier: ScholarshipTier;
  applyUrl: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  read: boolean;
  createdAt: Date;
}
