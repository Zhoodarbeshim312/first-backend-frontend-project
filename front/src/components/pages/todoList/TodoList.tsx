import { FC } from "react";
import scss from "./TodoList.module.scss";

const TodoList: FC = () => {
  return (
    <section className={scss.TodoList}>
      <div className="container">
        <div className={scss.content}>TodoList</div>
      </div>
    </section>
  );
};

export default TodoList;
