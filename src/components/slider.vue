<template>
  <div class="img">
    <v-carousel
      cycle
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i" :src="slide.src" width="100%" height="100%">
      </v-carousel-item>
    </v-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      slides: [
        {
          src: require("../assets/img/s6.jpg")
        },
        {
          src: require("../assets/img/7.jpeg")
        },
        {
          src: require("../assets/img/3.jpeg")
        },
        {
          src: require("../assets/img/6.jpeg")
        }
      ]
    };
  }
};
</script>
<style scoped>
.slider {
  border-radius: 0;
}
</style>
