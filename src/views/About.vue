<template>
  <div id="aboutus">
    <div class="container main">
      <h1 class="text-center py-5">{{currentLanguage.nav.aboutUs}}</h1>
      <div class="container">
        <div class="row d-flex justify-content-center">
          <div class="col-md-9">
            <p>{{about.about.p1}}</p>
            <p>{{about.about.p2}}</p>
            <img style="width: 100%" src="../assets/bo.jpg" class="img-fluid pb-3" alt="Responsive image">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed:{
    about(){
      return this.$store.state.language
    },
    currentLanguage(){
      return this.$store.state.language
    }
  }
}
</script>

<style>
#aboutus img{
  border-radius: 6px;
}

#aboutus{
  color:#2D4159;
  font-family: 'Montserrat';
  min-height: 100vh; 
}
#aboutus .main { 
   background-color: #EDEAE5;
   border-radius: 6px 6px 0 0;
}

</style>