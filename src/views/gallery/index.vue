<template>
  <div class="test">
    <Galleria
      :value="waterfallList"
      v-model:activeIndex="activeIndex"
      containerStyle="max-width: 850px"
      :circular="true"
      :fullScreen="true"
      :showItemNavigators="true"
      :showThumbnails="false"
      v-model:visible="displayCustom"
    >
      <template #item="slotProps">
        <img
          :src="slotProps.item.src"
          :alt="slotProps.item.alt"
          style="width: 100%; display: block"
        />
      </template>
      <template #thumbnail="slotProps">
        <img :src="slotProps.item.thumb" :alt="slotProps.item.alt" style="display: block" />
      </template>
    </Galleria>
    <div v-if="waterfallList" class="flex justify-center mt-6">
      <div class="v-waterfall-content" id="v-waterfall">
        <div
          v-for="(img, index) in waterfallList"
          :key="index"
          class="v-waterfall-item"
          :style="{
            top: img.top + 'px',
            left: img.left + 'px',
            width: ImgWidth + 'px',
            height: img.height,
          }"
        >
          <img :src="img.src" :alt="img.alt" style="cursor: pointer" @click="imageClick(index)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from "vue";

const activeIndex = ref(0);
const displayCustom = ref(false);
const waterfallList = ref([]);
const imgArr = ref([
  //   "https://fakeimg.pl/200x300/",
  //   "https://fakeimg.pl/300x300/",
  //   "https://fakeimg.pl/200x250/",
  //   "https://fakeimg.pl/300x260/",
  //   "https://fakeimg.pl/400x360/",
  //   "https://fakeimg.pl/350x300/",
  //   "https://fakeimg.pl/200x270/",
  //   "https://fakeimg.pl/420x370/",
  //   "https://fakeimg.pl/460x330/",
  //   "https://fakeimg.pl/460x330/",
  //   "https://fakeimg.pl/300x430/",
  //   "https://fakeimg.pl/280x330/",
  //   "https://fakeimg.pl/360x400/",
  //   "https://fakeimg.pl/490x270/",
  //   "https://fakeimg.pl/430x420/",
  //   "https://fakeimg.pl/290x310/",
  //   "https://fakeimg.pl/310x370/",
  //   "https://fakeimg.pl/350x460/",
  //   "https://fakeimg.pl/440x210/",
  //   "https://fakeimg.pl/240x320/",
]);
const ImgWidth = ref("");
const ImgCol = ref(5);
const ImgRight = ref(10);
const ImgBottom = ref(10);
const deviationHeight = ref([]);
const imgList = ref([]);
// const screenWidth = ref(document.body.clientWidth);
const screenWidth = ref(1024);
const timer = ref(false);

onMounted(() => {
  calculationWidth();
  window.onresize = () => {
    return (() => {
      window.screenWidth = document.body.clientWidth;
      if (window.screenWidth >= 1024) {
        screenWidth.value = 1024;
      } else {
        screenWidth.value = window.screenWidth;
      }
    })();
  };
});
watch(
  screenWidth,
  (cur, pre) => {
    // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
    if (!timer.value) {
      // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
      screenWidth.value = cur;
      timer.value = true;

      setTimeout(function () {
        calculationWidth();
        timer.value = false;
      }, 400);
    }
    window.screenWidth = document.body.clientWidth;
    if (window.screenWidth < 1024) {
      screenWidth.value = window.screenWidth - 40;
    }
  },
  { immediate: true }
);

const getPic = () => {
  // const {data: res} = await axios.get('http://127.0.0.1:5000/pics')
  // 通过访问网络资源模拟获取图片路径
  const res = [
    {
      itemImageSrc: "https://fakeimg.pl/20x30/?text=A",
      thumbnailImageSrc: "https://fakeimg.pl/20x30/?text=A",
      alt: "A",
    },
    {
      itemImageSrc: "https://fakeimg.pl/30x30/?text=A",
      thumbnailImageSrc: "https://fakeimg.pl/300x300/?text=A",
      alt: "A",
    },
    {
      itemImageSrc: "https://fakeimg.pl/200x250/?text=A",
      thumbnailImageSrc: "https://fakeimg.pl/200x250/?text=A",
      alt: "A",
    },
    {
      itemImageSrc: "https://fakeimg.pl/300x260/?text=A",
      thumbnailImageSrc: "https://fakeimg.pl/300x260/?text=A",
      alt: "A",
    },
    {
      itemImageSrc: "https://fakeimg.pl/400x360/?text=A",
      thumbnailImageSrc: "https://fakeimg.pl/400x360/?text=A",
      alt: "A",
    },
    {
      itemImageSrc: "https://fakeimg.pl/200x300/?text=A",
      thumbnailImageSrc: "https://fakeimg.pl/200x300/?text=A",
      alt: "A",
    },
    {
      itemImageSrc: "https://fakeimg.pl/400x360/?text=A",
      thumbnailImageSrc: "https://fakeimg.pl/400x360/?text=A",
      alt: "A",
    },
    {
      itemImageSrc: "https://fakeimg.pl/420x370/?text=A",
      thumbnailImageSrc: "https://fakeimg.pl/420x370/?text=A",
      alt: "A",
    },
    {
      itemImageSrc: "https://fakeimg.pl/200x270/?text=A",
      thumbnailImageSrc: "https://fakeimg.pl/200x270/?text=A",
      alt: "A",
    },
    {
      itemImageSrc: "https://fakeimg.pl/420x370/?text=A",
      thumbnailImageSrc: "https://fakeimg.pl/420x370/?text=A",
      alt: "A",
    },
    {
      itemImageSrc: "https://fakeimg.pl/460x330/?text=A",
      thumbnailImageSrc: "https://fakeimg.pl/460x330/?text=A",
      alt: "A",
    },
    {
      itemImageSrc: "https://fakeimg.pl/300x430/?text=A",
      thumbnailImageSrc: "https://fakeimg.pl/300x430/?text=A",
      alt: "A",
    },
    {
      itemImageSrc: "https://fakeimg.pl/280x330/?text=A",
      thumbnailImageSrc: "https://fakeimg.pl/280x330/?text=A",
      alt: "A",
    },
    {
      itemImageSrc: "https://fakeimg.pl/360x400/?text=A",
      thumbnailImageSrc: "https://fakeimg.pl/360x400/?text=A",
      alt: "A",
    },
    {
      itemImageSrc: "https://fakeimg.pl/490x270/?text=A",
      thumbnailImageSrc: "https://fakeimg.pl/490x270/?text=A",
      alt: "A",
    },
    {
      itemImageSrc: "https://fakeimg.pl/430x420/?text=A",
      thumbnailImageSrc: "https://fakeimg.pl/430x420/?text=A",
      alt: "A",
    },
    {
      itemImageSrc: "https://fakeimg.pl/320x420/?text=A",
      thumbnailImageSrc: "https://fakeimg.pl/320x420/?text=A",
      alt: "A",
    },
    {
      itemImageSrc: "https://fakeimg.pl/270x320/?text=A",
      thumbnailImageSrc: "https://fakeimg.pl/270x320/?text=A",
      alt: "A",
    },
    {
      itemImageSrc: "https://fakeimg.pl/450x240/?text=A",
      thumbnailImageSrc: "https://fakeimg.pl/450x240/?text=A",
      alt: "A",
    },
    {
      itemImageSrc: "https://fakeimg.pl/380x310/?text=A",
      thumbnailImageSrc: "https://fakeimg.pl/380x310/?text=A",
      alt: "A",
    },
    {
      itemImageSrc: "https://fakeimg.pl/330x460/?text=A",
      thumbnailImageSrc: "https://fakeimg.pl/330x460/?text=A",
      alt: "A",
    },
    {
      itemImageSrc: "https://fakeimg.pl/640x300/?text=A",
      thumbnailImageSrc: "https://fakeimg.pl/640x300/?text=A",
      alt: "A",
    },
    {
      itemImageSrc: "https://fakeimg.pl/460x600/?text=A",
      thumbnailImageSrc: "https://fakeimg.pl/460x600/?text=A",
      alt: "A",
    },
    {
      itemImageSrc: "https://fakeimg.pl/200x500/?text=A",
      thumbnailImageSrc: "https://fakeimg.pl/200x500/?text=A",
      alt: "A",
    },
  ];

  imgArr.value.push(...res);
  for (let i = 0; i < imgArr.value.length; i++) {
    imgList.value.push(imgArr.value[i]);
  }
};
const imageClick = (index) => {
  activeIndex.value = index;
  displayCustom.value = true;
};

//计算每个图片的宽度
const calculationWidth = () => {
  ImgWidth.value = (screenWidth.value - ImgRight.value * ImgCol.value) / ImgCol.value;
  //初始化偏移高度数组
  deviationHeight.value = new Array(ImgCol.value);
  for (let i = 0; i < deviationHeight.value.length; i++) {
    deviationHeight.value[i] = 0;
  }
  imgPreloading();
};
//图片预加载
const imgPreloading = () => {
  waterfallList.value = [];
  for (let i = 0; i < imgList.value.length; i++) {
    let aImg = new Image();
    aImg.src = imgList.value[i].itemImageSrc;
    aImg.onload = aImg.onerror = () => {
      let imgData = {};
      //按比例计算图片高度
      imgData.height = (ImgWidth.value / aImg.width) * aImg.height;
      imgData.src = imgList.value[i].itemImageSrc;
      imgData.thumb = imgList.value[i].thumbnailImageSrc;
      imgData.alt = imgList.value[i].alt;
      waterfallList.value.push(imgData);
      rankImg(imgData);
    };
  }
};
//瀑布流布局
const rankImg = (imgData) => {
  let minIndex = filterMin();
  imgData.top = deviationHeight.value[minIndex];
  imgData.left = minIndex * (ImgRight.value + ImgWidth.value);
  deviationHeight.value[minIndex] += imgData.height + ImgBottom.value;
};
//找到最短的列并返回下标
const filterMin = () => {
  const min = Math.min.apply(null, deviationHeight.value);
  return deviationHeight.value.indexOf(min);
};

const aa = () => {
  window.screenWidth = document.body.clientWidth;
  if (window.screenWidth < 1024) {
    console.log(window.screenWidth);
  }
};
getPic();
</script>

<style scoped>
.test {
  overflow-y: auto;
  overflow-x: hidden;
}
.v-waterfall-content {
  width: 1024px;
  height: 83vh;
  position: relative;
  /* margin: auto; */
  margin-left: 20px;
  margin-right: 20px;
}
.v-waterfall-item {
  position: absolute;
}
.v-waterfall-item img {
  width: 100%;
  height: 100%;
  border-radius: 15px;
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 30%);
}
</style>
