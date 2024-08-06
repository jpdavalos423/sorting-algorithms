import Image from "next/image";

export default function Home() {
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

      <div className="container bg-gray-500 rounded p-5">
        <div className="bar bg-white text-black px-5">5</div>
      </div>
    </>
  );
}
