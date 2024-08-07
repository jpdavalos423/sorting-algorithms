"use client";
import React from "react";

interface GraphArray {
  array: number[];
}

const SortGraph: React.FC<GraphArray> = ({ array }) => {
  return (
    <div className="container flex justify-center items-end bg-gray-500 rounded p-5 mx-auto">
      {array.map((value: any, index: any) => (
        <div
          key={index}
          className="flex justify-center items-end h-px w-10 bg-blue-500 mx-1"
          style={{ height: `${value}px` }}
        >
          {value}
        </div>
      ))}
    </div>
  );
};

export default SortGraph;
