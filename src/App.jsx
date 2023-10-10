import axios from "axios";
import { useEffect, useState } from "react";
import getRandomNumber from "./utils/random";
import Navbar from "./components/Navbar";
import Residents from "./components/Residents";
import Loader from "./components/Loader";

function App() {
  const [location, setLocation] = useState(null);

  const [loader, setLoader] = useState(true)
  
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${getRandomNumber(126)}`)
      .then(({ data }) => setLocation(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000); 
  }, []);

  return (
    <main className="min-h-full  text-white font-['Fira_Code']">
      {loader ? (
        <Loader />
      ) : (
        <>
          <section className="bg-[url(/bg/bg_header.svg)] bg-center bg-cover grid place-items-center ">
            <div className="relative flex justify-center ">
              <img className="animate-pulse" src="/bg/portal.svg" alt="" />
              <div className="absolute bottom-[60%]  translate-y-[50%]">
                <img className="h-auto w-auto" src="/bg/logo.svg" alt="" />
              </div>
            </div>

            <Navbar location={location} setLocation={setLocation} />
          </section>

          <section className="bg-[url(/bg/background.svg)] min-h-screen bg-center bg-cover">
            <Residents residents={location?.residents ?? []} />
          </section>
        </>
      )}
    </main>
  );
}

export default App;
