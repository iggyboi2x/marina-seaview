import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about the story, passion, and coastal heritage behind Marina Seaview Restaurant. Our commitment to culinary excellence and world-class hospitality.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
