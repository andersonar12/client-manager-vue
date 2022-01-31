<template>
  <GDialog
    v-model="modalVisible"
    max-width="900"
    persistent
    :overlay-background="true"
  >
    <div class="p-3">
      <h2 class="text-center"><strong>Información</strong></h2>
      <div v-if="info">
        <h4>{{ info["name"] }}</h4>
        <pre>{{ info }}</pre>
      </div>
      <hr />
      <div class="d-flex justify-content-between">
        <button class="btn btn-primary">Guardar</button>
        <button class="btn btn-danger" @click="closeModal()">Cancelar</button>
      </div>
    </div>
  </GDialog>
</template>
<script>
import { GDialog } from "gitart-vue-dialog";
import { ref } from "vue";

export default {
  components: { GDialog },
  props: ["open", "info"],
  setup(props, { emit }) {
    console.log(props.info);
    let modalVisible = ref(props.open);

    const closeModal = () => {
      modalVisible.value = false;
      emit("closeModal", false);
    };

    return { modalVisible, closeModal };
  },
};
</script>
<style lang="scss" scoped></style>
