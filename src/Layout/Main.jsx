import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const Main = () => {
  return (
    <div>
      {/* <Header /> */}
      <div>
        <Outlet></Outlet>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Main;
