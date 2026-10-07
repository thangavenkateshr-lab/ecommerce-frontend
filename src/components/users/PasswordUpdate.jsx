import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { clearAuthError, clearUpdatePassword, updatePassword } from "../../actions/userAction";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const PasswordUpdate = () => {
  const nav = useNavigate();
  const { loading, error, isUpdated } = useSelector((state) => state.authState);
  const dispatch = useDispatch();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('oldPassword', oldPassword);
    formData.append('newPassword', newPassword);
    dispatch(updatePassword(formData));
  }

  useEffect(() => {
    if (isUpdated) {
      toast('Password updated successfully', {
        position: 'bottom-center'
      })
      setOldPassword("");
      setNewPassword("");
      dispatch(clearUpdatePassword());
      nav('/profile')
      return;
    }
    if (error) {
      toast(error, {
        position: 'bottom-center',
        type: 'error',
        onOpen: () => { dispatch(clearAuthError()) }
      })
    }
  }, [dispatch, isUpdated, error])
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        <form onSubmit={submitHandler} className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800">Change Password</h2>
            <p className="mt-2 text-sm text-gray-500">Create a strong password to keep your account secure.</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
            <input type="password" value={oldPassword} onChange={e => setOldPassword(e.target.value)} placeholder="Enter your current password" className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 outline-none transition-all duration-300 focus:border-black focus:bg-white focus:ring-4 focus:ring-gray-200" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
            <input type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} placeholder="Enter your new password" className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 outline-none transition-all duration-300 focus:border-black focus:bg-white focus:ring-4 focus:ring-gray-200" />
          </div>
          <div className="rounded-xl bg-gray-50 border border-gray-200 p-4">
            <p className="text-sm font-medium text-gray-700 mb-2">Password Requirements</p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-500">
              <li>Maximum 6 characters</li>
              <li>Include uppercase & lowercase letters</li>
              <li>Include at least one number</li>
              <li>Include one special character</li>
            </ul>
          </div>
          <button type="submit" className="w-full rounded-xl bg-black py-3 text-white font-semibold transition-all duration-300 hover:bg-gray-800 hover:shadow-lg active:scale-95">Update Password</button>
        </form>
      </div>
    </div>
  );
};

export default PasswordUpdate;