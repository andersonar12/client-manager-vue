<template>
  <section class="login container-fluid">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-4">
        <img :src="require('@/assets/logo.png')" alt="" />
        <h1>Client Manager</h1>
        <Form @submit="onSubmit">
          <label>Correo Electronico</label>
          <Field
            name="email"
            type="email"
            placeholder="Correo Electronico"
            class="form-control"
            :rules="validateEmail"
            v-model="email"
          />
          <p class="text-danger">
            <strong><ErrorMessage name="email" /></strong>
          </p>

          <label>Contraseña</label>
          <Field
            name="password"
            type="password"
            placeholder="Contraseña"
            class="form-control"
            :rules="validatePassword"
            v-model="password"
          />
          <p class="text-danger">
            <strong><ErrorMessage name="password" /></strong>
          </p>

          <button class="btn btn-success mt-3 px-4">Chequear datos</button>
          <!-- <router-link class="btn mt-3 px-4" to="/main/home"
            ><strong>Ir a Home</strong>
          </router-link> -->
        </Form>
      </div>
    </div>
  </section>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import loader from "@/utils/loader.js";

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    const onSubmit = (values) => {
      loader.present();
      console.log("FormData", values);
      store.commit("SET_TOKEN", { token: "token_de_prueba" });
      router.push({ name: "Home" });
      loader.close();
    };
    return { onSubmit, email: "anderson", password: "123234" };
  },
  methods: {
    validateEmail(value) {
      // if the field is empty
      if (!value) {
        return "This field is required";
      }
      // if the field is not a valid email
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return "This field must be a valid email";
      }
      // All is good

      return true;
    },
    validatePassword: (value) => (!value ? "This field is required" : true),
  },
};
</script>

<style scoped lang="scss">
.login {
  height: 47vw;
}
</style>
