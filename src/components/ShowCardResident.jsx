import { IconCircleLetterX } from "@tabler/icons-react";
import { characterStatus } from "../constants/CirculeStatus";

function ShowCardResident({ residentCard, setShowCard }) {
  return (
    <>
      <section className="bg-black opacity-70 min-h-screen"></section>
      <section className={`absolute bottom-[20%] left-[50%] -translate-x-[50%] border-2 border-[#8EFF8B] z-20`}>
        <IconCircleLetterX
          size={40}
          className="absolute top-[-10%] left-[95%] cursor-pointer hover:bg-green-500 rounded-full transition-colors "
          onClick={() => setShowCard(false)}
        />
        <div className="bg-transparent w-[350px]">
          <header className="">
            <img className="block w-full" src={residentCard?.image} alt="" />
            <div className="absolute top-[50%] right-1/2 translate-x-1/2  bg-black/80 text-white px-8 py-1 rounded-md flex items-center gap-2 border-[#8EFF8B] border-4 ">
              <div
                className={`h-3 w-3 ${
                  characterStatus[residentCard?.status]
                }  rounded-full`}
              ></div>
              <span>{residentCard?.status}</span>
            </div>
          </header>

          <div className="bg-black">
            <h4 className="text-3xl text-center border-b-2 border-b-[#084851] py-2">
              {residentCard?.name}
            </h4>
            <ul className="p-4">
              <li className="flex gap-4">
                <span className="  text-[#938686]">Specie:</span>{" "}
                {residentCard?.species}
              </li>
              <li className="flex gap-4">
                <span className="  text-[#938686]">Gender:</span>{" "}
                {residentCard?.gender}
              </li>
              <li className="flex gap-4">
                <span className="  text-[#938686]">Origin:</span>{" "}
                {residentCard?.origin.name}
              </li>
              <li className="flex gap-4">
                <span className="  text-[#938686]">Times:</span>{" "}
                {residentCard?.episode.length}
              </li>
              <li className="flex gap-4">
                <span className="  text-[#938686]">Type:</span>:{" "}
                {residentCard?.type}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
export default ShowCardResident;
