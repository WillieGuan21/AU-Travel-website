<template>
  <div class="default">
    <headerComp />
    <div class="main-container">
      <slot />
    </div>
    <footerComp class="foot" />
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
  @apply flex min-h-screen flex-col;
  .main-container {
    @apply mx-auto w-full overflow-y-auto;
    // flex: 1 0 0;
    max-width: 1920px;
  }
}
.foot {
  bottom: 0;
  position: fixed;
  width: 100%;
}
</style>
