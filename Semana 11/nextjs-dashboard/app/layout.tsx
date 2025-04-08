import '@/app/ui/global.css';
import { montse } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montse.className} antialiased`}>{children}</body>
      </html>
  );
}
