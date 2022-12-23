<template>
    <label for="menu-opener" class="text-white md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"> <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /> </svg>
    </label>
    <input type="checkbox" v-model="drawer" data-menu id="menu-opener" hidden>
    <aside class="DrawerMenu" role="menu" id="menu" aria-labelledby="openmenu">
        <nav class="-ml-4 sm: w-80 bg-[#1B1819] px-4">
            <div class="flex justify-between items-end">
                <div class="mt-4">
                    <img class="w-40" src="../assets/logo_name.png" alt="">
                </div>
                <select class="appearance-none border-transparent bg-transparent text-center
                    text-white font-semibold focus:ring-0 focus:border-none w-24 pb-1.5 border-b-4" name="" id=""
                    @change="changeLang()" v-model="lang">
                    <option class="text-black flex" value="en">
                    <p>English</p>
                    </option>
                    <option class="text-black" value="fr">
                        <p> Francais</p>
                    </option>
                    <option class="text-black" value="es">
                        <p> Espagnol</p>
                    </option>
                </select>
            </div>
            <div class="text-white text-xl font-semibold mt-12 mx-4 flex flex-col justify-center items-center gap-6">
                <router-link to="/" @click="(drawer=false)">{{translation.Home}}</router-link>
                <router-link to="/services" @click="(drawer=false)">{{translation.Services}}</router-link>
                <router-link to="/about" @click="(drawer=false)">{{translation.About}} </router-link>
                <router-link to="/contactUs" @click="(drawer=false)">{{translation.Contact_us}}</router-link>
                <router-link v-if="Token" to="/dashboard" @click="(drawer=false)">{{translation.Dashboard}}</router-link>
                <router-link v-else to="/login" @click="(drawer=false)">{{translation.Login}}</router-link>
            </div>
        </nav>
        <label for="menu-opener" :class="[drawer?'MenuOverlay':'-translate-x-24']"></label>
    </aside>
</template>

<script>
export default {
    data() {
        return {
            drawer: false,
            lang : "en"
        }
    },
    computed: {
        Drawer() {
            return this.$store.state.drawer 
        },
        translation(){ return this.$store.state.translation },
    },
    methods: {
        changeLang(){
            this.$store.dispatch("changeTranslation",this.lang)
        },
    },
}
</script>

<style>
.DrawerMenu {
  position: fixed;
  z-index: 9;
  width: 100vw;
  height: 100vh;
  top: 0;
  bottom: 0;
  transform: translateX(-100%);
  transition: transform 0.5s cubic-bezier(0.4, 0.0, 0.2, 1);
  display: grid;
  grid-template-areas: 'MENU OVERLAY';
  grid-template-columns: 15fr 5fr
  
}


@media (min-width: 30em) {


.DrawerMenu {
    grid-template-columns: auto 1fr
  
}
  }


[data-menu]:checked ~ .DrawerMenu {
    transform: none
  
}


.Menu {
  display: block;
  flex-flow: column wrap;
  transform: translateX(-30%);
  opacity: 0;
  color: #fff;
  transition: all 500ms cubic-bezier(0.4, 0.0, 0.2, 1);
  transition-delay: 0;
  contain: content;
  grid-area: 'MENU';
  background-color: #1B1819;
  box-sizing: border-box;
  padding: 24px;
  overflow: auto;
  -webkit-overflow-scrolling: touch
}


@media (min-width: 30em) {


.Menu {
    min-width: 400px
}
  }


[data-menu]:checked ~ .DrawerMenu .Menu {
    transform: none;
    opacity: 1;
    transition-delay: 300ms
}


.Menu a {
    text-decoration: none;
    color: #FFFFFF80;
    display: block;
    padding: 16px 0
  }


.Menu a:hover {
      color: #69F0AE;
    }


.Menu > * + * {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }


.MenuOverlay {
  display: block;
  grid-area: 'OVERLAY'
}


[data-menu]:not(:checked) ~ .DrawerMenu .MenuOverlay {
    pointer-events: none
}
</style>