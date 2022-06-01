<template>
  <div class="default">
    <headerComp v-show="showArea"/>
    <div class="main-container">
      <slot />
    </div>
    <footerComp v-show="showArea"/>
  </div>
</template>

<script>
import { computed, defineComponent } from "vue";
import footerComp from "./footer.vue";
import headerComp from "./header.vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "DefaultLayout",
  components: {
    footerComp,
    headerComp,
  },
  setup() {
const router = useRouter();
const showArea = computed(()=>{  //讓一些特定頁面，不要出現header and footer
  const routerName = router.currentRoute.value.name
  return routerName ? !['Login'].some(name => routerName === name) : false
})

    return {showArea};
  },
});
</script>

<style lang="scss">
.default {
  @apply flex min-h-screen flex-col mx-auto items-center;
  // max-width: 1024px;

  .main-container {
    @apply mx-auto w-full  text-base flex justify-center;

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
