import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { forecastDay, forecastType, weatherType } from './types'
import WeatherCard from './components/WeatherCard'



function App() {
  const [weather, setWeather] = useState<weatherType | null>(null)
  const [loading, setLoading] = useState<Boolean>(true)
  const [error, setError] = useState<Boolean>(false)
  const [weatherForecast, setWeatherForecast] = useState<forecastDay[]>([])
  const [weatherToday, setWeatherToday] = useState<forecastDay>({} as forecastDay)

  
  useEffect(() => {
    try {
      const getWeather = async () => {
        const weatherFromServer = await fetchWeather()
        setWeather(weatherFromServer)
        const today = weatherFromServer.forecast.forecastday.shift()
        setWeatherToday(today)
        setWeatherForecast(weatherFromServer.forecast.forecastday)
      }
    getWeather()
    } catch (err) {
      setError(true)
      setWeather(null)
    }
  }, [])
  

  const fetchWeather = async () => {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': import.meta.env.VITE_WAPI_CODE,
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
      };

      try {
        const res = await fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=Oulu&days=3', options)
        const data = await res.json()
        setLoading(false)
        setError(false)
        return data;
      }
      catch (err:string | unknown) {
        console.error(err)
        setError(true)
        setWeather(null)
        return
      }
  }

  if (!weather && loading) {
    return (
      <div>
        <h1>LOADING...</h1>
      </div>
    )
  }

  // console.log(weather)
  // console.log(`sää tänään :`)
  // console.log(weatherToday)
  // console.log(weatherForecast)



  if (error) {
    return (
      <div>jokin meni vikaan...</div>
    )
  }

  

  return (
    <>
     {weather &&  
      <WeatherCard city={weather.location.name} current={weather.current} forecast={weatherForecast} today={weatherToday}/>
      } 

    </>
  )
}

export default App
