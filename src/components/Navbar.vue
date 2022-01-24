<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand">
        <img :src="require('@/assets/logo.png')" width="30"
      /></a>
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
        <ul
          class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
          style="--bs-scroll-height: 100px"
        >
          <li class="nav-item">
            <router-link class="nav-link" active-link="active" to="/main/home"
              ><strong>Home</strong>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" active-link="active" to="/main/about"
              ><strong>Acerca de</strong>
            </router-link>
          </li>
        </ul>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        <router-link class="btn btn-outline-danger ms-2" to="/"
          >Cerrar Sesion</router-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped lang="scss"></style>
