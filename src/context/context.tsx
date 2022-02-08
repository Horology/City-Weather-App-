import React, {useContext, useState} from "react";
import axios from 'axios';


type GlobalContext = {
    cityWeather: any, 
    cityPhoto: any, 
    fetchWeather:(city: string) =>{}, 
    fetchCityPhotos:(city: string) =>{}, 
    loading: boolean
}

const GlobalContext = React.createContext<GlobalContext | undefined>(undefined);

type Props = {
    children: JSX.Element,
};

const GlobalProvider = ({children}:Props ): JSX.Element => { 
    const [cityWeather, setCityWeather] = useState<string>('');
    const [cityPhoto, setCityPhoto] = useState<{}>({});
    const [loading, setLoading] = useState(false);

    const fetchWeather = async (city:string) => {
        const url: string = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_APIKEY}`
        await axios.get(url).then((res) => {
            setCityWeather(res.data);
        }).catch((err) => {
            setCityWeather('NONE')
        })
    };


    const fetchCityPhotos = async (city:string) => {
        setLoading(true);
        const url: string  = `https://api.unsplash.com/search/photos?&page=1&query=${city}&client_id=${process.env.REACT_APP_UNSPLASHKEY}`
         await axios.get(url).then((res) => {
            setCityPhoto(res.data.results[0]);
            setTimeout(()=>{setLoading(false)}, 3000);
        }).catch((err) => {
            setCityPhoto({})
            setLoading(false);
        })
    };


    return(
        <GlobalContext.Provider value = {{ cityWeather, cityPhoto, fetchWeather, fetchCityPhotos, loading}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);
    if(context === undefined){
        throw new Error('GlobalContext is undefined')
    }
    return context;
}

export {GlobalContext, GlobalProvider} ;