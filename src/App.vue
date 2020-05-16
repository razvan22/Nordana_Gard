<template>
  <div id="app">
    <navbar></navbar>
    <div class="lang container-fluid d-flex justify-content-end mr-5">
      <langagePicker/>
    </div>
    <div class="home">
      <div class="container">
        <div class="head"></div>
        <div class="container mt-1">
          <h1 class="pt-2 text-center">Nordanå Gård</h1>
        </div>
      </div>
    </div>
    <boot-footer></boot-footer>
  </div>
</template>

<script>
import navbar from '@/components/navbar.vue';
import bootFooter from './components/bootFooter.vue'
import langagePicker from './components/languagePicker'



export default {
  components: {
    navbar,
    bootFooter,
    langagePicker
  },
  created(){
     this.$store.dispatch("setSwedish")
  }
}

</script>

<style scoped>
#app .lang{
  margin-top: 5rem;
}
.home .container h1{
  font-size: 5rem;
  color:#2D4159;
  font-family: 'Parisienne', cursive;
}

.head {
    height: 20rem;
    min-height: 20rem;
    background-image:  linear-gradient(
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.3)
      ), url('assets/head.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
   
}
.home{
  height: 90vh;
}
.home .container .container{
  background-color: #EDEAE5;
}



@media only screen and (max-width: 600px) {
  .home .container h1{
    font-size: 2.70rem;
  }
}

@media only screen and (min-width: 600px) {
  .home .container h1{
    font-size: 4rem;
  }
   
}

@media only screen and (min-width: 768px) {
  .home .container h1{
    font-size: 5rem;
  }


}
@media only screen and (min-width: 992px) {


}




</style>
