import { Search, Plus, Pencil, Trash2, Eye } from "lucide-react";

const foods = [
  {
    id: 1,
    name: "Classic Burger",
    category: "Burger",
    price: 199,
    veg: false,
    offer: 20,
    status: "Available",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200",
  },
  {
    id: 2,
    name: "Margherita Pizza",
    category: "Pizza",
    price: 349,
    veg: true,
    offer: 0,
    status: "Available",
    image:
      "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=200",
  },
  {
    id: 3,
    name: "Chicken Shawarma",
    category: "Shawarma",
    price: 249,
    veg: false,
    offer: 15,
    status: "Out of Stock",
    image:
      "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=200",
  },
];

export default function FoodTable() {
  return (
    <div className="p-6">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Foods Management</h2>
            <p className="text-gray-500 mt-1">
              Manage all food items, prices and availability
            </p>
          </div>

          <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-xl font-medium flex items-center gap-2">
            <Plus size={18} />
            Add Food
          </button>
        </div>

        {/* Search & Filters */}
        <div className="p-6 border-b border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search food..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <select className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500">
              <option>All Categories</option>
              <option>Burger</option>
              <option>Pizza</option>
              <option>Shawarma</option>
            </select>

            <select className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500">
              <option>Veg & Non-Veg</option>
              <option>Veg</option>
              <option>Non-Veg</option>
            </select>

            <select className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500">
              <option>All Status</option>
              <option>Available</option>
              <option>Out of Stock</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                  Food
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                  Category
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                  Price
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                  Type
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                  Offer
                </th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700">
                  Status
                </th>
                <th className="text-center px-6 py-4 text-sm font-semibold text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {foods.map((food) => (
                <tr key={food.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={food.image}
                        alt={food.name}
                        className="w-14 h-14 rounded-xl object-cover border"
                      />
                      <div>
                        <p className="font-semibold text-gray-900">{food.name}</p>
                        <p className="text-sm text-gray-500">ID: #{food.id}</p>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4 text-gray-700">{food.category}</td>

                  <td className="px-6 py-4">
                    <span className="font-semibold text-gray-900">₹{food.price}</span>
                  </td>

                  <td className="px-6 py-4">
                    {food.veg ? (
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                        🟢 Veg
                      </span>
                    ) : (
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700">
                        🔴 Non-Veg
                      </span>
                    )}
                  </td>

                  <td className="px-6 py-4">
                    {food.offer > 0 ? (
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-700">
                        {food.offer}% OFF
                      </span>
                    ) : (
                      <span className="text-gray-400">—</span>
                    )}
                  </td>

                  <td className="px-6 py-4">
                    {food.status === "Available" ? (
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                        Available
                      </span>
                    ) : (
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700">
                        Out of Stock
                      </span>
                    )}
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100">
                        <Eye size={18} />
                      </button>
                      <button className="p-2 rounded-lg bg-green-50 text-green-600 hover:bg-green-100">
                        <Pencil size={18} />
                      </button>
                      <button className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">Showing 1–3 of 3 foods</p>

          <div className="flex items-center gap-2">
            <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50">
              Previous
            </button>

            <button className="w-10 h-10 rounded-lg bg-orange-500 text-white font-semibold">
              1
            </button>

            <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}