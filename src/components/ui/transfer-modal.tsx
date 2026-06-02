"use client";

import * as React from "react";
import { Copy, Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./dialog";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import { formatNaira } from "@/lib/utils";

interface BankDetails {
  accountNumber: string;
  bankName: string;
  walletId: string;
}

interface TransferModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  amount: number;
  bankDetails: BankDetails;
  title?: string;
  onConfirm?: () => void;
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="text-ink-400 hover:text-amber-500 transition-colors p-1 rounded"
      aria-label="Copy to clipboard"
    >
      {copied ? <Check className="h-3.5 w-3.5 text-sage-600" /> : <Copy className="h-3.5 w-3.5" />}
    </button>
  );
}

function TransferRow({
  label,
  value,
  mono,
}: {
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-sand-100 last:border-0">
      <span className="text-sm text-ink-500">{label}</span>
      <div className="flex items-center gap-2">
        <span className={cn("text-sm font-semibold text-ink-900", mono && "font-mono")}>
          {value}
        </span>
        <CopyButton text={value} />
      </div>
    </div>
  );
}

export function TransferModal({
  open,
  onOpenChange,
  amount,
  bankDetails,
  title = "Make a Transfer",
  onConfirm,
}: TransferModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            Transfer {formatNaira(amount)} using any of the methods below, then confirm.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Bank transfer */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-400 mb-3">
              Transfer by Bank
            </p>
            <div className="bg-sand-50 rounded-xl px-4">
              <TransferRow label="Account Number" value={bankDetails.accountNumber} mono />
              <TransferRow label="Bank" value={bankDetails.bankName} />
              <TransferRow label="Amount" value={formatNaira(amount)} />
            </div>
          </div>

          {/* Wallet */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-400 mb-3">
              Transfer by Wallet
            </p>
            <div className="bg-sand-50 rounded-xl px-4">
              <TransferRow label="Wallet ID" value={bankDetails.walletId} mono />
              <TransferRow label="Amount" value={formatNaira(amount)} />
            </div>
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <Button
            variant="outline"
            size="md"
            className="flex-1"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            size="md"
            className="flex-1"
            onClick={() => {
              onConfirm?.();
              onOpenChange(false);
            }}
          >
            Confirm Transfer
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
