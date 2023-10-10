function SearchResult({resultSearch, setLocation}) {

  const handleChangedDimension= (value) => {
    setLocation(value)
  }

  return (
    <div className="flex flex-col items-center h-[200px] bg-transparent overflow-hidden overflow-y-auto md:w-[500px] ">
        {
          resultSearch.map((result) => (
            <div key={result.id} className="p-4  mt-1 hover:bg-green-500 w-full  transition-colors rounded-md cursor-pointer  text-center">
              <h4 onClick={() => handleChangedDimension(result)}>{result.name}</h4>
            </div>
          ))
        }
    </div>
  )
}
export default SearchResult