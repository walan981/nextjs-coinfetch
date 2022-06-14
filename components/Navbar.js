
import Link from "next/dist/client/link";
import styles from '../styles/Navbar.module.css';
const Navbar = ()=>{
    return(
        <div className={styles.navbar}>
            <div className={styles.links}>
                <Link href="/">Home</Link>
                {/* <Link href="/about">About</Link> */}
                {/* <Link href="/profile">Profile</Link> */}
                <Link href="/cryptos">Cryptos</Link>
            </div>
        </div>
    )
};

export default Navbar;