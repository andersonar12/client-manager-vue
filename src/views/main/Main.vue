<template>
  <section class="main">
    <Navbar></Navbar>
    <div class="container-fluid">
      <router-view />
    </div>
  </section>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Main",
  components: {
    Navbar,
  },
  mounted(){

  
  //Fetch with timeout "AbortController"

  const timeout = () =>{
    const controller = new AbortController();
    setTimeout(() => controller.abort(), 10000);
    return controller
  }

    let requestOptions = {
      method: 'GET',
      redirect: 'follow',
      signal: timeout().signal  
    };

    fetch("http://localhost:3000/test", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('Fetch timeout request', error))
  }
};
</script>

<style scoped lang="scss"></style>
