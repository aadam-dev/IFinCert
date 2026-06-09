"use client";

import * as React from "react";

/** Lock body scroll when overlays (nav drawer, mobile menu) are open */
export function useBodyScrollLock(locked: boolean) {
  React.useEffect(() => {
    if (!locked) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [locked]);
}
