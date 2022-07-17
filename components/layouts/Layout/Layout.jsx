import NavBar from "../../ux/Navbar/Navbar";
import TypeSelector from "../../ux/TypeSelector/TypeSelector";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <TypeSelector />
    </>
  );
};

export default Layout;
