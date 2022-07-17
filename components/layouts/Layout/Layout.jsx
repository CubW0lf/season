import NavBar from "../../ux/NavBar/NavBar";
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
