<template>
  <div id="header1">
    <div id="divform">
      <div id="divform1">
        <h1>INSCRIPTION À Dans notre site Web</h1>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="nom"
            class="my-0"
            :counter="12"
            :rules="nomRules"
            label="Nom *"
            color="#42a5f5"
            required
          ></v-text-field>

          <v-text-field
            v-model="prenom"
            :counter="12"
            :rules="prenomRules"
            label="Prenom *"
            color="#42a5f5"
            required
          ></v-text-field>

          <v-text-field
            v-model="email"
            class="my-0"
            :rules="emailRules"
            label="E-mail *"
            color="#42a5f5"
            required
          ></v-text-field>

          <v-textarea
            label="Message *"
            v-model="message"
            clear-icon="X"
            outlined
            color="#42a5f5"
            clearable
            :rules="messageRules"
            required
          >
          </v-textarea>
          <v-btn id="valid1" :disabled="!valid" class="ca" @click="validate">
            Envoiyer
          </v-btn>
          <v-btn
            id="fer"
            style="background-color:#111111;color:#fff"
            class="da"
            @click="reset"
          >
            Fermer
          </v-btn>
        </v-form>
      </div>
    </div>
    <div id="fixd">
      <a href="/">
        <img
          src="../assets/img/abdo.png"
          style="position:absolute;left:100px;"
          width="60px"
          height="60px"
        />
      </a>

      <ul>
        <li>
          <span class="sss"></span><a style="color:#fff" href="/">Acceuil</a>
        </li>
        <li>
          <a style="color:#fff" href="\Projets">Projets</a
          ><span class="sss"></span>
        </li>
        <li>
          <a style="color:#fff" href="/Contact">Contact</a
          ><span class="sss"></span>
        </li>
        <li>
          <a style="color:#fff" href="/trouveragnse">Trouver son Agense</a
          ><span class="sss"></span>
        </li>
        <li style="position:relative" id="servi">
          <span class="sss"></span>
          <a style="color:#fff">Services</a>
          <div class="aw">
            <a href="\WebSite">Service WebSite</a>
            <a href="\Mobile">Service ApplicationMobile</a>
          </div>
        </li>
      </ul>
    </div>
    <div class="nav">
      <div class="id">
        <p>Après trente minutes, vos questions seront répondues</p>
        <a class="kk">Fermeir</a>
      </div>
      <a
        ><router-link to="/"
          ><img
            src="../assets/img/abdo.png"
            to="/"
            style="position:absolute;top:6px;left:10px;border-top-left-radius:10px;border-bottom-right-radius:10px"
            width="110px"
            height="110px"/></router-link
      ></a>
      <div class="div1" id="div2">
        <ul>
          <li style="position:relative">
            <a id="email" style="position:relative">
              <v-icon class="icon">mdi-email-open-outline</v-icon>
              Newsletter</a
            >
          </li>
          <li>
            <a
              ><v-icon class="icon">mdi-account-alert</v-icon
              ><router-link to="/Contact">Nous contacter</router-link></a
            >
          </li>
          <li>
            <a
              ><v-icon class="icon">mdi-phone-in-talk</v-icon
              ><router-link to="/trouveragnse">06 31 90 ** **</router-link></a
            >
          </li>
          <li>
            <a href="/trouveragnse"
              ><v-icon class="icon">mdi-home-map-marker</v-icon>Trouver son
              agence</a
            >
          </li>
        </ul>
      </div>
      <div id="div1" class="div1">
        <ul>
          <li>
            <a :href="fac" target="_blank"
              ><v-icon class="icon">mdi-facebook</v-icon></a
            >
          </li>
          <li>
            <a :href="ins" target="_blank"
              ><v-icon class="icon">mdi-instagram</v-icon></a
            >
          </li>
          <li>
            <a :href="twi" target="_blank"
              ><v-icon class="icon">mdi-twitter</v-icon></a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="gation">
      <div class="logo"></div>
      <div class="links">
        <ul>
          <li>
            <a href="/">Acceuil</a><span class="s1"></span
            ><span class="s2"></span>
          </li>
          <li>
            <a href="/skills">Skills</a><span class="s1"></span
            ><span class="s2"></span>
          </li>
          <li>
            <a href="/Projets">Projets</a><span class="s1"></span
            ><span class="s2"></span>
          </li>
          <li>
            <a href="/WebSite" id="web">Services WebSite</a
            ><span class="s1"></span><span class="s2"></span>
          </li>
          <li>
            <a href="/Mobile">Services ApplicationMobile</a
            ><span class="s1"></span><span class="s2"></span>
          </li>
          <!---->
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "header1",
  data() {
    return {
      valid: true,
      fac: "https://www.facebook.com/",
      ins: "https://www.instagram.com",
      twi: "https://www.twitter.com",
      nom: "",
      nomRules: [
        (v) => !!v || "Le Nom doit être valide",
        (v) =>
          (v && v.length <= 12) ||
          "le nom doit contenir moins de 12 caractères",
      ],
      prenomRules: [
        (v) => !!v || "Le Prenom doit être valide",
        (v) =>
          (v && v.length <= 12) ||
          "le Prenom doit contenir moins de 12 caractères",
      ],
      prenom: "",
      email: "",
      emailRules: [
        (v) => !!v || "L'email  doit être valide",
        (v) => /.+@.+\..+/.test(v) || "L'email doit être valide",
      ],

      message: "",
      messageRules: [
        (v) => !!v || "Le Message doit être valide",
        (v) =>
          (v && v.length <= 80) ||
          "le Message doit contenir moins de 80 caractères",
      ],
    };
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>
<style scoped>
a {
  text-decoration: none;
}
#header1 #fixd {
  position: fixed;
  width: 100%;
  height: 60px;
  background-color: #111;
  transition: 1s;
  z-index: 9;
  /* opacity: 0; */
  top: -90px;
}
#header1 #fixd ul {
  margin-right: 120px;
}
#header1 .nav {
  background: #000;
  position: relative;
  padding: 14px 0px;
  height: 70px;
}
#header1 .nav div {
  float: left;
}
#header1 .nav #div2 {
  width: 60%;
  margin-left: 10%;
}
#header1 .nav #div1 {
  width: 30%;
}

#header1 .nav #div1 ul,
#header1 #fixd ul {
  float: right;
}
#header1 .nav .div1 ul {
  list-style: none;
  margin: 0px 20px;
}

#header1 #fixd ul li {
  display: inline-block;
  margin-right: 22px;
}
#header1 .nav .div1 ul li {
  display: inline-block;
  margin-left: 22px;
}
#header1 #fixd ul li a {
  color: #fff;
  display: block;
}
#header1 #fixd ul li .sss {
  width: 0%;
  height: 4px;
  border-radius: 25px;
  margin: 0px auto;
  display: block;
  background: #ee3958;
  transition: 0.5s;
}
#header1 #fixd ul li:hover .sss {
  width: 100%;
}
#header1 #fixd ul {
  width: 80%;
  margin-top: 12px;
}
#header1 #fixd ul li {
  margin-left: 8%;
}
#header1 #fixd ul li a {
  color: #42a5f5;
  font-size: 22px;
  font-weight: 300;
}
#header1 #fixd ul li:last-child {
  position: relative;
  perspective: 900px;
  perspective-origin: bottom;
}
#header1 #fixd ul li:last-child div {
  background-color: #111;
  width: 300px;
  border-top: 3px solid #ee3958;
  padding: 20px 10px;
  position: absolute;
  bottom: -150px;
  left: -30px;
  transform-origin: top;
  transform: translateY(50px) rotateX(-86.1deg);
  transition: 0.5s;
}
#header1 #fixd ul li:last-child:hover div {
  transform: translateY(0px) rotateX(0deg);
}
#header1 #fixd ul li:last-child div a {
  display: block;
  margin: 10px;
  color: #fff;
}
#header1 #fixd ul li:last-child div a:hover {
  color: #ee3958;
}
#header1 .nav .div1 ul li a {
  color: #fff;
  font-size: 14px;
}
#header1 .nav .div1 ul li a .icon {
  font-size: 34px;
  color: #42a5f5;
  margin: 0px 10px;
  transition: 0.5s;
}
#header1 .nav #div2 ul li a:hover {
  color: #42a5f5;
  transition: 0.3s;
}
#header1 .nav #div2 ul li a:hover .icon {
  color: #fff;
  transition: 0.3s;
  transform: translateY(-8px);
}
#header1 .nav #div1 ul li a:hover .icon {
  transform: translateY(-10px) rotate(-360deg) scale(0.8, 0.8);
}
#header1 .gation {
  width: 100%;
  height: 60px;
  background-color: #fff;
  border-bottom: 2px solid #42a5f5;
  /* transition: 1s; */
}
#header1 .gation:hover {
  background-color: #ece8e8;
}
#header1 .gation div {
  float: left;
}
#header1 .gation .logo {
  width: 10%;
  height: 10px;
}
#header1 .gation .links {
  width: 90%;
  height: 100%;
}
#header1 .gation .links ul {
  list-style: none;
  overflow: hidden;
  margin-top: 10px;
  height: 90%;
}
#header1 .gation .links ul li {
  display: inline-block;
  margin-right: 8.5%;
  text-align: center;
  position: relative;
}
#header1 .gation .links li a {
  font-size: 24px;
  overflow: hidden;
  margin: 0;
  display: block;
  color: #111;
  transition: 0.8s;
}
#header1 .gation .links li .s1 {
  display: block;
  width: 0%;
  position: absolute;
  background-color: #42a5f5;
  transition: 0.3s;
  bottom: 0px;
  left: 0;
  height: 8%;
}
#header1 .gation .links li .s2 {
  display: block;
  width: 0%;
  position: absolute;
  background-color: #42a5f5;
  transition: 0.5s;
  bottom: 0px;
  right: 0;
  height: 8%;
}
#header1 .gation .links li:hover .s1 {
  width: 50%;
  transform: translateX(9%);
}
#header1 .gation .links li:hover .s2 {
  width: 50%;
  transform: translateX(-100%);
  transition: 1.1s;
}
#header1 .gation .links ul li a:hover {
  color: #ee3958;
}
#header1 #divform {
  position: absolute;
  overflow: hidden;
  transition: 1s;
  top: 0%;
  left: -50%;
  transform: scale(0.8, 0.8);
  width: 50%;
  padding: 20px;
  z-index: 4;
}
#header1 #divform #divform1 {
  width: 90%;
  margin: 0px auto;
  padding: 30px 20px;
  background: #fff;
}
#header1 #divform h1 {
  font-size: 26px;
  text-align: center;
  padding-top: 6px;
  border-top: 2px solid#ee3958;
  width: 86%;
  z-index: 50;
  margin: 10px auto 10px;
}
#header1 #divform:before {
  content: "";
  width: 28px;
  z-index: 0;
  height: 28px;
  border: 3px solid #fff;
  z-index: 0;
  position: absolute;
  top: 7px;
  left: 47%;
  background-color: #fff;
  transform: rotate(45deg);
}
.ss {
  right: 40px;
}
.id {
  position: absolute;
  top: 22px;
  left: 16.4%;
  overflow: hidden;
  width: 1%;
  opacity: 0;
  height: 10px;
  transition: 1s;
  border-radius: 2px;
  background-color: rgb(240, 235, 235);
}
.id .kk {
  text-decoration: none;
  color: #fff;
  display: block;
  margin: 80px auto 0px;
  background-color: #ee3958;
  padding: 20px 30px;
  transition: 1s;
  width: 90%;
  text-align: center;
}
.id:hover {
  cursor: pointer;
}
.id p {
  margin-left: 40px;
  padding: 10px 30px;
  margin-top: 50px;
  border: 2px dashed red;
  text-align: center;
  font-size: 24px;
  width: 80%;
}
.id:hover .kk {
  transform: translateY(-60px);
  background-color: #fff;
  color: #000;
}
.da {
  margin-left: 280px;
  transition: 1s;
}
.da:hover {
  transform: translateY(-10px) skewY(10deg);
}
#valid1 {
  background-color: #42a5f5;
  color: #fff;
  transition: 0.5s;
}
#valid1:hover {
  background-color: #ee3958;
  transform: translateX(-10px);
}
</style>
