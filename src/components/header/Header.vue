<script setup lang="ts">
import { 
    handleHypeMouseOver, 
    handleHypeMouseOut,
    handleNitroMouseOver,
    handleNitroMouseOut,
    handleBoosterMouseOver,
    handleBoosterMouseOut,
    handleDeveloperMouseOver,
    handleDeveloperMouseOut,
    handleEarlyMouseOver,
    handleEarlyMouseOut
} from "./events.heander.ts";
interface User {
    avatar: string,
    discriminator: string,
    id: string,
    username: string,
    banner?: string
}
defineProps<{ user: User }>()

const iconHypeBrilliance: string = "https://cdn.discordapp.com/badge-icons/011940fd013da3f7fb926e4a1cd2e618.png";
const iconNitro: string = "https://cdn.discordapp.com/badge-icons/2ba85e8026a8614b640c2837bcdfe21b.png";
const iconBooster: string = "https://cdn.discordapp.com/badge-icons/0e4080d1d333bc7ad29ef6528b6f2fb7.png";
const iconDeveloper: string = "https://cdn.discordapp.com/attachments/1134622107838455859/1174859131774062682/798293846743318538.png?ex=65691fd4&is=6556aad4&hm=8f450056a2ebb0892b7d06c0423bc5ca9627135356776ceebdc6b3a5c143e002&";
const iconEarlySupporter: string = "https://cdn.discordapp.com/attachments/1134622107838455859/1174858903956226100/585763690868113455.png?ex=65691f9e&is=6556aa9e&hm=6f974a04f6cdef6eccd61a03cc1c63c2f44a5e66f847eb3203512a9c7c689752&";

const isLoadingAvatarUser: string = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fc.tenor.com%2F9Kp7LDGMFuAAAAAd%2Fdiscord-loading.gif&f=1&nofb=1&ipt=1551e8ffa5b073dac98b999076fa417879df727df2a3dbfe1f0bb0db5729b42d&ipo=images";

</script>

<template>
  <div class="w-full proxy">
    <div class="rounded-tl-md rounded-tr-md flex items-start py-8 px-4 justify-start w-full bg-[#202225]">
        <div class="w-24 h-24 mr-4 relative">
            <img v-if="user" class="rounded-full w-full cursor-pointer h-full" :src="user.avatar" />
            <img v-else :src="isLoadingAvatarUser" class="rounded-full w-full cursor-pointer h-full" />
            <a v-if="user" :href="user.avatar" class="absolute rounded-full top-0 left-0 w-full h-full"></a>
        </div>
        <div class="flex flex-col items-left mt-4">
            <div class="flex flex-col">
                <p v-if="!user" class="font-md text-3xl">Carregando...</p>
                <p v-else class="font-md text-3xl">{{user.username}}</p>
                <p v-if="!user" class="text-gray-500 text-lg">Carregando...</p>
                <p v-else class="text-gray-500 text-lg">{{ user.username }}</p>
            </div>
            <div class="flex items-center w-fit mt-4 px-1 py-1 rounded-md bg-[#131313]">
                <div class="relative flex items-center justify-center">
                    <div id="badge" class="hyper hidden font-lg absolute px-2 py-2 rounded-md bg-neutral-700 text-white">HypeSquad Brilliance</div>
                    <img @mouseout="handleHypeMouseOut" @mouseover="handleHypeMouseOver" class="w-6 h-6 mr-2 cursor-pointer" :src="iconHypeBrilliance" />
                </div>
                <div class="relative flex items-center justify-center">
                    <div id="badge" class="nitro hidden font-lg absolute px-2 py-2 rounded-md bg-neutral-700 text-white">Nitro Subscriber</div>
                    <img @mouseout="handleNitroMouseOut" @mouseover="handleNitroMouseOver" class="w-6 h-6 mr-2 cursor-pointer" :src="iconNitro" />
                </div>
                <div class="relative flex items-center justify-center">
                    <div id="badge" class="booster hidden font-lg absolute px-2 py-2 rounded-md bg-neutral-700 text-white">Nitro Booster</div>
                    <img @mouseout="handleBoosterMouseOut" @mouseover="handleBoosterMouseOver" class="w-6 h-6 mr-2 cursor-pointer" :src="iconBooster" />
                </div>
                <div class="relative flex items-center justify-center">
                    <div id="badge" class="developer hidden font-lg absolute px-2 py-2 rounded-md bg-neutral-700 text-white">Developer</div>
                    <img @mouseout="handleDeveloperMouseOut" @mouseover="handleDeveloperMouseOver" class="w-6 h-6 mr-2 cursor-pointer" :src="iconDeveloper" />
                </div>
                <div class="relative flex items-center justify-center">
                    <div id="badge" class="early hidden font-lg absolute px-2 py-2 rounded-md bg-neutral-700 text-white">Developer</div>
                    <img @mouseout="handleEarlyMouseOut" @mouseover="handleEarlyMouseOver" class="w-6 h-6 mr-2 cursor-pointer" :src="iconEarlySupporter" />
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
#badge {
    top: -45px;
    white-space: nowrap;
    left: -35px;
}
</style>