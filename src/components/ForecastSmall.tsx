import { forecastDay } from "../types";

type forecastSmallProp = {
    day: forecastDay["day"]
}


export default function ForecastSmall({day}:forecastSmallProp) {
    return (
        <div style={{display:'flex'}}>
            <div><img src={day.condition.icon}/></div>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                <div>{day.maxtemp_c}</div>
                <div>{day.mintemp_c}</div>
                <div>{Math.round(day.maxwind_kph / 3.6)} m/s</div>
            </div>
        </div>
    )
}