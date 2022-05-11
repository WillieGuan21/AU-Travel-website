<template>
  <div>
    Test

    <div class="flex">
      <div class="flex items-center mr-4">
        <div class="mr-2">縣市</div>
        <Dropdown
          v-model="myAddress.cityName"
          :options="cityArr"
          optionLabel="Name"
          optionValue="No"
          placeholder="Select a City"
          @change="randerArea"
        />
      </div>
      <div class="flex items-center mr-4">
        <div class="mr-2">行政區</div>
        <Dropdown
          v-model="myAddress.cityArea"
          :options="directArr"
          optionLabel="Name"
          optionValue="No"
          placeholder="Select a area"
          @change="randerStreet"
        />
      </div>
      <div class="flex items-center mr-4">
        <div class="mr-2">路/巷</div>
        <Dropdown
          v-model="myAddress.cityStreet"
          :options="streetArr"
          optionLabel="Name"
          optionValue="No"
          placeholder="Select a street"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

const cityArr = ref([
  { Name: "台北市", No: "01" },
  { Name: "新北市", No: "02" },
  { Name: "台中市", No: "03" },
  { Name: "台南市", No: "04" },
]);

const directArr = ref([]);
const streetArr = ref([]);

const myAddress = ref([]);

const taipeiCity = ref([
  { Name: "松山區", No: "01" },
  { Name: "大同區", No: "02" },
  { Name: "信義區", No: "03" },
  { Name: "木柵區", No: "04" },
]);
const songsangSt = ref([
  { Name: "南京東路一段", No: "01" },
  { Name: "南京東路二段", No: "02" },
]);

const newTaipeiCity = ref([
  { Name: "新莊區", No: "01" },
  { Name: "板橋區", No: "02" },
  { Name: "中和區", No: "03" },
  { Name: "蘆洲區", No: "04" },
]);
const xingstorgSt = ref([
  { Name: "中正路", No: "01" },
  { Name: "新泰路", No: "02" },
]);

const taichungCity = ref([
  { Name: "烏日區", No: "01" },
  { Name: "大甲區", No: "02" },
  { Name: "后里區", No: "03" },
  { Name: "潭子區", No: "04" },
]);
const wuziSt = ref([
  { Name: "台灣大道一段", No: "01" },
  { Name: "水上路三巷", No: "02" },
]);

const tainaCity = ref([
  { Name: "北區", No: "01" },
  { Name: "東區", No: "02" },
  { Name: "仁德區", No: "03" },
  { Name: "關廟區", No: "04" },
]);
const baiSt = ref([
  { Name: "小北路", No: "01" },
  { Name: "大東路", No: "02" },
]);

const randerArea = () => {
  switch (myAddress.value.cityName) {
    case "01":
      directArr.value = taipeiCity.value;
      streetArr.value = [];
      break;
    case "02":
      directArr.value = newTaipeiCity.value;
      streetArr.value = [];
      break;
    case "03":
      directArr.value = taichungCity.value;
      streetArr.value = [];
      break;
    case "04":
      directArr.value = tainaCity.value;
      streetArr.value = [];
      break;
  }
};

const randerStreet = () => {
  const A = myAddress.value.cityName;
  const B = myAddress.value.cityArea;
  if (A === "01") {
    switch (B) {
      case "01":
        streetArr.value = songsangSt.value;
        break;
      default:
        streetArr.value = [];
        break;
    }
  }
  if (A === "02") {
    switch (B) {
      case "01":
        streetArr.value = xingstorgSt.value;
        break;
      default:
        streetArr.value = [];
        break;
    }
  }
  if (A === "03") {
    switch (B) {
      case "01":
        streetArr.value = wuziSt.value;
        break;
      default:
        streetArr.value = [];
        break;
    }
  }
  if (A === "04") {
    switch (B) {
      case "01":
        streetArr.value = baiSt.value;
        break;
      default:
        streetArr.value = [];
        break;
    }
  }
};
</script>
