<template>
  <div id="language">
    <div class="btn-group" role="group">
        <button class="btn btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
             <i v-bind:class="getFlag.flag.icon"></i>
        </button>
        <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg-left" aria-labelledby="btnGroupDrop1">
            <a v-on:click="setSeLanguage" class="dropdown-item"><i  class="flag-icon flag-icon-se"></i>{{getFlag.flag.text.se}}</a>
            <a v-on:click="setEnLanguage" class="dropdown-item"><i class="flag-icon flag-icon-us"></i>{{getFlag.flag.text.en}}</a>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    methods:{
        setSeLanguage: function(){
            this.$store.dispatch("setSwedish")
        },
        setEnLanguage: function(){
            this.$store.dispatch("setEnglish")
        }
    },
    computed:{
        getFlag(){
            return this.$store.state.language
        }
    }

}
</script>


<style>
button i {
    font-size: 1.20rem;
}

</style>