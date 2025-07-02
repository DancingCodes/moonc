import { getIpInfo, getWeatherInfo } from '@/api/amap';

interface WeatherInfo {
    province: string
    city: string
    weather: string
    temperature: string
}

export default function useWeatherInfo() {
    const weatherInfo = ref<WeatherInfo>()

    const getInfo = async () => {
        const res = await getIpInfo()
        const { province, city, adcode } = res.data

        const weatherRes = await getWeatherInfo(adcode)
        const { weather, temperature } = weatherRes.data.lives[0]

        weatherInfo.value = {
            province,
            city,
            weather,
            temperature: temperature + '°C'
        }
    }

    onMounted(() => {
        getInfo()
    })

    return {
        weatherInfo
    }
}