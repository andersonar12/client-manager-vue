<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand"> <img :src="require('@/assets/logo.png')" width="30" /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
        aria-controls="navbarScroll"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px">
          <li class="nav-item">
            <router-link class="nav-link" active-link="active" to="/main/home"><strong>Home</strong> </router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" active-link="active" to="/main/map"><strong>Mapa</strong> </router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" active-link="active" to="/main/reactive"
              ><strong>Reactividad</strong>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" active-link="active" to="/main/info"><strong>Info</strong> </router-link>
          </li>
        </ul>
        <button class="btn btn-outline-danger ms-2" @click="logout()">Cerrar Sesion</button>
      </div>
    </div>
  </nav>
</template>

<script>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default {
  name: 'Navbar',
  setup() {
    const router = useRouter()
    const store = useStore()
    const logout = () => {
      store.commit('DEL_TOKEN')
      router.push({ name: 'Login' })
    }

    return { logout }
  }
}
</script>

<style scoped lang="scss"></style>
