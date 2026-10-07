import { motion } from "framer-motion";
import { FaUserEdit, FaLock, FaSignOutAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Login from "./Login";

const Profile = () => {
  const { user, isAuthenticate } = useSelector((state) => state.authState);

  return (
    <>
    {isAuthenticate ? <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8"
      >
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold text-gray-800 mt-4">{user?.name}</h2>

          <p className="text-gray-500">{user?.email}</p>
        </div>
        <div className="mt-8 space-y-4">
          <div className="flex justify-between border-b pb-2">
            <span className="font-medium text-gray-600">Name</span>
            <span className="text-gray-800">{user?.name}</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span className="font-medium text-gray-600">Email</span>
            <span className="text-gray-800">{user?.email}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium text-gray-600">Role</span>
            <span className="capitalize text-blue-600">
              {user?.role}
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 space-y-3">
          <Link
            to="/myprofile/update"
            className="flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            <FaUserEdit />
            Edit Profile
          </Link>

          <Link
            to="/password/update"
            className="flex items-center justify-center gap-2 bg-gray-800 text-white py-3 rounded-lg hover:bg-black transition"
          >
            <FaLock />
            Change Password
          </Link>

          <button
            className="w-full flex items-center justify-center gap-2 bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition"
          >
            <FaSignOutAlt />
            Logout
          </button>
        </div>
      </motion.div>
    </div>:<Login/>}
    </>
  );
};

export default Profile;