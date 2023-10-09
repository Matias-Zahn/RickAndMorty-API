import { useEffect, useState } from "react"
import ResidentCard from "./ResidentCard"
import { paganitionLogic } from "../utils/pagination"



function Residents( { residents }) {

  const [currentPage, setCurrentPage] = useState(1)

  const {pages, residentsInPage} = paganitionLogic(currentPage, residents)


  useEffect(() => {
    setCurrentPage(1)
  }, [residents])

  return (
    <section className="">

      <section className=" grid mx-auto gap-10 md:grid-cols-[repeat(auto-fit,300px)] justify-center p-4 max-w-[900px] ">
          {
              residentsInPage.map((resident) =>  <ResidentCard key={resident} residentEndPont={resident} /> )
          }
      </section>

          <ul className="text-lg flex gap-3 justify-center flex-wrap pb-10 mt-5 px-4">
            {
              pages.map((page) => (
                
                <li key={page}>
                 
                  <button className={`text-black px-4 py-2 rounded-sm  ${ page === currentPage ? "bg-green-500" : "bg-slate-500" }`} onClick={() => setCurrentPage(page)}>
                    {page}
                  </button>
                </li>
              ))
            }
          </ul>
    </section>

  )
}
export default Residents