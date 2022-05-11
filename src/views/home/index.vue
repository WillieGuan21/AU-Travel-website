<template>
  <div class="mb-10 p-6" style="max-width: 1024px">
    <div>
      <!-- <img src="https://fakeimg.pl/1920x1080/" /> -->

      <Carousel
        :value="mycarousel"
        :numVisible="1"
        :numScroll="1"
        :circular="true"
        :autoplayInterval="3000"
      >
        <template #item="slotProps">
          <div class="product-item">
            <div class="product-item-content">
              <div class="p-mb-3">
                <img :src="slotProps.data.img" :alt="slotProps.data.name" class="product-image" />
              </div>
            </div>
          </div>
        </template>
      </Carousel>
    </div>
    <div class="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2">
      <div class="m-auto"><img src="https://fakeimg.pl/500x400/" /></div>
      <div>
        <p>
          In 2020 We back to Australia, for us that was really excited. After a long time, to entries Australia at Perth was feeling like yesterday. In last year COVID-19
           devour the world, we were lucky been save and enjoy this journey, and this journey was my pre-wedding photos. It means a lot to me in here, because Perth is the first place when I come in Australia,
            and in Australia was I fall in love with my wife. That's go to see our traveling. 
        </p>
        <Button label="See More" class="mt-5" @click="changeRouter" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const mycarousel = ref([
      {
        img: "https://fakeimg.pl/1920x1080/?text=Hello",
        name: "Hello",
      },
      {
        img: "https://fakeimg.pl/1920x1080/?text=Kenar",
        name: "Kenar",
      },
      {
        img: "https://fakeimg.pl/1920x1080/?text=Paramer",
        name: "Paramer",
      },
    ]);
    const router = useRouter();
    const changeRouter = () => {
      router.push({ name: "Journey" });
    };

    return { mycarousel, changeRouter };
  },
};
</script>

<style></style>
