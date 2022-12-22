<template>
    <nav class="flex justify-between items-center w-full py-4 px-4 md:px-12 fixed top-0 inset-x-0 z-50
          bg-brown-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-100">
      <div class="flex items-center">
          <img class="w-40 " src="../assets/logo_name.png" alt="">
      </div>
      <div class="hidden md:flex items-center space-x-4 lg:space-x-16 ">
          <div class="flex flex-col justify-center items-center">
              <router-link to="/" class="text-white font-semibold pb-1.5 border-b-4 border-transparent"> {{translation.Home}} </router-link>
          </div>
          <div class="flex flex-col justify-center items-center">
              <router-link to="/services" class="text-white font-semibold pb-1.5 border-b-4 border-transparent"> {{translation.Services}} </router-link>
          </div>
          <div class="flex flex-col justify-center items-center">
              <router-link to="/about" class="text-white font-semibold pb-1.5 border-b-4 border-transparent"> {{translation.About}} </router-link>
          </div>
          <div class="flex flex-col justify-center items-center">
              <router-link to="/contactUs" class="text-white font-semibold pb-1.5 border-b-4 whitespace-nowrap border-transparent"> {{translation.Contact_us}}</router-link>
          </div>
          <div class="flex flex-col justify-center items-center">
              <select class="appearance-none border-transparent bg-transparent 
                 text-white font-semibold focus:ring-0 focus:border-none w-24 pb-1.5 border-b-4" name="" id=""
                @change="changeLang()" v-model="lang">
                  <option class="text-black flex" value="en">
                    <p>English</p>
                    <img src="../assets/frenchflagframed.svg" alt="">
                  </option>
                  <option class="text-black" value="fr">
                    <p> Francais</p>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="6cm" height="4cm" viewBox="-10 -10 3020 2020">
                        <g id="French_Flag_by_Adam_Stanislav">
                            <rect fill="rgb(0%,14%,58%)" x="0" y="0" width="1010" height="2000" />
                            <rect fill="rgb(97%,97%,97%)" x="1000" y="0" width="1010" height="2000" />
                            <rect fill="rgb(93%,16%,22%)" x="2000" y="0" width="1000" height="2000" />
                            <rect fill="none" stroke="rgb(55%,55%,55%)" stroke-width="10" x="0" y="0" width="3000" height="2000" />
                        </g>
                    </svg>
                    </option>
              </select>
            </div>
            <div class="flex flex-col justify-center items-center" v-if="Token">
                <router-link to="/dashboard" class="text-white font-semibold pb-1.5 border-b-4 whitespace-nowrap border-transparent"> {{translation.Dashboard}} </router-link>
            </div>
            <div class="flex flex-col justify-center items-center" v-else>
                <router-link to="/login" class="text-white font-semibold pb-1.5 border-b-4 whitespace-nowrap border-transparent"> {{translation.Login}} </router-link>
            </div>
        </div>
      
      <Drawer/>
    </nav>
  </template> 
  
  <script>
  import Drawer from "../components/Drawer.vue"
  export default {
    components: {
        Drawer,
    },
    data() {
        return {
            lang : "en"
        }
    },
    computed: {
        Token() {
            return this.$store.state.user.token
        },
        translation(){ return this.$store.state.translation },
    },
    methods: {
        changeLang(){
            this.$store.dispatch("changeTranslation",this.lang)
        },
        
        setDrawer() {
            this.$store.commit("setDrawer", true)
        }
    },
  }
  </script>
  <style>
  
  </style>