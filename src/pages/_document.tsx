import { Head, Html, Main, NextScript } from "next/document";
import type { CSSProperties } from "react";

export default function Document() {
  return (
    <Html style={{ "--vh": "1vh" } as CSSProperties}>
      <Head />
      <body className="font-sans">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
