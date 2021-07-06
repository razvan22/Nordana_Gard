<template>
    <div id="footer" >
        <div class="container">
            <div class="row d-flex justify-content-center pt-3 links">
                <div class="col-sm-12 col-md-4 d-flex justify-content-center py-3">
                    <section>
                        <h4 class="">LOCATION</h4>
                        <h6 class="">Kålabergavägen 130-51</h6>
                        <h6>288 90 Vinslöv</h6>
                    </section>
                </div>
                <div class="col-sm-12 col-md-4 d-flex jalign-items-center justify-content-center py-3">
                    <img class="mr-3" src="../assets/whatsapp.png" style="width:37px;height:37px;border:0;">
                    <img src="../assets/viber.png" style="width:42px;height:42px;border:0;">
                    <a class="ml-3" href="https://facebook.com/nordanagard.se"><img src="../assets/facebook.png" style="width:42px;height:42px;border:0;"></a>
                </div>
                <div class="col-sm-12 col-md-4 d-flex justify-content-center py-3" id="contact">
                    <section>
                        <h4>CONTACT</h4>
                        <h6>PHONE: +46 736 818 400</h6>
                        <h6>E-MAIL: nordanagard@gmail.com</h6>
                    </section>
                </div>
            </div>
            <div class="row pb-3">
                <div class="col">
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
@import url('https://fonts.googleapis.com/css2?family=Patua+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');

#footer{
    background: black;
    font-family: "Patua One", "Comic Sans MS", cursive, sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 0.963rem;
    line-height: 1.75rem;
    letter-spacing: 0.0625rem;
    text-transform: none;
    color: #FFFFFF
}

#footer h6 {
font-family: 'Oswald', sans-serif;
}

@media only screen and (min-width: 768px) {}
@media only screen and (max-width: 768px) {
    .links{
        text-align: center;
    }   
}
@media only screen and (max-width: 600px) {}
</style>