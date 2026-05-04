import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Menu',
  description: 'Explore the culinary delights of Marina Seaview. From fresh local seafood and grilled specialties to international favorites and signature cocktails.',
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
