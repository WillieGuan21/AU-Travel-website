<template>
  <div class="mb-10 px-6">
    <div class="grid grid-cols-4 sm:grid-cols-7">
      <div
        class="circles"
        v-for="(day, index) in days"
        :key="day.id"
        @click="getData(day, index)"
        :style="day.isChecked ? { 'background-color': '#98aeab' } : null"
      >
        {{ day.label }}
      </div>
    </div>
    <div class="mt-10" v-for="item in result" :key="item.id">
      <div class="text-xl font-bold">{{ item.title }}</div>
      <div class="text-base">2001/08/11</div>
      <div :class="[item.text ? 'md:grid grid-cols-2 gap-4' : '']">
        <img :src="item.img" />
        <div class="text-base">{{ item.text }}</div>
      </div>
    </div>

    <div class="circles gotop" v-show="scY > 300" @click="toTop">
      <i class="pi pi-chevron-up" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { day1, day2, day3 } from "./perthOptions";

export default {
  setup() {
    const days = ref([
      { label: "Day1", value: 1, isChecked: true },
      { label: "Day2", value: 2, isChecked: false },
      { label: "Day3", value: 3, isChecked: false },
      { label: "Day4", value: 4, isChecked: false },
      { label: "Day5", value: 5, isChecked: false },
      { label: "Day6", value: 6, isChecked: false },
      { label: "Day7", value: 7, isChecked: false },
    ]);

    const result = ref([]);
    const getData = (e, id) => {
      e.isChecked = true;
      switch (e.value) {
        case 1:
          result.value = day1;
          break;
        case 2:
          result.value = day2;
          break;
        case 3:
          result.value = day3;
          break;
      }
      days.value.forEach((item) => {
        if (item.label === e.label) {
          return;
        } else {
          item.isChecked = false;
        }
      });
    };
    getData({ label: "Day1", value: 1 });

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

    return { days, getData, result, scY, toTop };
  },
};
</script>

<style scoped>
.circles {
  @apply rounded-full text-center cursor-pointer my-10;
  width: 6rem;
  height: 6rem;
  line-height: 6rem;
  background-color: #dbc8aa;
}
@media (max-width: 640px) {
  .circles {
    @apply my-3 text-base;
    width: 4rem;
    height: 4rem;
    line-height: 4rem;
  }
}
.circles:hover {
  transform: scale(1.1);
}
.gotop {
  width: 3rem;
  height: 3rem;
  line-height: 3rem;
  margin: 0;
  background-color: #636069;
  position: fixed;
  right: 1rem;
  bottom: 3rem;
}
</style>
