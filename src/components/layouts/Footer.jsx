import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-linear-to-r from-slate-900 via-blue-950 to-slate-900 mt-20 text-white ">
      
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div>
          <h1 className="text-2xl font-bold text-sky-400">
            Mani<span className="text-white">Mart</span>
          </h1>
          <p className="text-gray-300 mt-4 text-sm leading-6">
            Your one-stop ecommerce destination for fashion, electronics,
            and daily essentials. Quality products at the best prices.
          </p>

          <div className="flex gap-4 mt-5 text-xl">
            <FaFacebook className="hover:text-sky-400 cursor-pointer" />
            <FaInstagram className="hover:text-pink-400 cursor-pointer" />
            <FaTwitter className="hover:text-sky-300 cursor-pointer" />
            <FaYoutube className="hover:text-red-500 cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Products</li>
            <li className="hover:text-white cursor-pointer">Offers</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Customer */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Customer Support</h2>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white cursor-pointer">FAQ</li>
            <li className="hover:text-white cursor-pointer">Shipping</li>
            <li className="hover:text-white cursor-pointer">Returns</li>
            <li className="hover:text-white cursor-pointer">Order Tracking</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Newsletter</h2>
          <p className="text-gray-300 text-sm">
            Subscribe for latest offers & updates.
          </p>

          <div className="mt-4 flex">
            <input
              type="email"
              placeholder="Enter email"
              className="w-full px-3 py-2 rounded-l-md text-black outline-none"
            />
            <button className="bg-sky-500 px-4 rounded-r-md hover:bg-sky-600">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} ManiMart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;