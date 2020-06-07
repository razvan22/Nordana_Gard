import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    language:{}
  },
  mutations: {
    setLangage( state , value){
      state.language = value;
    }
  },
  actions: {
    setSwedish({ commit }){
      let se = {
        about:{
          p1:"Jag och min fru har varit bosatta här på gården sedan 2007 efter att mina föräldrar har drivit gården sedan 1964. Marken finns kvar men det mesta är utarrenderad . Själv jobbat inom näringslivet i drygt 45 år men är nu sysselsatt med gården till 100 % .",
          p2:" Vi har idag 24 bäddar på olika fastigheter här. Den första byggdes 2011 och den senaste 2016  . Träning har varit en stor fritidssyssla när jag inte hade detta projekt. På 800m avstånd från gården finns fina löpstigar i skogen och fina och nästan bilfria vägar att cykla på."
        },
        gallery:{
          house:"Hus",
          apartment:"Lägenhet"
        },
        booking:{
          h1:" Boka ",
          h4:" Använd rabatt kod 2020 (eller Working2020 för företag) för att få 30% rabatt !!! "
        },
        bookinginfo:{
          h1:"Här kan du söka din bokning"
        },
          nav:{
            home:"Hem",
            booking:"Bokning",
            gallery: "Galleri",
            aboutUs: "Om oss",
            bookinginfo: "Sökbokning"
          },
          info:{
            wifi:"Gratis höghastighetsinternet",
            parking:"Gratis parkering",
            language:"Svenska Danska Engelska",
            smoking:" Rökning i huset är inte tillåtet",
            pets:" Husdjur accepteras. Avgifter kan tillkomma",
            pool:" Utomhuspool "
          },
          flag:{
            icon: "flag-icon flag-icon-se",
            text: {
              se: " Svenska",
              en: " English"
            }
          },
          contactText: "Kontakta oss ",
          home_text:{
            p1: {
              p1a:"Ni bor här i en av våra små eller större hus som börjat byggas 2016. Här finns det mesta man behöver i kompakt stil. Vi erbjuder gratis parkering och höghastighetsinternet. Här råder lugnet och närheten till naturen, men samtidigt även närheten till Danmark och storstaden via tåg. Havet och",
              p1b:" ligger 35 min bort med bil, men poolen här är bra 20 m från huset. Här finns även ett extra kök, tvättstuga och diskmaskin och vi har även en festlokal.",
              p1c:" Åhus"
            },
            p2:{
              p2a:"På 800 m avstånd från gården finns fina löpstigar i skogen. I ",
              p2kris:"Kristianstad",
              p2c:" har vi ",
              p2natur:"Naturum",
              p2d:" i vattenriket samt järnvägsmuseet , även filmens vagga finns i Kristianstad och som museum. Utanför Knislinge har vi ",
              p2vanas:"Vanås",
              p2e:" slott med olika konstutställningar. I Ignaberga finns kalkgrottor. Vi har ju också närheten till ",
              p2vins:"Vinslöv",
              p2f:" och kultfilmen ",
              p2plot:"Plötsligt i Vinslöv",
              p2samt:" samt Flädergården också i Vinslöv. ",
            },
          },
         
          
      }
      commit("setLangage", se);
    },

    setEnglish({ commit }){
      let en = {
        about:{
          p1:"My wife and I have lived on the farm since 2007, after my parents have been running the farm since in 1964. The land is still there but most of it is rented out. ",
          p2:"I have worked in the business for over 45 years but am now 100% focusing on the farm. We currently have 24 beds on different properties here. The first was built in 2011 and the latest in 2016."
        },
        gallery:{
          house:"House",
          apartment:"Apartment"
        },
          booking:{
            h1:" Reserve ",
            h4:" Use the promotion code 2020 (or Working2020 for companies) to get 30% discount !!!"
          },
          bookinginfo:{
            h1:"Here you find your reservation"
          },
          nav:{
            home:"Home",
            booking:"Booking",
            gallery: "Gallery",
            aboutUs: "About Us",
            bookinginfo:"Search Booking"
          },
          flag:{
            icon: "flag-icon flag-icon-us",
            text: {
              se: " Svenska",
              en: " English"
            }
          },
          info:{
            wifi:" High Speed Internet (free of charge) ",
            parking:" Free Parking",
            language:" Swedish Danish English",
            smoking:" Non-smoking rooms",
            pets:" Pets are allowed. Charges may apply",
            pool:" Outdoor pool"
          },
          contactText: "Contact Us",
          home_text:{
            p1: {
              p1a:"You are welcomed here in one of our small or larger houses that started to be built in 2016. Here you will find everything you need in a compact living style. We offer free parking and high speed internet. This is a calm and quiet place close to nature, but also close to Denmark and the big cities by train. The sea and",
              p1b:" are 35 min away by car, but the pool is only 20 m from the house. There is also an extra kitchen, laundry room, dishwasher and even a party room. ",
              p1c:" Åhus"
            },
            p2:{
              p2a:"At 800 m distance from the farm there are nice footpaths in the forest. In ",
              p2kris:"Kristianstad",
              p2c:" we have ",
              p2natur:"Naturum",
              p2d:" the water kingdom and the ",
              p2muse:" railway museum",
              p2b:" , even learn more about the pioneering days of Swedish film at the museum of Kristianstad. Outside Knislinge we have ",
              p2vanas:"Vanås",
              p2e:" castle with various art exhibitions and Ignaberga with limestone caves. We are also close  to ",
              p2vins:"Vinslöv",
              p2f:"  and the cult film ",
              p2plot:"Plötsligt i Vinslöv.",
            },
          },
      }
      commit("setLangage", en);
    }
  },
  modules: {
  }
})
