<template>
    <div class="h-[84px] bg-[#151314]"></div>
    <div class="bg-[#231F20] p-12">
        <span class="text-[#F4BE5A] font-semibold text-xl">
            {{translation.Discover_with_us}}
        </span>
        <h1 class=" text-4xl font-semibold text-white">
            {{translation.Our_products}}
        </h1>
    </div>
    <section class="bg-[#231F20] px-4 lg:px-12">
        <div class="flex justify-between">
            <div class="flex flex-row mx-auto mt-4">
                <label for="all"  class="text-xl pb-1 px-4 lg:px-12" 
                    :class="[category=='all'?'font-semibold text-[#F4BE5A] border-b-4 border-[#F4BE5A]':'font-medium text-[#ACACAC] border-b']">
                    <p>{{translation.All}}</p>
                    <input type="radio" name="all" id="all" value="all" v-model="category" class="hidden">
                </label>
                <label for="rent"  class="text-xl pb-1 px-4 lg:px-12" 
                    :class="[category=='rent'?'font-semibold text-[#F4BE5A] border-b-4 border-[#F4BE5A]':'font-medium text-[#ACACAC] border-b']">
                    <p>{{translation.Rent}}</p>
                    <input type="radio" name="rent" id="rent" value="rent" v-model="category" class="hidden">
                </label>
                <label for="sell"  class="text-xl pb-1 px-4 lg:px-12" 
                    :class="[category=='sell'?'font-semibold text-[#F4BE5A] border-b-4 border-[#F4BE5A]':'font-medium text-[#ACACAC] border-b']">
                    <p>{{translation.Sell}}</p>
                    <input type="radio" name="sell" id="sell" value="sell" v-model="category" class="hidden">
                </label>
                <label for="buy"  class="text-xl pb-1 px-4 lg:px-12" 
                    :class="[category=='buy'?'font-semibold text-[#F4BE5A] border-b-4 border-[#F4BE5A]':'font-medium text-[#ACACAC] border-b']">
                    <p>{{translation.Buy}}</p>
                    <input type="radio" name="buy" id="buy" value="buy" v-model="category" class="hidden">
                </label>
            </div>
            <div class="hidden">
                <button class="text-[#F4BE5A] flex  items-center gap-2">
                    <p class="text-xl">Filter</p>
                    <svg class="w-5" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M8.85158 18C8.53283 18 8.26583 17.892 8.05058 17.676C7.83458 17.4608 7.72658 17.1938 7.72658 16.875V10.125L1.20158 1.8C0.920331 1.425 0.878331 1.03125 1.07558 0.61875C1.27208 0.20625 1.61408 0 2.10158 0H17.8516C18.3391 0 18.6815 0.20625 18.8787 0.61875C19.0752 1.03125 19.0328 1.425 18.7516 1.8L12.2266 10.125V16.875C12.2266 17.1938 12.119 17.4608 11.9037 17.676C11.6877 17.892 11.4203 18 11.1016 18H8.85158Z" fill="#F4BE5A"/> </svg>
                </button>
            </div>
        </div>
        <div class="mt-6 flex justify-center pb-4">
            <input type="text" :placeholder="translation.Search_the_area" v-model="search"
                class="px-4 w-full md:w-1/2 lg:w-1/3 py-3 bg-gray-700 text-white text-center text-xl rounded-lg ">
        </div>
    </section>
    <section class="bg-[#231F20] lg:px-12 pt-12">
        <div v-for="real in RealEstates" :key="real"
            class="grid sm:grid-cols-2 lg:grid-cols-3 p-6 bg-gradient-to-b from-[#171717] shadow-md rounded-md ">
            <div class="">
                <img :src="real.images[0]" class="rounded-md w-full  lg:w-72 h-72" alt="">
            </div>
            <div class="flex flex-col justify-between mx-3 space-y-3 lg:space-y-0">
                <div class="mt-6 sm:mt-0">
                    <span class="text-[#F4BE5A] font-semibold">
                        For {{real.type}}
                    </span>
                    <h3 class="font-semibold text-xl text-white">
                        {{real.name}}
                    </h3>
                </div>
                <p class="text-[#ACACAC]">
                    {{real.description}}
                </p>
                <div class="flex mx-auto md:mx-0 gap-4  md:gap-6">
                    <div class="flex flex-col items-center">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M22.6299 5.28117H5.50928V22.4018L12.5858 22.4018V17.8363V17.4939H12.9282H20.4613V18.1787H13.2706V22.4018L22.6299 22.4018V5.28117ZM12.6997 11.787V9.04773H12.0148V11.4446H5.50931V12.1294H12.0148V14.1839H12.6997V11.787ZM16.8094 14.1839V5.28118H17.4942V13.8415H20.2335V14.5263H17.1518H16.8094V14.1839Z" fill="#F4BE5A" fill-opacity="0.5"/> </svg>
                        <p class="text-[#F4BE5A50] text-sm whitespace-nowrap">
                            {{real.size}} ft2 Size
                        </p>
                    </div>
                    <div class="flex flex-col items-center">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M3.53369 20.8873V14.7634C3.53369 14.3041 3.62725 13.8873 3.81437 13.5131C4.00149 13.1389 4.24815 12.8071 4.55435 12.518V9.66013C4.55435 8.80958 4.85204 8.08662 5.44742 7.49123C6.0428 6.89585 6.76577 6.59816 7.61631 6.59816H11.6989C12.0902 6.59816 12.4559 6.67063 12.7961 6.81556C13.1364 6.95981 13.4511 7.15952 13.7402 7.41468C14.0294 7.15952 14.3441 6.95981 14.6844 6.81556C15.0246 6.67063 15.3903 6.59816 15.7816 6.59816H19.8642C20.7147 6.59816 21.4377 6.89585 22.0331 7.49123C22.6285 8.08662 22.9261 8.80958 22.9261 9.66013V12.518C23.2323 12.8071 23.479 13.1389 23.6661 13.5131C23.8532 13.8873 23.9468 14.3041 23.9468 14.7634V20.8873H21.9055V18.846H5.575V20.8873H3.53369ZM14.7609 11.7014H20.8848V9.66013C20.8848 9.37094 20.7868 9.12836 20.5909 8.9324C20.3956 8.73711 20.1534 8.63947 19.8642 8.63947H15.7816C15.4924 8.63947 15.2501 8.73711 15.0548 8.9324C14.8589 9.12836 14.7609 9.37094 14.7609 9.66013V11.7014ZM6.59566 11.7014H12.7196V9.66013C12.7196 9.37094 12.6219 9.12836 12.4267 8.9324C12.2307 8.73711 11.9881 8.63947 11.6989 8.63947H7.61631C7.32713 8.63947 7.08455 8.73711 6.88859 8.9324C6.6933 9.12836 6.59566 9.37094 6.59566 9.66013V11.7014Z" fill="#F4BE5A" fill-opacity="0.5"/> </svg>
                        <p class="text-[#F4BE5A50] text-sm whitespace-nowrap">
                            {{real.bedrooms}} Bedrooms
                        </p>
                    </div>
                    <div class="flex flex-col items-center">
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M22.3337 15.4219V16.3767C22.3337 18.2004 21.3121 19.7853 19.8035 20.5874L20.4241 23.0603H18.5145L18.0371 21.1507H9.44382L8.96642 23.0603H7.0568L7.67743 20.5874C6.9128 20.1818 6.2732 19.5754 5.82739 18.8335C5.38157 18.0916 5.14641 17.2422 5.14719 16.3767V15.4219H4.19238V13.5123H21.3789V6.82862C21.3789 6.57539 21.2783 6.33253 21.0992 6.15347C20.9202 5.97441 20.6773 5.87382 20.4241 5.87382C19.9467 5.87382 19.5839 6.19845 19.4693 6.62811C20.0708 7.14371 20.4241 7.90755 20.4241 8.73824H14.6953C14.6953 7.97854 14.997 7.24997 15.5342 6.71279C16.0714 6.1756 16.8 5.87382 17.5597 5.87382H17.722C18.1135 4.76624 19.1733 3.9642 20.4241 3.9642C21.1838 3.9642 21.9124 4.26599 22.4495 4.80317C22.9867 5.34035 23.2885 6.06893 23.2885 6.82862V15.4219H22.3337ZM20.4241 15.4219H7.0568V16.3767C7.0568 17.1364 7.35859 17.865 7.89577 18.4021C8.43295 18.9393 9.16153 19.2411 9.92122 19.2411H17.5597C18.3194 19.2411 19.0479 18.9393 19.5851 18.4021C20.1223 17.865 20.4241 17.1364 20.4241 16.3767V15.4219Z" fill="#F4BE5A" fill-opacity="0.5"/> </svg>
                        <p class="text-[#F4BE5A50] text-sm whitespace-nowrap">
                            {{real.bethrooms}} Bathrooms
                        </p>
                    </div>
                </div>
                <div class="flex gap-4 ">
                    <svg width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M8.56982 10.3282C9.11982 10.3282 9.59082 10.1322 9.98282 9.74025C10.3742 9.34891 10.5698 8.87825 10.5698 8.32825C10.5698 7.77825 10.3742 7.30725 9.98282 6.91525C9.59082 6.52391 9.11982 6.32825 8.56982 6.32825C8.01982 6.32825 7.54916 6.52391 7.15782 6.91525C6.76582 7.30725 6.56982 7.77825 6.56982 8.32825C6.56982 8.87825 6.76582 9.34891 7.15782 9.74025C7.54916 10.1322 8.01982 10.3282 8.56982 10.3282ZM8.56982 20.3282C5.88649 18.0449 3.88249 15.9239 2.55782 13.9652C1.23249 12.0072 0.569824 10.1949 0.569824 8.52825C0.569824 6.02825 1.37416 4.03658 2.98282 2.55325C4.59082 1.06991 6.45316 0.328247 8.56982 0.328247C10.6865 0.328247 12.5488 1.06991 14.1568 2.55325C15.7655 4.03658 16.5698 6.02825 16.5698 8.52825C16.5698 10.1949 15.9075 12.0072 14.5828 13.9652C13.2575 15.9239 11.2532 18.0449 8.56982 20.3282Z" fill="#787878"/> </svg>
                    <p class="text-[#787878]">
                        <span v-for="loc in real.localisation?real.localisation:0" :key="loc">
                            {{loc}}, 
                        </span>
                    </p>
                </div>
            </div>
            <div class=" col-span-full lg:col-span-1 flex lg:flex-col flex-row items-end justify-between mt-6 lg:mt-0">
                <p class="text-xl font-semibold text-white">
                    AED {{real.type=="rent"?real.price_rent:real.price_sell}}
                </p>
                <button @click="toDetails(real.id)" class="rounded-md bg-[#F4BE5A] text-white py-2 px-8">
                    Show More
                </button>
            </div>
        </div>
    </section>
</template>
  
  <script>
  export default {
    data() {
        return {
            category: "all",
            search:""
        }
    },
    computed: {
        RealEstates() {
            //return this.$store.state.realEstates.data
            return this.filterType(this.$store.state.realEstates.data)
        },
        translation(){ return this.$store.state.translation },
    },
    mounted () {
        this.$store.dispatch("getRealEstates")
    },
    methods: {
        filterType(array) {
            return array.filter((element) => {
                if(this.category=="all")
                    return this.searchReal(element)
                else
                    return element.type == this.category
            });
        },
        searchReal(element){
                return element.localisation[0].includes(this.search)
        },
        toDetails(id){
            //
            this.$router.push({
                path : `/productDetails/${id}`
            })
        }
    },
  }
  </script>
  
  <style>
  
  </style>