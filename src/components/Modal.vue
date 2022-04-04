<template>
  <GDialog v-model="modalVisible" max-width="900" persistent :overlay-background="true">
    <div class="p-3">
      <h2 class="text-center"><strong>Información</strong></h2>
      <div v-if="Object.keys(info).length > 1">
        <h4>{{ info['name'] }}</h4>
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
import { GDialog } from 'gitart-vue-dialog'
import { useStore } from 'vuex'
import { computed, watch } from '@vue/runtime-core'

export default {
  components: { GDialog },
  props: ['open', 'info'],
  setup(props) {
    const store = useStore()
    let modalVisible = computed(() => store.state['modalOpen'])
    const closeModal = () => store.commit('SET_MODAL_OPEN', false)

    //visualizamos si hay cambios en la variable info que viene mediante props
    watch(
      () => props.info,
      newVal => console.log(newVal)
    )
    return { modalVisible, closeModal }
  }
}
</script>
<style lang="scss" scoped></style>
