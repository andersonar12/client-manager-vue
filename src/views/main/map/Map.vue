<template>
  <section>
    <GMapMap :center="center" :zoom="10" map-type-id="terrain" class="map">
      <GMapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="openMarker(m.id)"
        :icon="require('@/assets/marker.png')"
      >
        <GMapInfoWindow
          :closeclick="true"
          @closeclick="openMarker(null)"
          :opened="openedMarkerID === m.id"
        >
          <div class="text-start">
            <p class="pb-0 mb-0 fs-5"><strong>Maquina:</strong>3232(LBLB)</p>
            <p class="pb-0 mb-0 fs-5"><strong>Pasajeros: </strong> 20</p>
            <p class="pb-0 mb-0 fs-5">Ingreso: -</p>
            <p class="pb-0 mb-0 fs-5">Salida: -</p>
          </div>
        </GMapInfoWindow>
      </GMapMarker>
    </GMapMap>
  </section>
</template>

<script>
import { ref } from "vue";
export default {
  data() {
    return {
      openedMarkerID: null,
      center: { lat: 51.093048, lng: 6.84212 },
      markers: [
        {
          id: 1,
          position: {
            lat: 51.093048,
            lng: 6.84212,
          },
        },
        {
          id: 2,
          position: {
            lat: 51.198429,
            lng: 6.69529,
          },
        },
      ],
    };
  },
  methods: {
    openMarker(id) {
      this.openedMarkerID = id;
    },
  },
};
</script>

<style lang="scss">
.map {
  height: 45.6vw;
}
</style>
