
// Creating a custom Error Page

import Link from "next/dist/client/link";

const PageNotFound = () =>{
    return(
        <div>
            <h1> Page Not Found </h1>
            <h3> Check to see if you are in the correct page.</h3>
            <Link href='/'>Return to the homepage here</Link>
        </div>
    );
};

export default PageNotFound;