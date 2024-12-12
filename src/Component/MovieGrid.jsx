import "./MovieStyle.css";
function MovieGrid({ movie, selected, setSelected }) {
  const handleSelection = () => {
    if (selected.includes(movie.label)) {
      setSelected(selected.filter((item) => item !== movie.label));
    } else {
      setSelected([...selected, movie.label]);
    }
  };
  const generateBorder = (label) => {
    if (selected.includes(label)) {
      return "5px solid green";
    }
    return "2px solid black";
  };
  return (
    <div style={{border: generateBorder(movie.label),backgroundColor:movie.background}} onClick={handleSelection} className="movie_box">
<h2 className="movie-label">{movie.label}</h2>
      <img className="img-movie" src={movie.image} />
    </div>
  );
}
export default MovieGrid;

// 1. if movie is not in selected array, add it
// 2. if movie is in selected array, remove it
