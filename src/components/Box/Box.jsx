/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';

function Box({ data, selectedMovies, setSelectedMovies }) {
  const handleSelection = () => {
    console.log("Clicked on:", data.category);
    if (selectedMovies.includes(data.category)) { // if the movie is already selected
      setSelectedMovies(selectedMovies.filter((item) => item !== data.category));
      console.log("Removed:", data.category);
    } else { // if the movie is not selected
      setSelectedMovies([...selectedMovies, data.category]);//((prev)=>[...prev],data.category)
      console.log("Added:", data.category);
    }
  };

  return (
    <div
      className={`border-0 rounded-lg box-border h-32 w-36 p-4 text-white m-1.5 ${data.color}`}
      onClick={handleSelection}
      style={{ cursor: 'pointer', backgroundImage: `url(${data.image})`, backgroundSize: 'cover', backgroundPosition: 'center', fontWeight:'900'}}
    >
      {data.category}
    </div>
  );
}

Box.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.string.isRequired,
  }).isRequired,
  selectedMovies: PropTypes.arrayOf(PropTypes.string).isRequired,
  setSelectedMovies: PropTypes.func.isRequired,
};

export default Box;
