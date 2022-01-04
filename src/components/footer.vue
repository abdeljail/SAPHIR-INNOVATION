<template>
  <div id="footer1">
    <div class="div1">
      <h3>À PROPOS</h3>
      <ul>
        <li><a href="\Acceuil">Acceuil</a></li>
        <li><a href="\trouveragnse">Trouver son Agense</a></li>
        <li><a>Newsletter</a></li>
        <li><a href="\trouveragnse">06 31 90 ** **</a></li>
      </ul>
    </div>
    <div class="div1">
      <h3>Menu</h3>
      <ul>
        <li><a href="/Mobile">Serves Application</a></li>
        <li><a href="\WebSite">Serves Web</a></li>
        <li><a href="\skills">Skills</a></li>
        <li><a href="\Projets">Projets</a></li>
        <li><a href="\Contact">Contact</a></li>
        <li><a href="\Saphir">Conditions Générales De Ventes</a></li>
      </ul>
    </div>
    <div class="div1">
      <h3>SUIVEZ-NOUS</h3>
      <ul>
        <li>
          <a :href="fac" target="_blank"
            ><v-icon class="icon">mdi-facebook</v-icon><span>facebook</span></a
          >
        </li>
        <li>
          <a :href="ins" target="_blank"
            ><v-icon class="icon">mdi-instagram</v-icon
            ><span>instagram</span></a
          >
        </li>
        <li>
          <a :href="twi" target="_blank">
            <v-icon class="icon">mdi-twitter</v-icon>
            <span>twitter</span></a
          >
        </li>
        <li>
          <a :href="you" target="_blank"
            ><v-icon class="icon">mdi-skip-next-circle-outline</v-icon
            ><span>youtube</span></a
          >
        </li>
        <li>
          <a :href="lin" target="_blank"
            ><v-icon class="icon">mdi-linkedin</v-icon><span>linkedin</span></a
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "footer1",
  data() {
    return {
      fac: "https://www.facebook.com/",
      ins: "https://www.instagram.com",
      twi: "https://www.twitter.com",
      tou: "https://www.youtube.com",
      lin: "https://www.linkedin.com"
    };
  }
};
</script>
<style scoped>
a {
  font-size: 17px;
  font-family: monospace;
}
#footer1 {
  background-color: #111;
  padding: 10px 0px;
}
#footer1 div {
  float: left;
  width: 30.33%;
  margin-left: 3%;
}
#footer1 .div1 h3 {
  font-family: 30px;
  font-size: 30px;
  margin-left: 50px;
  color: #fff;
}
#footer1 div ul {
  list-style: none;
  display: inline-block;
  margin: 0px 30px;
}
#footer1 div ul li {
  padding: 0;
  margin: 0;
}
#footer1 div ul li a {
  text-decoration: none;
  position: relative;
  color: #fff;
  display: inline-block;
  padding: 2px;
  margin: 5px 10px;
  color: rgb(135, 134, 134);
}
#footer1 div ul li a:before {
  content: "*";
  padding: 0;
  margin: 0;
  position: absolute;
  font-size: 30px;
  top: -4px;
  display: none;
  left: -20px;
  color: #fff;
}
#footer1 div ul li:hover a:before {
  display: block;
}
#footer1 div ul li a span {
  margin-left: 10px;
  display: inline-block;
}
#footer1 div ul li a .icon {
  font-size: 40px;
  color: #42a5f5;
  transition: 0.5s;
}
#footer1 div ul li a:hover .icon {
  transform: translateY(-10px) scale(0.8, 0.8);
}
</style>
