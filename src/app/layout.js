import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Raleway } from "next/font/google";
import Navbars from "./Components/Navbars";

const raleway = Raleway({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Portfolio Website",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Navbars />
        {children}
      </body>
    </html>
  );
}
