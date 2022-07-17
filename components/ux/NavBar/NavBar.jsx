import logo from "../../../public/assets/images/svg/logo.svg";
import styles from "./NavBar.module.css";
import { BsCalendar3 } from "react-icons/bs";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const NavBar = () => {
  const router = useRouter();

  return (
    <nav className={styles.container}>
      <Link href="/">
        <a>
          <div className={styles.logo}>
            <Image src={logo} alt="Logo Season" />
          </div>
        </a>
      </Link>
      <h1>Season</h1>
      <Link href="/months">
        <a>
          <div className={styles.months}>
            <BsCalendar3 className={router.pathname === "/months" && styles.current} />
          </div>
        </a>
      </Link>
    </nav>
  );
};

export default NavBar;
