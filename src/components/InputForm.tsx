import React, {useState, useEffect} from 'react';  
import {useGlobalContext} from '../context/context'


const InputForm = ():JSX.Element => {
    const {fetchCityPhotos, fetchWeather, cityWeather, cityPhoto} = useGlobalContext();
    const [city, setCity] = useState<string>(''); 
    const [helperText, setHelperText] = useState<string>('Please enter City above');

    useEffect(()=>{
        if(cityWeather == 'NONE'){
            setHelperText('City does not exist. Please try again.')
        }
    }, [cityWeather])
    
    const handleCity = (e: any) => {
        e.preventDefault();
        setCity(e.target.value);
    }

    
    return (
        <form className = "h-80 bg-slate-800 rounded-md p-4 pt-16">
            <h1 className="text-center text-xl font-bold text-stone-200 uppercase">
                Check the current Weather</h1>
            <div className="space-y-4 mt-6">
            <div className = 'flex jusify-space'>
                {/* <div className="w-full">
                    <input type="text" placeholder="Country" 
                    className="px-4 py-2 bg-gray-50" />
                </div> */}
                <div className=" ml-4 w-full">
                    <input type="text" placeholder="Enter the City" 
                    value = {city} onChange = {handleCity}
                    className="px-4 py-2 bg-gray-50" />
                </div>
            </div>
            <div className="text-red-400 text-right">
                {helperText && helperText}
            </div>
            </div>
            <button 
            onClick = {(e: any) => {e.preventDefault(); fetchWeather(city);fetchCityPhotos(city)}}
            className="w-full mt-5 bg-indigo-800 hover:text-gray-400
            hover:bg-indigo-900 active:border-2 active:border-rose-600
            text-white py-2 rounded-md font-semibold tracking-tight">
            Search</button>

        </form>
    )
}

export default InputForm
