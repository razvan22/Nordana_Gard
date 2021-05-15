<template>
  <div id="booking">
    <div class="container">
      <h2 class="py-5">{{booking.h1}}</h2>
      <div id="sbw_widget_1" class="sbw yui3-cssreset sbw_form_id_5d948f695eb84 sbw_id_sbw_widget_1">
        <script
          type="application/javascript"
         async data-form-id="5d948f695eb84" src="https://secured.sirvoy.com/widget/sirvoy.js"></script>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed:{
    booking(){
      return this.$store.state.language.booking
    }
  },
}
</script>

<style scoped>
#booking .container{
  text-align: center;
  color:#2D4159;
  font-family: 'Montserrat';
  background-color: rgba(237, 234, 229, 0.719);
  border-radius: 5px 5px 0 0;
}
#booking h2 {
  text-align: center;
  color:#2D4159;
   font-family: 'Montserrat';
   font-size: 2.60rem;
}

@media only screen and (max-width: 600px) {
  #booking h2 {
    font-size: 2rem;
  }
  #booking h4 {
  font-size: 1rem;
}
}
@media only screen and (min-width: 600px) {
  #booking h2{
    font-size: 2.60rem;
  }
  #booking h4 {
  font-size: 1.30rem;
  }
}
</style>