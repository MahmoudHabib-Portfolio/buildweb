import '../Styles/style.scss';
import { useRef } from "react";
import { Footer, NavBar } from "../Components";
import AppDrawer from "../Components/AppDrawer";
import { Home } from "../Pages";

export default function Layout() {

    const scrollHome = useRef("");
    const scrollPrice = useRef("");
    const scrollFeature = useRef("");
    const scrollContact = useRef("");

    return (
        <>
            <AppDrawer />
            <NavBar 
             ScrollHome={scrollHome} 
             ScrollPrice={scrollPrice}
             ScrollFeature={scrollFeature}
             ScrollContact={scrollContact}
             />
            <Home
             ScrollHome={scrollHome} 
             ScrollPrice={scrollPrice}
             ScrollFeature={scrollFeature}
             ScrollContact={scrollContact}
             />
            <Footer />
        </>
    );
}
