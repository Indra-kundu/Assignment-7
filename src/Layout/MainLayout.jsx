import { Outlet } from "react-router";
import Navber from "../Component/Shared/Navber/Navber";
import Footer from "../Component/Shared/Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;