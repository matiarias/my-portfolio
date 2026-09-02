import "@/styles/globals.css";
import { MotionConfig } from "framer-motion";
import { Lato } from "next/font/google";
import type { AppProps } from "next/app";

const customFont = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={customFont.className}>
      <MotionConfig reducedMotion="user">
        <Component {...pageProps} />
      </MotionConfig>
    </main>
  );
}
