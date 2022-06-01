<template>
  <Layout>
    <router-view class="" style="flex: 1 0 0" />
  </Layout>
</template>

<script>
import Layout from "./components/layout/index.vue";
// import Layout from "./views/login.vue"
export default {
  components: { Layout},
  setup() {
    return {};
  },
};
</script>

<style lang="scss">
@import "./styles/main.scss";
</style>
