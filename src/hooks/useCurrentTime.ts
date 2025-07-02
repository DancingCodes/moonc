interface DateTime {
    year: string
    month: string
    day: string
    hours: string
    minutes: string
    seconds: string
    weekday: string
}

export default function useDateTime() {
    const dateTime = ref<DateTime>({
        year: '',
        month: '',
        day: '',
        hours: '',
        minutes: '',
        seconds: '',
        weekday: '',
    })

    const weekdays = ['日', '一', '二', '三', '四', '五', '六']

    const updateTime = () => {
        const now = new Date()

        const year = now.getFullYear().toString()
        const month = (now.getMonth() + 1).toString().padStart(2, '0')
        const day = now.getDate().toString().padStart(2, '0')
        const hours = now.getHours().toString().padStart(2, '0')
        const minutes = now.getMinutes().toString().padStart(2, '0')
        const seconds = now.getSeconds().toString().padStart(2, '0')
        const weekday = `星期${weekdays[now.getDay()]}`

        dateTime.value = {
            year,
            month,
            day,
            hours,
            minutes,
            seconds,
            weekday,
        }
    }

    onMounted(() => {
        updateTime()
        const timer = setInterval(updateTime, 1000)
        onBeforeUnmount(() => clearInterval(timer))
    })

    return {
        dateTime
    }
}