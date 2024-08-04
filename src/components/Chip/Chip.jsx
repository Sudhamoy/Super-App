/* eslint-disable react/prop-types */


function Chip({selectedMovies, setSelectedMovies}) {
  const removeSelectedMovies=()=>{
    setSelectedMovies([])
  }
  return (
    <span className="bg-green-500 text-white py-1 px-2 m-1 rounded-2xl"
    >
      {selectedMovies}&nbsp;&nbsp;
      <span
      onClick={removeSelectedMovies}
      className="cursor-pointer text-black"
      >X
      </span>
    </span>
  )
}

export default Chip
