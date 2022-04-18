<template>
  <div class="mb-10 p-6">
    <!-- <div>
      <img src="https://fakeimg.pl/1920x1080/" />
    </div>
    <div class="grid grid-cols-2 gap-5">
      <div class="flex items-center"><img class="w-full" src="https://fakeimg.pl/300x200/" /></div>
      <div><img class="w-full" src="https://fakeimg.pl/300x300/" /></div>
      <div><img class="w-full" src="https://fakeimg.pl/290x580/" /></div>
    </div> -->
    <Galleria
      :value="pic_list"
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
          :src="slotProps.item.itemImageSrc"
          :alt="slotProps.item.alt"
          style="width: 100%; display: block"
        />
      </template>
      <template #thumbnail="slotProps">
        <img
          :src="slotProps.item.thumbnailImageSrc"
          :alt="slotProps.item.alt"
          style="display: block"
        />
      </template>
    </Galleria>

    <div v-if="pic_list">
      <!-- class="grid grid-cols-4 gap-4" -->
      <!-- <div v-for="(image, index) of images" style="max-width: 400px" :key="index">
        <img
          :src="image.thumbnailImageSrc"
          :alt="image.alt"
          style="cursor: pointer"
          @click="imageClick(index)"
        />
      </div> -->
      <div id="big-box" class="container">
        <div class="box" v-for="(image, index) in pic_list" :key="index">
          <img
            :src="image.thumbnailImageSrc"
            :alt="image.alt"
            style="cursor: pointer"
            @click="imageClick(index)"
          />
        </div>
      </div>
    </div>
    <!-- <div class="wrapper">
      <div id="big-box" class="container">
        <div class="box" v-for="(item, index) in pic_list" :key="index">
          <img :src="item" />
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import { onMounted, ref, nextTick } from "vue";

export default {
  setup() {
    const images = ref([
      {
        itemImageSrc: "https://fakeimg.pl/1920x1080/?text=A",
        thumbnailImageSrc: "https://fakeimg.pl/1920x1080/?text=A",
        alt: "A",
      },
      {
        itemImageSrc: "https://fakeimg.pl/1920x1080/?text=B",
        thumbnailImageSrc: "https://fakeimg.pl/1920x1080/?text=B",
        alt: "B",
      },
      {
        itemImageSrc: "https://fakeimg.pl/1920x1080/?text=C",
        thumbnailImageSrc: "https://fakeimg.pl/1920x1080/?text=C",
        alt: "C",
      },
      {
        itemImageSrc: "https://fakeimg.pl/1920x1080/?text=D",
        thumbnailImageSrc: "https://fakeimg.pl/1920x1080/?text=D",
        alt: "D",
      },
      {
        itemImageSrc: "https://fakeimg.pl/1920x1080/?text=E",
        thumbnailImageSrc: "https://fakeimg.pl/1920x1080/?text=E",
        alt: "E",
      },
      {
        itemImageSrc: "https://fakeimg.pl/1920x1080/?text=F",
        thumbnailImageSrc: "https://fakeimg.pl/1920x1080/?text=F",
        alt: "F",
      },
      {
        itemImageSrc: "https://fakeimg.pl/1920x1080/?text=G",
        thumbnailImageSrc: "https://fakeimg.pl/1920x1080/?text=G",
        alt: "G",
      },
      {
        itemImageSrc: "https://fakeimg.pl/1920x1080/?text=H",
        thumbnailImageSrc: "https://fakeimg.pl/1920x1080/?text=H",
        alt: "H",
      },
      {
        itemImageSrc: "https://fakeimg.pl/1920x1080/?text=I",
        thumbnailImageSrc: "https://fakeimg.pl/1920x1080/?text=I",
        alt: "I",
      },
      {
        itemImageSrc: "https://fakeimg.pl/1920x1080/?text=J",
        thumbnailImageSrc: "https://fakeimg.pl/1920x1080/?text=J",
        alt: "J",
      },
      {
        itemImageSrc: "https://fakeimg.pl/1920x1080/?text=K",
        thumbnailImageSrc: "https://fakeimg.pl/1920x1080/?text=K",
        alt: "K",
      },
    ]);
    const activeIndex = ref(0);
    const displayCustom = ref(false);
    const imageClick = (index) => {
      activeIndex.value = index;
      displayCustom.value = true;
    };

    const myimages = ref([
      {
        itemImageSrc: "https://fakeimg.pl/200x300/?text=A",
        thumbnailImageSrc: "https://fakeimg.pl/200x300/?text=A",
        alt: "A",
      },
      {
        itemImageSrc: "https://fakeimg.pl/300x300/?text=A",
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
    ]);
    //-------------------------------------------------------------

    const isReSize = ref(false); // 窗口尺寸是否发生变化
    const lock = ref(true); // 锁
    const pic_list = ref([]);
    const arr = ref([]); // 存放每一列的最小高度
    const loadCount = ref(0); // 已经布局好的元素下标

    const waterFall = () => {
      const columns = 3; // 列数
      const gap = 10; // 间隔
      const itemWidth = ~~(getClient().width / columns - gap);
      const box = document.getElementById("big-box");
      const items = box.children;

      // 窗口尺寸发生变化时，全部box重新布局
      if (isReSize.value) {
        loadCount.value = 0;
        arr.value = [];
        isReSize.value = false;
      }

      for (let i = loadCount.value; i < items.length; i++, loadCount.value++) {
        // 获取图片元素
        const img = items[i].getElementsByTagName("img")[0];
        // 图片有缓存时直接布局(主要在窗口尺寸变化时调用)
        if (img.complete) {
          reflow(items[i], itemWidth, columns, gap);
        }
        // 图片无缓存时先对加载速度快的图片进行布局
        else {
          img.addEventListener("load", () => {
            reflow(items[i], itemWidth, columns, gap);
          });
        }
      }
    };

    const reflow = (el, itemWidth, columns, gap) => {
      el.style.width = itemWidth + "px";

      // 第一行
      if (arr.value.length < columns) {
        el.style.top = 0;
        el.style.left = (itemWidth + gap) * arr.value.length + "px";
        arr.value.push(el.offsetHeight);
      }

      // 其他行
      else {
        // 最小的列高度
        const minHeight = Math.min(...arr.value);
        // 当前高度最小的列下标
        const index = arr.value.indexOf(minHeight);
        // console.log(index, minHeight)

        el.style.top = minHeight + gap + "px";
        el.style.left = (itemWidth + gap) * index + "px";

        arr.value[index] = arr.value[index] + el.offsetHeight + gap;
      }
    };

    // 获取页面宽度
    const getClient = () => {
      const SCROLL_WIDTH = 20;
      return {
        width: window.innerWidth - SCROLL_WIDTH,
      };
    };

    // 延迟函数，防止短时间内执行多次
    const wait = (func, time = 300) => {
      if (lock.value) {
        lock.value = false;
        setTimeout(() => {
          func;
          lock.value = true;
        }, time);
      }
    };

    const getPic = async () => {
      // const {data: res} = await axios.get('http://127.0.0.1:5000/pics')

      // 通过访问网络资源模拟获取图片路径
      const res = [
        {
          itemImageSrc: "https://fakeimg.pl/200x300/?text=A",
          thumbnailImageSrc: "https://fakeimg.pl/200x300/?text=A",
          alt: "A",
        },
        {
          itemImageSrc: "https://fakeimg.pl/300x300/?text=A",
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
        // "https://fakeimg.pl/200x300/",
        // "https://fakeimg.pl/300x300/",
        // "https://fakeimg.pl/200x250/",
        // "https://fakeimg.pl/300x260/",
        // "https://fakeimg.pl/400x360/",
        // "https://fakeimg.pl/350x300/",
        // "https://fakeimg.pl/200x270/",
        // "https://fakeimg.pl/420x370/",
        // "https://fakeimg.pl/460x330/",
        // "https://fakeimg.pl/460x330/",
        // "https://fakeimg.pl/300x430/",
        // "https://fakeimg.pl/280x330/",
        // "https://fakeimg.pl/360x400/",
        // "https://fakeimg.pl/490x270/",
        // "https://fakeimg.pl/430x420/",
        // "https://fakeimg.pl/290x310/",
        // "https://fakeimg.pl/310x370/",
        // "https://fakeimg.pl/350x460/",
        // "https://fakeimg.pl/440x210/",
        // "https://fakeimg.pl/240x320/",
      ];

      pic_list.value.push(...res);
      await nextTick();
      waterFall();
    };

    onMounted(() => {
      getPic();
      // 窗口尺寸变化事件
      window.addEventListener("resize", () => {
        isReSize.value = true;
        wait(waterFall());
      });
      // 窗口滚动事件
      window.addEventListener("scroll", () => {
        wait(() => {
          // 是否滚动到底部
          const IS_BOTTOM =
            document.documentElement.scrollHeight - document.documentElement.scrollTop <=
            document.documentElement.clientHeight;
          if (IS_BOTTOM) {
            getPic();
            console.log("到底了");
          }
        });
      });
    });

    return { activeIndex, displayCustom, imageClick, images, pic_list, myimages };
  },
};
</script>

<style scoped>
.wrapper {
  /* width: 90%; */
}
.container {
  height: 78vh;
  position: relative;
}

.box {
  position: absolute;
  width: 0;
  /* 设置0是为了布局时才显示图片，防止看到图片都在第一张的位置上堆叠 */
  height: auto;
}

.box img {
  width: 100%;
  display: block;
  border-radius: 15px;
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 30%);
}
/* .wrapper {
  width: 90%;
  margin: 20px 35px 0;
}
#photos__container {
  width: 100vw;
}
.photo {
  width: 161px;
  height: auto;
  position: absolute;
}
.photo img {
  width: 100%;
  display: block;
  border-radius: 15px;
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 30%);
} */
</style>
