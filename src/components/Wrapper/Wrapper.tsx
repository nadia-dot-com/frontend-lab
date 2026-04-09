import type { ReactNode } from "react";

export function Wrapper({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto box-border overflow-x-hidden w-full">
      {children}
    </div>
  );
}
