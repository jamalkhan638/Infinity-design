"use client";
import { Poppins } from "next/font/google";
import "../styles/main.css";
import HeaderNavbar from "@/components/navbars/HeaderNavbar";
import Footer from "@/components/footer/Footer";
import { usePathname } from "next/navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const hideHeaderFooter = pathname === "/admin" || pathname === "/admin/view";

  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="min-vh-100 d-flex flex-column">
          {!hideHeaderFooter && <HeaderNavbar />}
          <div className="flex-fill">{children}</div>
          {!hideHeaderFooter && <Footer />}
        </div>
      </body>
    </html>
  );
}
