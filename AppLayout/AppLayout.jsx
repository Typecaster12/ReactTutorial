import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const AppLayout = () => {

    return (
        <>
            {/* defining the structure of the layout */}
            <Header />

            <Outlet /> {/* This outlet component is used in side the parent component to render the childs inside the parent */}

            <Footer />
        </>
    )

}

export default AppLayout;
