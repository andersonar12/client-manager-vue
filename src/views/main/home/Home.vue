<template>
  <div class="home row d-flex justify-content-center">
    <div class="col-8">
      <h1>Control de Clientes</h1>
      <Table></Table>
    </div>
  </div>
</template>

<script>
import Table from "@/components/Table.vue";
export default {
  name: "Home",
  components: {
    Table,
  },
};
</script>
