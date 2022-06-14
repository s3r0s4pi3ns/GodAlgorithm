import React from "react";

export const MainGrid: React.FC<{ children: React.ReactNode }> = ({
  children,
}): JSX.Element => (
  <div className="grid grid-cols-[335px_minmax(900px,_1fr)_100px] grid-rows-1 auto-cols-fr h-screen">
    {children}
  </div>
);
