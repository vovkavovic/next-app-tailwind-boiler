import { AppProps } from "next/app";
import "@/styles/globals.css";
import { ViewParamProvider } from "@/providers/ViewParamProvider";
import { ViewMeasuresProvider } from "@/providers/ViewMeasuresProvider";
import useLenisScroll from "@/hooks/useLenisScroll";

export default function App({ Component, pageProps }: AppProps) {
  useLenisScroll();
  return (
    <ViewParamProvider>
      <ViewMeasuresProvider>
        <Component {...pageProps} />
      </ViewMeasuresProvider>
    </ViewParamProvider>
  );
}
