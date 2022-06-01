<template>
  <div class="header xl:p-0 w-full">
    <Menubar
      class="cushead"
      :model="functionList"
      :exact="true"
      @click.stop="menuClickEvent"
    >
      <template #start>
        <div
          class="mr-5 font-bold text-xl cursor-pointer"
          @click="getHomeEvent"
        >
          <i
            class="pi pi-home text-black cursor-pointer text-3xl hover:text-blue-500"
          />
        </div>
      </template>
      <template #item="{ item }">
        <div class="mr-10 navbarItem">
          <a
            :class="[item.label, { underLind: item.underline }]"
            :style="{ color: item.color }"
            >{{ item.label }}</a
          >
        </div>
      </template>
    </Menubar>
  </div>
</template>

<script>
import { computed, ref, watch } from "vue";
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
    const Introduce = computed(() => {
      //取store state 名稱
      // return store.state.place;
      return sessionStorage.getItem("currName");
    });
    watch(Introduce, (cur, old) => {}, {
      immediate: true,
    });

    const functionList = ref([
      {
        label: Introduce,
        color: "red",
        underline: false,
      },
      {
        label: "JOURNEY",
        color: "",
        underline: false,
      },
      {
        label: "GALLERY",
        color: "",
        underline: false,
      },
      // {
      //   label: "test",
      // },
    ]);

    const routeObj = router.options.routes.reduce(
      (acc, route) =>
        route.meta.title ? { ...acc, [route.meta.title]: route.name } : acc,
      {}
    );

    function menuClickEvent(e) {
      if (e.target.innerText && routeObj[e.target.innerText])
        router.push({ name: routeObj[e.target.innerText] });
    }

    function getHomeEvent() {
      router.push({ name: "Login" });
    }
    const currName = computed(() => {
      const routerName = router.currentRoute.value.name;
      return ["WESTERN AUSTRALIA", "JOURNEY", "GALLERY"].includes(routerName);
    });

    const isActive = computed(() => {
      //改變點擊後的顏色
      const routerName = router.currentRoute.value.name;
      functionList.value.forEach((i) => {
        if (i.label === routerName) {
          return (i.color = "#000aff"), (i.underline = true);
        } else {
          return (i.color = ""), (i.underline = false);
        }
      });
    });

    watch(isActive, (cur, pre) => {}, { immediate: true }); //用watch去監聽 isActive

    const aa = document.getElementsByClassName("p-menubar-mobile-active");
    console.log(aa);
    return { userInfo, functionList, getHomeEvent, menuClickEvent, currName };
  },
};
</script>

<style lang="scss" scoped>
.header {
  @apply w-full shadow-md;
  // padding: 60px 80px 0px 87px;

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
      border-bottom: solid 2px red;
    }
    font-size: 18px;
    font-weight: 800;
    &:hover,
    &.p-menuitem-active {
      .p-menuitem-text,
      .p-submenu-icon {
        color: #000aff !important;
      }
    }
  }
  ::v-deep(.p-menubar) {
    padding: 60px 80px 0px 80px;
  }

  ::v-deep(.p-menubar
      .p-menubar-root-list
      > .p-menuitem
      > .p-menuitem-link:focus) {
    box-shadow: none;
  }
  ::v-deep(.p-menubar
      .p-menubar-root-list
      > .p-menuitem
      > .p-menuitem-link:hover) {
    background: none;
  }
}
@media (max-width: 960px) {
  .header {
    ::v-deep(.p-menubar) {
      padding: 60px 80px 0px 80px;
    }
  }
  ::v-deep(.p-menubar .p-menubar-button) {
    right: 0;
    margin-left: auto;
    .pi {
      font-size: 30px;
      color: #000;
    }
  }
  ::v-deep(.p-menubar.p-menubar-mobile-active .p-menubar-root-list) {
    text-align: center;
    background: white;
    box-shadow: none;
    width: 100% !important;
    li {
      margin: 30px;
    }
  }
  ::v-deep(.p-menubar-mobile-active) {
    .header {
      padding-bottom: 100%;
    }
  }
}

@media (max-width: 420px) {
  .header {
    ::v-deep(.p-menubar) {
      padding: 40px 16px 0px 16px;
    }
  }
}
.navbarItem:hover {
  color: #000aff;
  cursor: pointer;
}
.underLind {
  display: inline-block;
  padding-bottom: 0px; /* to give some gap between text and border */
  background: linear-gradient(to right, #000aff, #000aff);
  background-repeat: no-repeat;
  background-size: 50px 2px;
  background-position: 0% 100%;
}
</style>
