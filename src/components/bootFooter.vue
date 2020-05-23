<template>
    <div id="footer" >
        <div class="container">
            <div class="row py-3">
                <div class="col-sm-12 col-md-4 align-items-center justify-content-center py-3">
                    <h5 id="text-fo" class="pl-4" style="font-family: 'Parisienne', cursive;  color: aliceblue;">Nordanå Gård</h5>
                    <p style="font-family: 'Montserrat'; color: #EDEAE5;" class="text-center">Kålaberga Vägen 130-51 288 90 Vinslöv</p>
                </div>
                <div class="col-sm-12 col-md-4 d-flex align-items-center justify-content-center ">
                    <i class="fas fa-phone-alt pr-3 pb-3 "></i><a href="tel:+46 736 818 400"><h5 class="phone" style="color: aliceblue; font-family: 'Montserrat;">+46 736 818 400</h5></a>
                </div>
                <div class="col-sm-12 col-md-4 py-3">
                    <div class="row justify-content-center">
                        <div class="pb-1 col-">
                            <h5 style="color: aliceblue; font-family: 'Montserrat; font-size: 1.50rem;">{{getFooter.contactText}}</h5>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                       <div class="col-">
                            <a href="mailto:nordanagard@gmail.com"><p style="color: aliceblue; font-family: 'Montserrat; ">nordanagard@gmail.com</p></a>
                       </div>
                    </div>
                    <div class="row justify-content-center">
                       <div class="col-">
                            <a href="https://www.instagram.com/nilsson6649/" class="pr-4 fab fa-instagram"></a>
                            <a href="https://facebook.com/nordanagard.se" style="color: #0099ff" class="pr-4 fab fa-facebook-square"></a>
                            <a href="https://www.youtube.com/watch?v=FOikrW2D2o0" style="color: #ff6666;" class="fab fa-youtube"></a>
                       </div>
                    </div>
                </div>
            </div>
            <div class="row align-items-center justify-content-center pb-3">
                <div class="col-12 col-sm-2 text-center pt-2"><router-link style="color: aliceblue; font-family: 'Montserrat'; font-size: 1.20rem;" class="text-white" to="/">{{getFooter.nav.home}}</router-link></div>
                <div class="col-12 col-sm-2 text-center pt-2"><router-link style="color: aliceblue; font-family: 'Montserrat'; font-size: 1.20rem;" class="text-white" to="/booking">{{getFooter.nav.booking}}</router-link></div>
                <div class="col-12 col-sm-2 text-center pt-2"><router-link style="color: aliceblue; font-family: 'Montserrat'; font-size: 1.20rem;" class="text-white" to="/gallery">{{getFooter.nav.gallery}}</router-link></div>
                <div class="col-12 col-sm-2 text-center pt-2"><router-link style="color: aliceblue; font-family: 'Montserrat'; font-size: 1.20rem;" class="text-white" to="/aboutus">{{getFooter.nav.aboutUs}}</router-link></div>
            </div>
            <div class="row pb-3">
                <div class="col ">
                    <div style="height: 150px;" class="embed-responsive embed-responsive-21by9 hoverable z-depth-1">
                        <iframe class="embed-responsive-item"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2225.3245897783518!2d14.001255016200401!3d56.099603172658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465401b4e6463455%3A0x23ecf63bdcfaadde!2sK%C3%A5labergav%C3%A4gen%20130-51%2C%20288%2090%20Vinsl%C3%B6v!5e0!3m2!1sen!2sse!4v1589614781308!5m2!1sen!2sse"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed:{
        getFooter(){
            return this.$store.state.language
        }
    }

}
</script>

<style scoped>
    #text-fo{
        font-size: 2.40rem !important;
    }
    #footer .fa-phone-alt{
        color: aliceblue;
        font-size: 1.50rem;
    }
    #footer .fa-instagram{
          background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
          -webkit-background-clip: text;
          background-clip: text;
         -webkit-text-fill-color: transparent;
    }
    #footer .fab {
        font-size: 1.80rem;
    }

    .container{
        background-color: #31708E !important;
    }

    @media only screen and (min-width: 768px) {
        #text-fo{
            font-size: 2rem !important;
        }
    }
    @media only screen and (max-width: 768px) {
          #text-fo{
            text-align: center;
        }
     }

    @media only screen and (max-width: 600px) {
        #text-fo{
            text-align: center;
        }
    }
</style>