import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex items-center justify-center px-6 py-4">
      <button
        className="absolute left-6 p-2 rounded hover:bg-sky-100"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Bars3Icon className="h-8 w-8 text-sky-800" />
      </button>

      <Link to={"/"}>
        <h1 className="text-4xl font-bold text-sky-800">The Source</h1>
      </Link>

      <div className="absolute right-6">
        <img
          src="/src/assets/avatar.png"
          alt="User avatar"
          className="h-10 w-10 rounded-full border-2 border-sky-800"
        />
      </div>

      {isOpen && (
        <div className="absolute top-full left-6 mt-2 w-40 bg-white shadow-lg rounded-md border border-gray-200 z-50">
          <ul>
            <li>Coding</li>
            <li>Football</li>
            <li>Cooking</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
