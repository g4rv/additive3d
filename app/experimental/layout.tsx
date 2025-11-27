import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Component Playground | Additive3D',
  description: 'Interactive playground for testing and combining UI components to find optimal layouts for 3D printing platform.',
};

export default function ExperimentalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}