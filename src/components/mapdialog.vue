<template>
  <GMapMap
    :key="abc"
    :center="center"
    :zoom="15"
    map-type-id="roadmap"
    style="width: 500px; height: 300px"
  >
    <GMapCluster>
      <GMapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="false"
        v-on:click="center = m.position"
        @click="openMarker(m.id)"
      >
        <GMapInfoWindow
          :key="abc"
          :closeclick="true"
          @closeclick="openMarker(null)"
          :opened="openedMarkerID"
        >
          <div>{{ m.id }}</div>
        </GMapInfoWindow>
      </GMapMarker>
    </GMapCluster>
  </GMapMap>
</template>
<script>
export default {
  name: "mapdialog",
  props: ["childVaule"],
  created() {
    console.log(this.childVaule);

    this.abc += 1;
  },
  data() {
    return {
      newupdate: [],
      abc: 1,
      openedMarkerID: true,
      center: {
        lat: this.childVaule.ylocation,
        lng: this.childVaule.xlocation,
      },
      markers: [
        {
          id: this.childVaule.title,
          position: {
            lat: this.childVaule.ylocation,
            lng: this.childVaule.xlocation,
          },
        }, // Along list of clusters
      ],
    };
  },
  methods: {
    openMarker(id) {
      console.log(id);
      this.openedMarkerID = id;
    },
  },
};
</script>

<style scoped>
</style>