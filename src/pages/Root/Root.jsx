import { Outlet } from "react-router-dom";
import Header from "../../Header/Header";
import "./root.scss";
import Footer from "../../Footer/Footer";
const Root = () => {
  return (
    <div className={"root-page"}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default Root;
