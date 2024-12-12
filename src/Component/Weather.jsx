import { useEffect, useState } from "react";
import './Weather.css'
export default function Weather() {
    const [weather, setWeather] = useState('');
    const [loading, setLoading] = useState(true);
    let currentdate = new Date();
 
  const month = currentdate.getMonth()+1
  const date = currentdate.getDate()
  const year = currentdate.getFullYear()
  const formetdate = `${month}-${date}-${year}`
  let hours,meridiem;
  if(currentdate.getHours() <= 11) {
    if(currentdate.getHours() == 0) {
    hours = 12
    }
    
    else {
    hours = currentdate.getHours()
    }
    meridiem = "AM"
    }
    else {
    if(currentdate.getHours() == 12) {
        hours = 12
    }
    else {
      hours = currentdate.getHours() - 12
    }
    meridiem = "PM"
    }
  const mint=currentdate.getMinutes()
  const time= `${hours}:${mint} ${meridiem}`

    useEffect(() => {
        const fetchWeather = async () => {
            setLoading(true);
            const response = await fetch('https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=O6hIIKUOhewW3VNl4A3fPj2skP32Ws3c');
            const data = await response.json();
            // setWeather(data.timelines.minutely[0]);
            setLoading(false);
        }
        fetchWeather();
    }, [])
    return (
        <div className="weather-sty">
            <div className="weather-sty1">
               <p className="weather-stypara">{formetdate}</p>
               <p className="weather-stypara">{time}</p>
            </div>
            {
            loading ? <p>Loading...</p> : 
            <div className="weather-repo">
                <div className="weather-repo1">
                    <p className="weather-img">☁️</p>
                </div>
                <div className="weather-repo2">
                    {/* <h2>{weather.values.temperature}°C</h3> */}
                    {/* <p>1010mbar</p> */}
                    {/* <p>{weather.values.pressure}</p> */}
                    
                    <h2>43°C</h2>
                    <p>1010mbar</p>
                    <p>pressure</p>
                </div>
                <div className="weather-repo3">
                    {/* <h3>{weather.values.windSpeed} </h3> */}
                    {/* <p>{weather.values.humidity}</p> */}
                    
                   <h3> 6m/s wind</h3>
                   <p>83%humidly</p>
                </div>
                
            </div>
            }
        </div>
    )
}