<template>
  <div class="home row d-flex justify-content-center">
    <div class="col-8">
      <h1>Control de Clientes</h1>
      <button
        type="button"
        class="btn btn-success btn-sm mb-3"
        @click="addClient()"
      >
        Añadir Cliente
      </button>
      <Table :clients="clients"></Table>
    </div>
  </div>
</template>

<script>
import Table from "@/components/Table.vue";
import { onMounted } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";
export default {
  name: "Home",
  components: {
    Table,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const clients = computed(() => store.state.clients);

    onMounted(async () => {
      await store.dispatch("getClients");
    });

    const addClient = () => {
      router.push({
        name: "Client",
        params: { id: "new" },
      });
    };
    return {
      addClient,
      clients,
    };
  },
};
</script>
