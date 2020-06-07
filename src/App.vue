<template>
  <div id="app">
    <navBar />
    <langauage-picker id="language-picker" class="d-flex justify-content-end pr-0" />
    <router-view />
    <bootFooter />
  </div>
</template>
<script>
import navBar from "../src/components/navbar.vue";
import langauagePicker from "../src/components/languagePicker.vue";
import bootFooter from "../src/components/bootFooter.vue";
export default {
  components: {
    navBar,
    langauagePicker,
    bootFooter
  },
  created() {
    this.$store.dispatch("setSwedish");
  }
};
</script>

<style scoped>
#app {
  padding: 0;
  position: relative;
  min-height: 100vh;
}

#foot {
  position: absolute;
  bottom: 0;
  width: 100%;
}

@media only screen and (min-width: 600px) {
  #app {
    padding-top: 3.70rem;
  }
  #language-picker {
    padding-right: 2vw;
  }
}
@media only screen and (max-width: 600px) {
  #app {
    padding-top: 4rem;
  }
}
@media only screen and (min-width: 767px) {
  #app #language-picker {
    display: none !important;
  }
}
</style>
