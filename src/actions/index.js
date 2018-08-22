import axios from 'axios';
const API_KEY = 'f85ed366ae74931fb4c5ab8176794cfb';

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`
    const request = axios.get(url);
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}