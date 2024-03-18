import { useEffect, useLayoutEffect } from "react";

const canUseDOM = Boolean(
  typeof window !== "undefined" &&
    typeof window.document !== "undefined" &&
    typeof window.document.createElement !== "undefined",
);

const useSsrSafeLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;

export default useSsrSafeLayoutEffect;
