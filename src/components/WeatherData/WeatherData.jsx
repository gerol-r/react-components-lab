const WeatherData = ({ weatherForecast }) => {
  return (
    <>
      <h2>{weatherForecast.day}</h2>
      <p>
        <span>conditions: </span>
        {weatherForecast.conditions}
      </p>
      <p>
        <span>time: </span>
        {weatherForecast.time}
      </p>
    </>
  );
};

export default WeatherData;
