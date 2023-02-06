"use client";

import { useEffect, useState } from "react";
import styles from "./searchBar.module.css";

export default function SearchBar({ selectedCategory, setSelectedCategory }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      fetch("https://fakestoreapi.com/products/categories")
        .then((res) => res.json())
        .then((json) => setCategories(json));
    })();
  }, []);

  return (
    <div className={styles.main_container}>
      <div className={styles.mobile_menu}>
        <svg viewBox="0 0 100 80" width="30" height="40">
          <rect width="100" height="20"></rect>
          <rect y="30" width="100" height="20"></rect>
          <rect y="60" width="100" height="20"></rect>
        </svg>
      </div>

      <div className={styles.header_section}>
        <div className="row">
          <div>
            <div className={styles.menu}>
              <ul>
                <li>
                  <a href="#">Best Sellers</a>
                </li>
                <li>
                  <a href="#">Gift Ideas</a>
                </li>
                <li>
                  <a href="#">New Releases</a>
                </li>
                <li>
                  <a href="#">Today's Deals</a>
                </li>
                <li>
                  <a href="#">Customer Service</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.logo_name}>
        <span className={styles.logo_name_text}>SHOPERS</span>
      </div>

      <div className={styles.search_container}>
        <select
          className={styles.dropdown_select}
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option selected value={"all"}>
            All Category
          </option>
          {categories.map((item, i) => {
            return <option value={item}>{item}</option>;
          })}
        </select>
        <div className={styles.search_bar_box}>
          <input
            type="search"
            className={styles.search_bar}
            placeholder=" Search Products"
            required
          />
          <button type="submit" className={styles.submit_btn}>
            <span className={styles.button_text}>
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
