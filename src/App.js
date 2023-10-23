import { useState } from 'react';
import ZipForm from './components/ZipForm';
import WeatherList from './components/WeatherList';
import searchWeather from './api';

function App () {
    const [city, setCity] = useState({});
    const [forecast, setForecast] = useState([]);
    const [selectedDay, setSelectedDay] = useState(null);

    const handleSubmit = (zipCode) => {
        searchWeather(zipCode);
    }
    
    const handleDayClick = (index) => {

    }

    return (
        <div>
            <ZipForm onSubmit={handleSubmit} />
        </div>
    );
}

export default App;