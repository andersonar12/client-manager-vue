<template>
  <h1>Reactivity</h1>
  <h5>Esta vista fue creada para comprender el tema de la Reactividad de las variables en Vue</h5>

  <button class="btn btn-primary me-3" @click="fetchAllUsers()">Fetch de Usuarios</button>
  <button class="btn btn-dark" @click="removeUsersFromStore()">Vaciar</button>
  <ul v-if="users">
    <li v-for="(user, index) in users" :key="index" class="text-start">
      <strong>{{ user['name'] }}</strong> ({{ user['email'] }})
      <button @click="deleteItem(index)" type="button">X</button>
    </li>
  </ul>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    let users = ref(store.state.users)
    //Functions
    const fetchAllUsers = () => {
      fetch('https://jsonplaceholder.typicode.com/users/')
        .then(response => response.json())
        .then(json => {
          console.log(json)
          users.value = [...users.value, ...json]
          updateStore()
        })
    }
    const deleteItem = index => {
      users.value.splice(index, 1)
      updateStore()
    }

    const removeUsersFromStore = () => {
      store.commit('DELETE_ATTR_STATE', { attribute: 'users' })
      users.value = []
    }

    const updateStore = () => {
      store.commit('SET_CUSTOM_STATE', {
        attribute: 'users',
        value: users.value
      })
    }

    return {
      fetchAllUsers,
      deleteItem,
      removeUsersFromStore,
      users
    }
  }
}
</script>

<style lang="scss" scoped></style>
