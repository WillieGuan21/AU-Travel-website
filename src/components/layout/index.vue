<template>
  <div class="default">
    <headerComp />
    <div class="main-container">
      <slot />
    </div>
    <footerComp />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import footerComp from "./footer.vue";
import headerComp from "./header.vue";

export default defineComponent({
  name: "DefaultLayout",
  components: {
    footerComp,
    headerComp,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
.default {
  @apply flex min-h-screen flex-col mx-auto;
  max-width: 1024px;

  .main-container {
    @apply mx-auto w-full  text-base;

    // flex: 1 0 0;
  }

  font-family: Verdana, Arial, "Comic Sans MS", STHeiti, "Microsoft JhengHei";
}
@media screen and (max-width: 1068) {
  .default {
    max-width: 772px;
  }
}
</style>
