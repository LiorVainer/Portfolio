import Link from "next/link";
import classes from "./navbar.module.scss";

export interface NavbarProps {}

export const Navbar = (props: NavbarProps) => {
  return (
    <header className={classes.container}>
      <div className={classes.navbar}>
        <Link href="/">Home</Link>
        <div className={classes.end}>
          <Link href="/about">About Me</Link>
        </div>
      </div>
    </header>
  );
};
