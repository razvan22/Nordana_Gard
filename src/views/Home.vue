<template>
<div class="home">
  <div class="container px-0 ">
      <div class="head"></div>
      <div id="main" class="container">
          <h1 class="pt-4 text-center">Nordanå Gård</h1>
          <div  class="container">
             <img class="ml-2 float-right" src="../assets/logo.jpg" alt="" srcset="">
            <p>{{home_text.p1.p1a}}<a href="https://sv.wikipedia.org/wiki/%C3%85hus">{{home_text.p1.p1c}}</a>{{home_text.p1.p1b}}</p>
            <p class="pb-3" style="border-bottom: solid #2D4159 0.06rem;" >{{home_text.p2.p2a}}<a href="https://en.wikipedia.org/wiki/Kristianstad">{{home_text.p2.p2kris}}</a>{{home_text.p2.p2c}}<a href="https://vattenriket.kristianstad.se/naturum/">{{home_text.p2.p2natur}}</a>{{home_text.p2.p2d}}<a href="http://www.regionmuseet.se/english/the-railway-museum-of-kristianstad.html">{{home_text.p2.p2muse}}</a>{{home_text.p2.p2b}}
              <a href="https://sv.wikipedia.org/wiki/Van%C3%A5s_slott">{{home_text.p2.p2vanas}}</a>{{home_text.p2.p2e}}<a href="https://sv.wikipedia.org/wiki/Vinsl%C3%B6v">{{home_text.p2.p2vins}}</a>{{home_text.p2.p2f}}<a href="https://sv.wikipedia.org/wiki/Pl%C3%B6tsligt_i_Vinsl%C3%B6v">{{home_text.p2.p2plot}}</a>
              {{home_text.p2.p2samt}}<a href="">{{home_text.p2.p2fleder}}</a>
            </p>
            <div class="containe">
              <div class="row">
                <div class="col col-sm-2">
                  <i class="fas fa-wifi"></i>
                </div>
                <div class="col">
                  <i class="fas fa-parking"></i>
                </div>
                <div class="col">
                    <i class="fas fa-paw"></i>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <i class="far fa-handshake"></i>
                </div>
                <div class="col">
                  <i class="fas fa-language"></i>
                </div>
              </div>
            </div>
          </div>
      </div>
  </div>
</div>
</template>

<script>
export default {
  computed:{
    home_text(){
      return this.$store.state.language.home_text
    }
  }

}
</script>

<style scoped>
.home #main img{
  height: auto;
  max-width: 30%;
  border: solid #2D4159 0.10rem;
  border-radius: 1rem;
  
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
      ), url('../assets/head.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 0.150rem;
   
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