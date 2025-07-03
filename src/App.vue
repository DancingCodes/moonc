<template>
    <div class="h-100vh flex flex-col">
        <div
            class="flex-1 flex items-center gap-6% px-10% box-border max-sm:flex-col max-sm:px-6% max-sm:py-1% max-sm:gap-3%">
            <div class="flex-1 max-sm:flex-none max-sm:w-100%">
                <div class="text-[0.6rem] font-bold max-sm:text-[1rem] max-sm:text-center">Moonc.love</div>
                <div class="text-[0.15rem]  mt-[0.6rem] max-sm:text-[0.36rem]">
                    Hi,there!
                    <br>
                    I'm DancingCodes,welcome to my homepage.
                </div>
            </div>

            <div class="flex-1 flex flex-col gap-0.5rem max-sm:w-100% max-sm:flex-none">

                <div class="flex gap-0.2rem justify-between h-1rem max-sm:flex-col max-sm:h-auto">
                    <div
                        class="flex-1 flex flex-col justify-between text-0.1rem bg-[rgba(0,0,0,0.3)] backdrop-blur-0.1rem rounded-0.06rem p-0.1rem box-border max-sm:text-[0.36rem] max-sm:p-0.3rem">
                        <div>人生如棋,落子无悔。</div>
                        <div class="text-right">-「 人间忽晚 」</div>
                    </div>

                    <div
                        class="flex-1 flex flex-col items-center justify-between text-0.1rem bg-[rgba(0,0,0,0.3)] backdrop-blur-0.1rem rounded-0.06rem p-0.1rem box-border max-sm:text-[0.36rem] max-sm:gap-0.1rem max-sm:p-0.3rem">
                        <div>
                            {{ dateTime.year }}年{{ dateTime.month }}月{{ dateTime.day }}日{{ dateTime.weekday }}
                        </div>
                        <div class="text-0.1rem max-sm:text-[0.6rem]">
                            {{ dateTime.hours }}:{{ dateTime.minutes }}:{{ dateTime.seconds }}
                        </div>
                        <div>
                            <template v-if="weatherInfo">
                                {{ weatherInfo.province }} {{ weatherInfo.city }} {{ weatherInfo.weather }}
                                {{ weatherInfo.temperature }}
                            </template>
                            <template v-else>
                                天气模块Loading
                            </template>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-3 gap-0.1rem max-sm:grid-cols-2 max-sm:gap-0.2rem">
                    <div v-for="i in relatedWebList" @click="openLink(i.url)"
                        class="py-0.1rem px-0 text-center border-0.01rem border-solid border-#ccc rounded-0.06rem text-0.1rem cursor-pointer max-sm:text-[0.36rem]">
                        {{ i.name }}
                    </div>
                </div>

            </div>
        </div>

        <div
            class="flex justify-center items-center text-0.1rem gap-0.03rem py-0.06rem px-0 bg-[rgba(0,0,0,0.3)] max-sm:py-0.2rem max-sm:text-[0.24rem]">
            <span>Copyright</span>
            <span>©</span>
            <span>2021 - 2025</span>
            <span>Made by DancingCodes</span>
            <span>&</span>
            <a href="https://beian.miit.gov.cn/" target="_blank">鲁ICP备2024059990号</a>
        </div>
    </div>
</template>

<script setup lang="ts">
import useDateTime from '@/hooks/useCurrentTime'
import useWeatherInfo from './hooks/useWeatherInfo';
import { openLink } from './utils/openLink';
const { dateTime } = useDateTime()
const { weatherInfo } = useWeatherInfo()

const relatedWebList = [{
    url: 'https://moonc.love',
    name: '主页',
}, {
    url: 'https://filestore.moonc.love',
    name: '图床',
}, {
    url: 'https://music.moonc.love',
    name: '音乐播放器',
}, {
    url: 'https://factory.moonc.love',
    name: '无极工厂',
}]

</script>