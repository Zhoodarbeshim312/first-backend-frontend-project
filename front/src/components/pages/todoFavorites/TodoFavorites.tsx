import { FC } from "react";
import scss from "./TodoFavorites.module.scss";

const TodoFavorites: FC = () => {
  return (
    <section className={scss.TodoFavorites}>
      <div className="container">
        <div className={scss.content}>TodoFavorites</div>
      </div>
    </section>
  );
};

export default TodoFavorites;
