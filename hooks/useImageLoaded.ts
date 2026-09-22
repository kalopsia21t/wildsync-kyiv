"use client";

import { useCallback, useEffect, useState } from "react";

export function useImageLoaded(resetKey?: unknown) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => setLoaded(false), [resetKey]);

  const handleLoad = useCallback(() => setLoaded(true), []);

  return { loaded, handleLoad };
}
