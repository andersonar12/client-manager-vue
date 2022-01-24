<template>
  <section class="login container-fluid">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-4">
        <img :src="require('@/assets/logo.png')" alt="" />
        <h1>Client Manager</h1>
        <form>
          <div class="form-group">
            <label for="email">Correo Electronico</label>
            <input
              type="email"
              placeholder="Correo Electronico"
              v-model="user.email"
              class="form-control"
              id="email"
            />
          </div>
          <div class="form-group">
            <label for="pwd">Contraseña</label>
            <input
              type="password"
              placeholder="Contraseña"
              v-model="user.password"
              class="form-control"
              id="pwd"
            />
          </div>
          <!-- <button type="buttton" @click.prevent="checkForm()">
            Chequear datos
          </button> -->
          <router-link class="btn btn-success mt-3 px-4" to="/main/home"
            ><strong>Iniciar</strong>
          </router-link>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "login",
  mounted() {},
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  } /* 
  methods: {
    checkForm() {
      console.log(this.user);
    },
  }, */,
};
</script>

<style scoped lang="scss">
.login {
  height: 47vw;
}
</style>
