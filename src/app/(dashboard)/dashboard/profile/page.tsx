"use client";

import * as React from "react";
import Link from "next/link";
import { Camera, Pencil, Check, X } from "lucide-react";
import { DashboardTopBar } from "@/components/dashboard/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { mockUser } from "@/lib/mock-data";

interface EditableSectionProps {
  title: string;
  children: (editing: boolean) => React.ReactNode;
}

function EditableSection({ title, children }: EditableSectionProps) {
  const [editing, setEditing] = React.useState(false);
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{title}</CardTitle>
          {editing ? (
            <div className="flex gap-2">
              <Button variant="sage" size="sm" onClick={() => setEditing(false)}>
                <Check className="h-4 w-4" /> Save
              </Button>
              <Button variant="ghost" size="sm" onClick={() => setEditing(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <Button variant="ghost" size="sm" onClick={() => setEditing(true)}>
              <Pencil className="h-4 w-4" /> Edit
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent>{children(editing)}</CardContent>
    </Card>
  );
}

export default function ProfilePage() {
  const initials = mockUser.name.split(" ").map((n) => n[0]).join("").slice(0, 2);

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <DashboardTopBar title="Profile" />
      <div className="flex-1 overflow-y-auto p-6 space-y-6">

        {/* Avatar */}
        <div className="flex items-start gap-6 bg-white rounded-2xl border border-sand-200 p-6">
          <div className="relative shrink-0">
            <Avatar className="h-20 w-20">
              <AvatarImage src={mockUser.avatarUrl} />
              <AvatarFallback className="text-xl">{initials}</AvatarFallback>
            </Avatar>
            <button
              className="absolute -bottom-1 -right-1 w-7 h-7 bg-amber-500 rounded-full flex items-center justify-center text-white hover:bg-amber-600 transition-colors"
              aria-label="Upload avatar"
            >
              <Camera className="h-3.5 w-3.5" />
            </button>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-ink-900">{mockUser.name}</h2>
            <div className="flex items-center gap-2 mt-1.5">
              <Badge variant="amber" size="md" className="capitalize">{mockUser.role}</Badge>
              <span className="text-sm text-ink-400">Member since {mockUser.createdAt.getFullYear()}</span>
            </div>
            <p className="text-xs text-ink-400 mt-2">Max 1MB · JPG, PNG, WebP</p>
          </div>
        </div>

        {/* Personal information */}
        <EditableSection title="Personal Information">
          {(editing) => (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {editing ? (
                <>
                  <Input label="Full name" defaultValue={mockUser.name} />
                  <Input label="Gender" defaultValue={mockUser.gender} />
                  <Input label="Email address" type="email" defaultValue={mockUser.email} className="sm:col-span-2" />
                  <Input label="Phone number" type="tel" defaultValue={mockUser.phone} />
                  <Input label="Status" defaultValue={mockUser.role} />
                  <Input label="Address" defaultValue={mockUser.address} className="sm:col-span-2" />
                </>
              ) : (
                <>
                  {[
                    { label: "Name", value: mockUser.name },
                    { label: "Gender", value: mockUser.gender },
                    { label: "Email address", value: mockUser.email },
                    { label: "Contact details", value: mockUser.phone },
                    { label: "Status", value: mockUser.role, capitalize: true },
                    { label: "Address", value: mockUser.address },
                  ].map(({ label, value, capitalize }) => (
                    <div key={label}>
                      <p className="text-xs text-ink-400 mb-0.5">{label}</p>
                      <p className={`text-sm font-medium text-ink-900 ${capitalize ? "capitalize" : ""}`}>{value}</p>
                    </div>
                  ))}
                </>
              )}
            </div>
          )}
        </EditableSection>

        {/* Career information */}
        <EditableSection title="Career Information">
          {(editing) => (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {editing ? (
                <>
                  <Input label="Field of expertise" defaultValue={mockUser.career.fieldOfExpertise} className="sm:col-span-2" />
                  <Input label="Years of engagement" type="number" defaultValue={String(mockUser.career.yearsOfEngagement)} />
                  <Input label="Professional bodies" placeholder="Add memberships…" />
                  <div className="sm:col-span-2">
                    <p className="text-sm font-medium text-ink-700 mb-2">Papers / Articles published</p>
                    <label className="flex flex-col items-center justify-center w-full h-24 rounded-xl border-2 border-dashed border-sand-200 bg-sand-50 hover:border-amber-300 cursor-pointer transition-colors">
                      <input type="file" className="sr-only" />
                      <p className="text-xs text-ink-400">Click to upload (PDF, DOC)</p>
                    </label>
                  </div>
                </>
              ) : (
                <>
                  {[
                    { label: "Field of expertise", value: mockUser.career.fieldOfExpertise },
                    { label: "Years of engagement", value: `${mockUser.career.yearsOfEngagement} years` },
                    { label: "Professional bodies", value: mockUser.career.professionalBodies.join(", ") || "None listed" },
                    { label: "Papers / Articles", value: mockUser.career.papersPublished.length > 0 ? `${mockUser.career.papersPublished.length} uploaded` : "None uploaded" },
                  ].map(({ label, value }) => (
                    <div key={label}>
                      <p className="text-xs text-ink-400 mb-0.5">{label}</p>
                      <p className="text-sm font-medium text-ink-900">{value}</p>
                    </div>
                  ))}
                </>
              )}
            </div>
          )}
        </EditableSection>

        {/* Consent */}
        <div className="text-center py-2">
          <p className="text-sm text-ink-400">
            View how we process your personal information and give consent{" "}
            <Link href="/legal/privacy" className="text-amber-500 hover:underline">here</Link>.
          </p>
        </div>

      </div>
    </div>
  );
}
