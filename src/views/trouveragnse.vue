<template>
  <div class="trouveragnse">
    <span><v-icon class="dd">mdi-signal-variant</v-icon></span>
    <span><v-icon class="s2">mdi-mixer</v-icon></span>
    <span><v-icon class="s3">mdi-airballoon</v-icon></span>
    <span><v-icon class="s4">mdi-nature-people</v-icon></span>
    <span><v-icon class="s5">mdi-snowflake</v-icon></span>
    <span><v-icon class="s6">mdi-snowman</v-icon></span>
    <span><v-icon class="s7">mdi-android-debug-bridge</v-icon></span>
    <span><v-icon class="s8">mdi-odnoklassniki</v-icon></span>
    <span><v-icon class="s9">mdi-desktop-mac</v-icon></span>
    <span><v-icon class="s10">mdi-apple-safari</v-icon></span>
    <span><v-icon class="s11">mdi-owl</v-icon></span>
    <div class="t2">
      <div id="t2"></div>
      <div id="t3"></div>
    </div>
    <div class="container">
      <v-btn elevation="0" text class="pa-0 ma-0" to="/"
        ><h2>La SAPHIR INNOVATION *</h2></v-btn
      ><span>Trouver son Agense</span>
    </div>

    <div class="agense">
      <div class="leftagense">
        <div class="loc">
          <h1>
            <span style="color: #ee3958;">*</span> Trouver des informations sur
            une agence <span style="color: #ee3958;">.....</span>
          </h1>
          <h3>Localisation générale :</h3>
          <div id="kha">
            <span
              ><v-icon id="icon" style="font-size:50px;color:#ee3958"
                >mdi-map-marker-multiple</v-icon
              ></span
            >
            <span>Adresse</span
            ><span style="margin:10px auto;width:70%;"
              >Residence Ghorouls, Sauitier Jouda 1 Safi</span
            >
          </div>
          <div id="kha">
            <span
              ><v-icon id="icon" style="font-size:60px;color:#ee3958"
                >mdi-email-alert</v-icon
              ></span
            >
            <span>Email</span>
            <span>ncottin@jade-innovation.com</span>
          </div>
          <div id="kha" class="ville" style="height:160px">
            <span
              ><v-icon id="icon" style="font-size:50px;color:#ee3958"
                >mdi-city</v-icon
              ></span
            >
            <span> La ville</span>
            <span>Safi</span>
          </div>
          <div id="kha" class="num" style="height:230px">
            <span>
              <span
                ><v-icon id="icon" style="font-size:50px;color:#ee3958"
                  >mdi-phone-classic</v-icon
                ></span
              >
              <span
                ><v-icon id="icon" style="font-size:50px ;color:#ee3958"
                  >mdi-whatsapp</v-icon
                ></span
              >
            </span>
            <span>Numéro de téléphone</span>
            <span>+33 6 51 32 86 89</span>
            <span>Numéro de téléphone </span>
            <span>+2126 51 32 86 89</span>
          </div>
          <div>
            <h3>Horaires d'ouverture :</h3>
            <p>
              <span style="font-size:20px;font-weight:300; color:#111"
                >Lundi, Mardi, Mercredi, Jeudi
                <span style="display:inline-block;margin:0px 20px">
                  <v-icon style="color:#ee395880;"
                    >mdi-arrow-right</v-icon
                  ></span
                > </span
              ><span>{8:30H -- 13:00H} and {14:30H -- 19:00H}</span>
            </p>
            <p>
              <span style="font-size:20px;font-weight:300; color:#111"
                >Vendredi
                <span style="display:inline-block;margin:0px 20px">
                  <v-icon style="color:#ee395880">mdi-arrow-right</v-icon></span
                ></span
              ><span>{8:30H -- 12:30H}</span>
            </p>
          </div>
        </div>
      </div>
      <div class="rightagense">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217393.26159443535!2d-7.9282517749376655!3d31.64015508665548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafe950d2874f3f%3A0x680b65d3868f5bb8!2z2KfZhNmF2YbYp9ix2KnYjCDZhdix2KfZg9i0!5e0!3m2!1sar!2sma!4v1582467667645!5m2!1sar!2sma"
          width="100%"
          height="100%"
          frameborder="0"
          style="border:0;"
          allowfullscreen=""
        ></iframe>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "trouveragnse",
};
</script>

<style scoped>
h1 {
  font-size: 22px;
}
.trouveragnse > span {
  position: absolute;
  text-transform: uppercase;
  display: block;
  z-index: 1;
}
.trouveragnse > span .dd {
  color: #ee3958;
  animation: s1 3s infinite;
  outline: none;
}
.trouveragnse > span .s2 {
  color: #42a5f5;
  animation: s2 3s infinite;
}
.trouveragnse > span .s3 {
  color: #ee3958;
  animation: s3 5s infinite;
}
.trouveragnse > span .s4 {
  color: #42a5f5;
  animation: s3 5s infinite;
}
.trouveragnse > span .s5 {
  color: #ee3958;
  animation: s5 5s infinite;
}
.trouveragnse > span .s6 {
  color: #42a5f5;
  animation: s6 5s infinite;
}
.trouveragnse > span .s7 {
  color: #ee3958;
  transform-origin: bottom;
  animation: s7 5s infinite;
}
.trouveragnse > span .s8 {
  color: #42a5f5;
  transform-origin: bottom;
  animation: s8 5s infinite;
}
.trouveragnse > span .s9 {
  color: #ee3958;
  transform-origin: bottom;
  animation: s9 5s infinite;
}
.trouveragnse > span .s10 {
  color: #42a5f5;
  animation: s10 5s infinite;
}
.trouveragnse > span .s11 {
  color: #fff;
  animation: s1 5s infinite;
}
.trouveragnse span:first-child {
  top: 10px;
  right: 1%;
}
.trouveragnse span:nth-child(2) {
  top: 20px;
  left: 40%;
}
.trouveragnse span:nth-child(3) {
  top: 40px;
  left: 60%;
}
.trouveragnse span:nth-child(4) {
  top: 80px;
  left: 20%;
}
.trouveragnse span:nth-child(5) {
  top: 100px;
  left: 90%;
}
.trouveragnse span:nth-child(6) {
  top: 20px;
  left: 20%;
}
.trouveragnse span:nth-child(7) {
  top: 129px;
  left: 10%;
}
.trouveragnse span:nth-child(8) {
  top: 290px;
  left: 70%;
}
.trouveragnse span:nth-child(9) {
  top: 120px;
  right: 30%;
}
.trouveragnse span:nth-child(10) {
  top: 90px;
  left: 50%;
}
.trouveragnse span:nth-child(11) {
  top: 320px;
  left: 4%;
}

@keyframes s1 {
  0% {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(1.5, 1.5);
  }
  75% {
    transform: scale(2, 2);
    color: #ee3958;
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes s2 {
  0% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(320deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes s3 {
  0% {
    top: 40px;
  }
  75% {
    top: 300px;
  }
  95% {
    transform: rotate(30deg);
  }
  100% {
    top: 40px;
    transform: rotate(-50deg);
  }
}
@keyframes s5 {
  0% {
    top: 40px;
  }
  75% {
    top: 250px;
    transform: rotate(320deg);
  }
  100% {
    top: 40px;
    transform: rotate(0deg);
  }
}
@keyframes s6 {
  0% {
    transform: rotate(40deg);
  }
  25% {
    transform: rotate(-40deg);
  }
  50% {
    transform: rotate(40deg);
  }
  75% {
    transform: rotate(-40deg);
  }
  100% {
    transform: rotate(40deg);
  }
}
@keyframes s7 {
  0% {
    transform: rotate(90deg) translateX(80px);
  }
  25% {
    transform: rotate(-90deg);
  }
  50% {
    transform: rotate(90deg);
  }
  75% {
    transform: rotate(-90deg);
  }
  100% {
    transform: rotate(90deg) translateX(80px);
  }
}
@keyframes s8 {
  0% {
    transform: rotate(90deg) translateX(-300px);
    color: #fff;
  }
  25% {
    transform: rotate(-90deg);
  }
  50% {
    transform: rotate(90deg);
  }
  75% {
    transform: rotate(-90deg);
  }
  100% {
    transform: rotate(90deg) translateX(-300px);
  }
}

@keyframes s9 {
  0% {
    transform: rotate(90deg) translateX(100px);
  }
  25% {
    transform: rotate(-90deg);
  }
  50% {
    transform: rotate(90deg);
  }
  75% {
    transform: rotate(-90deg);
  }
  100% {
    transform: rotate(90deg) translateX(100px);
  }
}

@keyframes s10 {
  0% {
    transform: rotate(320deg);
  }
  25% {
    transform: rotate(-320deg);
  }
  50% {
    transform: rotate(320deg);
  }
  75% {
    transform: rotate(-320deg);
  }
  100% {
    transform: rotate(320deg);
  }
}

.t2 {
  width: 100%;
  height: 400px;
  background-image: url("../assets/img/a18.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
  transition: 2s;
  position: relative;
  transition: 0.5s ease-in-out;
}
.t2 #t2,
.t2 #t3 {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
}
.t2 #t2 {
  background: #00000080;
  z-index: 1;
}
.t2 #t3 {
  background: #00000080;
  z-index: 2;
}
.container {
  width: 80%;
  margin: auto;
}
.container h2 {
  color: black;
  display: inline-block;
}
.container span {
  color: #ee3958;
  margin-left: 4px;
  display: inline-block;
}
.agense {
  display: flex;
}
.agense > div {
  width: 50%;
  height: auto;
  overflow: hidden;
  margin: 10px 0px;
  color: #35343499;
}
.agense .leftagense {
  width: 48%;
  margin-left: 1%;
  margin-right: 1%;
  border-radius: 6px;
  box-shadow: 1px 1px 30px 1px #fff;
  background-color: #f4f2f2;
}
.agense .leftagense .loc div {
  float: left;
  width: 46%;
  margin: 20px 2% 10px;
  height: 200px;
  background-color: #f7f7f7;
  border-style: dashed;
  border: 0.8px dashed #35343420;
}
.agense .leftagense .loc div:last-child {
  width: 80%;
  padding: 0px 10px;
  margin-left: 10%;
}
.agense .leftagense .loc div:last-child h3 {
  margin-top: 20px;
}
.agense .leftagense .loc div {
  border-radius: 3px;
  transition: 1s;
}
.agense .leftagense .loc div.num span:first-child span:last-child {
  display: inline;
  margin-left: 20px;
}
.agense .leftagense .loc div.num span:first-child span:first-child {
  display: inline;
  margin-right: 40px;
}
.agense .leftagense .loc div:not(:last-child) span {
  display: block;
  padding: 0px;
  margin-top: 10px;
  text-align: center;
  transition: 1s;
}
.agense .leftagense .loc div:not(:last-child):hover {
  transform: translateY(-20px);
  background-color: #ee395808;
}
.agense .leftagense .loc div:not(:last-child):hover span {
  color: #111;
}
.agense .leftagense .loc div:not(:last-child):hover span:first-child {
  transform: translateY(-10px);
}
.agense .leftagense .loc div:not(:last-child):hover span:last-child {
  transform: translateX(-20px);
}
.agense .leftagense .loc div span:first-child {
  font-size: 32px;
}
.agense .leftagense .loc {
  height: 100%;
  margin-top: 20px;
  opacity: 1;
}
.agense .leftagense h1 {
  margin-left: 20px;
}
.agense .leftagense h3 {
  margin-left: 70px;
  margin-top: 30px;
}
</style>
