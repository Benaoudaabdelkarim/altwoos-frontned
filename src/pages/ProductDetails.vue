<template>
  <div class="h-[84px] bg-[#231F20]"></div>
        <section class="px-2 lg:px-12 bg-[#231F20] pt-10">
            <div class="lg:flex justify-between">
                <div>
                    <h1 class=" font-semibold text-4xl text-white">
                        {{Product.name}}
                    </h1>
                    <div class="flex gap-4 mt-3">
                        <svg width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M8.56982 10.3282C9.11982 10.3282 9.59082 10.1322 9.98282 9.74025C10.3742 9.34891 10.5698 8.87825 10.5698 8.32825C10.5698 7.77825 10.3742 7.30725 9.98282 6.91525C9.59082 6.52391 9.11982 6.32825 8.56982 6.32825C8.01982 6.32825 7.54916 6.52391 7.15782 6.91525C6.76582 7.30725 6.56982 7.77825 6.56982 8.32825C6.56982 8.87825 6.76582 9.34891 7.15782 9.74025C7.54916 10.1322 8.01982 10.3282 8.56982 10.3282ZM8.56982 20.3282C5.88649 18.0449 3.88249 15.9239 2.55782 13.9652C1.23249 12.0072 0.569824 10.1949 0.569824 8.52825C0.569824 6.02825 1.37416 4.03658 2.98282 2.55325C4.59082 1.06991 6.45316 0.328247 8.56982 0.328247C10.6865 0.328247 12.5488 1.06991 14.1568 2.55325C15.7655 4.03658 16.5698 6.02825 16.5698 8.52825C16.5698 10.1949 15.9075 12.0072 14.5828 13.9652C13.2575 15.9239 11.2532 18.0449 8.56982 20.3282Z" fill="#787878"/> </svg>
                        <p class="text-[#787878]">
                            <span v-for="loc in Product.localisation?Product.localisation:0" 
                                :key="loc">
                                {{loc}}, 
                            </span>
                        </p>
                    </div>
                </div>
                <div class="flex items-end mt-3 lg:mt-0">
                    <p class="text-[#F4BE5A] font-semibold text-2xl">
                        AED {{Product.type=="sell"?Product.price_sell:Product.price_rent}}
                    </p>
                </div>
            </div>
            <div class="grid lg:grid-cols-3 gap-3 mt-8">
                <div class="lg:col-span-2 relative lg:h-[600px]">
                    <img class="w-full h-full rounded-md" :src="Product.images?Product.images[0]:''" alt="">
                    <p class="bg-[#F4BE5A] absolute top-0 text-white py-2 px-5 rounded-tl-md rounded-br-md">
                        For {{Product.type}}
                    </p>
                    <div class="absolute bottom-0 mb-3 flex justify-center inset-x-0 ">
                        <div class="flex gap-6 py-4 px-16 
                            bg-gray-50 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50">
                            <div class="flex flex-col items-center">
                                <svg class="fill-[#231F20]" width="28" height="28" viewBox="0 0 28 28" fill="" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M22.6299 5.28117H5.50928V22.4018L12.5858 22.4018V17.8363V17.4939H12.9282H20.4613V18.1787H13.2706V22.4018L22.6299 22.4018V5.28117ZM12.6997 11.787V9.04773H12.0148V11.4446H5.50931V12.1294H12.0148V14.1839H12.6997V11.787ZM16.8094 14.1839V5.28118H17.4942V13.8415H20.2335V14.5263H17.1518H16.8094V14.1839Z" fill=""/> </svg>
                                <p class="text-[#231F20] text-sm font-semibold">
                                    {{Product.size}} ft2 Size
                                </p>
                            </div>
                            <div class="flex flex-col items-center">
                                <svg class="fill-[#231F20]" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M3.53369 20.8873V14.7634C3.53369 14.3041 3.62725 13.8873 3.81437 13.5131C4.00149 13.1389 4.24815 12.8071 4.55435 12.518V9.66013C4.55435 8.80958 4.85204 8.08662 5.44742 7.49123C6.0428 6.89585 6.76577 6.59816 7.61631 6.59816H11.6989C12.0902 6.59816 12.4559 6.67063 12.7961 6.81556C13.1364 6.95981 13.4511 7.15952 13.7402 7.41468C14.0294 7.15952 14.3441 6.95981 14.6844 6.81556C15.0246 6.67063 15.3903 6.59816 15.7816 6.59816H19.8642C20.7147 6.59816 21.4377 6.89585 22.0331 7.49123C22.6285 8.08662 22.9261 8.80958 22.9261 9.66013V12.518C23.2323 12.8071 23.479 13.1389 23.6661 13.5131C23.8532 13.8873 23.9468 14.3041 23.9468 14.7634V20.8873H21.9055V18.846H5.575V20.8873H3.53369ZM14.7609 11.7014H20.8848V9.66013C20.8848 9.37094 20.7868 9.12836 20.5909 8.9324C20.3956 8.73711 20.1534 8.63947 19.8642 8.63947H15.7816C15.4924 8.63947 15.2501 8.73711 15.0548 8.9324C14.8589 9.12836 14.7609 9.37094 14.7609 9.66013V11.7014ZM6.59566 11.7014H12.7196V9.66013C12.7196 9.37094 12.6219 9.12836 12.4267 8.9324C12.2307 8.73711 11.9881 8.63947 11.6989 8.63947H7.61631C7.32713 8.63947 7.08455 8.73711 6.88859 8.9324C6.6933 9.12836 6.59566 9.37094 6.59566 9.66013V11.7014Z" fill=""/> </svg>
                                <p class="text-[#231F20] text-sm font-semibold">
                                    {{Product.bedrooms}} Bedrooms
                                </p>
                            </div>
                            <div class="flex flex-col items-center">
                                <svg class="fill-[#231F20]"  width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M22.3337 15.4219V16.3767C22.3337 18.2004 21.3121 19.7853 19.8035 20.5874L20.4241 23.0603H18.5145L18.0371 21.1507H9.44382L8.96642 23.0603H7.0568L7.67743 20.5874C6.9128 20.1818 6.2732 19.5754 5.82739 18.8335C5.38157 18.0916 5.14641 17.2422 5.14719 16.3767V15.4219H4.19238V13.5123H21.3789V6.82862C21.3789 6.57539 21.2783 6.33253 21.0992 6.15347C20.9202 5.97441 20.6773 5.87382 20.4241 5.87382C19.9467 5.87382 19.5839 6.19845 19.4693 6.62811C20.0708 7.14371 20.4241 7.90755 20.4241 8.73824H14.6953C14.6953 7.97854 14.997 7.24997 15.5342 6.71279C16.0714 6.1756 16.8 5.87382 17.5597 5.87382H17.722C18.1135 4.76624 19.1733 3.9642 20.4241 3.9642C21.1838 3.9642 21.9124 4.26599 22.4495 4.80317C22.9867 5.34035 23.2885 6.06893 23.2885 6.82862V15.4219H22.3337ZM20.4241 15.4219H7.0568V16.3767C7.0568 17.1364 7.35859 17.865 7.89577 18.4021C8.43295 18.9393 9.16153 19.2411 9.92122 19.2411H17.5597C18.3194 19.2411 19.0479 18.9393 19.5851 18.4021C20.1223 17.865 20.4241 17.1364 20.4241 16.3767V15.4219Z" fill="" /> </svg>
                                <p class="text-[#231F20] text-sm font-semibold">
                                    {{Product.bethrooms}} Bathrooms
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-2 lg:grid-cols-1 lg:grid-rows-3 gap-3 lg:h-[600px]">
                    <div class="">
                        <img class="w-full h-full rounded-md" :src="Product.images?Product.images[1]:''" alt="">
                    </div>
                    <div v-if="Product.images" class="lg:row-span-2">
                        <img v-if="Product.images[2]" class="w-full h-full rounded-md" :src="Product.images?Product.images[2]:''" alt="">
                    </div>
                </div>
            </div>
        </section>
        <section class="px-2 lg:px-12 bg-[#231F20] py-12">
            <div class="grid lg:grid-cols-5 gap-3">
                <div class=" lg:col-span-3  bg-[#151314] p-4 lg:p-8 rounded-md">
                    <h3 class="font-semibold text-2xl text-white mb-3 lg:mb-6">
                        Description
                    </h3>
                    <p class="lg:text-xl text-[#A7A7A7]">
                        {{Product.description}}
                    </p>
                </div>
                <div class="col-span-3 lg:col-span-2 bg-[#151314] p-8 rounded-md ">
                    <h3 class="font-semibold text-2xl text-white mb-6">
                        Propert Address
                    </h3>
                    <div class=" space-y-2">
                        <p class=" text-xl font-normal text-[#A7A7A795] ">
                            <span class=" font-semibold text-[#A7A7A7]">
                                State/Country :  
                            </span>
                                {{Product.localisation?Product.localisation[0]:0}}
                        </p>
                        <p class=" text-xl font-normal text-[#A7A7A795] ">
                            <span class=" font-semibold text-[#A7A7A7]">
                                City :  
                            </span>
                                {{Product.localisation?Product.localisation[1]:0}}
                        </p>
                        <p class=" text-xl font-normal text-[#A7A7A795] ">
                            <span class=" font-semibold text-[#A7A7A7]">
                                Country :  
                            </span>
                                {{Product.localisation?Product.localisation[2]:0}}
                        </p>
                        <p class=" text-xl font-normal text-[#A7A7A795] ">
                            <span class=" font-semibold text-[#A7A7A7]">
                                Area :  
                            </span>
                                {{Product.localisation?Product.localisation[3]:0}}
                        </p>
                    </div>
                </div>
                <div class="col-span-4  bg-[#151314] p-8 rounded-md">
                    <h3 class="font-semibold text-2xl text-white mb-6">
                        Property Details
                    </h3>
                    <div class="grid grid-cols-2">
                        <div class=" space-y-2">
                            <p class=" text-xl font-normal text-[#A7A7A795] ">
                                <span class=" font-semibold text-[#A7A7A7]">
                                    Property Size: 
                                </span>
                                {{Product.size}} ft2
                            </p>
                            <p class=" text-xl font-normal text-[#A7A7A795] ">
                                <span class=" font-semibold text-[#A7A7A7]">
                                    Bedrooms:   
                                </span>
                                {{Product.bedrooms}}
                            </p>
                            <p class=" text-xl font-normal text-[#A7A7A795] ">
                                <span class=" font-semibold text-[#A7A7A7]">
                                    Rooms :  
                                </span>
                                {{Product.bedrooms}}
                            </p>
                        </div>
                        <div class="space-y-2">
                            <p class=" text-xl font-normal text-[#A7A7A795] ">
                                <span class=" font-semibold text-[#A7A7A7]">
                                    Bathroom: 
                                </span>
                                {{Product.bethrooms}}
                            </p>
                            <p class="hidden text-xl font-normal text-[#A7A7A795] ">
                                <span class=" font-semibold text-[#A7A7A7]">
                                    Negotiable:   
                                </span>
                                    yes
                            </p>
                            <p class=" text-2xl font-normal text-[#F4BE5A] ">
                                <span class=" font-semibold">
                                    Price : 
                                </span>
                                    AED {{Product.type=="sell"?Product.price_sell:Product.price_rent}}
                            </p>
                        </div>
                        
                    </div>
                </div>
                <div v-if="Product.images">
                    <img v-if="Product.images[0]" class="h-full rounded-md" :src="Product.images?Product.images[0]:''"  alt="">
                </div>
                <div v-if="Product.images">
                    <img v-if="Product.images[5]" class="h-full rounded-md" :src="Product.images?Product.images[4]:''"  alt="">
                </div>
            </div>
        </section>
        <section class="bg-[#231F20]">
            <div class="black-gradien pt-16 px-12">
                <h2 class=" text-white text-5xl font-semibold mb-16">
                    Pictures
                </h2>
                <div class="flex flex-col lg:flex-row justify-center gap-3 w-full -mb-16">
                    <div v-if="Product.images">
                        <img class=" rounded-md"  :src="Product.images?Product.images[0]:''" alt="">
                    </div>
                    <div v-if="Product.images">
                        <img class=" rounded-md" :src="Product.images?Product.images[1]:''" alt="">
                    </div>
                    <div v-if="Product.images">
                        <img class=" rounded-md" :src="Product.images?Product.images[2]:''" alt="">
                    </div>
                </div>
            </div>
        </section>
            <section class=" bg-[#151314] pt-44 pb-16 px-12">
            <span class="text-[#F4BE5A] text-xl font-semibold">Best Choice</span>
            <h2 class=" text-white text-5xl font-semibold mb-8 lg:mb-16">
                Popular Residence
            </h2>
            <div class="grid lg:grid-cols-3 gap-8">
                <div class="rounded-lg black-shadow" v-for="feater in Featred" :key="feater">
                    <img class="w-full rounded-t-lg" :src="feater.images?feater.images[0]:''" alt="">
                    <div class="m-6">
                        <span class="text-[#F4BE5A] font-semibold">For {{feater.type}}</span>
                        <h2 class=" text-white text-xl font-semibold mb-6">
                            {{feater.name}}
                        </h2>
                        <p class="text-[#ACACAC]">
                            {{feater.description}}
                        </p>
                    </div>
                    <div class="flex gap-3 mt-10 pb-12 mx-6">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12 12C12.55 12 13.021 11.804 13.413 11.412C13.8043 11.0207 14 10.55 14 10C14 9.45 13.8043 8.979 13.413 8.587C13.021 8.19567 12.55 8 12 8C11.45 8 10.9793 8.19567 10.588 8.587C10.196 8.979 10 9.45 10 10C10 10.55 10.196 11.0207 10.588 11.412C10.9793 11.804 11.45 12 12 12ZM12 22C9.31667 19.7167 7.31267 17.5957 5.988 15.637C4.66267 13.679 4 11.8667 4 10.2C4 7.7 4.80433 5.70833 6.413 4.225C8.021 2.74167 9.88333 2 12 2C14.1167 2 15.979 2.74167 17.587 4.225C19.1957 5.70833 20 7.7 20 10.2C20 11.8667 19.3377 13.679 18.013 15.637C16.6877 17.5957 14.6833 19.7167 12 22Z" fill="#787878"/> </svg>
                        <p class="text-[#787878]">
                            <span v-for="loc in feater.localisation?feater.localisation:0" :key="loc">
                                {{loc}}, 
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div class="flex justify-center mt-6">
                <router-link to="/services" class="mt-6 text-xl text-white bg-[#F4BE5A] py-2 px-10 rounded-md">
                    Explore more
                </router-link>
            </div>
        </section>
        <div class="h-[84px] bg-[#231F20]"></div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  mounted () {
    this.$store.dispatch("getRealEstatesFeatred")

    const path = window.location.pathname.split('/');
    //const urlParams = new URLSearchParams(path);
    this.$store.dispatch("getCurrentRealEstate",path[2])
  },
  computed: {
        Product(){
            return this.$store.state.currentRealEstate.data
        },  
        Featred() {
            return this.$store.state.realEstatesFeatred 
        }
    },
}
</script>

<style>

</style>