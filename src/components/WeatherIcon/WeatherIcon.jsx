const WeatherIcon = ({weatherForecast}) =>{
    return(
        <img src ={weatherForecast.img} alt ={weatherForecast.imgAlt}/>
    );
};

export default WeatherIcon

