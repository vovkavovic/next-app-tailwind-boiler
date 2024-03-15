import { AppProps } from "next/app";
import "@/styles/globals.css";
import { ViewParamProvider } from "@/providers/ViewParamProvider";
import { ViewMeasuresProvider } from "@/providers/ViewMeasuresProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ViewParamProvider>
      <ViewMeasuresProvider>
        <Component {...pageProps} />
      </ViewMeasuresProvider>
    </ViewParamProvider>
  );
}
