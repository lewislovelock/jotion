import { url } from "inspector";
import { useEffect, useState } from "react";

// This hook is used to get the origin url of the current window location.
export const useOrigin = () => {
  const [mounted, setMounted] = useState(false);
  const origin = typeof window !== "undefined" && window.location.origin ? window.location.origin : "";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return "";
  }

  return origin;
}