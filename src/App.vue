<template>
  <v-app>
    <div id="app1"></div>
    <header1 />
    <v-content>
      <router-view />
    </v-content>
    <agence />
    <footer1 />
    <button id="top2">
      <v-icon id="icon" >mdi-chevron-double-up</v-icon><br />
      <span>top</span>
    </button>
  </v-app>
</template>

<script>
import footer1 from "./components/footer";
import agence from "./components/agence";
import header1 from "./components/header";

export default {
  name: "App",

  components: {
    footer1,
    header1,
    agence
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    }
  }
};
</script>
<style scoped>
/* .email h1 {
  font-size: 23px;
  padding: 10px 0px 10px 18px;
}
.email p {
  color: #fff;
} */
#top2 {
  background: #111;
  z-index: 20;
  color: #fff;
  border: none;
  width: 50px;
  height: 50px;
  position: fixed;
  outline: none;
  right: 0;
  bottom: 0;
}
#top2:hover {
  border-radius: 50%;
  transition: 0.5s;
  line-height: 50px;
  background-color: #42a5f5;
  outline: none;
}
#top2 #icon{
  color: #ee3958;
}
#top2:hover #icon {
  position: absolute;
  top: -20px;
  left: 6px;
  font-size: 40px;
  color: #42a5f5;
  animation: ddd 1s infinite;
}
#top2:hover span {
  visibility: hidden;
}
#app1{
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  width: 0%;
  height: 0%;
  background-color: #42a5f560;
}
@keyframes ddd {
  0% {
    transform: translateY(0px);
  }
  25% {
    transform: translateY(-50px);
  color: #ee3958;
  }
  100% {
    transform: translateY(-130px);
  }
}
</style>
