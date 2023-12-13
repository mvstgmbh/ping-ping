import { Navbar } from '@molecules/Navbar';

export const withNavbar = (children: React.ReactNode) => {
  return (
    <div className="flex flex-col h-full">
      {children}
      <Navbar />
    </div>
  );
};
