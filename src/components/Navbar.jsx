import { IconSearch } from "@tabler/icons-react";
import axios from "axios";
import SearchResult from "./SearchResult";
import { useState } from "react";

function Navbar({ location, setLocation }) {

  const handleSubmit = (e) => {
    e.preventDefault();
    const valueInput= e.target.idLocation.value


    axios.get(`https://rickandmortyapi.com/api/location/${valueInput}`)
      .then(({data}) => setLocation(data))
      .catch((error) => console.log(error))
  };

 

const [allData, setAllData] = useState([])

const [resultSearch, setResultSearch] = useState([])

const fetchData = (value) => {
  axios.get('https://rickandmortyapi.com/api/location')
  .then(({data}) => setAllData(data.results))
  .then(() => {
    const result= allData.filter((dimension) => {
      return value && dimension && dimension.name && dimension.name.toLowerCase().includes(value.toLowerCase())
    })
    setResultSearch(result);
  })
}

const handleChanged= (value) =>{
  fetchData(value)
}

  return (
    <section className="grid p-4 place-items-center">
      
        <form onSubmit={handleSubmit} className="p-4 flex gap-4 justify-around border-[#8EFF8B] border-2  w-[300px] md:w-[500px] ">
          <input onChange={(e) => handleChanged(e.target.value)} name="idLocation"  className="bg-transparent  outline-none " autoComplete="none" placeholder="Search New dimension" />
          <button className="flex gap-2 items-center">
            <IconSearch size={20} />{" "}
          </button>
        </form>

      <SearchResult resultSearch={resultSearch} setLocation={setLocation} />

      {/* lOCATION INFORMATION */}

      <article className="border-[rgb(142,255,139)] border-2  grid gap-4 p-10 md:w-[760px] transition-all">
            <h4 className="text-center text-[#8EFF8B] text-2xl ">
              Welcome to {location?.name}
            </h4>
            <ul className=" flex flex-col md:flex-row justify-around gap-4 text-center text-[#938686] ">
              <li className="flex flex-col md:flex-row gap-2">Type: <span>  {location?.type}</span></li>
              <li className="flex flex-col md:flex-row gap-2">Dimension: <span> {location?.dimension}</span> </li>
              <li className="flex flex-col md:flex-row gap-2">Population: <span> {location?.residents.length}</span> </li>
            </ul>
      </article>
    </section>
  );
}
export default Navbar;
