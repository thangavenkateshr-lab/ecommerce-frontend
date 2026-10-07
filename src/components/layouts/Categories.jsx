import { NavLink } from "react-router-dom";
import { FiX } from "react-icons/fi";

const Categories = ({ show, setShow }) => {
  return (
    <div
      className={`
        fixed top-0 left-0
        h-screen w-[80%] max-w-xs
        bg-white shadow-2xl z-50
        transition-transform duration-500 ease-in-out
        ${show ? "translate-x-0" : "-translate-x-full"}
      `}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 h-16 border-b">
        <h2 className="text-lg font-bold text-gray-800">
          Categories
        </h2>

        <button onClick={() => setShow(false)} className="p-2 rounded-lg hover:bg-gray-100 transition">
          <FiX size={22} />
        </button>
      </div>

      {/* List */}
      <div className="overflow-y-auto h-[calc(100vh-64px)]">
        <ul className="py-2">

          <li>
            <NavLink
              to="/"
              onClick={() => setShow(false)}
              className={({ isActive }) =>
                `flex items-center px-5 py-4 transition-all
                ${
                  isActive
                    ? "bg-gray-100 text-black border-l-4 border-black font-semibold"
                    : "text-gray-600 hover:bg-gray-50 hover:pl-7"
                }`
              }
            >
              All Products
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/category/Dress"
              onClick={() => setShow(false)}
              className={({ isActive }) =>
                `flex items-center px-5 py-4 transition-all
                ${
                  isActive
                    ? "bg-gray-100 text-black border-l-4 border-black font-semibold"
                    : "text-gray-600 hover:bg-gray-50 hover:pl-7"
                }`
              }
            >
              Dress
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/category/Shoes"
              onClick={() => setShow(false)}
              className={({ isActive }) =>
                `flex items-center px-5 py-4 transition-all
                ${
                  isActive
                    ? "bg-gray-100 text-black border-l-4 border-black font-semibold"
                    : "text-gray-600 hover:bg-gray-50 hover:pl-7"
                }`
              }
            >
              Shoes
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/category/Watches"
              onClick={() => setShow(false)}
              className={({ isActive }) =>
                `flex items-center px-5 py-4 transition-all
                ${
                  isActive
                    ? "bg-gray-100 text-black border-l-4 border-black font-semibold"
                    : "text-gray-600 hover:bg-gray-50 hover:pl-7"
                }`
              }
            >
              Watches
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/category/Mobiles"
              onClick={() => setShow(false)}
              className={({ isActive }) =>
                `flex items-center px-5 py-4 transition-all
                ${
                  isActive
                    ? "bg-gray-100 text-black border-l-4 border-black font-semibold"
                    : "text-gray-600 hover:bg-gray-50 hover:pl-7"
                }`
              }
            >
              Mobiles
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/category/Laptops"
              onClick={() => setShow(false)}
              className={({ isActive }) =>
                `flex items-center px-5 py-4 transition-all
                ${
                  isActive
                    ? "bg-gray-100 text-black border-l-4 border-black font-semibold"
                    : "text-gray-600 hover:bg-gray-50 hover:pl-7"
                }`
              }
            >
              Laptops
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/category/Speakers"
              onClick={() => setShow(false)}
              className={({ isActive }) =>
                `flex items-center px-5 py-4 transition-all
                ${
                  isActive
                    ? "bg-gray-100 text-black border-l-4 border-black font-semibold"
                    : "text-gray-600 hover:bg-gray-50 hover:pl-7"
                }`
              }
            >
              Speakers
            </NavLink>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Categories;