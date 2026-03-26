import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen">
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
