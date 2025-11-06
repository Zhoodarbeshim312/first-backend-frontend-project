"use client";
import { FC, useState } from "react";
import scss from "./TodoCreate.module.scss";
import axios from "axios";
import { useRouter } from "next/navigation";
import { api } from "@/API/api";

export interface IValues {
  url: string;
  title: string;
  price: string;
  desc: string;
}

const TodoCreate: FC = () => {
  const [values, setValues] = useState<IValues>({
    url: "",
    title: "",
    price: "",
    desc: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const addProduct = async () => {
    if (!values.title || !values.price || !values.desc) {
      setError("All fields are required!");
      return;
    }

    const newProduct = {
      url: values.url,
      title: values.title,
      price: values.price,
      desc: values.desc,
    };

    setLoading(true);
    setError(null);

    try {
      const res = await axios.post(`${api}/add`, newProduct);

      if (res.data.success) {
        setValues({ url: "", title: "", price: "", desc: "" });
        router.push("/");
      } else {
        setError("Failed to create product, please try again.");
      }
    } catch (error) {
      setError("An error occurred, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={scss.TodoCreate}>
      <div className="container">
        <div className={scss.content}>
          <h1>Todo Create</h1>
          {error && <div className={scss.error}>{error}</div>}
          <div className={scss.form}>
            <input
              value={values.url}
              onChange={(e) => setValues({ ...values, url: e.target.value })}
              type="text"
              placeholder="Url..."
            />
            <input
              value={values.title}
              onChange={(e) => setValues({ ...values, title: e.target.value })}
              type="text"
              placeholder="Title..."
            />
            <input
              value={values.price}
              onChange={(e) => setValues({ ...values, price: e.target.value })}
              type="text"
              placeholder="Price..."
            />
            <input
              value={values.desc}
              onChange={(e) => setValues({ ...values, desc: e.target.value })}
              type="text"
              placeholder="Description..."
            />
            <button onClick={addProduct} disabled={loading}>
              {loading ? "Creating..." : "Create!"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TodoCreate;
