<template>
  <div class="mb-10 p-6 xl:p-0" style="max-width: 1280px">
    <div class="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7">
      <div
        class="circles"
        v-for="(day, index) in days"
        :key="day.id"
        @click="getData(day, index)"
        :style="
          day.isChecked
            ? { 'background-color': '#000AFF', color: '#fff' }
            : null
        "
      >
        {{ day.label }}
      </div>
    </div>
    <div class="mt-10" v-for="item in result" :key="item.id">
      <div
        v-if="item.id % 2 !== 0"
        :class="[item.text ? 'md:grid grid-cols-2 gap-12' : '']"
        class="mb-20"
      >
        <div class="cards">
          <img :src="item.img" />
        </div>

        <div>
          <div
            class="text-blue-500 font-extrabold text-3xl mb-4 sm:text-6xl sm:mb-8"
          >
            {{ item.title }}
          </div>
          <div
            class="text-blue-500 font-extrabold text-3xl mb-6 sm:text-6xl sm:mb-14"
          >
            {{ item.day }}
          </div>
          <div>{{ item.text }}</div>
        </div>
      </div>

      <div
        v-else
        :class="[item.text ? 'md:grid grid-cols-2 gap-8' : '']"
        class="mb-20"
      >
        <div>
          <div
            class="text-blue-500 font-extrabold text-3xl mb-4 sm:text-6xl sm:mb-8"
          >
            {{ item.title }}
          </div>
          <div
            class="text-blue-500 font-extrabold text-3xl mb-6 sm:text-6xl sm:mb-14"
          >
            {{ item.day }}
          </div>
          <div>{{ item.text }}</div>
        </div>
        <div class="cards">
          <img :src="item.img" />
        </div>
      </div>
    </div>

    <div class="gotop" v-show="scY > 300" @click="toTop">
      <i class="pi pi-chevron-up text-white" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { day1, day2, day3, day4, day5, day6, day7 } from "./perthOptions";

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
        case 4:
          result.value = day4;
          break;
        case 5:
          result.value = day5;
          break;
        case 6:
          result.value = day6;
          break;
        case 7:
          result.value = day7;
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

<style lang="scss" scoped>
.circles {
  @apply rounded-full text-center cursor-pointer my-10;
  width: 9.8rem;
  height: 3rem;
  line-height: 3rem;
  font-weight: 800;
  border: solid 3px #000aff;
  color: #000aff;
}
@media (max-width: 1150px) {
  .circles {
    @apply my-3 text-base;
    width: 6.8rem;
    height: 2rem;
    line-height: 2rem;
  }
}
.circles:hover {
  transform: scale(1.1);
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

.card-body {
  @apply absolute  bg-white;
  width: 25rem;
  float: right;
  right: 15px;
  padding: 40px;
  bottom: 16rem;
}

.cards {
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  position: relative;
  img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
  }
}
</style>
