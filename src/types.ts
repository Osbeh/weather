export type locationType = {
    country: string,
    lat: number,
    localtime: string,
    localtime_epoch: number,
    lon: number,
    name: string,
    region: string,
    tz_id: string
  }
  
export type currentType = {
    cloud: number,
    feelslike_c:number,
    temp_c:number,
    gust_kph:number,
    condition: {
      code: number,
      icon: string,
      text: string
    }
  }
  
export type forecastType = {
    forecastday: Array<forecastDay>
  }
  
export type forecastDay = {
    date:string,
    day: {
      maxtemp_c:number,
      mintemp_c:number,
      condition: currentType["condition"],
      totalprecip_mm:number,
      totalsnow_cm:number
      daily_chance_of_rain:number,
      daily_chance_of_snow:number,
      maxwind_kph:number
    },
    astro: {
      sunrise: string,
      sunset: string
    }
  }
  
 export type weatherType = {
    current: currentType,
    location: locationType,
    forecast: forecastType
  }

  export type CardProps= {
    city: string,
    current: currentType,
    forecast: Array<forecastDay>,
    today: forecastDay
  }