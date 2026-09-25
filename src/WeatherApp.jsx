import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelslike: 36.41,
        temp: 30.99,
        tempMin: 30.94,
        tempMax: 30.99,
        humidity: 66,
        weather: "few clouds"
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    let weatherClass =
        weatherInfo.humidity > 80
            ? "rain"
            : weatherInfo.temp > 15
                ? "hot"
                : "cold";

    return (
        <div className={`weatherApp ${weatherClass}`}>
            <h2>🌍 Weather App 🌍 </h2>

            <SearchBox updateInfo={updateInfo} />

            <InfoBox info={weatherInfo} />
        </div>
    )
}