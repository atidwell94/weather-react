import axios from 'axios';

const apiKey = "925a5dd0ecd8000e72caa6acd3fd28b0"
const geoURL = "http://api.openweathermap.org/geo/1.0/zip?"
const weatherURL = "https://api.openweathermap.org/data/2.5/forecast?units=imperial&"

const searchWeather = async (zipCode) => {
    try {
        const location = await axios.get(`${geoURL}zip=${zipCode},US&appid=${apiKey}`);
        const lat = location.data.lat;
        const lon = location.data.lon;
        try {
            const forecast = await axios.get(`${weatherURL}lat=${lat}&lon=${lon}&appid=${apiKey}`);
            return (forecast);
        }
        catch (error) {
            console.log('Trouble getting FORECAST data!');
            if (error.forecast) {
            // 5xx or 4xx error
                console.log(error.forecast.data);
                console.log(error.forecast.status);
                console.log(error.forecast.headers);
            }
            else if (error.request) {
            // request never left
                console.log(error.request);
            }
            else {
            // anything else
                console.log(error.message);
            }
        }
    }
    catch (error) {
        console.log('Trouble getting LOCATION data!');
        if (error.location) {
        // 5xx or 4xx error
            console.log(error.location.data);
            console.log(error.location.status);
            console.log(error.location.headers);
        }
        else if (error.request) {
        // request never left
            console.log(error.request);
        }
        else {
        // anything else
            console.log(error.message);
        }
    }
}

export default searchWeather;
