import { CardProps } from "../types"
import Current from "./Current"
import ForecastSmall from "./ForecastSmall"
import Today from "./Today"

export default function WeatherCard( { city, current, forecast, today }:CardProps) {
    return (
        <div>
            <div><h1>{city}</h1></div>
            <div style={{display:'flex'}}>
                <Current current={current}/>
                <Today today={today.day}/>
            </div>
            {/* <Forecast forecast={forecast}/> */}
            <div style={{display:'flex', gap:'2rem', marginTop:'2rem', justifyContent:'center'}}>
                <div>
                Huomenna:
                <ForecastSmall day={forecast[0].day} />
                </div>
                <div>
                Ylihuomenna:
                <ForecastSmall day={forecast[1].day} />
                </div>
            </div>
        </div>
    )
   
}