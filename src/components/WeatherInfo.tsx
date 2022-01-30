import React, {useEffect} from 'react'
import {useGlobalContext} from '../context/context'

const WeatherInfo = () => {
    const {cityWeather, cityPhoto, loading} = useGlobalContext();

    useEffect(()=>{
        handleDisplay()
    }, [cityWeather]);

    const handleDisplay = () => {
        if(cityWeather == 'NONE'){
            return false;
        }
        return true;
    }
    if(loading) {
        return(
                <div className="flex justify-center items-center absolute bottom-1/4 right-1/2 translate-x-1/2">
                    <div className="loader bg-indigo-800 p-5 rounded-full flex space-x-3">
                        <div className="w-5 h-5 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-5 h-5 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-5 h-5 bg-gray-400 rounded-full animate-bounce"></div>
                    </div>
                </div>
        )
    }


    return (
        <div className="text-red-400 absolute bottom-0 right-1/2 translate-x-1/2 z-1 w-3/4 h-1/4 mb-16 md:mb-48">
            {handleDisplay() && 
            <div className=" h-full p-2 flex items-center justify-center text-blue-800 text-lg
            bg-no-repeat bg-cover rounded-lg mb-2 text-base md:text-lg" 
            style={{ backgroundImage: `url(${cityPhoto.urls.raw})`}} >
                <div>
                    <h1><span className = 'font-bold'>Weather Info:</span> {cityWeather.name} </h1>
                    <div><span className = 'font-bold'>Temperature:</span> {cityWeather.main.temp} °F</div>
                    <div><span className = 'font-bold'>Max Temperature:</span> {cityWeather.main.temp_max} °F</div>
                    <div><span className = 'font-bold'>Min Temperature:</span> {cityWeather.main.temp_min} °F</div>
                    <div><span className = 'font-bold'>Feels Like:</span> {cityWeather.main.feels_like} °F</div>
                    <div><span className = 'font-bold '>Lots of {cityWeather.weather[0].main}</span> </div>
                    <br/>
                    <div className="text-xs">
                        Photo by <a href={cityPhoto.user.portfolio_url}>{cityPhoto.user.name}</a> on <a href={cityPhoto.user.links.self}>Unsplash</a>
                    </div>
                </div>
                
            </div>}
        </div>
    )
}

export default WeatherInfo
