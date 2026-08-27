import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PathToWebs — We Build. You Grow.',
  description: 'End-to-end web development for businesses, founders, and ideas. From design and development to deployment, hosting, and support.',
  keywords: ['web development company', 'website development', 'web development Hyderabad', 'full-stack development', 'IT solutions'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
