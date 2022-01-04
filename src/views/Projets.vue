<template>
  <div id="projets">
    <div class="les">
      <span><v-icon class="dd">mdi-cat</v-icon></span>
      <span><v-icon class="s2">mdi-wordpress</v-icon></span>
      <span><v-icon class="s3">mdi-language-swift</v-icon></span>
      <span><v-icon class="s4">mdi-nature-people</v-icon></span>
      <span><v-icon class="s5">mdi-snowflake</v-icon></span>
      <span><v-icon class="s6">mdi-font-awesome</v-icon></span>
      <span><v-icon class="s7">mdi-yin-yang</v-icon></span>
      <span><v-icon class="s8">mdi-meteor</v-icon></span>
      <span><v-icon class="s9">mdi-language-javascript</v-icon></span>
      <span><v-icon class="s10">mdi-emoticon-devil</v-icon></span>
      <span><v-icon class="s11">mdi-face-profile</v-icon></span>
      <span><v-icon class="s12">mdi-reddit</v-icon></span>
      <h1>Les Projest</h1>
      <div></div>
    </div>
    <p class="im"><v-icon class="dda">mdi-certificate</v-icon></p>
    <div class="ani">
      <div class="de">
        <p>
          Les packs création de site web chez SAPHIR INNOVATION sont des offres
          claires et transparentes, issues de l'expérience de l'agence en
          matière de développement web et application
        </p>
      </div>
      <div class="pa">
        <div class="div1">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div>
            <img src="../assets/img/logo-1.png" />
          </div>
        </div>
        <div class="div2">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div>
            <img src="../assets/img/p3.jpg" />
          </div>
        </div>
        <div class="div3">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div>
            <img src="../assets/img/p1.png" />
          </div>
        </div>
        <div class="div4">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div>
            <img src="../assets/img/p1.png" />
          </div>
        </div>
      </div>
    </div>
    <div class="box1">
      <div class="dv1">
        <div></div>
        <div></div>
      </div>
      <div class="dv1">
        <div>
          <img src="../assets/img/logo-1.png" />
        </div>
        <div>
          <h3>le Site Web Les Menus Services</h3>
          <p>
            LES MENUS Services La marque Maintenir la santé à la maison est le
            résultat d'une bonne nutrition et d'un soutien social. Aider les
            gens à rester chez eux le plus longtemps possible en les amusant,
            voici Les Menus Services.
          </p>
          <a href="https://www.les-menus-services.com/" target="_blanck"
            >Les Menus Services</a
          >
        </div>
      </div>
      <div class="dv1">
        <div>
          <img src="../assets/img/p1.png" />
        </div>
        <div>
          <h3>Application Web Les Menus Services</h3>
        </div>
      </div>
      <div class="dv1">
        <div>
          <img src="../assets/img/p3.jpg" />
        </div>
        <div id="d1">
          <h3>Bracelets de téléassistance pour personnes âgées</h3>
          <p>
            Les bracelets de téléassistance sont des bracelets conçus pour
            assister les personnes âgées quotidiennement. En cas de chute ou
            autre problème, les personnes âgées peuvent appuyer sur ce bracelet
            qui va alors automatiquement contacter un voisin, un assistant
            médical ou même les secours.
          </p>
        </div>
      </div>
    </div>
    <div class="sss">
      <h2>SAPHIR INNOVATION</h2>
      <p>
        Nous sommes très soucieux des nouvelles tendances en matière de design
        et nous suivons de très près l’évolution des nouvelles technologies du
        Web et application. Nous désirons vous offrir l’opportunité d’avoir un
        site web à la hauteur de vos ambitions avec un prix très correct
      </p>
    </div>
    <div class="Envie">
      <div>
        <h3>Envie De Discuter ?</h3>
        <p>Notre équipe est ici pour répondre à toutes vos questions</p>
      </div>
      <div>
        <h3>Une question ?</h3>
        <p>N'hesitez pas à nous contacter</p>
      </div>
    </div>
    <div class="but">
      <button>
        <a href="\Contact">contactez nous</a>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Projets"
};
</script>
<style scoped>
.les {
  width: 100%;
  height: 400px;
  position: relative;
  background-color: #ffffff10;
}
.les > span {
  position: absolute;
  text-transform: uppercase;
  display: block;
  z-index: 1;
}
.les > span .dd,
.les > span .s2,
.les > span .s3,
.les > span .s4,
.les > span .s9,
.les > span .s10 {
  color: #ee395890;
}
.les > span .s5,
.les > span .s6,
.les > span .s7,
.les > span .s8,
.les > span .s11,
.les > span .s12 {
  color: #42a5f590;
}
.les span:first-child {
  top: 10px;
  right: 1%;
}
.les span:nth-child(2) {
  top: 20px;
  left: 40%;
}
.les span:nth-child(3) {
  top: 40px;
  left: 59%;
}
.les span:nth-child(4) {
  top: 80px;
  left: 20%;
}
.les span:nth-child(5) {
  top: 100px;
  left: 90%;
}
.les span:nth-child(6) {
  top: 20px;
  left: 20%;
}
.les span:nth-child(7) {
  top: 129px;
  left: 10%;
}
.les span:nth-child(8) {
  top: 209px;
  left: 60%;
}
.les span:nth-child(9) {
  top: 209px;
  left: 50%;
}
.les span:nth-child(10) {
  top: 309px;
  left: 30%;
}
.les span:nth-child(11) {
  bottom: 30px;
  right: 10%;
}
.les span:nth-child(12) {
  top: 309px;
  left: 10%;
}
.les h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  color: #0e314c;
  z-index: 2;
  transform: translateX(-50%) translateY(-80%);
}
.les div {
  width: 50%;
  height: 100%;
  background-color: #42a5f510;
  border-radius: 00% 2900% 00% 00%;
}
.im {
  position: absolute;
  top: 30%;
  left: 45%;
  z-index: 7;
  width: 70px;
  height: 70px;
  cursor: pointer;
}
.im .dda {
  color: #e86f6c;
  font-size: 90px;
  border: 1px dashed #e86f6c;
}
.ani {
  width: 100%;
  height: 900px;
  position: relative;
}
.ani .de {
  width: 60%;
  height: 25%;
  border: 2px #0e314c10 dashed;
  margin: 20px auto;
  padding: 0px 160px;
  overflow: hidden;
  border-radius: 6px;
}
.ani .de p {
  margin-top: 50px;
  color: #0e314c;
  text-align: center;
  font-size: 18px;
}
.ani .pa {
  width: 500px;
  height: 500px;
  position: absolute;
  border-radius: 50%;
  top: 40%;
  left: 30%;
  animation: div 2000s infinite both;
}
@keyframes div {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(9000deg);
  }
}
.ani .pa > div {
  position: absolute;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  animation: div1 500s infinite both;
}
.ani .pa > div div:hover {
  cursor: pointer;
}
.ani .pa > div div {
  overflow: hidden;
  width: 50%;
  margin: 25% auto;
  height: 50%;
  animation: div2 2000s infinite both;
}
.ani .pa > div span {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10%;
  height: 10%;
  z-index: 2;
  border-radius: 50%;
}
.ani .pa > div span:first-child {
  top: 10px;
  left: 10.5%;
  background-color: #008080;
  box-shadow: 1px 1px 5px 6px #00808090;
}
.ani .pa > div span:nth-child(2) {
  top: 10px;
  left: 80%;
  background-color: #047ea6;
  box-shadow: 1px 1px 5px 6px #047ea690;
}
.ani .pa > div span:nth-child(3) {
  top: 80%;
  left: 10.5%;
  box-shadow: 1px 1px 5px 6px #2fbadb90;
  background-color: #2fbadb;
}
.ani .pa > div span:nth-child(4) {
  top: 80%;
  left: 80%;
  box-shadow: 1px 1px 5px 6px #e86f6c90;
  background-color: #e86f6c;
}
@keyframes div1 {
  0% {
    transform: rotate(00deg);
  }
  100% {
    transform: rotate(-9000deg);
  }
}
@keyframes div2 {
  0% {
    transform: rotate(000deg);
  }
  100% {
    transform: rotate(30000deg);
  }
}
.ani .pa:hover,
.ani .pa:hover div,
.ani .pa:hover div div {
  animation: none;
}
.ani .pa div img {
  width: 100%;
  height: 100%;
}
.ani .pa .div1 {
  top: -60px;
  left: 38%;
}
.ani .pa .div2 {
  top: 40%;
  left: -11%;
}
.ani .pa .div3 {
  top: 40%;
  right: -11%;
}
.ani .pa .div4 {
  bottom: -60px;
  left: 38%;
}
.box1 {
  margin: 50px 0px;
  background-color: #0e314c10;
  width: 100%;
  overflow: hidden;
}
.box1 .dv1 {
  width: 70%;
  margin: 20px auto;
  height: 300px;
}
.box1 .dv1 div {
  float: left;
  height: 300px;
  background-color: #fff;
  border: 1px dashed #2fbadb30;
}
.box1 .dv1 div:first-child {
  width: 40%;
  overflow: hidden;
}
.box1 .dv1 div:first-child img {
  width: 70%;
  display: block;
  height: 80%;
  margin: 8% auto;
}
.box1 .dv1 div:last-child {
  width: 60%;
}
.box1 .dv1 div:last-child h3 {
  color: #0e314c;
  text-align: center;
}
.box1 .dv1 div:last-child a {
  display: block;
  text-align: center;
  font-size: 20px;
}
.box1 .dv1 div:last-child a:hover {
  color: #9aca3c;
}
.box1 .dv1 div:last-child h3,
.box1 .dv1 div:last-child p,
.box1 .dv1 div:last-child a {
  margin: 20px;
}
.sss {
  width: 40%;
  margin: 20px auto;
  padding: 20px 40px;
  background-color: #e86f6c30;
}
.sss h2 {
  color: #2fbadb;
  text-align: center;
}
.sss p {
  color: #3b3b3b;
  text-align: justify;
}
.sss h2,
.sss p {
  margin: 10px 0px;
}
.Envie {
  position: relative;
  margin-top: 70px;
  padding: 80px 0px;
  width: 100%;
  height: 300px;
  background-image: linear-gradient(To left, #e86f6c, #2fbadb);
}

.Envie div {
  width: 35%;
  z-index: 0;
  border: 1px solid #fff;
  height: 130px;
  padding: 30px 0px;
  border-radius: 4px;
}
.Envie div:last-child {
  float: right;
  margin-right: 20px;
}
.Envie div:first-child {
  float: left;
  margin-left: 20px;
}
.Envie div p,
.Envie div h3 {
  color: #fff;
  margin: 5px 0px;
  text-align: center;
}
.but {
  background-color: #0e314c;
  position: relative;
}
.but button {
  position: absolute;
  overflow: hidden;
  padding: 30px 10px;
  top: -80px;
  height: 50px;
  width: 22%;
  background-color: #f27dc1;
  border-radius: 5px;
  outline: none;
  display: block;
  box-shadow: 1px 1px 40px 2px #0e314c;
  left: 38.5%;
  transition: 1s;
}
.but button:hover {
  background-color: #0e314c;
  transform: translateY(10px);
  box-shadow: none;
}
.but button::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 0%;
  height: 100%;
  transition: 1s;
  transform: translateX(45%);
  z-index: 0;
  background-image: linear-gradient(To left, #e86f6c, #2fbadb);
}
.but button::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(-45%);
  transition: 1s;
  width: 0%;
  height: 100%;
  z-index: 0;
  background-image: linear-gradient(To right, #e86f6c, #2fbadb);
  background-color: #0e314c;
}
.but button:hover:before {
  transform: translateX(0%);
  width: 48%;
}
.but button:hover::after {
  transform: translateX(0%);
  width: 48%;
}
.but button a {
  position: absolute;
  line-height: 60px;
  color: #fff;
  text-transform: uppercase;
  font-size: 24px;
  z-index: 1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
</style>
