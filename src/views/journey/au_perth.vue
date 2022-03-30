<template>
  <div class="mb-10 px-6">
    <div class="grid grid-cols-4 sm:grid-cols-7">
      <div class="circles" v-for="day in days" :key="day.id" @click="getData(day.value)">
        {{ day.label }}
      </div>
    </div>
    <div class="mt-10" v-for="item in result" :key="item.id">
      <div class="text-2xl">{{ item.title }}</div>
      <div class="text-xl">2001/08/11</div>
      <img :src="item.img" />
      <div class="text-xl">{{ item.text }}</div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { day1, day2, day3 } from "./perthOptions";

export default {
  setup() {
    const days = ref([
      { label: "Day1", value: "1" },
      { label: "Day2", value: "2" },
      { label: "Day3", value: "3" },
      { label: "Day4", value: "4" },
      { label: "Day5", value: "5" },
      { label: "Day6", value: "6" },
      { label: "Day7", value: "7" },
    ]);

    const result = ref([]);
    const getData = (e) => {
      switch (e) {
        case "1":
          result.value = day1;
          break;
        case "2":
          result.value = day2;
          break;
        case "3":
          result.value = day3;
          break;
      }
    };
    getData("1");

    return { days, getData, result };
  },
};
</script>

<style scoped>
.circles {
  @apply bg-yellow-500 rounded-full text-center cursor-pointer my-10;
  width: 6rem;
  height: 6rem;
  line-height: 6rem;
}
@media (max-width: 640px) {
  .circles {
    @apply my-3 text-xs;
    width: 3rem;
    height: 3rem;
    line-height: 3rem;
  }
}
.circles:hover {
  transform: scale(1.1);
}
</style>
