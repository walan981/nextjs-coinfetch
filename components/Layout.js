//Wrapping the Navbar on all pages as a default component

//We are saying to render the navbar, on top, followed by whatever other component

//we need to configure other things on app.js

import Navbar from "./Navbar";

const Layout = ({children}) =>{
    return (
        <>
            <Navbar/><div>{children}</div>
        </>
    );
};

export default Layout;