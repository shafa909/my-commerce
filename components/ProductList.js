"use client";

import { useEffect, useState } from "react";
import styles from "./productList.module.css";

export default function ProductList({ selectedCategory }) {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    (async () => {
      fetch("https://fakestoreapi.com/products/")
        .then((res) => res.json())
        .then((json) => {
          setProductList(json);
        });
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (selectedCategory === "all") {
        fetch("https://fakestoreapi.com/products/")
          .then((res) => res.json())
          .then((json) => {
            setProductList(json);
          });
      } else {
        fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
          .then((res) => res.json())
          .then((json) => {
            setProductList(json);
          });
      }
    })();
  }, [selectedCategory]);

  return (
    <div className={styles.main_container}>
      <div className={styles.cards}>
        {productList.map((item, i) => {
          return (
            <div className={styles.card}>
              <div className={styles.product_img}>
                <img src={item.image} />
              </div>
              <h4 className={styles.product_name}>{item.title}</h4>
              <p className={styles.price_text}>
                Price <span className={styles.price_amount}>${item.price}</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
