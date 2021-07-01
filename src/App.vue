<template>
  <div id="app">
    <navBar class="nav mb-4" />
    <div v-if="mobileNavState == false">
      <router-view/>
      <bootFooter />
    </div>
  </div>
</template>
<script>
import navBar from "../src/components/navbar.vue";
import bootFooter from "../src/components/bootFooter.vue";
export default {
  components: {
    navBar,
    bootFooter
  },
  
  created() {
    this.$store.dispatch("setSwedish");
  },
  
  computed:{
    mobileNavState(){
      return this.$store.state.mobileNav;
    }


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

#app #language-picker {
  display: none !important;
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
@media (max-width: 769px){
  #app{
    padding-top: 0;
  }
  .nav{
    margin-bottom: 0 !important;
  }
}
</style>
