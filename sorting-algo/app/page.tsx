"use client";
import { useState } from "react";
import SortGraph from "./components/SortGraph";

export default function Home() {
  const [array, setArray] = useState([50, 150, 100, 250, 200, 300]);

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">Sorting Algorithms</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Selection Sort</a>
            </li>
            <li>
              <a>Bubble Sort</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end"></div>
      </div>

      <SortGraph array={array} />
    </>
  );
}
