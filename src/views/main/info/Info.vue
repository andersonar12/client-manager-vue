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
                <h5 class="card-title">{{ item["first_name"] }}</h5>
                <h6 class="card-subtitle mb-2 text-muted">
                  {{ item["email"] }}
                </h6>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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

    <Modal
      v-if="openModal"
      :open="openModal"
      :info="data"
      @closeModal="listenModal($event)"
    >
    </Modal>

    <button class="btn btn-success mt-3" @click="onOpen(null)">
      Abrir Modal
    </button>

    <div class="row d-flex justify-content-center">
      <div class="col-6">
        <table class="table table-striped table-hover">
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
              <td>{{ user["name"] }}</td>
              <td>{{ user["email"] }}</td>
              <td>
                <button class="btn btn-primary" @click="onOpen(user)">
                  Abrir
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import Modal from "@/components/Modal.vue";
import "vue3-carousel/dist/carousel.css";

const settings = {
  itemsToShow: 4.5,
  itemsToScroll: 4,
  // wrapAround: true,
  snapAlign: "end",
};

export default {
  components: {
    Modal,
    Carousel,
    Slide,
    Navigation,
  },
  setup() {
    const openModal = ref(false);
    const store = useStore();
    const users = store.state.users;
    let data = ref(null);

    let itemsUsers = ref([]);

    onMounted(() => {
      fetch("https://reqres.in/api/users/")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          itemsUsers.value.push(...json.data);
        });
    });

    const onOpen = (dataUser) => {
      openModal.value = true;
      data.value = dataUser;
    };

    const listenModal = (modalVisible) => (openModal.value = modalVisible);

    return {
      openModal,
      onOpen,
      data,
      listenModal,
      users,
      settings,
      itemsUsers,
    };
  },
};
</script>
<style lang=""></style>
