import Vue from "vue";
import VueRouter from "vue-router";
import Contact from "../views/Contact.vue";
import Accueil from "../views/Accueil.vue";
import trouveragnse from "../views/trouveragnse.vue";
import skills from "../views/skills.vue";
import WebSite from "../views/WebSite.vue";
import Mobile from "../views/Mobile.vue";
import Projets from "../views/Projets.vue";
import Saphir from "../views/Saphir.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Accueil",
    component: Accueil
    // component: () =>
    //   import( "../views/Accueil.vue")
  },
  {
    path: "/Contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/trouveragnse",
    name: "trouveragnse",
    component: trouveragnse
  },
  {
    path: "/skills",
    name: "skills",
    component: skills
  },
  {
    path: "/WebSite",
    name: "WebSite",
    component: WebSite
  },
  {
    path: "/Mobile",
    name: "Mobile",
    component: Mobile
  },
  {
    path: "/Projets",
    name: "Projets",
    component: Projets
  },
  {
    path: "/Saphir",
    name: "Saphir",
    component: Saphir
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
