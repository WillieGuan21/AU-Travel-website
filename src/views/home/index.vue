<template>
  <div class="mb-10 p-6">
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
    <div class="grid grid-cols-2 gap-4 mt-6">
      <div><img src="https://fakeimg.pl/500x400/" /></div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque iaculis consectetur
          dolor, at pellentesque leo rutrum porta. Sed interdum justo vel nisi sagittis elementum.
          Nullam nunc est, efficitur at mauris et, fringilla aliquam risus. Praesent faucibus enim
          nec eleifend rutrum. Phasellus vel odio vitae urna pharetra tincidunt pretium quis ligula.
          Quisque id varius dui, eu sodales orci.
        </p>
        <Button label="See More" class="mt-5" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

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

    return { mycarousel };
  },
};
</script>

<style></style>
