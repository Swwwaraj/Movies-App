import Browser from "../Component/Browser";
import News from "../Component/News";
import Note from "../Component/Note";
import Timer from "../Component/Timer";
import UserInfo from "../Component/UserInfo";
import Weather from "../Component/Weather";
import './Widgets.css'
export default function Widgets() {
    return (
        <div className="wid-group">
            <div className="wid-style">
                <UserInfo />
                <Note />
                {/* <News/> */}
                {/* <Weather/> */}
                <Timer duration={24 * 60 * 60 * 1000} />
                <Browser />
            </div>

        </div>
    );
}