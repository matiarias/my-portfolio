import "@/styles/globals.css";
import { Lato } from "next/font/google";
import type { AppProps } from "next/app";

const customFont = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={customFont.className}>
      <Component {...pageProps} />
    </main>
  );
}
