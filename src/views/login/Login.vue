<template>
  <section class="login">
    <h1>Login Component</h1>
    <!-- <button type="button" class="btn btn-success">Iniciar Sesion</button> -->
    <router-link class="btn btn-success" to="/main/home">Home</router-link>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'login',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
}
</script>

<style scoped lang="scss"></style>
