<template>
  <div style="background-color:#F0F0F0;">
    <div class="sa">
      <div class="ab"></div>
      <div class="h2">
        <h1>SAP<span>HIR</span> INNOVAT<span>ION</span></h1>
        <p>
          Spécialisée dans la création, le suivi et la maintenance de sites
          vitrine, sites ecommerce, et des sites sur-mesure, notre entreprise
          assure, dans son intégralité, le pilotage de projets divers confiés
          par nos clients.
        </p>
      </div>
    </div>
    <div class="pp">
      <div>
        <p>
          Saphir Innovation est une agence web basée au Maroc à Safi,
          Spécialisée dans la création, le suivi et la maintenance de sites
          vitrine, sites e-commerce, et des sites sur-mesure, notre entreprise
          assure, dans son intégralité, le pilotage de projets divers confiés
          par nos clients.
        </p>
        <p>
          Aujourd’hui le développement de ses propres E-commerce lui a donné le
          recul pour connaître vos besoins et les meilleures stratégies à
          adopter pour :
        </p>
        <p>
          <span><span>*</span> Rendre votre site visible et performant</span
          ><br />
          <span><span>*</span> Augmenter votre chiffre d’affaires</span><br />
          <span><span>*</span>Créer des campagnes efficaces et rentables</span
          ><br />
          <span><span>*</span> Générer du trafic ciblé important</span><br />
        </p>
        <p>
          Faire des sites de ses partenaires des références sur internet est
          devenu la spécialité de Saphir Innovation et nous y attachons tous nos
          efforts.
        </p>
        <p>
          Parce que travailler en équipe permet d’être encore plus efficace pour
          vous fournir les solutions les plus innovantes, nous avons réuni une
          équipe très compétente au professionnalisme reconnu.
        </p>
        <p>
          Forces de proposition, efficaces et créatifs, nous vous accompagnons
          dans la définition de votre projet, la conception de votre stratégie
          et jusqu’à l’atteinte de vos objectifs. Grâce à notre personnel
          qualifié en développement web, webdesign, référencement naturel, et
          rédaction de contenus optimisés, nous regroupons tous les compétences
          nécessaires pour la réalisation de vos ambitions.
        </p>
      </div>
    </div>
    <div class="nos1">
      <div class="nos">
        <div class="com">
          <h1>NOS COMPÉTENCES<span></span></h1>
          <div>
            <h3>HTML5</h3>
            <p class="p1">
              <span style="margin-right:26px;">90%</span>
            </p>
          </div>
          <div>
            <h3>CSS3</h3>
            <p class="p2">
              <span style="margin-right:26px;">90%</span>
            </p>
          </div>
          <div>
            <h3>VUEJS(<span>VUETIFEY</span>)</h3>
            <p class="p3">
              <span style="margin-right:16px;">95%</span>
            </p>
          </div>
          <div>
            <h3>PHP5(<span>SYMFONY4</span>)</h3>
            <p class="p4">
              <span style="margin-right:30px;">80%</span>
            </p>
          </div>
          <div>
            <h3>NODEJS</h3>
            <p class="p5">
              <span style="margin-right:40px;">75%</span>
            </p>
          </div>
          <div>
            <h3>MYSQL<span>/</span>SQL</h3>
            <p class="p6">
              <span style="margin-right:28px;">89%</span>
            </p>
          </div>
          <div>
            <h3>SEO</h3>
            <p class="p7">
              <span style="margin-right:45px;">70%</span>
            </p>
          </div>
        </div>
        <div class="pour">
          <h1 id="sur">
            Privilèges d'agence sur le marché du travail<span></span>
          </h1>

          <div>
            <h1>Un design original et attrayant</h1>
            <h2 class="h12" style="background-color:#f27dc1;"></h2>
            <p>
              Nous suivons les tendances du web design et essayons de vous créer
              un site au design élégant et attractif.
            </p>
          </div>
          <div>
            <h1>Mise en ligne dans les meilleurs délais</h1>
            <h2 class="h12" style="background-color:#204333;"></h2>
            <p>
              Si vous nous fournissez les informations nécessaires, votre site
              sera en ligne dans un bref délai.
            </p>
          </div>
          <div>
            <h1>Optimisation pour la recherche</h1>
            <h2 class="h12" style="background-color:#42a5f5;"></h2>
            <p>
              Nous prenons soin de l’optimisation de votre site web pour les
              moteurs de recherche en amont.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="cont">
      <div class="sk"></div>
      <div class="bt">
        <h1 style="color:#ee3958">
          <span style="color:#1f2e3e">UN PROJET À </span> NOUS
          <span style="color:#FFF">SOUMETTRE</span>
        </h1>
        <button>
          <a href="/Contact"><span>NOUS C</span>ONTACT</a>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.sa {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 500px;
  background-image: url("../assets/img/aki.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
}
.ab {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #5c5a59;
  opacity: 0.5;
  z-index: 0;
}
.h2 {
  position: absolute;
  z-index: 2;
  overflow: hidden;
  height: 100%;
  width: 100%;
  top: 0%;
  color: #fff;
  left: 0%;
}
.h2 p {
  font-size: 22px;
  position: absolute;
  bottom: -26%;
  left: 20%;
  width: 60%;
  transition: 1.5s;
}
.h2 > span img {
  width: 80px;
  height: 80px;
  margin-left: 50%;
  margin-top: -40px;
  border-radius: 50%;
  animation: ss 4s infinite;
}
.h2 h1 {
  position: absolute;
  font-size: 60px;
  transition: 1s;
  top: -26%;
  left: 27%;
}
.h2 h1 span {
  color: #42a5f5;
}
.pp {
  width: 100%;
  height: 450px;
  padding: 40px 0px;
  margin: 20px 0px 20px 28px;
}
.pp div {
  padding: 0;
  margin: 0;
}
.pp p {
  font-size: 14px;
  color: #111;
}
.pp p:nth-child(3) {
  margin-left: 40px;
}
.pp p span span {
  color: #ee3958;
  font-size: 22px;
}
.nos1 {
  width: 100%;
  padding: 30px 0px;
  background-attachment: fixed;
  background-image: url("../assets/img/che1.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.nos {
  width: 90%;
  margin: 20px auto;
  padding: 20px 40px;
  background-color: #1f2e3e98;
  box-shadow: 1px 1px 100px 20px #1f2e3e;
  overflow: hidden;
}
.nos > div {
  width: 50%;
  float: left;
  text-align: center;
}
.nos div h1 {
  color: #f1f1f1;
  position: relative;
  margin-bottom: 30px;
  transition: 2s;
}
.nos div h1 span {
  position: absolute;
  height: 4px;
  width: 0%;
  transition: 2s;
  background: #00000090;
}
.nos > div:first-child h1 span {
  bottom: 0px;
  left: 23%;
}
.nos > div:last-child h1 span {
  bottom: 45px;
  left: 4%;
}
.nos .com div {
  text-align: left;
}
.nos .com div {
  margin-top: 30px;
}
.nos .com div p {
  margin: 0;
  position: relative;
  overflow: hidden;
  padding-right: 20px;
  width: 0%;
  height: 30px;
  color: #111;
  transition: 1.5s;
}
.nos .com div h3 {
  margin-left: 10px;
  font-size: 16px;
  color: #ffff;
}
.nos .com div h3 span {
  color: #f27dc1;
}
.nos .com div p span {
  float: right;
  z-index: 5;
  margin-top: 4px;
}
.nos .com div .p1 {
  background-color: #42a5f5;
}
.nos .com div .p2 {
  background-color: #f5aa6dc9;
}
.nos .com div .p3 {
  background-color: #c5f39a;
}
.nos .com div .p4 {
  background-color: #f7b5db;
}
.nos .com div .p5 {
  background-color: #fcfab1;
}
.nos .com div .p6 {
  background-color: #5ae8ecd8;
}
.nos .com div .p7 {
  background-color: #f09c9cd8;
}
.nos .com div p:before {
  background-color: #ee3958;
  opacity: 0.5;
  transition: 1s 0.5s;
  z-index: 0;
}
.nos .com div .p1:before {
  content: "";
  width: 93%;
  height: 100%;
  position: absolute;
  transition: 1s 4s;
}
.nos .com div .p2:before {
  content: "";
  width: 93%;
  height: 100%;
  position: absolute;
}
.nos .com div .p3:before {
  content: "";
  width: 96%;
  height: 100%;
  position: absolute;
}
.nos .com div .p4:before {
  content: "";
  width: 89%;
  height: 100%;
  position: absolute;
}
.nos .com div .p5:before {
  content: "";
  width: 86%;
  height: 100%;
  position: absolute;
}
.nos .com div .p6:before {
  content: "";
  width: 92%;
  height: 100%;
  position: absolute;
}
.nos .com div .p7:before {
  content: "";
  width: 84%;
  height: 100%;
  position: absolute;
}
.nos .pour > div {
  margin-bottom: 10px;
  color: #fff;
  border: dashed 1px #111;
  padding: 16px 20px;
}
.nos .pour div h1 {
  color: #000;
  margin: 0;
  font-size: 28px;
}
.nos .pour div .h12 {
  width: 200px;
  margin: 0 auto 10px auto;
  padding: 0;
  height: 4px;
}
.nos .pour div p {
  text-align: justify;
  font-size: 20px;
  line-height: 28px;
}
.cont {
  width: 100%;
  height: 500px;
  padding: 30px 0xp;
  position: relative;
  margin: 20px 0px;
  background-color: #1f2e3e;
  overflow: hidden;
  transform: scale(1.1, 1.1);
}
.cont .sk {
  width: 50%;
  height: 100%;
  transform: skewY(-19deg) translateY(-120px) scaleX(3);
  background-color: #fff;
  background-attachment: fixed;
}
.cont .bt {
  position: absolute;
  text-align: center;
  transform: scale(2, 2);
  top: 43%;
  left: 32%;
  width: 40%;
  padding: 20px;
  height: 100px;
}
.cont .bt button {
  border: 1px solid #ee3958;
  position: relative;
  width: 160px;
  height: 40px;
  overflow: hidden;
  margin-top: 10px;
  outline: none;
  transition: 0.3s;
}
.cont .bt button:before {
  content: "";
  width: 0%;
  position: absolute;
  z-index: 0;
  top: 0;
  left: -50%;
  background-color: #f27dc1;
  height: 100%;
  transition: 0.5s;
}
.cont .bt button:hover {
  border: 1px solid #1f2e3e;
}
.cont .bt button:hover a span {
  color: #fff;
}
.cont .bt button:hover a {
  color: #fff;
  transition: 1s;
}
.cont .bt button:hover:before {
  width: 49%;
  z-index: 0;
  transform: translateX(200%);
  opacity: 0.5;
}
.cont .bt button a {
  color: #fff;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  position: absolute;
  height: 100%;
  padding: 10px;
  z-index: 4;
  text-decoration: none;
}
</style>
