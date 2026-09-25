import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = import.meta.env.VITE_WEATHER_API_URL;
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelslike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        }
        catch (err) {
            throw err;
        }
    }

    let handleChange = (event) => {
        setCity(event.target.value);

    }
    let handleSubmit = async (event) => {
        event.preventDefault();

        try {
            setError(false);

            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);

        } catch (er) {
            setError(true);

        } finally {
            setCity("");
        }
    }

    return (
        <div className="SearchBox">

            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name"
                    value={city} variant="filled" required onChange={handleChange} />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Button variant="contained" type='submit' size="large">
                    Search
                </Button>

                {/* //-----------for error------------ */}
                {error && <p style={{ color: "red" }}>No Such Place Exists!</p>}
            </form>
        </div>
    )
}