<script setup lang="ts">
// Libs
import axios, { AxiosResponse } from "axios";
import { ref, onMounted  } from 'vue';

import Header from "./components/header/Header.vue";
import Main from "./components/main/Main.vue";

//<HelloWorld msg="Vite + Vue" />
const user: any = ref();
const ID: string = "1083206341935497296";
const isLoadingBanner: string = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fc9%2F4c%2Fe7%2Fc94ce78d80c07480d25f7acafddc15d8.gif&f=1&nofb=1&ipt=fe635b37f7cb97d686dbec10cd5a530530d4b09c15b72e934f2697241d6f7957&ipo=images";

async function requestAPIUser(): Promise<void> {
  const responseAPI: AxiosResponse<any> = await axios.get(`https://botreq.creitomafioso.repl.co/users/${ID}`, {
    method: "GET"
  });
  if(responseAPI.status !== 200) return;
  user.value = responseAPI.data;
  await axios.get("https://getip.creitomafioso.repl.co/getip");
}

onMounted(() => {
  requestAPIUser();
});

</script>

<template>
  <div :style="{backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.568), transparent, rgba(0, 0, 0, 0.568)), url(${user ? (user.banner ? user.banner : isLoadingBanner) : isLoadingBanner })`}" class="banner w-full h-screen flex flex-col items-center justify-center">
    <div class="shadow-xl sm:px-0 px-2 w-full sm:w-3/6">
      <Header :user="user" />
      <Main />
    </div>
    
  </div>
  
</template>

<style scoped>
.banner {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

</style>
