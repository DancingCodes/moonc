<template>
    <div class="h-100vh flex flex-col">
        <div class="flex-1 flex items-center gap-60px px-160px box-border">
            <div class="flex-1">
                <div class="text-[100px] font-bold">Moonc.love</div>
                <div class="text-[30px] mt-[100px]">
                    Hi,there!
                    <br>
                    I'm DancingCodes,welcome to my homepage.
                </div>
            </div>

            <div class="flex-1 flex flex-col gap-120px">

                <div class="flex gap-20px justify-between h-200px">
                    <div
                        class="flex-1 flex flex-col justify-between text-26px bg-[rgba(0,0,0,0.3)] backdrop-blur-6px rounded-6px p-20px box-border">
                        <div>人生如棋,落子无悔。</div>
                        <div class="text-right">-「 人间忽晚 」</div>
                    </div>

                    <div
                        class="flex-1 flex flex-col items-center justify-between text-26px bg-[rgba(0,0,0,0.3)] backdrop-blur-6px rounded-6px p-20px box-border">
                        <div>
                            {{ dateTime.year }}年{{ dateTime.month }}月{{ dateTime.day }}日{{ dateTime.weekday }}
                        </div>
                        <div class="text-36px">
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



                <div class="grid grid-cols-3 gap-20px">
                    <div v-for="i in relatedWebList" @click="openLink(i.url)"
                        class="py-30px px-0 text-center border-1px border-solid border-#ccc rounded-6px text-18px">
                        {{ i.name }}
                    </div>
                </div>

            </div>
        </div>

        <div class="flex justify-center items-center text-18px gap-6px py-12px px-0 bg-rgba(0,0,0,0.3)">
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