<template>
  <div class="">
    <div class="band">
      <div class="b-word">
        <div class="b-lg">WESTERN</div>
        <div class="b-lg">AUSTRALIA</div>
        <div class="b-sm">Inncredible wildlife experience in 2020.</div>
      </div>
      <img src="../../assets/bluehouse.png" class="" />
    </div>
    <div class="flex flex-col m-auto p-6 xl:p-0" style="max-width: 1280px">
      <div class="text-center text-lg mt60">
        In 2020 We back to Australia, for us that was really excited. After a
        long time, to entries Australia at Perth was feeling like yesterday. In
        last year COVID-19 devour the world, we were lucky been save and enjoy
        this journey, and this journey was my pre-wedding photos. It means a lot
        to me in here, because Perth is the first place when I come in
        Australia, and in Australia was I fall in love with my wife. That's go
        to see our traveling.
      </div>
      <div class="text-center text-6xl font-extrabold text-blue-500 mt60">
        TIPS
      </div>
      <div
        class="mt60 mb-10 grid gap-x-12 text-center grid-cols-1 md:grid-cols-3"
        style="padding: 0px 42px"
      >
        <div v-for="item in tipsArr" :key="item.id" class="mt60 md:mt-0">
          <div class="flex justify-center"><img :src="item.image" /></div>
          <div class="mt60">{{ item.text }}</div>
        </div>
      </div>
      <div
        class="mb-40 grid grid-cols-1 gap-x-12 md:grid-cols-3"
        style="padding: 0px 42px"
      >
        <div></div>
        <div></div>
        <div class="flex justify-center">
          <Button
            class="p-button-rounded px-10 bg-white border-blue-500 text-blue-500"
            label="view current"
            @click="weather"
          ></Button>
        </div>
      </div>
    </div>
    <div class="gotop" v-show="scY > 300" @click="toTop">
      <i class="pi pi-chevron-up text-white" />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import electric from "@/assets/electric.svg";
import kangaroo from "@/assets/kangaroo.svg";
import weatherimg from "@/assets/weather.svg";

const store = useStore();
const aa = computed(() => {
  return store.state.place;
});
const tipsArr = ref([
  {
    image: electric,
    text: "In Australia the power plugs and sockets are of type I. The standard voltage is 230 V and the standard frequency is 50 Hz. In Australia the power plugs and sockets are of type I. Mainly used in Australia, New Zealand, China, the South Pacific and Argentina.",
  },
  {
    image: kangaroo,
    text: "Wildlife and livestock on the roads pose an added risk to motorists. Beware of livestock grazing on the roadside and watch for sheep and cattle that have escaped, which can be unpredictable and present a serious road safety danger.",
  },
  {
    image: weatherimg,
    text: "Western Australia has many types of climate, in the south-west, the climate is temperate, with winter rainfall (June-August) and four distinct seasons, to the north the climate is tropical with a wet season and a dry season (April to November) while in the rest of the land is arid or semi-arid.",
  },
]);
const weather = () => {
  window.open("https://guan-weather-app.netlify.app/#/");
};

//***for scroll top
const scTimer = ref(0);
const scY = ref(0);

const handleScroll = () => {
  if (scTimer.value) return;
  scTimer.value = setTimeout(() => {
    scY.value = window.scrollY;
    clearTimeout(scTimer.value);
    scTimer.value = 0;
  }, 100);
};
const toTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

window.addEventListener("scroll", handleScroll);
//***/
</script>

<style lang="scss" scoped>
.mt60 {
  margin-top: 60px;
}
.gotop {
  @apply rounded-full text-center cursor-pointer my-10;
  width: 3rem;
  height: 3rem;
  line-height: 3rem;
  margin: 0;
  background-color: #424242;
  position: fixed;
  right: 1rem;
  bottom: 3rem;
}
.gotop:hover {
  transform: scale(1.1);
}
::v-deep(.p-button:enabled:hover){
  background:#000AFF;
  border-color:#000AFF;
}
.b-word {
  position: absolute;
  left: 5.7%;
  top: 35%;
  color: #fff;
  .b-sm {
    font-size: 22px;
  }
  .b-lg {
    font-size: 60px;
    font-weight: 800;
  }
  .b-lg:nth-child(1) {
    margin-bottom: 38px;
  }
  .b-lg:nth-child(2) {
    margin-bottom: 38px;
  }
}
@media (max-width: 420px) {
  .b-word {
    .b-lg {
      font-size: 45px;
    }
  }
}
@media (min-width: 1900px) {
  .b-word {
    top: 24%;
  }
}

.band {
  img {
    width: 1440px;
    height: 420px;
    
  }
}
@media (min-width: 1440px) {
  .band {
    img {
      width: 100%;
      height: 420px;
    }
  }
}
</style>
