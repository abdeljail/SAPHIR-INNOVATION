import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import jQuery from "jquery";
global.jQuery = jQuery;
global.$ = jQuery;
Vue.config.productionTip = false;
new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
jQuery(function() {
  /////////////////////////////////////
  /* start Accueil*/
  jQuery(".anta h1").fadeOut(0);
  jQuery(".anta h3").fadeOut(0);
  jQuery(".anta h4").fadeOut(0);
  jQuery(".anta p").fadeOut(0);
  jQuery(".pro div").fadeOut(0);
  /* end Accueil*/
  /////////////////////////////////////
  /* start Contact*/
  /* end Contact*/
  /////////////////////////////////////
  /* start Projets*/
  /* end Projets*/
  /////////////////////////////////////
  /* start Sphir*/
  /* end Sphir*/
  /////////////////////////////////////
  /* start Skills */
  jQuery(".pp >div").slideUp(-10000);
  /* end Skills*/
  /////////////////////////////////////
  /* start trouveragnse */
  /* end trouveragnse */
  /////////////////////////////////////
  /*start WebSite */
  /* end WebSite*/
  /////////////////////////////////////
  /*start Mobile */
  jQuery(".mb").fadeOut(0);
  /* end Mobile*/
  /////////////////////////////////////
  jQuery(".pour div").slideUp(0);
  jQuery("#c22").css("opacity", "0");
  jQuery("#top2").fadeOut(0);
  jQuery("#t2").css("opacity", "1");
  jQuery("#t2").css("transition", "3s");
  jQuery("#t3").css("opacity", "1");
  jQuery("#t3").css("transition", "3s");
  // jQuery("#fixd").slideUp(-7000);
  jQuery(".imgp h3").css("color", "#ee3958");
  /////////// event on scroll//////////////
  jQuery(window).on("scroll", function() {
    var j = jQuery(window).scrollTop();
    /////////////////////////////////////
    /* start Accueil*/
    if (j > 500) {
      jQuery("#qup1 div:first-of-type")
        .css("left", "20%")
        .css("opacity", "0");
      jQuery("#qup1 div:last-of-type")
        .css("right", "20%")
        .css("opacity", "0");
      jQuery("#qup1 p").css("opacity", "1");
    }
    if (j > 700) {
      jQuery("#innovation h1").css("left", "25%");
      jQuery("#innovation h1 .idh1").css("right", "30%");
    }
    if (j > 1580) {
      jQuery("#web #h22").css("right", "41.5%");
      jQuery("#web .span12").css("left", "42%");
    }
    if (j < 1800 && j > 1600) {
      jQuery(".imgp").css("top", "-160px");
      jQuery(".imgp").css("transition", "1s");
      jQuery(".imgp h3").css("top", "68%");
      jQuery(".imgp h3").css("transition", "0.5s ease-in-out 1s");
      jQuery(".imgp h3").css("color", "#42a5f5");
      jQuery(".container").css("boxShadow", "1px 2px 45px #d5F3F3");
    } else {
      jQuery(".imgp").css("transition", "1s");
      jQuery(".imgp").css("top", "0px");
      jQuery(".imgp h3").css("top", "20%");
      jQuery(".imgp h3").css("color", "#ee3958");
      jQuery(".container").css("boxShadow", "none");
    }
    if (j > 2000) {
      jQuery("#pr1").css("opacity", "1");
      jQuery("#pr1").css("transition", "3s");
      jQuery("#pr1 span").css("top", "70px");
      jQuery("#pr1 span").css("transition", ".5s 1s");
    }
    if (j > 2100) {
      jQuery(".pro div").fadeIn(2000);
    }
    if (j > 2900) {
      jQuery(".POINTS h1").css("opacity", "1");
      jQuery(".POINTS> p").css("opacity", "1");
    }
    if (j > 3000) {
      jQuery(".POINTS div div").css("opacity", "1");
    }
    if (j > 2400) {
      jQuery("#no").css("top", "10px");
      jQuery("#va").css("bottom", "60px");
      jQuery("#val span").css("transform", "rotate(720deg)");
    }
    if (j > 3800) {
      jQuery(".TOUT div .divh3:first-child").css("left", "40px");
      jQuery(".TOUT div .divh3:nth-child(2)").css("right", "40px");
      jQuery(".TOUT div .divh3:nth-child(3)").css("left", "40px");
      jQuery(".TOUT div .divh3:nth-child(5)").css("left", "40px");
      jQuery(".TOUT div .divh3:nth-child(4)").css("right", "40px");
      jQuery(".TOUT div .divh3:last-child").css("right", "40px");
    }
    if (j > 3900) {
      jQuery(".cont1 > .s1").css("top", "120px");
      jQuery(".cont1 > .s1").css("left", "80%");
      jQuery(".cont1 > .s2").css("top", "60px");
      jQuery(".cont1 > .s2").css("left", "19.6%");
      jQuery(".cont1 > .s3").css("top", "210px");
      jQuery(".cont1 > .s3").css("left", "18.6%");
      jQuery(".cont1 > .s4").css("top", "290px");
      jQuery(".cont1 > .s4").css("left", "70%");
      jQuery(".cont1 > .s6").css("top", "10px");
      jQuery(".cont1 > .s6").css("left", "97%");
      jQuery(".cont1 > .s7").css("top", "40px");
      jQuery(".cont1 > .s7").css("left", "60%");
      jQuery(".cont1 > .s8").css("top", "58px");
      jQuery(".cont1 > .s8").css("left", "28.5%");
      jQuery(".cont1 > span").css("transform", "rotate(0deg)");
      jQuery(".cont1 > span").css("transform", "translate(0px)");
    }
    if (j > 4500) {
      jQuery(".anta h1").fadeIn(1000);
      jQuery(".anta h3").fadeIn(4000);
      jQuery(".anta h4").fadeIn(3000);
      jQuery(".anta p").fadeIn(4500);
      jQuery(".anta button").css("bottom", "-10%");
      jQuery(".anta button").css("left", "45%");
      jQuery(".anta button").css("transform", "rotate(0deg)");
    }
    /* end Accueil*/
    /////////////////////////////////////
    /* start Contact*/
    if (j > 60 && j < 350) {
      jQuery("#c11").css("opacity", "1");
    } else {
      jQuery("#c11").css("opacity", "0");
    }
    if (j > 300) {
      jQuery("#ch1").css("opacity", "1");
    }
    if (j > 500) {
      jQuery(".image").css("right", "120px");
      jQuery(".image .s0").css("opacity", "1");
      jQuery(".image .s1").css("opacity", "1");
      jQuery(".image .s2").css("opacity", "1");
      jQuery(".image .s3").css("opacity", "1");
      jQuery(".image p").css("opacity", "1");
      jQuery(".image p span").css("opacity", "1");
    } else {
      jQuery(".image").css("right", "-400px");
      jQuery(".image .s0").css("opacity", "0");
      jQuery(".image .s1").css("opacity", "0");
      jQuery(".image .s2").css("opacity", "0");
      jQuery(".image .s3").css("opacity", "0");
      jQuery(".image p").css("opacity", "0");
      jQuery(".image p span").css("opacity", "0");
    }
    /* end Contact*/
    /////////////////////////////////////
    /* start Skills */
    if (j > 20) {
      jQuery(".h2 h1").css("top", "26%");
      jQuery(".h2 p").css("bottom", "26%");
    }
    if (j > 300) {
      jQuery(".pp >div").slideDown(2500);
    }
    if (j > 900) {
      jQuery(".nos .com div p")
        .css("width", "80%")
        .css("padding-right", "20px");
      jQuery(".pour div")
        .slideDown(2000)
        .css("border", "2px solid #111");
    }
    if (j > 800) {
      jQuery(".nos div h1 span").css("width", "40%");
    } else {
      jQuery(".nos div h1 span").css("width", "0%");
    }
    /* end Skills*/
    /////////////////////////////////////
    /*start WebSite */
    if (j > 1240 && j < 1600) {
      jQuery("#un #right img").css("transform", "rotate(0deg) scale(1,1)");
    } else {
      jQuery("#un #right img").css("transform", "rotate(45deg) scale(.5,.5)");
    }
    if (j > 1600 && j < 2000) {
      jQuery("#vi #left img").css("transform", "rotate(0deg) scale(1,1)");
    } else {
      jQuery("#vi #left img").css("transform", "rotate(45deg) scale(.5,.5)");
    }
    if (j > 2000 && j < 2300) {
      jQuery("#in #left img").css("transform", "rotate(0deg) scale(1,1)");
    } else {
      jQuery("#in #left img").css("transform", "rotate(45deg) scale(.5,.5)");
    }
    if (j > 2400 && j < 2600) {
      jQuery("#ec #right img").css("transform", "rotate(0deg) scale(1,1)");
    } else {
      jQuery("#ec #right img").css("transform", "rotate(45deg) scale(.5,.5)");
    }
    if (j > 2700) {
      jQuery("#content div:nth-child(2)").css("transform", "rotateX(0deg)");
      jQuery("#content div:nth-child(1)").css("transform", "rotateX(0deg)");
      jQuery("#content div:nth-child(3)").css("transform", "rotateX(0deg)");
    }
    if (j > 3500) {
      jQuery("#content div:last-child").css("transform", "rotateX(0deg)");
    }
    if (j > 4500) {
      jQuery(".rapide div div:last-child").css("left", "1.5%");
      jQuery(".rapide div div:nth-child(3)").css("left", "26.5%");
      jQuery(".rapide div div:nth-child(2)").css("left", "51.5%");
      jQuery(".rapide div div:nth-child(1)").css("left", "76%");
    }
    /* end WebSite*/
    /////////////////////////////////////
    /*start Mobile */
    if (j > 1300) {
      jQuery(".mb").fadeIn(2000);
    }
    if (j > 1800) {
      jQuery(".a1").css("transform", "rotateX(0deg)");
    }
    jQuery(".a1").mouseenter(function() {
      jQuery(this).css("transform", "translateY(-10px)");
    });
    jQuery(".a1").mouseleave(function() {
      jQuery(this).css("transform", "translateY(0px)");
    });
    if (j > 2500) {
      jQuery(".rapide .s1").css("right", "1.5%");
      jQuery(".rapide .s2").css("right", "26.5%");
      jQuery(".rapide .s3").css("right", "51.5%");
      jQuery(".rapide .s4").css("right", "76%");
    }
    /* end Mobile*/
    /////////////////////////////////////
    if (j > 1400) {
      jQuery("#sk").css("bottom", "0%");
      jQuery("#sk").css("left", "20%");
      jQuery("#tr").css("bottom", "0%");
      jQuery("#tr").css("right", "20%");
      jQuery("#saphir img").css("top", "30px");
      jQuery("#sk").css("transform", "rotate(0deg)");
      jQuery("#tr").css("transform", "rotate(0deg)");
      jQuery("#saphir img").css("transform", "rotate(0deg)");
    } else {
      jQuery("#sk").css("bottom", "160%");
      jQuery("#sk").css("left", "160%");
      jQuery("#tr").css("bottom", "160%");
      jQuery("#tr").css("right", "160%");
      jQuery("#sk").css("transform", "rotate(720deg)");
      jQuery("#tr").css("transform", "rotate(720deg)");
      jQuery("#saphir img").css("top", "-50%");
      jQuery("#saphir img").css("transform", "rotate(720deg)");
    }
    if (j > 300) {
      jQuery("#top2").fadeIn(1000);
      j;
    } else {
      jQuery("#top2").fadeOut(1000);
    }
    if (j > 800) {
      jQuery("#fixd").css("top", "0px");
    } else {
      jQuery("#fixd").css("top", "-90px");
    }
  });
  /////// event on click  //////
  jQuery(".pa .div1 div").on("click", function() {
    jQuery("body,html").animate(
      {
        scrollTop: 1770,
      },
      1000
    );
  });
  jQuery(".pa .div4 div").on("click", function() {
    jQuery("body,html").animate(
      {
        scrollTop: 1450,
      },
      1000
    );
  });
  jQuery(".pa .div3 div").on("click", function() {
    jQuery("body,html").animate(
      {
        scrollTop: 2100,
      },
      1000
    );
  });
  jQuery(".pa .div2 div").on("click", function() {
    jQuery("body,html").animate(
      {
        scrollTop: 2410,
      },
      1000
    );
  });
  jQuery("#me").on("click", function() {
    jQuery(".messagebox").animate(
      {
        left: "-20%",
      },
      3000
    );
    jQuery(".messagebox").animate(
      {
        left: "-10%",
      },
      2000
    );
    jQuery(".messagebox").animate(
      {
        left: "0%",
      },
      1000
    );
    jQuery(".messagebox").animate(
      {
        left: "0%",
      },
      16000
    );
    jQuery(".messagebox").animate(
      {
        left: "-10%",
      },
      1000
    );
    jQuery(".messagebox").animate(
      {
        left: "-20%",
      },
      2000
    );
    jQuery(".messagebox").animate(
      {
        left: "-45%",
      },
      2000
    );
  });
  jQuery("#email").on("click", function() {
    jQuery("#divform").fadeIn(0);
    jQuery("#divform").css("top", "0%");
    jQuery("#divform").css("left", "-6%");
    jQuery("#app1").css("opacity", "1");
    jQuery("#app1").css("width", "100%");
    jQuery("#app1").css("zIndex", "2");
    jQuery("#app1").css("height", "100%");
  });
  jQuery(".id").on("click", function() {
    jQuery(".id").animate(
      {
        width: "1%",
        height: "10px",
        top: "22px",
        left: "16.4%",
      },
      1000,
      function() {
        jQuery(".id").css("transform", "rotate(0deg)");
        jQuery("#app1").css("opacity", "0");
        jQuery("#app1").css("width", "0%");
        jQuery("#app1").css("zIndex", "2");
        jQuery("#app1").css("height", "100%");
      }
    );
    jQuery(this).animate(
      {
        opacity: "0",
      },
      2000
    );
  });
  jQuery("#fer").on("click", function() {
    jQuery("#divform").fadeOut(-400, function() {
      jQuery("#divform").css("top", "-30%");
      jQuery("#divform").css("left", "-50%");
      jQuery("#app1").css("opacity", "0");
      jQuery("#app1").css("width", "0%");
      jQuery("#app1").css("height", "0%");
      jQuery("#app1").css("zIndex", "-1");
    });
  });
  var k = 0;
  jQuery("#valid1").on("click", function() {
    if (k != 0) {
      console.log(k);
      jQuery(".id").animate(
        {
          opacity: "1",
        },
        400
      );
      jQuery(".id").animate(
        {
          width: "500px",
          height: "300px",
          zIndex: "120",
          top: "5.5px",
        },
        1000,
        function() {
          jQuery(".id").css("transform", "rotate(720deg)");
          jQuery("#app1").css("opacity", "1");
          jQuery("#app1").css("width", "100%");
          jQuery("#app1").css("zIndex", "2");
          jQuery("#app1").css("height", "100%");
        }
      );
      jQuery("#divform").fadeOut(-400, function() {
        jQuery("#divform").css("top", "-30%");
        jQuery("#divform").css("left", "-50%");
        jQuery("#app1").css("opacity", "0");
        jQuery("#app1").css("width", "0%");
        jQuery("#app1").css("height", "0%");
        jQuery("#app1").css("zIndex", "-1");
      });
    }
    k++;
  });
  jQuery("#top2").click(function() {
    jQuery("body,html").animate(
      {
        scrollTop: 0,
      },
      2000
    );
    this.j = 0;
  });
});
