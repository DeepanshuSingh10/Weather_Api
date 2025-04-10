import React,{useState , useEffect}from 'react'
import "./Weathercard.css"
const Weatherbox = ({info}) => {
    const [tempperature, setTempperature] = useState("")
    const {
    temp,
    feels_like,
    humidity,
    pressure,
    weathermood,
    name,
    country,
    sunset,
    sunrise,
    speed,
    } =info;

 useEffect(() => {
    if(weathermood){
      switch (weathermood) {
        case "Haze":
            setTempperature(<img className='images' src='https://img.freepik.com/free-photo/grey-concrete-high-skyscrapers-coast-foggy-weather_144627-31372.jpg?w=900&t=st=1721140677~exp=1721141277~hmac=236701f8bf8a50e1453f8ea9859089ba86e2eda6dd7a3b6ab29967409c89c325' alt=''></img>)
            break;
        case "Clouds":
            setTempperature(<img className='images' src='https://img.freepik.com/free-photo/sea-with-boats-distance-cloudy-sky_181624-11232.jpg?t=st=1721141896~exp=1721145496~hmac=f031477d12b0586c0b199595e1389c19c19224e09d36b995645ed6bb5872c5da&w=900' alt='' ></img>)   
            break; 
        case "Rain":
                setTempperature(<img className='images' src='https://img.freepik.com/free-photo/weather-effects-composition_23-2149853295.jpg?t=st=1721141933~exp=1721145533~hmac=7130e23e75dc2df2c76b2913d7f94ac13fd54ece31cc23288c4dc65fdcb59684&w=900' alt='' ></img>)   
                break; 
        case "Mist":
            setTempperature(<img className='images' src='https://img.freepik.com/free-photo/empty-road-dark-atmosphere_23-2150914156.jpg?t=st=1721142792~exp=1721146392~hmac=c23c2f191c03aecf47593b7d05f40ac4aface6707b822af44558bd9d540e3e16&w=900' alt='' ></img>)        
              break;
        case "Thunderstrom":
                setTempperature(<img className='images' src='https://images.unsplash.com/photo-1561471026-0bbb77535d25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' ></img>)        
                  break;
        case "Snow":
                    setTempperature(<img className='images' src='https://images.unsplash.com/photo-1514632595-4944383f2737?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' ></img>)        
                      break;
        case "Clear":
                        setTempperature(<img className='images' src='https://img.freepik.com/free-photo/field-bright-yellow-rapeseed-spring_146671-19377.jpg?w=996&t=st=1721200141~exp=1721200741~hmac=aec48e522be3572407189b6bb2a503db76e8661efeb96b7670b55ea1c3261b2bD' alt='' ></img>)        
                          break;
        default:
            setTempperature(<img className='images' src='https://img.freepik.com/free-photo/grey-concrete-high-skyscrapers-coast-foggy-weather_144627-31372.jpg?w=900&t=st=1721140677~exp=1721141277~hmac=236701f8bf8a50e1453f8ea9859089ba86e2eda6dd7a3b6ab29967409c89c325' alt='' ></img>)   
            break;
      }
    }
 }, [weathermood])
 
 var sec = sunset;
 var date = new Date (sec * 1000)
 var timeStr =  `${date.getHours()}:${date.getMinutes()}`;

 var sec = sunrise;
 var date = new Date (sec * 1000)
 var timeStrr =  `${date.getHours()}:${date.getMinutes()}`;


  return (
    <>
      <div className='card'>
        <div className='hello'>
            <i >{tempperature}</i>
            
        <div className='hi'>
        <h1>Temperature:{temp}&deg;C</h1>
                <div className='mausom'>
                <h3>{weathermood}</h3>
                <p>{name},{country}</p>
            </div>
            <div className='page3'>
    
                <img src='https://www.svgrepo.com/show/106456/humidity.svg' alt=''></img> 
                <h3>Humidity - {humidity}</h3>

                <img src='https://www.svgrepo.com/show/341126/temperature-feels-like.svg' alt=''></img>
                <h3>Feels Like - {feels_like}&deg;C</h3>

       
                <img src='https://www.svgrepo.com/show/521793/pressure.svg' alt=''></img>
                <h3>Pressure - {pressure}</h3>

                
                <img src='https://raw.githubusercontent.com/erikflowers/weather-icons/bb80982bf1f43f2d57f9dd753e7413bf88beb9ed/svg/wi-strong-wind.svg' alt=''></img>
                <h3>Wind - {speed}km/h</h3> 


                <img src='https://www.svgrepo.com/show/471951/sunrise.svg' alt=''></img>
                <h3>Sunrise - {timeStrr}</h3> 
        
                <img src='https://www.svgrepo.com/show/521866/sunset.svg' alt=''></img>
                <h3>Sunset - {timeStr}</h3> 
                </div>
            </div>
        </div>
      </div>
      
    </>
  )
}

export default Weatherbox
