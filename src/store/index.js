import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    language:{
     
    }
  },
  mutations: {
    setLangage( state , value){
      state.language = value;
    }
  },
  actions: {
    setSwedish({ commit }){
      let se = {
          nav:{
            home:"Hem",
            booking:"Bokning",
            gallery: "Galleri",
            aboutUs: "Om oss"
          },
          flag:{
            icon: "flag-icon flag-icon-se",
            text: {
              se: " Svenska",
              en: " Engelsk"
            }
          },
          contactText: "Kontakta oss "
          
      }
      commit("setLangage", se);
    },

    setEnglish({ commit }){
      let en = {
          nav:{
            home:"Home",
            booking:"Booking",
            gallery: "Gallery",
            aboutUs: "About Us"
          },
          flag:{
            icon: "flag-icon flag-icon-us",
            text: {
              se: " Swedish",
              en: " English"
            }
          },
          contactText: "Contact Us"
      }
      commit("setLangage", en);
    }

  },
  modules: {
  }
})
