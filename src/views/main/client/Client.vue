<template>
  <section
    class="animate__animated animate__fadeInUpBig animate__faster row d-flex justify-content-center mt-5"
  >
    <form class="col-6 text-center">
      <h1>{{ title }}</h1>
      <div class="row">
        <div class="form-group col-6">
          <label class="w-100 text-start">Nombre</label>
          <input
            type="text"
            class="form-control"
            v-model="user.name"
            placeholder=""
          />
        </div>
        <div class="form-group col-6">
          <label class="w-100 text-start"> Mac Address</label>
          <input
            type="text"
            class="form-control"
            v-model="user.macAddress"
            placeholder=""
          />
        </div>
      </div>

      <div class="row">
        <div class="form-group col-6">
          <label class="w-100 text-start">Fecha Inicio:</label>
          <Datepicker
            v-model="user.dateStart"
            locale="es"
            :is24="false"
          ></Datepicker>
        </div>
        <div class="form-group col-6">
          <label class="w-100 text-start">Fecha Finalización</label>
          <Datepicker
            v-model="user.dateEnd"
            locale="es"
            :is24="false"
          ></Datepicker>
        </div>
      </div>
      <div v-if="errors.length > 0" class="mt-4">
        <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
        <ul class="text-center">
          <li class="text-start" v-for="(error, i) in errors" :key="i">
            {{ error }}
          </li>
        </ul>
      </div>

      <button @click.prevent="submitForm()" class="btn btn-primary mt-3">
        Guardar
      </button>
    </form>
  </section>
</template>

<script>
import { useStore } from "vuex";
import { computed, onMounted, onUnmounted } from "@vue/runtime-core";
import { useRouter, useRoute } from "vue-router";
import { ref } from "vue";
import loader from "@/utils/loader.js";
import moment from "moment";
import Datepicker from "vue3-date-time-picker";
import "vue3-date-time-picker/dist/main.css";

export default {
  name: "client",
  components: { Datepicker },
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();

    const title = !route.params.data ? "Añadir Cliente" : "Actualizar Cliente";
    let data = route.params.data ? JSON.parse(route.params.data) : null;

    console.log("Data Client", data);

    //v-model
    const user = {
      name: !data ? null : data["name"],
      macAddress: !data ? null : data["macAddress"],
      dateStart: !data ? new Date() : data["dateStart"],
      dateEnd: !data ? null : data["dateEnd"],
    };

    let errors = computed(() => store.state.errors);
    const submitForm = async () => {
      console.log(user);
      if (user.name && user.macAddress && user.dateStart && user.dateEnd) {
        if (title == "Añadir Cliente") {
          loader.present();
          await store.dispatch("addClient", user);
          router.push({ name: "Home" });
          loader.close();
        }
        if (title == "Actualizar Cliente") {
          loader.present();
          await store.dispatch("updateClient", {
            clientId: route.params["id"],
            data: user,
          });
          router.push({ name: "Home" });
          loader.close();
        }
      }
      store.commit("RESET_ERRORS");

      if (!user.name)
        store.commit("SET_ERRORS", { error: "El nombre es obligatorio." });

      if (!user.macAddress)
        store.commit("SET_ERRORS", { error: "La Mac Address es obligatoria." });

      if (!user.dateStart)
        store.commit("SET_ERRORS", {
          error: "Fecha de Inicio es obligatorio.",
        });

      if (!user.dateEnd)
        store.commit("SET_ERRORS", {
          error: "Fecha de Finalizacion es obligatoria.",
        });
    };

    onUnmounted(() => {
      store.commit("RESET_ERRORS");
    });

    return { title, user, errors, submitForm };
  },
};
</script>

<style scoped lang="scss">
h1 {
  color: black;
}
</style>
