import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'A glimpse into the Marina Seaview experience. Browse our collection of signature dishes, elegant event spaces, and stunning ocean views.',
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
