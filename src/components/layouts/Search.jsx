import { useState } from "react"
import { FaSearch } from "react-icons/fa"
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const nav = useNavigate();
  const search = (e) => {
    e.preventDefault();
    nav(`/search/${keyword}`);
  }
  return (
    <div className="w-full bg-gray-200  active:border-gray-500 hover:shadow p-1 md:p-2 transition-all duration-300 rounded">
      <form onSubmit={search} className="flex flex-row w-full gap-2 items-center ">
        <button><FaSearch className="text-gray-500 text-sm font-thin"/></button>
        <input className="outline-0 border-0" value={keyword} onChange={(e)=>{setKeyword(e.target.value)}}  type="text" placeholder="Search For Products...."/>
        </form>
    </div>
  )
}

export default Search