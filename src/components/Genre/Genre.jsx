/* eslint-disable no-unused-vars */
import { useState } from "react";
import Box from "../Box/Box";
import Chip from "../Chip/Chip";
import { useNavigate } from "react-router-dom";
import IMAGES from "../../images/Images";

const MOVIES = [
  { id: 0, category: 'Action', color:'bg-orange-600', image:IMAGES.image2},
  { id: 1, category: 'Drama', color:'bg-purple-400', image:IMAGES.image3},
  { id: 2, category: 'Romance', color:'bg-green-600', image:IMAGES.image4 },
  { id: 3, category: 'Thriller', color:'bg-blue-300', image:IMAGES.image5},
  { id: 4, category: 'Western', color:'bg-red-800', image:IMAGES.image6 },
  { id: 5, category: 'Horror', color:'bg-indigo-500', image:IMAGES.image7 },
  { id: 6, category: 'Fantasy', color:'bg-fuchsia-500', image:IMAGES.image8 },
  { id: 7, category: 'Music', color : 'bg-red-600', image:IMAGES.image9 },
  { id: 8, category: 'Fiction', color: 'bg-green-400', image:IMAGES.image10}
];

function Genre() {
  const navigate=useNavigate()
  const [selectedMovies, setSelectedMovies] = useState([]);

  console.log("Selected Movies:", selectedMovies);

  const handleNext=()=>{
    if(selectedMovies.length<3){
      alert("Please select at least 3 category")
      return;
    }
    
    else{
      localStorage.setItem("selectedMovies",JSON.stringify(selectedMovies))
      navigate("/info")
    }
  }

  return (
    <>
    <main className="flex flex-row h-screen bg-black">

      <div className="left-section basis-1/2 p-24 flex flex-col gap-7">
        <h1 className="text-green-500 font-single-day flex justify-center content-center font-normal">SUPER APP</h1>
        <p className="text-white flex justify-center content-center font-roboto font-bold">Choose your entertainment category</p>
        <div className="border-0 rounded-lg box-border w-32">
          {selectedMovies.length>0
          ?selectedMovies.map((movie,index)=>{
            return(
              <Chip
              key={index}
              selectedMovies={movie}
              setSelectedMovies={setSelectedMovies}
              />
            )
          }):null}
        </div>
        <p className="text-red-600 flex justify-center content-center">{selectedMovies.length<3?"Minimum 3 category required":null}</p>
      </div>

      <div className="right-section basis-1/2 flex flex-row flex-wrap p-5">
        {MOVIES.map((movie) => (
          <Box
            key={movie.id}
            data={movie}
            selectedMovies={selectedMovies}
            setSelectedMovies={setSelectedMovies}
          />
        ))}
        <div className="relative ">
          <button onClick={handleNext} className="text-white bg-green-600 w-32 py-1 px-3 rounded-3xl absolute bottom-0 right-0">Next Page</button>
        </div>
      </div>
      
    </main>
    </>
  );
}

export default Genre;
