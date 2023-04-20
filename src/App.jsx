import AppWeather from "./components/AppWeather" 
import { WeatherProvider } from "./context/WeatherProvider"


function App() {

  return (
    <WeatherProvider>
      <header>
        <h1>Buscador de Clima</h1>
        <h6 className="tag">Coded by: @WilhelmDev</h6>
      </header>
      
      <AppWeather />

    </WeatherProvider>
  )
}

export default App
