import { Inconsolata, Montserrat } from "@next/font/google";

export const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: '--font-body'
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "700", "900"],
  variable: '--font-heading'
});