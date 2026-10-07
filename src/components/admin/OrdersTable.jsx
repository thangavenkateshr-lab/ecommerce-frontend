import { useState } from "react";
import {
  ChevronDown,
  Search,
} from "lucide-react";

export default function OrdersTable() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "Pending",
    "Confirmed",
    "Preparing",
    "Ready",
    "Out for Delivery",
    "Delivered",
    "Cancelled",
  ];

  const orders = [
    {
      id: "#ORD-8821",
      customer: "Ayesha Khan",
      items: 4,
      total: "₹820",
      payment: "UPI",
      payStatus: "Paid",
      status: "Delivered",
      date: "2026-08-05 14:32",
    },
    {
      id: "#ORD-8820",
      customer: "Rahul Sharma",
      items: 2,
      total: "₹340",
      payment: "Card",
      payStatus: "Paid",
      status: "Preparing",
      date: "2026-08-05 13:58",
    },
    {
      id: "#ORD-8819",
      customer: "Priya Nair",
      items: 6,
      total: "₹1,240",
      payment: "Cash",
      payStatus: "COD",
      status: "Out for Delivery",
      date: "2026-08-05 12:21",
    },
    {
      id: "#ORD-8818",
      customer: "Dev Patel",
      items: 1,
      total: "₹180",
      payment: "UPI",
      payStatus: "Paid",
      status: "Pending",
      date: "2026-08-04 20:14",
    },
    {
      id: "#ORD-8817",
      customer: "Sneha Menon",
      items: 3,
      total: "₹590",
      payment: "Card",
      payStatus: "Refunded",
      status: "Cancelled",
      date: "2026-08-04 18:05",
    },
    {
      id: "#ORD-8816",
      customer: "Arjun Mehta",
      items: 5,
      total: "₹1050",
      payment: "UPI",
      payStatus: "Paid",
      status: "Delivered",
      date: "2026-08-04 16:44",
    },
  ];

  const paymentBadge = (status) => {
    switch (status) {
      case "Paid":
        return "bg-green-500/20 text-green-400";
      case "COD":
        return "bg-yellow-500/20 text-yellow-400";
      case "Refunded":
        return "bg-red-500/20 text-red-400";
      default:
        return "bg-gray-500/20 text-gray-300";
    }
  };

  const statusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "text-green-400";
      case "Preparing":
        return "text-orange-400";
      case "Pending":
        return "text-yellow-400";
      case "Cancelled":
        return "text-red-400";
      case "Out for Delivery":
        return "text-blue-400";
      default:
        return "text-white";
    }
  };

  return (
    <div className="p-6 bg-[#0f172a] h-screen text-white w-full">

      <h1 className="text-3xl font-bold">Orders</h1>

      <p className="text-gray-400 mt-1 mb-6">
        8 orders found
      </p>

      {/* Search & Filters */}

      <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-6">

        <div className="relative lg:w-80">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search Orders..."
            className="w-full bg-[#1e293b] border border-gray-700 rounded-xl pl-10 pr-4 py-3 outline-none"
          />
        </div>

        <div className="flex gap-4 overflow-x-auto pb-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 py-2 rounded-xl whitespace-nowrap transition ${
                activeFilter === filter
                  ? "bg-orange-500 text-white"
                  : "bg-[#1e293b] border border-gray-700 hover:bg-gray-700"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

      </div>

      {/* Table */}

      <div className="bg-[#1e293b] rounded-2xl overflow-hidden border border-gray-700">

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-[#253247] text-gray-400 text-sm">

              <tr>

                <th className="text-left px-6 py-4">
                  ORDER ID
                </th>

                <th className="text-left">
                  CUSTOMER
                </th>

                <th className="text-center">
                  ITEMS
                </th>

                <th className="text-left">
                  TOTAL
                </th>

                <th className="text-left">
                  PAYMENT
                </th>

                <th className="text-left">
                  PAY STATUS
                </th>

                <th className="text-left">
                  STATUS
                </th>

                <th className="text-left">
                  DATE
                </th>

              </tr>

            </thead>

            <tbody>

              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="border-t border-gray-700 hover:bg-[#243043]"
                >
                  <td className="px-6 py-5 text-orange-400 font-semibold">
                    {order.id}
                  </td>

                  <td>{order.customer}</td>

                  <td className="text-center">
                    {order.items}
                  </td>

                  <td className="font-semibold">
                    {order.total}
                  </td>

                  <td>{order.payment}</td>

                  <td>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${paymentBadge(
                        order.payStatus
                      )}`}
                    >
                      {order.payStatus}
                    </span>
                  </td>

                  <td>
                    <div className="flex items-center gap-2">
                      <span
                        className={statusColor(order.status)}
                      >
                        {order.status}
                      </span>

                      <ChevronDown
                        size={16}
                        className="text-gray-400"
                      />
                    </div>
                  </td>

                  <td className="text-gray-400">
                    {order.date}
                  </td>
                </tr>
              ))}

            </tbody>

          </table>

        </div>

        {/* Pagination */}

        <div className="flex flex-col md:flex-row justify-between items-center px-6 py-5 border-t border-gray-700">

          <p className="text-gray-400 text-sm">
            Showing 1-6 of 8 Orders
          </p>

          <div className="flex gap-2 mt-4 md:mt-0">

            <button className="w-10 h-10 rounded-lg bg-orange-500">
              1
            </button>

            <button className="w-10 h-10 rounded-lg bg-[#334155] hover:bg-[#475569]">
              2
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}