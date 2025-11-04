import { FC } from "react";
import scss from "./Header.module.scss";
import Link from "next/link";

const Header: FC = () => {
  return (
    <section className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <h1>Logo</h1>
          <nav className={scss.nav}>
            <Link href={"/"}>Home</Link>
            <Link href={"/todoCreate"}>Todo Create</Link>
            <Link href={"/todoList"}>Todo List</Link>
            <Link href={"/todoFavorites"}>Todo Favorites</Link>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Header;
