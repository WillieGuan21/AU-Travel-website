<template>
  <div>
    Test
    <div>
      <button @click="sortType = 1">Sort by A-Z</button>
      <button @click="sortType = 2">Sort by Z-A</button>
      <button @click="sortType = 0">Orangal</button>
    </div>
    <input type="text" v-model="keyword" />
    <div v-for="(n, index) of search" :key="index">
      <div>{{ n.name }} - {{ n.age }}</div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

const keyword = ref("");
const _data = ref([
  { name: "vivi", age: 22 },
  { name: "nick", age: 15 },
  { name: "kate", age: 24 },
]);

const sortType = ref(0);

const search = computed(() => {
  const arr = _data.value.filter((item) => {
    return item.name.indexOf(keyword.value) !== -1;
  });
  if (sortType.value) {
    arr.sort((a, b) => {
      return sortType.value == 1 ? a.age - b.age : b.age - a.age;
    });
  }
  return arr;
});
</script>
