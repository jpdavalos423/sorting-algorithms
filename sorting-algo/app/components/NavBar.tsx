import React from "react";
import { useState } from "react";
import { bubbleSort, selectionSort } from "../utils/sortingAlgorithms";
import { shuffleData } from "../utils/shuffleData";

const NavBar = (array: any, setArray: any, handleShuffle: void) => {
  //   const handleShuffle = () => {
  //     shuffleData(array, setArray);
  //   };
  const handleBubbleSort = () => {
    bubbleSort(array, setArray);
  };
  const handleSelectionSort = () => {
    selectionSort(array, setArray);
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">Sorting Algorithms</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li onClick={handleSelectionSort}>
            <a>Selection Sort</a>
          </li>
          <li onClick={handleBubbleSort}>
            <a>Bubble Sort</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end" onClick={handleShuffle}>
        <a className="btn text-l hover:text-white">Shuffle</a>
      </div>
    </div>
  );
};

export default NavBar;
