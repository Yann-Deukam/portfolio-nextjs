import { Poppins } from "next/font/google";
import "./globals.css";

//Custom components
import Header from "../components/Header";
import VeilTransition from "../components/VeilTransition";
import ParticlesComponent from "../components/Particles";
import { Toaster } from "@/components/ui/sonner";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Yann Donald",
  description: "Web developer - Graphic designer - UI/UX designer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased mx-5`}>
        <Header />
        <div className="container mx-auto">
          {/* <StairTransition />
          <Transition>{children}</Transition> */}
          <ParticlesComponent id="particles" />
          <VeilTransition>{children}</VeilTransition>
          <Toaster />
        </div>
      </body>
    </html>
  );
}
