<template>
  <div class="contact1">
    <div class="c1">
      <div id="c11"></div>
    </div>
    <div class="div1">
      <div class="container">
        <v-btn elevation="0" text class="pa-0 ma-0" to="/"
          ><h2>La SAPHIR INNOVATION *</h2></v-btn
        ><span>Contact</span>
      </div>
    </div>
    <h1 id="ch1">
      * Nous Contacter *
      <p class="ppp">
        <span class="span1"></span>
        <span class="span2"></span>
      </p>
    </h1>
    <div class="formimg">
      <div class="image">
        <span class="s0"></span>
        <span class="s1"></span>
        <span class="s2"></span>
        <span class="s3"></span>
        <p>Veullez Remplir le Fomulaire<span></span></p>
        <img src="../assets/img/c3.png" /><span class="s11"></span>
      </div>
      <div class="form1">
        <v-form ref="form" v-model="valid" lazy-validation class="mt-12">
          <v-text-field
            v-model="nom"
            :counter="12"
            :rules="nomRules"
            label="Nom *"
            outlined
            color="#42a5f5"
            required
          ></v-text-field>

          <v-text-field
            v-model="prenom"
            :counter="12"
            :rules="prenomRules"
            label="Prenom *"
            outlined
            color="#42a5f5"
            required
          ></v-text-field>

          <v-text-field
            v-model="telephone"
            :counter="10"
            :rules="telephoneRules"
            label="Telephone *"
            outlined
            color="#42a5f5"
            required
          ></v-text-field>

          <v-text-field
            v-model="ville"
            :counter="10"
            :rules="villeRules"
            label="Ville *"
            outlined
            color="#42a5f5"
            required
          ></v-text-field>

          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail *"
            outlined
            color="#42a5f5"
            required
          ></v-text-field>

          <v-textarea
            id="me"
            label="Detaillez Notre Demande *"
            v-model="message"
            clear-icon="X"
            outlined
            color="#42a5f5"
            clearable
            :rules="messageRules"
            required
          >
          </v-textarea>
          <v-checkbox
            class="my-2"
            v-model="checkbox"
            :rules="[v => !!v || 'Vous devez accepter de continuer!']"
            label="êtes-vous d'accord?"
            required
            outlined
            color="#42a5f5"
          ></v-checkbox>
          <v-btn
            :disabled="!valid"
            style="background-color:#ee3958;color:#fff"
            class="mr-12 btn"
            @click="validate"
          >
            Envoiyer
          </v-btn>
          <v-btn
            style="background-color:#111111;color:#fff"
            class="mr-12 btn"
            @click="reset"
          >
            Anuuler
          </v-btn>
        </v-form>
      </div>
      <div class="messagebox">
        <p>
          Veuillez saisir les détails de votre commande. Un membre de notre
          équipe vous répondra après trente minutes
        </p>
      </div>
    </div>
    <div class="infp">
      <div class="inf">
        <img src="../assets/img/alert1.png" width="40px" height="40px" />
        <p>
          *Les informations recueillies sur ce formulaire sont enregistrées dans
          un fichier informatisé par JADE SERVICES pour la gestion de notre
          clientèle.
        </p>
        <p>
          Elles sont conservées pendant 3 ans et sont destinées au service
          marketing et au service commercial
        </p>
        <p>
          Conformément à la loi « informatique et libertés », vous pouvez
          exercer votre droit d'accès aux données vous concernant et les faire
          rectifier en contactant : la Société JADE SERVICES par l’intermédiaire
          de votre agence d’affectation.
        </p>
        <p>
          Conformément à la loi « informatique et libertés », vous pouvez
          exercer votre droit d'accès aux données vous concernant et les faire
          rectifier en contactant : la Société JADE SERVICES par l’intermédiaire
          de votre agence d’affectation.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Contact",
  data: () => ({
    valid: true,
    dialog: false,
    nom: "",
    nomRules: [
      v => !!v || "Le Nom doit être valide",
      v =>
        (v && v.length <= 12) || "le nom doit contenir moins de 12 caractères"
    ],

    prenomRules: [
      v => !!v || "Le Prenom doit être valide",
      v =>
        (v && v.length <= 12) ||
        "le Prenom doit contenir moins de 12 caractères"
    ],

    prenom: "",
    telephoneRules: [
      v => !!v || "Le téléphone doit être valide",
      v =>
        (v && v.length <= 10) ||
        "le téléphone doit contenir moins de 10 caractères"
    ],
    telephone: "",
    villeRules: [
      v => !!v || "La Ville doit être valide",
      v =>
        (v && v.length <= 14) || "la Ville doit contenir moins de 14 caractères"
    ],
    ville: "",

    email: "",
    emailRules: [
      v => !!v || "L'email  doit être valide",
      v => /.+@.+\..+/.test(v) || "L'email doit être valide"
    ],

    message: "",
    messageRules: [
      v => !!v || "Le Message doit être valide",
      v =>
        (v && v.length <= 120) ||
        "le Message doit contenir moins de 120 caractères"
    ],
    checkbox: false,
    classe: "icon",
    spane: "span1"
  }),

  methods: {
    validate() {
      var k = 0;
      if (this.$refs.form.validate()) {
        this.snackbar = true;
        k = 1;
      }
      if (k === 1) {
        this.classe = "";
        this.spane = "";
        console.log(this.spane);
      }
    },
    reset() {
      this.$refs.form.reset();
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.contact1 {
  width: 100%;
}
.c1 {
  width: 100%;
  /* position: relative; */
  overflow: hidden;
  height: 400px;
  background-attachment: fixed;
  background-image: url("../assets/img/c1.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.c1 #c11 {
  position: fixed;
  opacity: 0;
  top: 15%;
  left: 41%;
  width: 52%;
  height: 74px;
  border-radius: 10px;
  border: 3px solid #fff;
  animation: c1 3s infinite;
  z-index: 0;
}
.contact1 .div1 {
  background-color: #f6f6f6;
  padding: 10px 0px;
}
.contact1 .container {
  width: 80%;
  margin: auto;
}
.contact1 .container h2 {
  color: black;
  display: inline-block;
}
.contact1 .container span {
  color: #ee3958;
  margin-left: 4px;
  display: inline-block;
}
.contact1 h1 {
  text-align: center;
  margin: 20px 0px;
  color: #ee3958;
  transition: 1s;
  opacity: 0;
}
.contact1 h1 .ppp {
  width: 100px;
  height: 4px;
  overflow: hidden;
  border-radius: 2px;
  background-color: #266675;
  margin: 2px auto;
}
.contact1 h1 .ppp span {
  display: block;
  float: left;
  /* width: 50%; */
  height: 100%;
}
.contact1 h1 .ppp .span2 {
  background-color: #42a5f5;
  animation: span1 3s infinite;
}
.contact1 .formimg {
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: #f6f6f6;
}
.contact1 .formimg .image,
.contact1 .formimg .form1 {
  width: 40%;
}
.contact1 .formimg .image {
  position: absolute;
  width: 200px;
  top: 260px;
  right: -400px;
  height: 400px;
  transition: 2s;
}
.contact1 .formimg .image img {
  width: 200px;
  height: 400px;
}
.contact1 .formimg .image span,
.contact1 .formimg .image p {
  position: absolute;
  background-color: #fff;
  opacity: 0;
  transition: 1s;
}
.contact1 .formimg .image .s11 {
  background-color: #80b63a;
  top: 39.6%;
  opacity: 4.1;
  right: 31%;
  width: 17px;
  height: 19px;
}
.contact1 .formimg .image .s0 {
  border-radius: 50%;
  border: 1px solid #80b63a;
  transition-delay: 4.2s;
  top: 23%;
  right: 50%;
  width: 6px;
  height: 6px;
}
.contact1 .formimg .image .s1 {
  border-radius: 50%;
  transition-delay: 4.4s;
  border: 1px solid #80b63a;
  top: 21%;
  right: 58%;
  width: 12px;
  height: 12px;
}
.contact1 .formimg .image .s2 {
  border-radius: 50%;
  border: 1px solid #80b63a;
  transition-delay: 4.5s;
  top: 15%;
  right: 70%;
  width: 18px;
  height: 18px;
}
.contact1 .formimg .image .s3 {
  border-radius: 50%;
  border: 1px solid #80b63a;
  transition-delay: 4.7s;
  top: 8%;
  right: 80%;
  width: 24px;
  height: 24px;
  transition-delay: 4.9s;
}
.contact1 .formimg .image p {
  border: 1px solid #80b63a;
  border-radius: 100px;
  padding-top: 30px;
  text-align: center;
  top: -20%;
  right: 85%;
  width: 160px;
  height: 100px;
  transition-delay: 5.1s;
}
.contact1 .formimg .image p span {
  position: absolute;
  left: 18%;
  background-color: #266675;
  transition-delay: 6.1s;
  top: 26%;
  width: 100px;
  height: 3px;
}
.contact1 .formimg .form1 {
  margin-left: 25%;
}
.contact1 .formimg .messagebox {
  position: absolute;
  width: 23%;
  height: 200px;
  background-color: #ee3958;
  border: 1px dashed #f7f7f7;
  left: -45%;
  bottom: 100px;
}
.contact1 .formimg .messagebox p {
  width: 90%;
  height: 140px;
  background-color: #f7f7f7;
  margin: 30px 4%;
  padding: 20px 10px;
  text-align: center;
  border: 1px dashed #ee3958;
  color: #266675;
}
.contact1 .infp {
  width: 100%;
  padding: 20px 0px;
  background-color: #f6f6f6;
}
.contact1 .infp .inf {
  width: 60%;
  position: relative;
  margin: auto;
  padding: 10px 10px 10px 30px;
  background-color: #f9eff1;
  border-radius: 4px;
  line-height: 16px;
}
.contact1 .infp .inf p {
  font-size: 10px;
  line-height: 18px;
  color: #757577;
  font-weight: 900;
}
.contact1 .infp .inf img {
  position: absolute;
  top: 0px;
  opacity: 0.8;
  left: -45px;
  animation: css 2s infinite;
}
.btn:hover {
  opacity: 0.5;
  transform: translateY(-8px);
}
#icon {
  position: absolute;
  bottom: 0%;
  right: 50%;
  color: #9aca3c;
  width: 10px;
  transform: scale(3, 3);
}
.form1 #span1 {
  position: absolute;
  display: block;
  background-color: #ee3958;
  color: #fff;
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  bottom: 32.5%;
  transition: 1s;
  right: -24%;
  border-radius: 50%;
}
.span1 {
  opacity: 0;
  bottom: 50%;
}
@keyframes css {
  0% {
    transform: translate(0px);
    margin-left: 10px;
  }
  25% {
    transform: translate(-10px);
  }
  100% {
    transform: translate(10px);
  }
}

@keyframes span1 {
  0% {
    width: 50%;
  }
  25% {
    width: 60%;
  }
  50% {
    width: 45%;
  }
  75% {
    width: 20%;
  }
  100% {
    width: 70%;
  }
}
@keyframes c1 {
  0% {
    border-color: #9aca3c;
  }
  25% {
    border-color: #ee3958;
  }
  50% {
    border-color: #266675;
  }
  75% {
    border-color: #42a5f5;
  }
  100% {
    border-color: #111;
  }
}
</style>
