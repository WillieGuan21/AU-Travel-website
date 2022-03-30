<template>
  <div class="header">
    <Menubar :model="functionList" @click.stop="menuClickEvent">
      <template #start>
        <div class="mr-5 font-bold text-3xl cursor-pointer" @click="getHomeEvent">
          Travel Memory
        </div>
      </template>
    </Menubar>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const userInfo = computed(() => ({
      id: store.state.user.id,
      name: store.state.user.name,
    }));
    const functionList = ref([
      {
        label: "About",
      },
      {
        label: "Journey",
      },
      {
        label: "Gallery",
      },
    ]);

    const routeObj = router.options.routes.reduce(
      (acc, route) => (route.meta.title ? { ...acc, [route.meta.title]: route.name } : acc),
      {}
    );

    function menuClickEvent(e) {
      if (e.target.innerText && routeObj[e.target.innerText])
        router.push({ name: routeObj[e.target.innerText] });
    }

    function getHomeEvent() {
      router.push({ name: "Home" });
    }

    return { userInfo, functionList, getHomeEvent, menuClickEvent };
  },
};
</script>

<style lang="scss" scoped>
.header {
  @apply border-b;
  // background-color: ;

  .p-menubar {
    @apply bg-transparent border-0 text-black;
  }

  ::v-deep(.p-menubar-root-list) {
    @apply py-1;
  }
  ::v-deep(.p-menuitem) {
    .p-menuitem-text,
    .p-submenu-icon {
      color: black !important;
    }
    font-size: 21px;
    &:hover,
    &.p-menuitem-active {
      .p-menuitem-text,
      .p-submenu-icon {
        color: #000 !important;
      }
    }
  }
  ::v-deep(.p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:focus) {
    box-shadow: none;
  }
}
</style>
