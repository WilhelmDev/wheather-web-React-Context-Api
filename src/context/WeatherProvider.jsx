import axios from "axios";
import { createContext, useState } from "react";

const WeatherContext = createContext()

const WeatherProvider = ({children}) => {

    const [result, setResult] = useState({})
    const [loading, setLoading] = useState(false)
    const [notFound, setNotFound] = useState(false)
    const [search, setSearch] = useState({
        city: '',
        country: ''
    })

    const dataSearch = (e) => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    const reqWeather =  async (data) => {
        setLoading(true);setNotFound(false);setResult({})
        try {
            const {city, country} = data
            const appId = import.meta.env.VITE_APY_KEY
            
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`
            const {data:weather} = await axios(url)
            setResult(weather)
        } catch (error) {
            setNotFound('no hay resultados')
        }
        finally{
            setLoading(false)
        }
    }
    return (
        <WeatherContext.Provider value={{
            search, dataSearch, reqWeather, result, loading, notFound
        }}>

            {children}

        </WeatherContext.Provider>
    )
}
export {
    WeatherProvider
}

export default WeatherContext