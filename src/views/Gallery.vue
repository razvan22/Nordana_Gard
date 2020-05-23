<template>
  <div id="gallery">
      <div class="container mb-5">
        <h4 class="text-right pr-5">House A & B</h4>
        <div id="c-1" class="carousel slide my-5" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="../assets/head.jpg" class="d-block w-100" alt="">
                </div>
                <div class="carousel-item">
                <img src="../assets/head.jpg" class="d-block w-100" alt="">
                </div>
                <div class="carousel-item">
                <img src="../assets/hus_a_b.jpg" class="d-block w-100" alt="">
                </div>
            </div>
            <a class="carousel-control-prev" href="#c-1" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            </a>
            <a class="carousel-control-next" href="#c-1" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
            </a>
        </div>
        <h4 class="text-right pr-5">House C & D</h4>
        <div id="c-2" class="carousel slide my-5" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="../assets/head.jpg" class="d-block w-100" alt="">
                </div>
                <div class="carousel-item">
                <img src="../assets/head.jpg" class="d-block w-100" alt="">
                </div>
                <div class="carousel-item">
                <img src="../assets/head.jpg" class="d-block w-100" alt="">
                </div>
            </div>
            <a class="carousel-control-prev" href="#c-2" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            </a>
            <a class="carousel-control-next" href="#c-2" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
            </a>
        </div>
        <h4 class="text-right pr-5">House E & F</h4>
        <div id="carouselExampleControls" class="carousel slide my-5" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="../assets/head.jpg" class="d-block w-100" alt="">
                </div>
                <div class="carousel-item">
                <img src="../assets/head.jpg" class="d-block w-100" alt="">
                </div>
                <div class="carousel-item">
                <img src="../assets/head.jpg" class="d-block w-100" alt="">
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
            </a>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#gallery{
    min-height: 100vh;
    
} 
#gallery h4 {
    text-align: center;
    color:#2D4159;
    font-family: 'Montserrat';
    font-size: 2.20rem;
} 


</style>