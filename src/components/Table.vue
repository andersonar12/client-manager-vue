<template>
  <table class="table animate__animated animate__fadeIn">
    <thead class="bg-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nombre</th>
        <th scope="col">MAC Addres</th>
        <th scope="col">Fecha Inicio</th>
        <th scope="col">Fecha Finalizacion</th>
        <th scope="col">Acciones</th>
        <th scope="col">Estatus</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(client, i) in clients"
        :key="i"
        :class="checkUserDays(client.dateEnd) <= 0 ? 'table-danger' : ''"
      >
        <th scope="row"></th>
        <td>{{ client.name }}</td>
        <td>{{ client.macAddress }}</td>
        <td>{{ formatDate(client.dateStart) }}</td>
        <td>{{ formatDate(client.dateEnd) }}</td>
        <td>
          <div class="btn-group" role="group">
            <button
              type="button"
              class="btn btn-primary"
              @click="editClient(i, client)"
            >
              Editar
            </button>
            <button
              type="button"
              @click="deleteClient(i, client)"
              class="btn btn-success"
            >
              Eliminar
            </button>
          </div>
        </td>
        <td>
          <span
            class="material-icons fs-2"
            v-if="checkUserDays(client.dateEnd) > 0"
          >
            check_circle
          </span>
          <span
            class="material-icons fs-2"
            v-if="checkUserDays(client.dateEnd) <= 0"
          >
            info
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { useRouter } from "vue-router";
import loader from "@/utils/loader.js";
import { useStore } from "vuex";
import Swal from "sweetalert2";
import moment from "moment";

export default {
  name: "Table",
  props: ["clients"],
  setup() {
    const router = useRouter();
    const store = useStore();
    const editClient = (id, clientData) => {
      /* console.log(id, clientData); */
      router.push({
        name: "Client",
        params: { id, data: JSON.stringify(clientData) },
      });
    };

    const deleteClient = async (id, client) => {
      Swal.fire({
        title: "Desea eliminar:",
        html: ` <strong>${client.name}</strong>?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Confirmar",
      }).then(async (result) => {
        if (result.isConfirmed) {
          loader.present();
          await store.dispatch("deleteClient", {
            clientId: id,
          });
          await store.dispatch("getClients");
          loader.close();
          Swal.fire("Eliminado", "Usuario eliminado", "success");
        }
      });
    };

    const formatDate = (date) => {
      return moment(date).format("DD-MM-YYYY, h:mm a");
    };

    const checkUserDays = (date) => {
      let today = new Date().getTime();
      let dateRegistered = new Date(date).getTime();
      /* console.log(date2.diff(date1, "days"), "diferencia"); */
      return dateRegistered - today;
    };

    return { editClient, deleteClient, formatDate, checkUserDays };
  },
};
</script>

<style scoped lang="scss">
th {
  color: white;
}
</style>
