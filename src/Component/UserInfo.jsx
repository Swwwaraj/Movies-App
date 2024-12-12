import singing from "../Image/Singing.png";
import "./UserInfo.css";
export default function UserInfo() {
  const user = JSON.parse(localStorage.getItem("user"));
  const movies = JSON.parse(localStorage.getItem("selected"));
  return (
    <>
      <div className="use-info">
        <div>
          <img className="use-sing" src={singing} />
        </div>
        <div>
          <div>
            <p className="Info-signup">{user?.name}</p>
            <p className="Info-signup">{user?.email}</p>
            <p className="Info-para">{user?.username}</p>
          </div>
          <div >
            {movies?.map((movie, idx) => (
              <p className="Info-btn" key={idx}>{movie}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
