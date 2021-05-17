<template>
  <div>
    <!-- <h1>Your coordinates:</h1>
    <p>{{ myCoordinates.lat }} Latitude, {{ myCoordinates.lng }} Longitude</p> -->
    <GmapMap
      :center="myCoordinates"
      :zoom="zoom"
      class="w-full map-height"
      ref="mapRef"
      @dragend="handleDrag"
    ></GmapMap>
    <!-- <div>
      <h1>Map Coordinates:</h1>
      <p>
        {{ mapCoordinates.lat }} Latitute, {{ mapCoordinates.lng }} Longitude
      </p>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      map: null,
      myCoordinates: {
        lat: 0,
        lng: 0,
      },
      zoom: 7,
    };
  },
  created() {
    if (localStorage.center) {
      this.myCoordinates = JSON.parse(localStorage.center);
    } else {
      this.$getLocation({})
        .then((coordinates) => {
          console.log(coordinates);
          this.myCoordinates = coordinates;
        })
        .catch((error) => alert(error));
    }

    if (localStorage.zoom) {
      this.zoom = parseInt(localStorage.zoom);
    }
  },
  mounted() {
    this.$refs.mapRef.$mapPromise.then((map) => (this.map = map));
  },
  computed: {
    mapCoordinates() {
      if (!this.map) {
        return {
          lat: 0,
          lng: 0,
        };
      }
      return {
        lat: this.map.getCenter().lat().toFixed(4),
        lng: this.map.getCenter().lng().toFixed(4),
      };
    },
  },
  methods: {
    handleDrag() {
      let center = {
        lat: this.map.getCenter().lat(),
        lng: this.map.getCenter().lng(),
      };
      let zoom = this.map.getZoom();

      localStorage.center = JSON.stringify(center);
      localStorage.zoom = zoom;
    },
  },
};
</script>

<style lang="less">

.map-height{
    height: 80vh;
}
    
</style>