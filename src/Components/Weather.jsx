import React, {useState, useEffect} from 'react'

const Weather = () => {
    const [city, setCity] = useState(null);
    const[search, setSearch] = useState("mumbai");
    const [current, setCurrent] = useState(null);

   const callApi = async () => {
   let res = await fetch(`http://api.weatherapi.com/v1/current.json?key=8c31e61be53344a7a47150514230911&q=${search}`);
   let result = await res.json()
   setCity(result.location);
   setCurrent(result.current);

   }



    useEffect(()=>{
    callApi();
    },[search])
    
  return (
    
    <div className='container'>
        <div className="search">
            <input type="text" value={search} placeholder='search temprature' onChange={(e)=>{setSearch(e.target.value)}}  />
        </div>

        {
            !city?(
                <p>Not Data Found</p>
            ):
            (
              <div>
                <div className="details">
                <p >Country :<b> {city.country}</b></p>
                <p >City : <b> {city.name}</b></p>
                <p >Time: <b>{city.localtime}</b></p>
            </div>
            <div className="temp">
                <img src="weather.png" alt="" />
                <span className='temprature'>{current.temp_c}°C</span>
            </div>
            </div>
            
            )
        }
       
      
    </div>
    
  )
}

export default Weather;
