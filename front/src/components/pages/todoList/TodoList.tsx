"use client";
import { FC, useEffect, useState } from "react";
import scss from "./TodoList.module.scss";
import axios from "axios";
import Image from "next/image";

export interface Root {
  success: boolean;
  product: Product[];
}

export interface Product {
  id: number;
  url: string;
  title: string;
  price: number;
  desc: string;
  createdAt: string;
  updatedAt: string;
}

const TodoList: FC = () => {
  const [getData, setGetData] = useState<Product[]>([]);
  const [expandedId, setExpandedId] = useState<number | null>(null); // для отслеживания раскрытого продукта

  const getProducts = async () => {
    try {
      const res = await axios.get<{ product: Product[] }>(
        `http://localhost:5000/api/product/get`
      );
      setGetData(res.data.product);
    } catch (error) {
      console.log(`Error in getProducts: ${error}`);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const toggleDescription = (id: number) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <section className={scss.TodoList}>
      <div className="container">
        <div className={scss.content}>
          {getData.map((el) => (
            <div key={el.id} className={scss.card}>
              <Image
                src={el.url}
                alt={el.title}
                width={300}
                height={300}
                objectFit="cover"
              />
              <h1>{el.title}</h1>
              <p>{el.price} сом</p>
              <p
                onClick={() => toggleDescription(el.id)}
                className={scss.description}
              >
                {expandedId === el.id
                  ? el.desc
                  : el.desc.length > 15
                  ? `${el.desc.slice(0, 20)} ещё...`
                  : el.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TodoList;
