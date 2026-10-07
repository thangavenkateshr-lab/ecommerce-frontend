import { useMemo, useState } from "react";

const USERS = [
  {
    id: 1,
    name: "John Doe",
    email: "john@gmail.com",
    avatar: "https://i.pravatar.cc/100?img=1",
    role: "Admin",
  },
  {
    id: 2,
    name: "Alex Smith",
    email: "alex@gmail.com",
    avatar: "https://i.pravatar.cc/100?img=2",
    role: "User",
  },
  {
    id: 3,
    name: "Sophia",
    email: "sophia@gmail.com",
    avatar: "https://i.pravatar.cc/100?img=3",
    role: "User",
  },
  {
    id: 4,
    name: "William",
    email: "will@gmail.com",
    avatar: "https://i.pravatar.cc/100?img=4",
    role: "Admin",
  },
  {
    id: 5,
    name: "Emma",
    email: "emma@gmail.com",
    avatar: "https://i.pravatar.cc/100?img=5",
    role: "User",
  },
  {
    id: 6,
    name: "David",
    email: "david@gmail.com",
    avatar: "https://i.pravatar.cc/100?img=6",
    role: "User",
  },
];

const USERS_PER_PAGE = 5;

export default function UsersTable() {
  const [users, setUsers] = useState(USERS);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredUsers = useMemo(() => {
    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    );
  }, [users, search]);

  const totalPages = Math.ceil(filteredUsers.length / USERS_PER_PAGE);

  const currentUsers = filteredUsers.slice(
    (currentPage - 1) * USERS_PER_PAGE,
    currentPage * USERS_PER_PAGE
  );

  const deleteUser = (id) => {
    if (window.confirm("Delete this user?")) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-2">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Users Management</h1>
          <p className="text-gray-500">
            Manage all registered users
          </p>
        </div>

        <div className="bg-white border rounded-xl p-4 shadow">
          <p className="text-gray-500 text-sm">Total Users</p>
          <h2 className="text-2xl font-bold">
            {filteredUsers.length}
          </h2>
        </div>
      </div>

      <input
        type="text"
        placeholder="Search by name or email..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1);
        }}
        className="w-full md:w-96 border rounded-lg px-4 py-3 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="overflow-x-auto rounded-xl border shadow bg-white">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left">Avatar</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Role</th>
              <th className="p-4 text-left">Orders</th>
              <th className="p-4 text-left">Payments</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {currentUsers.length > 0 ? (
              currentUsers.map((user) => (
                <tr
                  key={user.id}
                  className="border-t hover:bg-gray-50"
                >
                  <td className="p-4">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </td>

                  <td className="p-4 font-medium">{user.name}</td>

                  <td className="p-4 text-gray-600">
                    {user.email}
                  </td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        user.role === "Admin"
                          ? "bg-red-100 text-red-600"
                          : "bg-blue-100 text-blue-600"
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>

                  <td className="p-4 text-center">
                    <button
                      onClick={() => deleteUser(user.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="text-center py-10 text-gray-500"
                >
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-6">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
            className="border px-4 py-2 rounded disabled:opacity-50"
          >
            Previous
          </button>

          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`w-10 h-10 rounded ${
                currentPage === index + 1
                  ? "bg-blue-600 text-white"
                  : "border"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
            className="border px-4 py-2 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}