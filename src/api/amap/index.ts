import axios from 'axios';

export const getIpInfo = () => axios.get(`https://restapi.amap.com/v3/ip?key=1487b4a88590a64de684333776633332`)

export const getWeatherInfo = (adcode: string) => axios.get(`https://restapi.amap.com/v3/weather/weatherInfo?key=1487b4a88590a64de684333776633332&city=${adcode}`)