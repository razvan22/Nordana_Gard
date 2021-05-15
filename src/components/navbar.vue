<template>
  <nav>
    <nav id="mynav" class="navbar fixed-top navbar-expand-md navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand text-light">Nordanå Gård</router-link>
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
      <div class="container">
        <div
          class="collapse navbar-collapse nav justify-content-end align-self-md-center"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item active">
              <router-link to="/" class="nav-link text-light">{{currentLanguage.nav.home}}</router-link>
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
        <language-picker class="pr-2 languagePicker rounded shadow"></language-picker>
      </div>
    </nav>
  </nav>
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
    }
  }
};
</script>

<style scoped>
.navbar-dark .navbar-toggler {
  border: 0;
}
#mynav .languagePicker {
  border: solid 0.5px rgba(210, 217, 221, 0.377);
}
.nav-link {
  color: aliceblue !important;
}
.navbar-brand {
  font-family: "Parisienne", cursive;
  font-size: 1.50rem;
}
.bg-dark {
  background-color: #31708e !important;
}

#mynav .navbar-nav .nav-item {
  font-weight: 200 !important;
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

@media only screen and (max-width: 767px) {
  #mynav .languagePicker {
    display: none;
  }
}
</style>