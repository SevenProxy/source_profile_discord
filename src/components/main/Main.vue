<script setup lang="ts">
const emojiAboutMe: string = "https://cdn.discordapp.com/emojis/1173030335710232678.gif?size=44&quality=lossless";
</script>

<template>
    <div class="w-full">
        <div class="rounded-bl-md rounded-br-md flex py-4 px-4 justify-start w-full bg-[#2f3136]">
            <div class="w-full flex flex-col bg-[#00000075] px-2 py-2 rounded-md">
                <div class="mb-10">
                    <p class="font-2xl font-bold text-neutral-400">ABOUT ME</p>
                    <p class="about text-[#6e6f73] mt-2 text-sm">
                        <strong class="text-white text-xl">&lt;</strong>
                        <span class="bg-[#393939] px-1 py-1 rounded-md text-white font-2xl">Programador</span>
                        <strong class="text-white text-xl">></strong><br/>
                        NOT GOD PLEASED EVERYONE🐒<br/>
                        <span class="flex items-center">
                            <a href="https://discord.gg/dMjYUpBKsA" class="text-sm text-blue-600">https://discord.gg/dMjYUpBKsA</a>
                        </span>
                    </p>
                    <p class="text-md mt-8 font-bold text-neutral-400">DISCORD MEMBER SINCE</p>
                    <p class="text-[#6e6f73] font-xl">Jul 20, 2017</p>
                </div>
                <div class="border-t-2 py-4 border-[#3a3c41] w-full flex flex-wrap items-center justify-center">
                    <div class="mr-4 cursor-pointer px-4 py-2 rounded-md border border-[#3a3c41] flex items-center justify-between ">
                        <div class="flex items-center">
                            <img class="w-6 h-6 mr-2" src="https://www.freepngimg.com/download/logo/62372-computer-neon-instagram-icons-hd-image-free-png.png" />
                            <p class="font-sm font-bold text-white">Forever</p>
                            <div class="ml-2 relative w-4 h-4 flex items-center justify-center">
                                <svg aria-label="Verified Connection" class="flowerStar_a9981e absolute top-0 left-0" aria-hidden="false" role="img" width="16" height="16" viewBox="0 0 16 15.2"><path fill="hsla(228, 6%, 32.5%, 1)" fill-rule="evenodd" d="m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"></path></svg>
                                <svg class="absolute top-0 left-0" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 16 15.2"><path d="M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z" fill="#ffffff"></path></svg>
                            </div>
                        </div>
                        <div class="relative ml-8">
                            <a href="https://www.instagram.com/cassieshutup" rel="noreferrer noopener" target="_blank" role="button" tabindex="0">
                                <svg aria-hidden="true" role="img" width="24" height="24" class="link-svg text-[#6e6f73]" viewBox="0 0 24 24">
                                    <polygon fill="currentColor" fill-rule="nonzero" points="13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8"></polygon>
                                </svg>
                            </a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.link-svg {
    transform: rotate(45deg)
}
</style>
