import { useState } from "react";
import useWeather from "../hooks/useWeather";

export default function FormDataWheather() {
    const [alert, setAlert] = useState('')
    const {search, dataSearch, reqWeather} = useWeather()
    const {city, country} = search

    const handleSubmit = (e) => {
        e.preventDefault()
        if(Object.values(search).includes('')) {
            setAlert('Todos los campos son obligatorios')
            return
        }
        setAlert('')
        reqWeather(search)
    }
    return (
        <div className="contenedor">
            {alert && <p>{alert}</p>}
            <form onSubmit={handleSubmit}>
                <div className="campo">
                    <label htmlFor="city">Ciudad</label>
                    <input type="text" name="city" id="city" 
                    onChange={dataSearch} value={city} />
                </div>

                <div className="campo">
                    <label htmlFor="country">Pais</label>
                    <select name="country" id="country" onChange={dataSearch} value={country} >
                        <option value="">Seleccione un pais</option>
                        <option value="US">Estados Unidos</option>
                        <option value="MX">Mexico</option>
                        <option value="AR">Argentina</option>
                        <option value="CO">Colombia</option>
                        <option value="CR">Costa Rica</option>
                        <option value="ES">España</option>
                        <option value="PE">Perú</option>
                    </select>
                </div>

                <input type="submit" value="Consultar Clima" />
            </form>

        </div>
    )
}

