import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reservations',
  description: 'Book your table or inquire about hosting your next event at Marina Seaview. Our team is ready to help you plan an unforgettable seaside experience.',
};

export default function ReservationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
