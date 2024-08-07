"use client";
import { useState } from "react";
import SortGraph from "./components/SortGraph";
import NavBar from "./components/NavBar";
import {
  bubbleSort,
  mergeSort,
  selectionSort,
} from "./utils/sortingAlgorithms";
import { shuffleData } from "./utils/shuffleData";

export default function Home() {
  const [array, setArray] = useState<number[]>([
    50, 150, 100, 350, 200, 300, 100, 0,
  ]);

  const handleShuffle = () => {
    shuffleData(array, setArray);
  };
  const handleBubbleSort = () => {
    bubbleSort(array, setArray);
  };
  const handleSelectionSort = () => {
    selectionSort(array, setArray);
  };
  const handleMergeSort = () => {
    mergeSort(array, setArray);
  };

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">Sorting Algorithms</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li onClick={handleBubbleSort}>
              <a>Bubble Sort</a>
            </li>
            <li onClick={handleSelectionSort}>
              <a>Selection Sort</a>
            </li>
            <li onClick={handleMergeSort}>
              <a>Merge Sort</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn text-l hover:text-white" onClick={handleShuffle}>
            Shuffle
          </a>
        </div>
      </div>
      {/* <NavBar array={array} setArray={setArray} handleShuffle={handleShuffle} /> */}

      <SortGraph array={array} />
    </>
  );
}
