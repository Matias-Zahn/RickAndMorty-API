import axios from "axios"
import { useEffect, useState } from "react"
import getRandomNumber from "./utils/random"
import Navbar from "./components/Navbar"
import Residents from "./components/Residents"

function App() {

  const [location, setLocation] = useState(null)

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/location/${getRandomNumber(126)}`)
      .then(( { data } ) => setLocation(data))
      .catch(( error ) => console.log(error))
  }, [])

  return (
    <main className="min-h-full  text-white font-['Fira_Code']">
      <section className="bg-[url(/bg/bg_header.svg)] bg-center bg-cover grid place-items-center ">

          <div className="relative flex justify-center p-4">
            <img src="/bg/portal.svg" alt="" />
            <div className="absolute bottom-[60%]  translate-y-[50%]">
              <img className="h-auto w-auto" src="/bg/logo.svg" alt="" />
            </div>
          </div>

        <Navbar location={location} setLocation={setLocation}/>

      </section>

      <section className="bg-[url(/bg/background.svg)] min-h-screen bg-center bg-cover">

        <Residents residents={location?.residents ?? []} />

      </section>
    </main>
  )
}

export default App
