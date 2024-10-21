import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";

type Props = {};

const layout = (props: Props) => {
  return <div>layout</div>;
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
