import { useState } from "react";
import MovieChip from '../Component/MovieChip'
import MovieGrid from '../Component/MovieGrid'
import './Movie.css'
import action from '../Image/Action.png'
import drama from '../Image/Drama.png'
import fantasy from '../Image/Fantasy.png'
import fiction from '../Image/fiction.png'
import horror from '../Image/Horror.png'
import music from '../Image/Music.png'
import romance from '../Image/Romance.png'
import thriller from '../Image/Thriller.png'
import western from '../Image/Western.png'
import { useNavigate } from "react-router-dom"; 
const MOVIES = [
  {
    value: "action",
    label: "Action",
    image: action,
    background: "#FF5209"

  },
  {
    value: "romance",
    label: "Romance",
    image: romance,
    background: "#D7A4FF"
  },
  {
    value: "drama",
    label: "Drama",
    image: drama,
    background: "#148A08"
  },
  {
    value: "thriller",
    label: "Thriller",
    image: thriller,
    background: "#84C2FF"
  },
  {
    value: "western",
    label: "Western",
    image: western,
    background: "#902500"
  },
  {
    value: "horror",
    label: "Horror",
    image: horror,
    background: "#7358FF"
  },
  {
    value: "fanstasy",
    label: "Fanstasy",
    image: fantasy,
    background: "#FF4ADE"
  },
  {
    value: "music",
    label: "Music",
    image: music,
    background: "#E61E32"
  },
  {
    value: "fiction",
    label: "Fiction",
    image: fiction,
    background: "#6CD061"
  },
];

function Movie() {
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();
  const handleNext = () => {
    if (selected.length < 3) {
      alert("Minimum 3 category required")
    }
    else {
      localStorage.setItem("selected", JSON.stringify(selected));
      navigate("/widgets");
    }
  }
  return (
    <div className="main-movie">
      <div className="left-movie">
        <h1 className="chip-heading">Super app</h1>
        <p className="entertainment">Choose your entertainment category</p>
        {selected.map((movie) => (
          <MovieChip
            key={movie}
            selected={selected}
            setSelected={setSelected}
            movie={movie}
          />
        ))}
        {
          selected.length > 0 && selected.length < 3 ? <p className="catagory">Minimum 3 category required</p> : null
        }
      </div>
      <div className="right-movie">
        <div className="right-grid">
          {MOVIES.map((movie) => (
            <MovieGrid
              key={movie.value}
              selected={selected}
              setSelected={setSelected}
              movie={movie}
            />
          ))}
        </div>
        <button onClick={handleNext} className="next">Next Page</button>
      </div>

    </div>
  );
}
export default Movie;
