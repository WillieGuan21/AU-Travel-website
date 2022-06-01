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
      itemImageSrc: "https://i.imgur.com/ESKa44x.jpg",
      thumbnailImageSrc: "https://i.imgur.com/ESKa44x.jpg",
      alt: "Perth Airport",
    },
    {
      itemImageSrc: "https://i.imgur.com/S0WjhnW.jpg",
      thumbnailImageSrc: "https://i.imgur.com/S0WjhnW.jpg",
      alt: "rold",
    },
    {
      itemImageSrc: "https://i.imgur.com/ZpDVfIl.jpg",
      thumbnailImageSrc: "https://i.imgur.com/ZpDVfIl.jpg",
      alt: "dinner",
    },
    {
      itemImageSrc: "https://i.imgur.com/HGsaZH2.png",
      thumbnailImageSrc: "https://i.imgur.com/HGsaZH2.png",
      alt: "Nature's window",
    },
    {
      itemImageSrc: "https://i.imgur.com/6ab6yYt.jpg",
      thumbnailImageSrc: "https://i.imgur.com/6ab6yYt.jpg",
      alt: "Hutt Lagoon",
    },
    {
      itemImageSrc: "https://i.imgur.com/GA8xMe2.jpg",
      thumbnailImageSrc: "https://i.imgur.com/GA8xMe2.jpg",
      alt: "Hutt Lagoon",
    },
    {
      itemImageSrc: "https://i.imgur.com/hLoPlod.jpg",
      thumbnailImageSrc: "https://i.imgur.com/hLoPlod.jpg",
      alt: "Pinnacles Desert Discovery",
    },
    {
      itemImageSrc: "https://i.imgur.com/rCAWWaO.jpg",
      thumbnailImageSrc: "https://i.imgur.com/rCAWWaO.jpg",
      alt: "Cervantes",
    },
    {
      itemImageSrc: "https://i.imgur.com/H7JS0ne.jpg",
      thumbnailImageSrc: "https://i.imgur.com/H7JS0ne.jpg",
      alt: "Hangover Bay",
    },
    {
      itemImageSrc: "https://i.imgur.com/vA1BwxW.jpg",
      thumbnailImageSrc: "https://i.imgur.com/vA1BwxW.jpg",
      alt: "dinner",
    },
    {
      itemImageSrc: "https://i.imgur.com/nHYniiS.jpg",
      thumbnailImageSrc: "https://i.imgur.com/nHYniiS.jpg",
      alt: "Sea Lion",
    },
    {
      itemImageSrc: "https://i.imgur.com/Ky7u8ON.jpg",
      thumbnailImageSrc: "https://i.imgur.com/Ky7u8ON.jpg",
      alt: "lunch",
    },
    {
      itemImageSrc: "https://i.imgur.com/jsMEiR7.jpg",
      thumbnailImageSrc: "https://i.imgur.com/jsMEiR7.jpg",
      alt: "Lancelin Sand Dunes",
    },
    {
      itemImageSrc: "https://i.imgur.com/vNfifeM.jpg",
      thumbnailImageSrc: "https://i.imgur.com/vNfifeM.jpg",
      alt: "Yanchep National Park",
    },
    {
      itemImageSrc: "https://i.imgur.com/Dy8T4zG.jpg",
      thumbnailImageSrc: "https://i.imgur.com/Dy8T4zG.jpg",
      alt: "Blue Boot House",
    },
    {
      itemImageSrc: "https://i.imgur.com/luQT7l5.jpg",
      thumbnailImageSrc: "https://i.imgur.com/luQT7l5.jpg",
      alt: "Kings Park",
    },
    {
      itemImageSrc: "https://i.imgur.com/qVydJUu.jpg",
      thumbnailImageSrc: "https://i.imgur.com/qVydJUu.jpg",
      alt: "Caversham Wildlife Park",
    },
    {
      itemImageSrc: "https://i.imgur.com/IVtIjxm.jpg",
      thumbnailImageSrc: "https://i.imgur.com/IVtIjxm.jpg",
      alt: "dinner",
    },
    {
      itemImageSrc: "https://i.imgur.com/SVuKuFf.jpg",
      thumbnailImageSrc: "https://i.imgur.com/SVuKuFf.jpg",
      alt: "view",
    },
    {
      itemImageSrc: "https://i.imgur.com/mETo7jp.jpg",
      thumbnailImageSrc: "https://i.imgur.com/mETo7jp.jpg",
      alt: "Rottnest Island",
    },
    {
      itemImageSrc: "https://i.imgur.com/FPctN9b.jpg",
      thumbnailImageSrc: "https://i.imgur.com/FPctN9b.jpg",
      alt: "Rottnest Island",
    },
    {
      itemImageSrc: "https://i.imgur.com/Ra8l8mz.jpg",
      thumbnailImageSrc: "https://i.imgur.com/Ra8l8mz.jpg",
      alt: "dinner",
    },
    {
      itemImageSrc: "https://i.imgur.com/kSn13Fb.jpg",
      thumbnailImageSrc: "https://i.imgur.com/kSn13Fb.jpg",
      alt: "Perth CBD",
    },
    {
      itemImageSrc: "https://i.imgur.com/ZdJmvKk.jpg",
      thumbnailImageSrc: "https://i.imgur.com/ZdJmvKk.jpg",
      alt: "Perth CBD",
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
