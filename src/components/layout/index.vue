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
  max-width: 1440px;

  .main-container {
    @apply mx-auto w-full overflow-y-auto text-base;

    // flex: 1 0 0;
  }
}
@media screen and (max-width: 1068) {
  .default {
    max-width: 772px;
  }
}
</style>
