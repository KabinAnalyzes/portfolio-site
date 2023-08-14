import Footer from "./footer";
import ButtonAppBar from "./header";

const Layout = ({ children }) => {
    return (
        <div className="page-container">
           <ButtonAppBar />
            {children}
            <Footer />
        </div>
      );
}
 
export default Layout;