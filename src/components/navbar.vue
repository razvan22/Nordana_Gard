<template>
  <div>
    <nav id="mynav" class="navbar fixed-top navbar-expand-md navbar-dark bg-dark">
      <!-- <router-link to="/" class="navbar-brand text-light">Nordanå Gård</router-link> -->
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="container nav-container">
        <div
          class="collapse navbar-collapse nav justify-content-center align-self-md-center"
          id="navbarNav"
        >
          <ul class="navbar-nav" @click="borderToggle">
            <li class="nav-item active ">
              <router-link to="/" class="nav-link active-link text-light">{{currentLanguage.nav.home}}</router-link>
            </li>
            <li class="nav-item active">
              <router-link to="/booking" class="nav-link text-light">{{currentLanguage.nav.booking}}</router-link>
            </li>
            <!-- <li class="nav-item active">
              <router-link
                to="/bookinginfo"
                class="nav-link text-light"
              >{{currentLanguage.nav.bookinginfo}}</router-link>
            </li> -->
            <li class="nav-item active">
              <router-link
                to="/gallery"
                class="nav-link text-light"
                href="gallery.html"
              >{{currentLanguage.nav.gallery}}</router-link>
            </li>
            <li class="nav-item active">
              <a
                class="nav-link text-light"
                href="#contact"
              >{{currentLanguage.nav.contact}}</a>
            </li>
            <li class="aboutus nav-item active">
              <router-link
                to="/about"
                class="nav-link text-light"
                href="aboutus.html"
              >{{currentLanguage.nav.aboutUs}}</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="pr-5">
        <language-picker class="pr-2 languagePicker rounded border-0"></language-picker>
      </div>
    </nav>
    <nav class="mobile-nav bg-dark container-fluid d-flex justify-content-between">
      <i class="bi bi-list" @click="showMobileNav"></i>
      <language-picker class="pr-2 pt-2 languagePicker rounded border-0"></language-picker>
    </nav>
    <div v-if="mobileNavState" class="container-fluid">
      <div class="row d-flex">
        <div class="col-12 mt-4 d-flex justify-content-center mobile-link" @click="showMobileNav">
          <router-link 
            to="/" 
            class="text-dark text-center border-bottom border-warning border-3"
            >
            {{currentLanguage.nav.home}}
          </router-link>
        </div>
        <div class="col-12 d-flex justify-content-center mobile-link " @click="showMobileNav">
          <router-link 
            to="/booking" 
            class="text-dark text-center border-bottom border-warning border-3">
            {{currentLanguage.nav.booking}}
          </router-link>
        </div>
        <div class="col-12 d-flex justify-content-center text-center mobile-link" @click="showMobileNav">
          <router-link 
            to="/gallery" 
            class="text-dark text-center border-bottom border-warning border-3" 
            href="gallery.html">
            {{currentLanguage.nav.gallery}}
          </router-link>
        </div>
        <div class="col-12 d-flex justify-content-center text-center mobile-link" @click="showMobileNav">
           <a
            class="text-dark text-center border-bottom border-warning border-3"
            href="#contact"
            >{{currentLanguage.nav.contact}}
          </a>
        </div>
        <div class="col-12 d-flex justify-content-center text-center mobile-link" @click="showMobileNav">
          <router-link
            to="/about"
            class="text-dark text-center border-bottom border-warning border-3" 
            href="aboutus.html"
          >{{currentLanguage.nav.aboutUs}}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import languagePicker from "../components/languagePicker.vue";
export default {
  components: {
    languagePicker
  },

  data() {
    return {};
  },
  computed: {
    currentLanguage() {
      return this.$store.state.language;
    },

    mobileNavState(){
      return this.$store.state.mobileNav;
    }

  },
  methods:{
    borderToggle(e){
      document.getElementsByClassName("nav-link").forEach( element => element.classList.remove('active-link'))
      if(e.target.classList.contains('nav-link')){
        e.target.classList.add('active-link');
      }
    },
    showMobileNav(){
      let navState = !this.mobileNavState;
      this.$store.commit('setMobileNav', navState);
    }
  }
};
</script>

<style scoped>
 /* yellow #faf7ba
    green #094b25
    blue #1b68b3
    balck #030404
  */

.mobile-link{
  font-size: 2rem;
  font-family: "Gill Sans";
}

.bi-list{
 font-size: 2.1rem !important;
 color: aliceblue !important;
}
.bi-list:hover{
  cursor: pointer;
}
.navbar-toggler-icon{
  fill: #faf7ba !important;
}

.navbar-dark .navbar-toggler {
  border: 0;
}

#mynav .languagePicker {
  border: solid 0.5px rgba(210, 217, 221, 0.377);
}
.active-link {
  border: solid #faf7ba;
  border-width: 2px 0px 2px 0px;
}
.nav-link {
  padding: 1rem;
  color: aliceblue !important;
}

.nav-link:hover{
  border: solid #faf7ba;
  border-width: 2px 0px 2px 0px;
}

.navbar-brand {
  font-family: "Parisienne", cursive;
  font-size: 1.50rem;
}
.bg-dark {
  background-color: #030404 !important;
}

#mynav .navbar-nav .nav-item {
  font-weight: 300 !important;
  font-size: 1.1rem !important;
  margin: 0vh 2vw 0vh 2vw;
}

@media only screen and (max-width: 600px) {
  .navbar-brand {
    font-family: "Parisienne", cursive;
    font-size: 1.2em;
  }
  .navbar-nav .nav-item {
    font-weight: 350 !important;
    font-size: 1.2em !important;
    margin: 0vh 0vw 0vh 0vw;
  }
}

@media only screen and (min-width: 600px) {
  .navbar-nav .nav-item {
    font-weight: 350;
    font-size: 1.3em !important;
    margin: 0vh 3vw 0vh 0vw;
  }
}

@media only screen and (max-width: 850px) {
  #mynav .navbar-nav .nav-item {
    margin: 0vh 1vw 0vh 1vw;
  }
}

@media only screen and (min-width: 769px) {
  .mobile-nav{
    display: none !important;
  }
}

@media (max-width: 769px){
  #mynav{
    display: none;
  }
  .mobile-nav{
    display: block;
  }
}



</style>