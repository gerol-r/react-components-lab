import "./WeatherForecast.css";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import WeatherData from "../WeatherData/WeatherData";
const WeatherForecast = ({ weatherForecast }) => {
  return (
    <div className="weather">
      <WeatherIcon weatherForecast={weatherForecast} />
      <WeatherData weatherForecast={weatherForecast} />

    </div>
  );
};

export default WeatherForecast;
