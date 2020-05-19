<template>
  <div id="app">
    <div id="app-main">
      <navBar/>
      <div class="main pt-3">
        <div  class="container-fluid d-flex justify-content-end"><langauage-picker id="language-picker" /></div>
        <router-view/>
      </div>
    </div>
    <bootFooter/>
  </div>
</template>
<script>
import navBar from '../src/components/navbar.vue'
import langauagePicker from '../src/components/languagePicker.vue'
import bootFooter from '../src/components/bootFooter.vue'
export default {
  components:{
    navBar,
    langauagePicker,
    bootFooter
  },
  created(){
    this.$store.dispatch("setSwedish")
  }
}
</script>

<style scoped>

#app{
  padding-top:16vh;
  position: relative;
  min-height: 100vh;
}
#app-main{
}
#foot{
  position: absolute;
  bottom: 0;
  width: 100%;
}
@media only screen and (min-width: 600px) {
  #app{
    padding-top:12vh;
  }
  #language-picker{
    padding-right: 2vw;
  }
}
@media only screen and (max-width: 600px) {
  #app{
    padding-top:15vh;
  }
}
</style>
