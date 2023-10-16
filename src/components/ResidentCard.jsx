import axios from "axios";
import { useEffect, useState } from "react";
import { characterStatus } from "../constants/CirculeStatus";
import ShowCardResident from './ShowCardResident.jsx';

function ResidentCard({ residentEndPont }) {
  const [resident, setResident] = useState(null);

  const [ShowCard, setShowCard] = useState(false)
  
  const handleShowCard = () => {
    setShowCard(!ShowCard)
  }

  useEffect(() => {
    axios
      .get(residentEndPont)
      .then(({ data }) => setResident(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <article className="">
        <header className=" relative border-[#8EFF8B] border-2 ">
          <img className="block w-full" src={resident?.image} alt="" />
          <div className="absolute bottom-10 right-1/2 translate-x-1/2  bg-black/80 text-white px-8 py-1 rounded-md flex items-center gap-2 border-[#8EFF8B] border-4 ">
            <div className={`h-3 w-3 ${characterStatus[resident?.status]}  rounded-full`}></div>
            <span>{resident?.status}</span>
          </div>
          
        </header>
        <div className="border-[#8EFF8B] border-2">
          <h4 onClick={handleShowCard} className="cursor-pointer hover:bg-green-500 transition-colors py-2 text-center text-2xl border-b-2 w-full border-b-[#084851]">
            {resident?.name}
          </h4>
          <ul className="p-4">
            <li>
              <span className="text-[#938686]">Specie</span>: {resident?.species}
            </li>
            <li>
              <span className="text-[#938686]">Origin</span>: {resident?.origin.name}
            </li>
            <li>
              <span className="text-[#938686]">Times</span> appear: {resident?.episode.length}{" "}
            </li>
          </ul>
        </div>
      </article>
          <div className={`fixed top-[0%] right-[0%] min-h-screen min-w-[100%]  z-10 overflow-hidden transition-all duration-300 ${ShowCard ? "visible opacity-100" : "invisible opacity-0"}`}>
            <ShowCardResident residentCard={resident} setShowCard={setShowCard} />
          </div>
    </>
  );
}
export default ResidentCard;
