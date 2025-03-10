// Tremor Raw useOnWindowResize [v0.0.0]
"use client";

import React from "react";

export const useOnWindowResize = (handler: { (): void }) => {
  React.useEffect(() => {
    const handleResize = () => {
      handler()
    }
    handleResize()
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [handler])
}