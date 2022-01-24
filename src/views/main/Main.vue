<template lang="html">
  <section class="main">
    <Navbar></Navbar>
    <h1>Main Component</h1>
    <div id="nav">
      <router-link to="/main/home">Home</router-link> |
      <router-link to="/main/about">About</router-link>
    </div>
    <router-view />
  </section>
</template>

<script lang="js">

  import Navbar from '@/components/Navbar.vue'

  export default  {
    name: 'Main',
    components:{
      Navbar
    },
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
