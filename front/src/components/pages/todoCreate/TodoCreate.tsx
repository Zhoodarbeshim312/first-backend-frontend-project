import { FC } from "react";
import scss from "./TodoCreate.module.scss";

const TodoCreate: FC = () => {
  return (
    <section className={scss.TodoCreate}>
      <div className="container">
        <div className={scss.content}>TodoCreate</div>
      </div>
    </section>
  );
};

export default TodoCreate;
