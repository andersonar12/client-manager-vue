<template>
  <section class="main">
    <Navbar></Navbar>
    <div class="container-fluid">
      <router-view />
    </div>
  </section>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Main",
  components: {
    Navbar,
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss"></style>
