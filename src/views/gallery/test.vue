<template>
  <div>
    <div id="slider">
      <transition-group tag="div" :name="transitionName" class="slides-group">
        <div v-if="show" :key="current" class="slide" >
          <img :src="slides[current].image" />
        </div>
      </transition-group>
      <div class="btn btn-prev" aria-label="Previous slide" @click="slide(-1)">
        &#10094;
      </div>
      <div class="btn btn-next" aria-label="Next slide" @click="slide(1)">
        &#10095
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";

import photo1 from "../../assets/p1.png";
import photo2 from "../../assets/p2.png";


const current= ref(0) 
const direction=ref(1)
const transitionName=ref("fade")
const show=ref(false)
const slides=ref([
  { image: photo1 },
  { image: photo2 },
])
const slide=(dir)=> {
      direction.value = dir;
      dir === 1
        ? (transitionName.value = "slide-next")
        : (transitionName.value = "slide-prev");
      const len = slides.value.length;
      current.value = (current.value + dir % len + len) % len;
    }
onMounted(()=>{
  show.value = true
})
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Crimson+Text");

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

#slider {
  width: 100%;
  height: 100vh;
  position: relative;
}

.slide {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn {
  z-index: 10;
  cursor: pointer;
  border: 3px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  position: absolute;
  top: calc(50% - 35px);
  left: 1%;
  transition: transform 0.3s ease-in-out;
  user-select: none;
}

.btn-next {
  left: auto;
  right: 1%;
}

.btn:hover {
  transform: scale(1.1);
}


</style>
