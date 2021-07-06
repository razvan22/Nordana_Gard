<template>
  <div class="container-fluid pb-lg-5">
    <div class="row d-felx justify-content-center">
      <section class="col-12 p-0 m-0 d-flex flex-column">
        <img src="../assets/home-page/pool.jpg" class="home-image w-100 h-75">
        <h1 class="name text-center"><span class="name-bg p-3 px-4 rounded">Nordanå Gård</span></h1>
      </section>
      <section class="col-12">
        <div class="row p-0 description mx-lg-5 rounded">
          <div class="col-lg-8 p-lg-5">
           <div class="m-lg-5 m-2">
              <p>
            {{home_text.p1.p1a}}
            <a
              href="https://sv.wikipedia.org/wiki/%C3%85hus"
            >{{home_text.p1.p1c}}</a>
            {{home_text.p1.p1b}}
          </p>
          <p>
            {{home_text.p2.p2a}}
            <a
              href="https://en.wikipedia.org/wiki/Kristianstad"
            >{{home_text.p2.p2kris}}</a>
            {{home_text.p2.p2c}}
            <a
              href="https://vattenriket.kristianstad.se/naturum/"
            >{{home_text.p2.p2natur}}</a>
            {{home_text.p2.p2d}}
            <a
              href="http://www.regionmuseet.se/english/the-railway-museum-of-kristianstad.html"
            >{{home_text.p2.p2muse}}</a>
            {{home_text.p2.p2b}}
            <a
              href="https://sv.wikipedia.org/wiki/Van%C3%A5s_slott"
            >{{home_text.p2.p2vanas}}</a>
            {{home_text.p2.p2e}}
            <a
              href="https://sv.wikipedia.org/wiki/Vinsl%C3%B6v"
            >{{home_text.p2.p2vins}}</a>
            {{home_text.p2.p2f}}
            <a
              href="https://sv.wikipedia.org/wiki/Pl%C3%B6tsligt_i_Vinsl%C3%B6v"
            >{{home_text.p2.p2plot}}</a>
            {{home_text.p2.p2samt}}
            <a href>{{home_text.p2.p2fleder}}</a>
          </p>
           </div>
          </div>
          <div class="col-lg-3 m-3 d-flex justify-content-center">
            <img class="logo-image" src="../assets/log.gif" alt="">
          </div>
        </div>
        <div class="row">
          <div class="containe">
          <div id="cont" class="row mt-2 info">
            <div class="col-md-6 mb-1">
              <div class="row">
                <div class="col d-flex justify-content-center">
                  <img src="../assets/wifi.png" style="min-width:42px;min-height:42px;border:0;" />
                </div>
              </div>
              <div class="row">
                <div class="col d-flex justify-content-center">
                  <h4 class="text-center py-1">{{getFacility.wifi}}</h4>
                </div>
              </div>
            </div>
            <div class="col-md-6 pb-2">
              <div class="row">
                <div class="col d-flex justify-content-center pb-1">
                  <img
                    src="../assets/language.png"
                    style="min-width:42px!important;min-height:42px!important;border:0;"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <h4 class="text-center py-1">{{getFacility.language}}</h4>
                </div>
              </div>
            </div>
            <div class="col-md-6 pb-2">
              <div class="row">
                <div class="col d-flex justify-content-center pb-1">
                  <img
                    src="../assets/pets.png"
                    style="min-width:55px!important;min-height:55px!important;border:0;"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <h4 class="text-center py-1">{{getFacility.pets}}</h4>
                </div>
              </div>
            </div>
            <div class="col-md-6 pb-2">
              <div class="row">
                <div class="col d-flex justify-content-center pb-1">
                  <img
                    class="pt-4"
                    src="../assets/nosmoking.png"
                    style="min-width:62px!important;min-height:62px!important;border:0;"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col d-flex justify-content-center">
                  <h4 class="text-center py-1">{{getFacility.smoking}}</h4>
                </div>
              </div>
            </div>
            <div class="col-md-6 pb-2">
              <div class="row">
                <div class="col d-flex justify-content-center pb-1">
                  <img
                    src="../assets/parking.png"
                    style="min-width:45px!important;min-height:45px!important;border:0;"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col d-flex justify-content-center pb-1">
                  <h4 class="text-center py-1">{{getFacility.parking}}</h4>
                </div>
              </div>
            </div>
            <div class="col-md-6 pb-2">
              <div class="row">
                <div class="col d-flex justify-content-center pb-1">
                  <img
                    src="../assets/pool.png"
                    style="min-width:42px!important;min-height:42px!important;border:0;"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col d-flex justify-content-center">
                  <h4 class="text-center py-1">{{getFacility.pool}}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>  
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    home_text() {
      return this.$store.state.language.home_text;
    },
    getFacility() {
      return this.$store.state.language.info;
    }
  },
};
</script>

<style scoped>

 /* yellow #faf7ba
    green #094b25
    blue #1b68b3
    balck #030404
  */
.container-fluid {
  background-color:#094b24dc;
}
.name{
  position: relative;
  top: -50%;
  color: rgb(16, 18, 19);
  font-weight: 900;
  font-family: 'Old Standard TT', serif;
}
.name-bg{
  background-color: rgba(240, 255, 255, 0.803);
}
.home-image{
  filter: brightness(65%);
}
.description{
  margin-top:-22%;
  background-color: white;
}
.logo-image{
  height: 40vh;
}
.info{
  color:#faf7ba;
}

@media only screen and (max-width: 398px) {
  .name-bg{
    font-size: 1.50rem;
    letter-spacing: 0.40rem;
  }
}

@media only screen and (min-width: 400px) {
  .name-bg{
    font-size: 1.80rem;
    letter-spacing: 0.40rem;
  }
}

@media only screen and (min-width: 500px) {
  .name-bg{
    font-size: 2.5rem;
    letter-spacing: 0.60rem;
  }
}


@media only screen and (min-width: 600px) {
  .name-bg{
    font-size: 2.5rem;
    letter-spacing: 0.70rem;
  }
}

@media only screen and (min-width: 600px) {
.name-bg{
    font-size: 3.5rem;
    letter-spacing: 0.70rem;
  }
}

@media only screen and (min-width: 768px) {
  .name-bg{
    font-size: 4.5rem;
    letter-spacing: 0.80rem;
  }
}

@media only screen and (min-width: 992px) {
   .name-bg{
    font-size: 5rem;
    letter-spacing: 1rem;
  }
}
@media only screen and (min-width: 1200px) {
  .name-bg{
    font-size: 6rem;
    letter-spacing: 1rem;
  }
} 
</style>