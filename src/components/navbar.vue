<template>
    <nav>
        <nav id="mynav" class="navbar fixed-top navbar-expand-md navbar-dark bg-dark">
            <router-link to="/" class="navbar-brand text-light ">Nordanå Gård</router-link>
            <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon "></span>
            </button>
            <div class="container">
                <div class="collapse navbar-collapse nav justify-content-end  align-self-md-center" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <router-link to="/" class="nav-link text-light">{{currentLanguage.nav.home}}</router-link>
                        </li>
                        <li class="nav-item active">
                            <router-link to="/booking" class="nav-link text-light">{{currentLanguage.nav.booking}}</router-link>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link text-light" href="gallery.html">{{currentLanguage.nav.gallery}}</a>
                        </li>
                        <li class="aboutus nav-item active ">
                            <a class="nav-link text-light" href="aboutus.html">{{currentLanguage.nav.aboutUs}}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </nav>
</template>

<script>
export default {
    data(){
       return{
           
       }
    },
    computed:{
        currentLanguage(){
            return this.$store.state.language
        }
    },
}
</script>

<style scoped>
.nav-link{
    color: aliceblue !important;
}
.navbar-brand{
    font-family: 'Parisienne', cursive;
    font-size: 2.20em;
}
.bg-dark {
    background-color: 
    #31708E !important;
}

.navbar-nav .nav-item{
    font-weight: 200 !important;
    font-size: 1.50em !important;
    margin: 0vh 2vw 0vh 2vw;
}

@media only screen and (max-width: 600px) {
    .navbar-brand{
        font-family: 'Parisienne', cursive;
        font-size: 1.70em;
    }
    .navbar-nav .nav-item{
        font-weight: 350 !important;
        font-size: 1.20em !important;
        margin: 0vh 0vw 0vh 0vw;
    }

}
@media only screen and (min-width: 600px) {
    .navbar-nav .nav-item{
        font-weight: 350;
        font-size: 1.30em !important;
        margin: 0vh 3vw 0vh 0vw;
    }
}

@media only screen and (min-width: 768px) {


}
@media only screen and (min-width: 992px) {


}
</style>