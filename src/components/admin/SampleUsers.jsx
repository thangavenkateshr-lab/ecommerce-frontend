import UsersTable from "./UsersTable";
const users = [
  {
    _id: "1",
    name: "John Doe",
    email: "john@example.com",
    avatar: "https://i.pravatar.cc/150?img=1",
    role: "admin",
    createdAt: "2026-08-06",
  },
  {
    _id: "2",
    name: "Alice",
    email: "alice@example.com",
    avatar: "https://i.pravatar.cc/150?img=2",
    role: "user",
    createdAt: "2026-08-01",
  },
];

export default function SampleUsers() {
  const handleDelete = (id) => {
    console.log("Delete:", id);
  };
  return (
    <UsersTable users={users} onDelete={handleDelete} />
  );
}
