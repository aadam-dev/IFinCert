import { redirect } from "next/navigation";

// Root route hands off to the marketing landing page in (marketing)/page.tsx
export default function RootPage() {
  redirect("/home");
}
