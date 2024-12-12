import "./MovieStyle.css";
function MovieChip({ movie, selected, setSelected }) {
  function handleSelection() {
    if (selected.includes(movie)) {
      setSelected(selected.filter((item) => item !== movie));
    } else {
      setSelected([...selected, movie]);
    }
  }
  return (
    <>
      <span onClick={handleSelection} className="movie-span">
        <p className="movie-button">{movie} x</p>
      </span>
    </>
  );
}
export default MovieChip;

// 1. if movie is not in selected array, add it
// 2. if movie is in selected array, remove it
