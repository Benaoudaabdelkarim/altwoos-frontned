<template>
    <div class="bg-[#231F20] min-h-screen">
        <section class="grid lg:grid-cols-2 relative">
            <div class="px-24 mt-24 pt-24 hidden lg:block">
                <h1 class=" text-6xl font-semibold text-white">
                    {{translation.Find_your_next_home}}
                </h1>   
                <p class=" text-2xl text-[#F4BE5A] mt-4">
                    {{translation.variety_of_properties}}
                </p>
                
                <!-- <div class=" absolute text-white text-xl font-semibold mt-12 z-50">
                    <div class="flex">
                        <label for="sell" class="px-8  py-2 rounded-tl-xl" :class="[category=='sell'?'glass-on-home':'glass-off-home']">
                            <p>{{translation.Sell}}</p>
                            <input class="hidden" type="radio" name="sell" id="sell" value="sell" v-model="category">
                        </label>
                        <label for="rent" class="px-8  py-2 rounded-tr-xl" :class="[category=='rent'?'glass-on-home':'glass-off-home']">
                            <p>{{translation.Rent}}</p>
                            <input class="hidden" type="radio" name="rent" id="rent" value="rent" v-model="category">
                        </label>
                    </div>
                    <div class="glass-on-home flex w-[60vw] rounded-b-xl rounded-tr-xl">
                        <div class="w-full relative">
                            <select name="" id="" class=" appearance-none bg-transparent w-full py-4 px-4 h-20">
                                <option selected value="">{{translation.City}}</option>
                            </select>
                            <div class="absolute right-0 inset-y-0 px-4 flex items-center ">
                                <svg class="w-5" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M19.0999 2.375L10.6999 10.8C10.5999 10.9 10.4916 10.9707 10.3749 11.012C10.2582 11.054 10.1332 11.075 9.9999 11.075C9.86657 11.075 9.74157 11.054 9.6249 11.012C9.50824 10.9707 9.3999 10.9 9.2999 10.8L0.874902 2.375C0.641569 2.14166 0.524902 1.85 0.524902 1.5C0.524902 1.15 0.649902 0.849998 0.899902 0.599998C1.1499 0.349997 1.44157 0.224997 1.7749 0.224997C2.10824 0.224997 2.3999 0.349997 2.6499 0.599997L9.9999 7.95L17.3499 0.599997C17.5832 0.366663 17.8706 0.249996 18.2119 0.249996C18.5539 0.249996 18.8499 0.374996 19.0999 0.624996C19.3499 0.874996 19.4749 1.16666 19.4749 1.5C19.4749 1.83333 19.3499 2.125 19.0999 2.375Z" fill="white"/> </svg>
                            </div>
                        </div>
                        <div class="flex justify-end ">
                            <router-link to="/services" 
                                class="bg-[#F4BE5A] m-2 flex justify-center items-center rounded-lg px-6">
                                <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M25.2955 28.0227L16.3864 19.1136C15.5909 19.75 14.6761 20.2538 13.642 20.625C12.608 20.9962 11.5076 21.1818 10.3409 21.1818C7.45076 21.1818 5.005 20.1811 3.00364 18.1798C1.00121 16.1773 0 13.7311 0 10.8409C0 7.95076 1.00121 5.50447 3.00364 3.50205C5.005 1.50068 7.45076 0.5 10.3409 0.5C13.2311 0.5 15.6773 1.50068 17.6798 3.50205C19.6811 5.50447 20.6818 7.95076 20.6818 10.8409C20.6818 12.0076 20.4962 13.108 20.125 14.142C19.7538 15.1761 19.25 16.0909 18.6136 16.8864L27.5625 25.8352C27.8542 26.1269 28 26.4848 28 26.9091C28 27.3333 27.8409 27.7045 27.5227 28.0227C27.2311 28.3144 26.8598 28.4602 26.4091 28.4602C25.9583 28.4602 25.5871 28.3144 25.2955 28.0227ZM10.3409 18C12.3295 18 14.0202 17.3042 15.4127 15.9127C16.8042 14.5202 17.5 12.8295 17.5 10.8409C17.5 8.85227 16.8042 7.16167 15.4127 5.76909C14.0202 4.37758 12.3295 3.68182 10.3409 3.68182C8.35227 3.68182 6.66167 4.37758 5.26909 5.76909C3.87758 7.16167 3.18182 8.85227 3.18182 10.8409C3.18182 12.8295 3.87758 14.5202 5.26909 15.9127C6.66167 17.3042 8.35227 18 10.3409 18Z" fill="white"/> </svg>
                            </router-link>
                        </div>
                    </div>
                </div> -->
            </div>
            <div class=" relative w-full flex items-center h-[90vh]">
                <div class="absolute px-12 pt-24 lg:hidden w-full">
                    <h1 class=" text-3xl font-semibold text-black">
                        {{translation.Find_your_next_home}}
                    </h1>   
                    <p class=" font-medium text-2xl text-white">
                        {{translation.variety_of_properties}}
                    </p>
                    <!-- <div class=" text-white text-xl font-semibold z-50">
                        <div class="flex mt-12">
                            <label for="sell" class="px-8  py-2 rounded-tl-xl" :class="[category=='sell'?'glass-on-home':'glass-off-home']">
                                <p>{{translation.Sell}}</p>
                                <input class="hidden" type="radio" name="sell" id="sell" value="sell" v-model="category">
                            </label>
                            <label for="rent" class="px-8  py-2 rounded-tr-xl" :class="[category=='rent'?'glass-on-home':'glass-off-home']">
                                <p>{{translation.Rent}}</p>
                                <input class="hidden" type="radio" name="rent" id="rent" value="rent" v-model="category">
                            </label>
                        </div>
                        <div class="glass-on-home flex mx-auto  rounded-b-xl rounded-tr-xl ">
                            <div class="relative w-full">
                                <select name="" id="" class=" appearance-none bg-transparent py-4 px-4 w-full z-20">
                                    <option selected value="">{{translation.City}}</option>
                                </select>
                                <div class="absolute right-0 inset-y-0 px-4 flex items-center ">
                                    <svg class="w-5" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M19.0999 2.375L10.6999 10.8C10.5999 10.9 10.4916 10.9707 10.3749 11.012C10.2582 11.054 10.1332 11.075 9.9999 11.075C9.86657 11.075 9.74157 11.054 9.6249 11.012C9.50824 10.9707 9.3999 10.9 9.2999 10.8L0.874902 2.375C0.641569 2.14166 0.524902 1.85 0.524902 1.5C0.524902 1.15 0.649902 0.849998 0.899902 0.599998C1.1499 0.349997 1.44157 0.224997 1.7749 0.224997C2.10824 0.224997 2.3999 0.349997 2.6499 0.599997L9.9999 7.95L17.3499 0.599997C17.5832 0.366663 17.8706 0.249996 18.2119 0.249996C18.5539 0.249996 18.8499 0.374996 19.0999 0.624996C19.3499 0.874996 19.4749 1.16666 19.4749 1.5C19.4749 1.83333 19.3499 2.125 19.0999 2.375Z" fill="white"/> </svg>
                                </div>
                            </div>
                            <div class="flex justify-end ">
                                <router-link to="/services" 
                                    class="bg-[#F4BE5A] m-2 flex justify-center items-center rounded-lg px-6">
                                    <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M25.2955 28.0227L16.3864 19.1136C15.5909 19.75 14.6761 20.2538 13.642 20.625C12.608 20.9962 11.5076 21.1818 10.3409 21.1818C7.45076 21.1818 5.005 20.1811 3.00364 18.1798C1.00121 16.1773 0 13.7311 0 10.8409C0 7.95076 1.00121 5.50447 3.00364 3.50205C5.005 1.50068 7.45076 0.5 10.3409 0.5C13.2311 0.5 15.6773 1.50068 17.6798 3.50205C19.6811 5.50447 20.6818 7.95076 20.6818 10.8409C20.6818 12.0076 20.4962 13.108 20.125 14.142C19.7538 15.1761 19.25 16.0909 18.6136 16.8864L27.5625 25.8352C27.8542 26.1269 28 26.4848 28 26.9091C28 27.3333 27.8409 27.7045 27.5227 28.0227C27.2311 28.3144 26.8598 28.4602 26.4091 28.4602C25.9583 28.4602 25.5871 28.3144 25.2955 28.0227ZM10.3409 18C12.3295 18 14.0202 17.3042 15.4127 15.9127C16.8042 14.5202 17.5 12.8295 17.5 10.8409C17.5 8.85227 16.8042 7.16167 15.4127 5.76909C14.0202 4.37758 12.3295 3.68182 10.3409 3.68182C8.35227 3.68182 6.66167 4.37758 5.26909 5.76909C3.87758 7.16167 3.18182 8.85227 3.18182 10.8409C3.18182 12.8295 3.87758 14.5202 5.26909 15.9127C6.66167 17.3042 8.35227 18 10.3409 18Z" fill="white"/> </svg>
                                </router-link>
                            </div>
                        </div>
                    </div> -->
                </div>
                <img class="h-[90vh] object-cover" src="../assets/hero.jpg" alt="">
            </div>
        </section>    
        <section class="lg:grid lg:grid-cols-3 lighter-section pt-16">
            <div class=" relative w-full">
                <div class="lg:hidden h-full absolute flex justify-center items-center">
                    <div class=" w-1/2 ml-12">
                        <span class="text-[#F4BE5A] text-xl font-semibold">{{translation.Our_Value}}</span>
                        <h2 class=" text-white text-5xl font-semibold">
                            {{translation.Value_we_give_to_you}}
                        </h2>
                    </div>
                </div>
                <img class="w-1/2 lg:w-full" src="../assets/about_section.jpg" alt="">
            </div>
            <div class="col-span-2 flex items-center mx-auto lg:w-2/3 px-6 lg:px-0 pb-8 lg:pb-0">
                <div class="  text-[#A7A7A7] ">
                    <div class="hidden lg:block">
                        <span class="text-[#F4BE5A] text-xl font-semibold">{{translation.Our_Value}}</span>
                        <h2 class=" text-white text-5xl font-semibold">
                            {{translation.Value_we_give_to_you}}
                        </h2>
                    </div>
                    <p class="text-xl mt-3">
                        {{translation.ALTAWOOS_mission_is}}
                    </p>
                    <h3 class=" text-xl font-semibold text-white mt-4 flex items-center gap-3">
                        <div class=" bg-[#F4BE5A] w-1 h-6"></div>
                        {{translation.Agency}}
                    </h3>
                    <p class="text-xl mt-2">
                        {{translation.We_are_well_informed}}
                    </p>
                    <h3 class=" text-xl font-semibold text-white mt-4 flex items-center gap-3">
                        <div class=" bg-[#F4BE5A] w-1 h-6"></div>
                        {{translation.great_sense}}
                    </h3>
                    <p class="text-xl mt-2">
                        {{translation.members}}
                    </p>
                    <h3 class=" text-xl font-semibold text-white mt-4 flex items-center gap-3">
                        <div class=" bg-[#F4BE5A] w-1 h-6"></div>
                        {{translation.Our_Dubai}}
                    </h3>
                    <p class="text-xl mt-2">
                        {{translation.offer}}
                    </p>
                    <div class="flex justify-end">
                        <router-link to="/about" class="mt-6 text-sm text-white bg-[#F4BE5A] py-3 px-12 rounded-md">
                            {{translation.load_more}}
                        </router-link>
                    </div>
                </div>
            </div>
        </section>

        <!--
        <section class=" py-8 lg:py-16 px-6 lg:mx-12">
            <div class="flex gap-5 items-center mb-8 lg:mb-16">
                <div class="">
                    <span class="text-[#F4BE5A] text-xl font-semibold">{{translation.Best_Choice}}</span>
                    <h2 class=" text-white text-5xl font-semibold ">
                        {{translation.Popular_Residence}}
                    </h2>
                </div>
                <svg class="w-12" viewBox="0 0 124 143" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M20.6915 1.07366C24.6581 2.32973 32.8666 9.08939 36.4751 12.3122L34.2439 17.1878C31.8199 15.1494 26.9388 11.0231 26.8066 10.8248C23.5287 8.01513 16.1465 3.13958 12.8411 6.11449C9.53562 9.0894 16.1465 15.3422 19.8652 18.0968L30.6079 24.7077C29.8366 26.3053 28.2775 29.4675 28.2114 29.3353C28.1288 29.17 19.2041 23.6334 16.8076 22.2286C14.4112 20.8238 9.61825 14.9566 9.45297 14.9566C3.56926 6.29629 8.98471 1.54193 12.4279 0.247292C14.8244 -0.000616832 15.5681 -0.413799 20.6915 1.07366Z" fill="white" fill-opacity="0.5"/> <path d="M21.8485 37.1857C23.5012 34.4092 25.2366 33.5497 25.8976 33.4671L17.5514 53.6304L48.7053 130.317L46.0609 131.391C37.935 132.631 20.6089 135.226 16.3118 135.688C12.808 136.614 10.4446 133.815 9.7009 132.3C6.9739 112.881 1.35463 72.9012 0.693543 68.3397C-0.56253 65.8936 0.170179 62.7479 0.693543 61.4808C6.61582 54.5945 19.138 40.0945 21.8485 37.1857Z" fill="#F4BE5A" fill-opacity="0.29"/> <path d="M86.4701 24.1292L45.3998 10.1636C40.9044 8.31258 37.6871 10.6594 36.6403 12.0643C30.8282 23.7711 18.7248 48.1103 16.8076 51.8124C14.8904 54.6551 16.0088 58.561 16.8076 60.1586C26.779 84.619 47.2674 134.631 49.449 138.994C51.6306 143.357 56.418 143.236 58.539 142.63C77.4352 134.917 116.434 118.864 121.26 116.351C124.499 113.31 124.207 110.126 123.656 108.914C113.162 83.3519 91.858 31.4838 90.6019 28.5089C89.3458 25.534 87.324 24.3495 86.4701 24.1292Z" fill="#F4BE5A"/> <path d="M72.5108 86.4714L84.5613 88.4402C86.7684 88.8015 88.3028 86.3402 87.0285 84.5188L80.029 74.5247L85.6181 63.6516C86.639 61.6678 84.7656 59.4359 82.6441 60.0983L70.9759 63.6735L62.3749 55.0282C60.8204 53.455 58.1106 54.5437 58.0765 56.7551L57.8376 68.9245L46.9389 74.4153C44.9488 75.4047 45.1402 78.3123 47.2497 79.0385L58.8077 83.023L60.6678 95.0818C61.0076 97.2786 63.8184 97.9943 65.1621 96.2064L72.5108 86.4714Z" fill="#AA6F02"/> </svg>
            </div>
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
                    {{translation.Explore_more}}
                </router-link>
            </div>
        </section>
        <section class=" py-16 mx-12 bg-[#231F20] hidden">
            <span class="text-[#F4BE5A] text-xl font-semibold">Testimonials</span>
            <h2 class=" text-white text-5xl font-semibold mb-16">
                They Trusted Us
            </h2>
            <div class="bg-[#15131450]">
                {{}}
            </div>
        </section>  -->


        <!--<div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
            <div class="flex justify-center pt-8 sm:justify-start sm:pt-0">
                <svg viewBox="0 0 651 192" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-16 w-auto text-gray-700 sm:h-20" > <g clip-path="url(#clip0)" fill="#EF3B2D"> <path d="M248.032 44.676h-16.466v100.23h47.394v-14.748h-30.928V44.676zM337.091 87.202c-2.101-3.341-5.083-5.965-8.949-7.875-3.865-1.909-7.756-2.864-11.669-2.864-5.062 0-9.69.931-13.89 2.792-4.201 1.861-7.804 4.417-10.811 7.661-3.007 3.246-5.347 6.993-7.016 11.239-1.672 4.249-2.506 8.713-2.506 13.389 0 4.774.834 9.26 2.506 13.459 1.669 4.202 4.009 7.925 7.016 11.169 3.007 3.246 6.609 5.799 10.811 7.66 4.199 1.861 8.828 2.792 13.89 2.792 3.913 0 7.804-.955 11.669-2.863 3.866-1.908 6.849-4.533 8.949-7.875v9.021h15.607V78.182h-15.607v9.02zm-1.431 32.503c-.955 2.578-2.291 4.821-4.009 6.73-1.719 1.91-3.795 3.437-6.229 4.582-2.435 1.146-5.133 1.718-8.091 1.718-2.96 0-5.633-.572-8.019-1.718-2.387-1.146-4.438-2.672-6.156-4.582-1.719-1.909-3.032-4.152-3.938-6.73-.909-2.577-1.36-5.298-1.36-8.161 0-2.864.451-5.585 1.36-8.162.905-2.577 2.219-4.819 3.938-6.729 1.718-1.908 3.77-3.437 6.156-4.582 2.386-1.146 5.059-1.718 8.019-1.718 2.958 0 5.656.572 8.091 1.718 2.434 1.146 4.51 2.674 6.229 4.582 1.718 1.91 3.054 4.152 4.009 6.729.953 2.577 1.432 5.298 1.432 8.162-.001 2.863-.479 5.584-1.432 8.161zM463.954 87.202c-2.101-3.341-5.083-5.965-8.949-7.875-3.865-1.909-7.756-2.864-11.669-2.864-5.062 0-9.69.931-13.89 2.792-4.201 1.861-7.804 4.417-10.811 7.661-3.007 3.246-5.347 6.993-7.016 11.239-1.672 4.249-2.506 8.713-2.506 13.389 0 4.774.834 9.26 2.506 13.459 1.669 4.202 4.009 7.925 7.016 11.169 3.007 3.246 6.609 5.799 10.811 7.66 4.199 1.861 8.828 2.792 13.89 2.792 3.913 0 7.804-.955 11.669-2.863 3.866-1.908 6.849-4.533 8.949-7.875v9.021h15.607V78.182h-15.607v9.02zm-1.432 32.503c-.955 2.578-2.291 4.821-4.009 6.73-1.719 1.91-3.795 3.437-6.229 4.582-2.435 1.146-5.133 1.718-8.091 1.718-2.96 0-5.633-.572-8.019-1.718-2.387-1.146-4.438-2.672-6.156-4.582-1.719-1.909-3.032-4.152-3.938-6.73-.909-2.577-1.36-5.298-1.36-8.161 0-2.864.451-5.585 1.36-8.162.905-2.577 2.219-4.819 3.938-6.729 1.718-1.908 3.77-3.437 6.156-4.582 2.386-1.146 5.059-1.718 8.019-1.718 2.958 0 5.656.572 8.091 1.718 2.434 1.146 4.51 2.674 6.229 4.582 1.718 1.91 3.054 4.152 4.009 6.729.953 2.577 1.432 5.298 1.432 8.162 0 2.863-.479 5.584-1.432 8.161zM650.772 44.676h-15.606v100.23h15.606V44.676zM365.013 144.906h15.607V93.538h26.776V78.182h-42.383v66.724zM542.133 78.182l-19.616 51.096-19.616-51.096h-15.808l25.617 66.724h19.614l25.617-66.724h-15.808zM591.98 76.466c-19.112 0-34.239 15.706-34.239 35.079 0 21.416 14.641 35.079 36.239 35.079 12.088 0 19.806-4.622 29.234-14.688l-10.544-8.158c-.006.008-7.958 10.449-19.832 10.449-13.802 0-19.612-11.127-19.612-16.884h51.777c2.72-22.043-11.772-40.877-33.023-40.877zm-18.713 29.28c.12-1.284 1.917-16.884 18.589-16.884 16.671 0 18.697 15.598 18.813 16.884h-37.402zM184.068 43.892c-.024-.088-.073-.165-.104-.25-.058-.157-.108-.316-.191-.46-.056-.097-.137-.176-.203-.265-.087-.117-.161-.242-.265-.345-.085-.086-.194-.148-.29-.223-.109-.085-.206-.182-.327-.252l-.002-.001-.002-.002-35.648-20.524a2.971 2.971 0 00-2.964 0l-35.647 20.522-.002.002-.002.001c-.121.07-.219.167-.327.252-.096.075-.205.138-.29.223-.103.103-.178.228-.265.345-.066.089-.147.169-.203.265-.083.144-.133.304-.191.46-.031.085-.08.162-.104.25-.067.249-.103.51-.103.776v38.979l-29.706 17.103V24.493a3 3 0 00-.103-.776c-.024-.088-.073-.165-.104-.25-.058-.157-.108-.316-.191-.46-.056-.097-.137-.176-.203-.265-.087-.117-.161-.242-.265-.345-.085-.086-.194-.148-.29-.223-.109-.085-.206-.182-.327-.252l-.002-.001-.002-.002L40.098 1.396a2.971 2.971 0 00-2.964 0L1.487 21.919l-.002.002-.002.001c-.121.07-.219.167-.327.252-.096.075-.205.138-.29.223-.103.103-.178.228-.265.345-.066.089-.147.169-.203.265-.083.144-.133.304-.191.46-.031.085-.08.162-.104.25-.067.249-.103.51-.103.776v122.09c0 1.063.568 2.044 1.489 2.575l71.293 41.045c.156.089.324.143.49.202.078.028.15.074.23.095a2.98 2.98 0 001.524 0c.069-.018.132-.059.2-.083.176-.061.354-.119.519-.214l71.293-41.045a2.971 2.971 0 001.489-2.575v-38.979l34.158-19.666a2.971 2.971 0 001.489-2.575V44.666a3.075 3.075 0 00-.106-.774zM74.255 143.167l-29.648-16.779 31.136-17.926.001-.001 34.164-19.669 29.674 17.084-21.772 12.428-43.555 24.863zm68.329-76.259v33.841l-12.475-7.182-17.231-9.92V49.806l12.475 7.182 17.231 9.92zm2.97-39.335l29.693 17.095-29.693 17.095-29.693-17.095 29.693-17.095zM54.06 114.089l-12.475 7.182V46.733l17.231-9.92 12.475-7.182v74.537l-17.231 9.921zM38.614 7.398l29.693 17.095-29.693 17.095L8.921 24.493 38.614 7.398zM5.938 29.632l12.475 7.182 17.231 9.92v79.676l.001.005-.001.006c0 .114.032.221.045.333.017.146.021.294.059.434l.002.007c.032.117.094.222.14.334.051.124.088.255.156.371a.036.036 0 00.004.009c.061.105.149.191.222.288.081.105.149.22.244.314l.008.01c.084.083.19.142.284.215.106.083.202.178.32.247l.013.005.011.008 34.139 19.321v34.175L5.939 144.867V29.632h-.001zm136.646 115.235l-65.352 37.625V148.31l48.399-27.628 16.953-9.677v33.862zm35.646-61.22l-29.706 17.102V66.908l17.231-9.92 12.475-7.182v33.841z" /> </g> </svg>
            </div>
        </div>-->
        <div class="text-white">
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            category: "sell"
        };
    },
    computed: {
        Featred() {
            return this.$store.state.realEstatesFeatred 
        },
        translation(){ return this.$store.state.translation },
    },
    mounted () {
        this.$store.dispatch("getRealEstatesFeatred")
    },
}
</script>