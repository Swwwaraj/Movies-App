import { useState, useEffect } from "react";
import './Recommendation.css'
import dance from '../Image/Dance.png'
function Recommendation() {
  const movieGenres = JSON.parse(localStorage.getItem("selected"));
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const response = {
    results: {
      imdb_id: "tt11655202",
      title: "Retfardighedens ryttere",
      year: 2020,
      popularity: 50,
      description:
        "Markus, a deployed military man, has to go home to his teenage daughter, Mathilde, when his wife dies in a tragic train accident. It seems to be plain bad luck - but it turns out that it might have been a carefully orchestrated assassination, which his wife ended up being a random casualty of.",
      content_rating: "Not Rated",
      movie_length: 116,
      rating: 7.8,
      created_at: "2021-04-23T14:29:05.428756+03:00",
      trailer: "aa.com",
      image_url:
        "https://m.media-amazon.com/images/M/MV5BZWVkNTFmNTQtMGRiZC00NjAwLThjYTgtYmI3ZjA2Zjc1MTM1XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
      release: "2020-11-19",
      plot: "Markus, who has to go home to his teenage daughter, Mathilde, when his wife dies in a tragic train accident. It seems like an accident until a mathematics geek, who was also a fellow passenger on the train, and his two colleagues show up.",
      banner:
        "https://m.media-amazon.com/images/M/MV5BZWVkNTFmNTQtMGRiZC00NjAwLThjYTgtYmI3ZjA2Zjc1MTM1XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
      type: "movie",
      more_like_this: {},
      gen: [
        {
          id: 8,
          genre: "Drama",
        },
        {
          id: 9,
          genre: "Comedy",
        },
        {
          id: 13,
          genre: "Action",
        },
      ],
      keywords: [
        {
          id: 561,
          keyword: "train",
        },
        {
          id: 562,
          keyword: "subway train",
        },
        {
          id: 563,
          keyword: "train crash",
        },
        {
          id: 564,
          keyword: "statistics",
        },
        {
          id: 565,
          keyword: "fired from job",
        },
      ],
    },
  };
  useEffect(() => {
    const fetchMoviesInfo = async (id) => {
      const url = `https://moviesminidatabase.p.rapidapi.com/movie/id/${id}/`;
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "c8a86f2abbmsh2c6855891e4cf2ep18f401jsn733e45d6778e",
          "x-rapidapi-host": "moviesminidatabase.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setMovies((prevState) => [...prevState, result]);
      } catch (error) {
        console.error(error);
      }
    };
    const fetchMovies = async () => {
      const url = `https://moviesminidatabase.p.rapidapi.com/movie/byGen/${movieGenres[0]}/`;
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "c8a86f2abbmsh2c6855891e4cf2ep18f401jsn733e45d6778e",
          "x-rapidapi-host": "moviesminidatabase.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        result.results.forEach((movie, idx) => {
          if (idx === 4) {
            return;
          } else {
            fetchMoviesInfo(movie?.imdb_id);
          }
        });
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    // fetchMovies()  // get movies names and id
  }, [movieGenres]);
  return (
    <div className="recomm-main">
        <div className="rec-dis">
        <h1 className="rec-super">Super app</h1>
        <img src={dance} className="rec-img"/>
        </div>
        <div><p className="rec-para">Entertainment according to your choice</p></div>
      <div className="gen-movie">
        <div className="gen-grid">
        {new Array(4).fill(0).map((_, idx) => (
          <div className="gen-box" key={idx}>
            <img className="gen-img" src={response.results.image_url}/>
          </div>
        ))}
        {new Array(4).fill(0).map((_, idx) => (
          <div className="gen-box2" key={idx}>
            <img className="gen-img" src={response.results.image_url}/>
          </div>
        ))}
        {new Array(4).fill(0).map((_, idx) => (
          <div className="gen-box3" key={idx}>
            <img className="gen-img" src={response.results.image_url}/>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}
export default Recommendation;

// homework, do it for all selected genres
