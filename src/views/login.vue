<template>
  <div class="" style="">
    <div>
      <div class="leftSide">
        <div>
          <i
            class="pi pi-home text-3xl text-pink-500 cursor-pointer hover:text-pink-500"
            :class="{ sidebarUnActive: isActive }"
            @click="closeList"
          />
        </div>
        <div
          class="text-white cursor-pointer font-extrabold hover:text-pink-500"
          :class="{ sidebarActive: isActive,underLine: isActive}"
          @click="onpenList"
        >
          TRIPS
        </div>
      </div>

      <div class="myCarousel">
        <transition-group tag="div" :name="transitionName" class="slides-group">
          <div v-if="show" :key="current" class="slide">
            <img :src="slides[current].image" />
          </div>
        </transition-group>

        <div
          class="btn btn-prev"
          aria-label="Previous slide"
          @click="slide(-1)"
        >
          &#10094;
        </div>
        <div class="btn btn-next" aria-label="Next slide" @click="slide(1)">
          &#10095;
        </div>
      </div>
      <div
        class="textContant"
        :key="mycarousel[current].id"
        :style="{
          maxWidth: mycarousel[current].width + 'px',
          bottom: mycarousel[current].bottom + 'px',
          left: mycarousel[current].left + '%',
        }"
      >
        <div
          v-if="!mycarousel[current].title2.text"
          class="mb-6 title4"
          :style="{
            color: mycarousel[current].title1.color,
            fontSize: mycarousel[current].title1.size + 'px',
            fontWeight: mycarousel[current].title1.weight,
          }"
        >
          {{ mycarousel[current].title1.text }}
        </div>
        <div
          v-if="mycarousel[current].title2.text"
          class="mb-28 title1"
          :style="{
            color: mycarousel[current].title1.color,
            fontSize: mycarousel[current].title1.size + 'px',
            fontWeight: mycarousel[current].title1.weight,
          }"
        >
          {{ mycarousel[current].title1.text }}
        </div>
        <div
          v-if="mycarousel[current].title2.text"
          class="mb-28 title2"
          :style="{
            color: mycarousel[current].title2.color,
            fontSize: mycarousel[current].title2.size + 'px',
            fontWeight: mycarousel[current].title2.weight,
            marginTop: '-60px',
          }"
        >
          {{ mycarousel[current].title2.text }}
        </div>
        <div
          class="title3"
          :style="{
            color: mycarousel[current].textarea.color,
            fontSize: mycarousel[current].textarea.size + 'px',
          }"
        >
          {{ mycarousel[current].textarea.text }}
        </div>
        <div v-show="mycarousel[current].withBtn" class="mt-3">
          <Button
            class="p-button-rounded px-10 bg-white border-white text-blue-500"
            label="view more"
            @click="changeRouter('WESTERN AUSTRALIA', 'WESTERN AUSTRALIA')"
          ></Button>
        </div>
      </div>
      <div class="sidenav" :style="{ width: controlWidth + '%' }">
        <a href="javascript:void(0)" class="closebtn" @click="closeList"
          >&times;</a
        >
        <a href="#" class="text-pink-500">AUSTRALIA</a>
        <template v-for="list in tripList" :key="list.id">
          <a href="#" @click.prevent="changeRouter(list.rout, list.lable)">{{
            list.lable
          }}</a>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import photo1 from "../assets/p1.png";
import photo2 from "../assets/p2.png";

const store = useStore();
const mycarousel = ref([
  {
    id: "1",
    image: photo1,
    name: "flight",
    title1: { text: "I AM...", color: "#FF00A8", size: 60, weight: 800 },
    title2: { text: "", size: "", weight: "", color: "" },
    textarea: {
      text: "Hi, we are love travel couple, six years age, we meet in Sydney Australia, at that time, we are workingholiday in there, and we have pre-wedding photes in Perth. We really love the place in Australia, also we traveling any country in the world. We want to recode the scenery and experience, keep it looking and moving forward.",
      size: 18,
      color: "#000",
    },
    withBtn: false,
    width: 700,
    bottom: 120,
    left: 40,
  },
  {
    id: "2",
    image: photo2,
    name: "quoka",
    title1: { text: "AUSTRALIA", size: 60, weight: 800, color: "#000AFF" },
    title2: { text: "WESTERN", size: 90, weight: 800, color: "#000AFF" },
    textarea: {
      text: "Inncredible wildlife experience in 2020.",
      size: 18,
      color: "#fff",
    },
    withBtn: true,
    width: 820,
    bottom: 196,
    left: 55,
  },
]);

const current = ref(0);
const direction = ref(1);
const transitionName = ref("fade");
const show = ref(false);
const slides = ref([
  { id: "1", image: photo1 },
  { id: "2", image: photo2 },
]);

const slide = (dir) => {
  direction.value = dir;
  dir === 1
    ? (transitionName.value = "slide-next")
    : (transitionName.value = "slide-prev");
  const len = slides.value.length;
  current.value = (current.value + (dir % len) + len) % len;
};
onMounted(() => {
  show.value = true;
});

const onpenList = () => {
  sideBarWidth.value = 100;
  isActive.value = true;
};
const closeList = () => {
  sideBarWidth.value = 0;
  isActive.value = false;
};

const sideBarWidth = ref(0);
const controlWidth = computed(() => {
  return sideBarWidth.value;
});
const tripList = ref([
  { lable: "WESTERN AUSTRALIA", rout: "WESTERN AUSTRALIA" },
]);
const isActive = ref(false);

const router = useRouter();
const changeRouter = (name, val) => {
  router.push({ name: name });
  // store.commit("m_setplace", val);
  sessionStorage.setItem("currName", val);
};
</script>

<style lang="scss" scoped>
.leftSide {
  @apply flex items-start;
  flex-direction: column;
  padding: 60px 80px 0px;
  gap: 60px;
  position: absolute;
  width: 206px;
  height: 100%;
  left: 0px;
  top: 0px;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1000;
}
.myCarousel {
  width: auto;
}

.textContant {
  display: flex;
  flex-direction: column;
  color: white;
  bottom: 242px;
  left: 540px;
  position: absolute;
}
@media (max-width: 1150px) {
  .textContant {
    max-width: 400px;
    right: 20px;
  }
  .title1 {
    font-size: 20px !important;
    margin-bottom: 70px;
  }
  .title2 {
    font-size: 45px !important;
    margin-bottom: 30px;
  }

}
@media (max-width: 420px) {
  .textContant {
    left: 30% !important;
  }
}

/* FADE IN */
.fade-enter-active {
  transition: opacity 1s;
}
.fade-enter {
  opacity: 0;
}

/* GO TO NEXT SLIDE */
.slide-next-enter-active,
.slide-next-leave-active {
  transition: transform 0.5s ease-in-out;
}
.slide-next-enter {
  transform: translate(100%);
}
.slide-next-leave-to {
  transform: translate(-100%);
}

/* GO TO PREVIOUS SLIDE */
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition: transform 0.5s ease-in-out;
}
.slide-prev-enter {
  transform: translate(-100%);
}
.slide-prev-leave-to {
  transform: translate(100%);
}

/* SLIDER STYLES */
.slide {
  width: 100%;
  height: 100vh;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.sidebarActive {
  color: #ff00a8;
}
.underLine{
  display: inline-block;
  padding-bottom: 100px; /* to give some gap between text and border */
  background: linear-gradient(to right, #ff00a8, #ff00a8);
  background-repeat: no-repeat;
  background-size: 25px 2px;
  background-position: 0% 20%;
}
.sidebarUnActive {
  color: #fff;
}
.btn {
  z-index: 10;
  cursor: pointer;
  border: 1px solid #fff;
  color: #fff;
  border-radius: 9999px;
  width: 26px;
  height: 26px;
  padding: 26px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  // top: calc(50% - 35px);
  bottom: 2rem;
  left: 40%;
  transition: transform 0.3s ease-in-out;
  user-select: none;
}
@media (max-width: 1120px) {
  .btn {
    left: 40%;
  }
}
@media (max-width: 420px) {
  .btn {
    left: 30%;
  }
}
.btn-next {
  left: auto;
  right: 40%;
}
@media (max-width: 1120px) {
  .btn-next {
    right: 40%;
  }
}
@media (max-width: 420px) {
  .btn-next {
    right: 30%;
  }
}

.btn:hover {
  transform: scale(1.1);
}
.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  background-color: #fff;
  opacity: 0.8;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  text-align: center;
  a:nth-child(2) {
    color: #ff00a8;
  }
}

.sidenav a {
  padding: 30px 8px 30px 32px;
  text-decoration: none;
  font-size: 25px;
  font-weight: 800;
  color: #000;
  display: flex;
  transition: 0.3s;
  margin-left: 16%;
}
@media (max-width: 1150px) {
  .sidenav a {
    margin-left: 34%;
    
  }
}
@media (max-width: 640px) {
  .leftSide {
    width: 180px;
  }
  .sidenav a {
    margin-left: 30%;
    font-size: 16px;
  }
}
@media (max-width: 420px) {
  .leftSide {
    width: 80px;
    padding: 40px 16px 40px 16px;
  }
  
}

.sidenav a:hover {
  color: #ff00a8;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}
</style>
