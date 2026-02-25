import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main className="min-h-screen pt-16 md:pt-20">
      <div className="page-enter">{children}</div>
    </main>
  );
};

export default PageLayout;
