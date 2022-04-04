<template>
  <div>
    <h2>Info-View</h2>
    <!-- Carousel -->
    <div class="row d-flex justify-content-center">
      <div class="col-8">
        <Carousel :settings="settings" v-if="itemsUsers.length > 0">
          <Slide v-for="(item, index) in itemsUsers" :key="index" class="px-4">
            <div class="card me-3" style="width: 260px">
              <img :src="item['avatar']" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{{ item['first_name'] }}</h5>
                <h6 class="card-subtitle mb-2 text-muted">
                  {{ item['email'] }}
                </h6>
                <p class="card-text">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
              </div>
            </div>
          </Slide>

          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>
    </div>

    <Modal :v-if="openModal" :open="openModal" :info="data"> </Modal>

    <button class="btn btn-success mt-3" @click="onOpen({})">Abrir Modal</button>

    <div class="row d-flex justify-content-center">
      <div class="col-6">
        <table v-if="users.length > 0" class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Email</th>
              <th scope="col">Accion</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, index) in users" :key="index">
              <th scope="row"></th>
              <td>{{ user['name'] }}</td>
              <td>{{ user['email'] }}</td>
              <td>
                <button class="btn btn-primary" @click="onOpen(user)">Abrir</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import Modal from '@/components/Modal.vue'
import 'vue3-carousel/dist/carousel.css'

const settings = {
  itemsToShow: 4.5,
  itemsToScroll: 4,
  // wrapAround: true,
  snapAlign: 'end'
}

export default {
  components: {
    Modal,
    Carousel,
    Slide,
    Navigation
  },
  setup() {
    const store = useStore()
    const openModal = computed(() => store.state['modalOpen'])

    const users = store.state['users']
    let data = ref({})
    let itemsUsers = ref([])

    onMounted(() => {
      fetch('https://reqres.in/api/users/')
        .then(response => response.json())
        .then(json => {
          console.log(json)
          itemsUsers.value.push(...json.data)
        })
    })

    const onOpen = dataUser => {
      store.commit('SET_MODAL_OPEN', true)
      data.value = dataUser
    }

    return {
      openModal,
      onOpen,
      data,
      users,
      settings,
      itemsUsers
    }
  }
}
</script>
<style lang=""></style>
