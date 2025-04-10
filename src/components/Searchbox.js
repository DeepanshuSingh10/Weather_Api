import React,{useState , useEffect} from 'react'
import "./Searchbox.css"
import Weathercard from './Weathercard'

const Searchbox = () => {
    const [city, setCity] = useState("");
    const [info, setInfo] = useState("")
    const [tempperature, setTempperature] = useState("")
    const searchCity = async ()=>{
      try {
        let URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=8f29c1180d7e72b64147f1c613c391ae`;
        let res = await fetch(URL);
        let data = await res.json();
        const{temp,feels_like,humidity,pressure} = data.main
        const{main:weathermood} = data.weather[0]
        const{name,timezone ,dt}=data
        const{country ,sunset,sunrise} = data.sys
        const{speed} = data.wind

        const getWeatherInfo={
            temp,
            feels_like,
            humidity,
            pressure,
            weathermood,
            name,
            country,
            speed,
            sunrise,
            sunset,
            dt,
            timezone
        }
       setInfo(getWeatherInfo)
      } catch (error) {
        console.log(error)
      } 
      setCity("")
    }
    useEffect(() => {
      searchCity()
    }, [])

  return (
    <>
      <div className='box'>
          <h1>Search for Weather</h1>
          <input placeholder='City Name' value={city} onChange={(e)=>{setCity(e.target.value)}}></input>
            &nbsp;&nbsp;
          <button className='btn' onClick={searchCity}>Search</button>

      </div>
      < Weathercard info={info} />
    </>
  )
}

export default Searchbox
