import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Yumei Foods | Gia vị Trung Hoa", description: "Cửa hàng gia vị và thực phẩm Yumei Foods" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="vi"><body>{children}</body></html>
  );
}
