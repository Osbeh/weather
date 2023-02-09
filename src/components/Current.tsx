import { currentType } from "../types"

type currentProp = {
    current: currentType
}

export default function Current({current}:currentProp) {
    return (
        <div className="current">
            <div className="currentHeader"><h2>Nyt</h2></div>
            <div className="currentIcon"><img src={current.condition.icon}/></div>
            <div>Lämpötila: {current.temp_c}</div>
            <div>Tuntuu kuin: {current.feelslike_c}</div>
            <div>Tuuli puuskissa: {Math.round(current.gust_kph / 3.6)} m/s</div>
        </div>
    )
}