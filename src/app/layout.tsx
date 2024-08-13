import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

import './globals.css';
import { Providers } from './providers';
const inter = Inter({ subsets: ['latin'] });
const sfProDisplay = localFont({
  src: '/fonts/sf-pro-display-regular.woff2',
  display: 'swap',
});
export const metadata: Metadata = {
  title: 'Facebook Lite Demo',
  description:
    'This is website copyright facebook website. It is free software',
  icons: {
    icon: './favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={sfProDisplay.className}
        suppressHydrationWarning={true}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
