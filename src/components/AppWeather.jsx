import FormDataWheather from '../components/FormDataWheather'
import useWeather from '../hooks/useWeather'
import Result from './Result'
import Spinner from './Spinner'

export default function AppWeather() {
    const {result, loading, notFound} = useWeather()
    return (
        <>
            <main className="dos-columnas">

                <FormDataWheather/>

                { loading
                ? <Spinner />
                : result?.name ? <Result />
                : notFound ? <p className='loading'>{notFound}</p>
                : <p className='loading'> El Clima se mostrara aquí </p> }

            </main>
        </>
    )
}
