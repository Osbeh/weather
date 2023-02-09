import { forecastDay } from "../types"

type forecastProp = {
    today:forecastDay["day"]
}

export default function Today({today}:forecastProp) {
    return (
        <div className="today">
            <h2>Päivä </h2>
            <img src={today.condition.icon}/>
            <div>Päivän ylin: {today.maxtemp_c}</div>
            <div>Päivän alin: {today.mintemp_c}</div>
            <div>Tuuli enimmillään: {Math.round(today.maxwind_kph / 3.6)} m/s</div>
        </div>
    )
}