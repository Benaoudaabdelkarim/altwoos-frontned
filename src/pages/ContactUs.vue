<template>
  <div class="bg-[#231F20] min-h-screen">
    <div class="h-24"></div>
    <div class="grid lg:grid-cols-2 b-red-200 max-w-6xl mx-auto">
        <div class="flex items-center">
            <div class="px-4">
                <div class=" lg:w-1/2">
                    <span class="yellow-span">{{translation.Get_in_touch}}</span>
                    <h2>
                        {{translation.Contact_us}}
                    </h2>
                </div>
                <div class="mt-4">
                    <p class="text-[#adadad] w-3/4 ">
                        {{translation.Our_mission}}
                    </p>
                </div>
                <div class=" space-y-4 mt-12 ml-4">
                    <div class="flex items-center gap-4">
                        <svg class=" self-start mt-3" width="24" height="34" viewBox="0 0 24 34" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M11.9 16.15C10.7728 16.15 9.69183 15.7022 8.8948 14.9052C8.09777 14.1082 7.65 13.0272 7.65 11.9C7.65 10.7728 8.09777 9.69183 8.8948 8.8948C9.69183 8.09777 10.7728 7.65 11.9 7.65C13.0272 7.65 14.1082 8.09777 14.9052 8.8948C15.7022 9.69183 16.15 10.7728 16.15 11.9C16.15 12.4581 16.0401 13.0108 15.8265 13.5264C15.6129 14.042 15.2999 14.5106 14.9052 14.9052C14.5106 15.2999 14.042 15.6129 13.5264 15.8265C13.0108 16.0401 12.4581 16.15 11.9 16.15ZM11.9 0C8.74392 0 5.71711 1.25375 3.48543 3.48543C1.25375 5.71711 0 8.74392 0 11.9C0 20.825 11.9 34 11.9 34C11.9 34 23.8 20.825 23.8 11.9C23.8 8.74392 22.5463 5.71711 20.3146 3.48543C18.0829 1.25375 15.0561 0 11.9 0Z" fill="#F4BE5A"/> </svg>
                        <div>
                            <p class="text-[#fff] text-xl font-medium">{{translation.Address}}</p>
                            <span class="text-[#9f9f9f] font-medium">
                                Office No: 136, Vesla Motors Bldg, <br>Sheikh Zayed Rd, AI Qouz <br>Industrial Area 3 - Dubai - U.A.E
                            </span>
                        </div>
                    </div>
                </div>
                <div class=" space-y-4 mt-12 ml-4">
                    <div class="flex items-center gap-4">
                        <svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M24.75 0H2.75C1.2375 0 0.01375 1.2375 0.01375 2.75L0 19.25C0 20.7625 1.2375 22 2.75 22H24.75C26.2625 22 27.5 20.7625 27.5 19.25V2.75C27.5 1.2375 26.2625 0 24.75 0ZM24.2 5.84375L14.4787 11.9213C14.0387 12.1962 13.4613 12.1962 13.0213 11.9213L3.3 5.84375C3.16213 5.76635 3.04139 5.66178 2.9451 5.53637C2.84881 5.41096 2.77896 5.26732 2.73979 5.11413C2.70062 4.96095 2.69294 4.80141 2.71722 4.64517C2.74149 4.48893 2.79721 4.33924 2.88101 4.20516C2.96481 4.07108 3.07495 3.9554 3.20475 3.86512C3.33455 3.77483 3.48132 3.71183 3.63618 3.67991C3.79104 3.64799 3.95076 3.64783 4.10569 3.67943C4.26061 3.71103 4.40751 3.77373 4.5375 3.86375L13.75 9.625L22.9625 3.86375C23.0925 3.77373 23.2394 3.71103 23.3943 3.67943C23.5492 3.64783 23.709 3.64799 23.8638 3.67991C24.0187 3.71183 24.1654 3.77483 24.2952 3.86512C24.4251 3.9554 24.5352 4.07108 24.619 4.20516C24.7028 4.33924 24.7585 4.48893 24.7828 4.64517C24.8071 4.80141 24.7994 4.96095 24.7602 5.11413C24.721 5.26732 24.6512 5.41096 24.5549 5.53637C24.4586 5.66178 24.3379 5.76635 24.2 5.84375Z" fill="#F4BE5A"/> </svg>
                        <div>
                            <p class="text-[#fff] text-xl font-medium">{{translation.Email}}</p>
                            <span class="text-[#9f9f9f] font-medium">info@tawoosrealty.com</span>
                        </div>
                    </div>
                </div>
                <div class=" space-y-4 mt-12 ml-4">
                    <div class="flex items-center gap-4">
                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1.34167 23C0.958334 23 0.638889 22.8722 0.383333 22.6167C0.127778 22.3611 0 22.0417 0 21.6583V16.4833C0 16.1852 0.0958332 15.9241 0.2875 15.7001C0.479167 15.4769 0.724074 15.3333 1.02222 15.2694L5.43056 14.375C5.7287 14.3324 6.03239 14.3588 6.34161 14.4542C6.64998 14.5505 6.9 14.6944 7.09167 14.8861L10.0944 17.8889C11.713 16.9093 13.1931 15.7486 14.5347 14.4069C15.8764 13.0653 16.9944 11.6278 17.8889 10.0944L14.8222 6.96389C14.6306 6.77222 14.5079 6.55372 14.4542 6.30839C14.4014 6.06391 14.3963 5.79259 14.4389 5.49444L15.2694 1.02222C15.312 0.724074 15.4505 0.479167 15.6847 0.2875C15.919 0.0958332 16.1852 0 16.4833 0H21.6583C22.0417 0 22.3611 0.127778 22.6167 0.383333C22.8722 0.638889 23 0.958334 23 1.34167C23 4.08889 22.3875 6.76669 21.1626 9.37506C19.9384 11.9843 18.3199 14.2949 16.307 16.307C14.2949 18.3199 11.9847 19.9384 9.37633 21.1626C6.76711 22.3875 4.08889 23 1.34167 23Z" fill="#F4BE5A"/> </svg>
                        <div>
                            <p class="text-[#fff] text-xl font-medium">{{translation.Phone}}</p>
                            <span class="text-[#9f9f9f] font-medium">+971544637060</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <form class="bg-gradient-to-t from-[#171717] rounded-lg px-4 lg:px-12 py-12" @submit.prevent="">
            <h2>{{translation.Send_Us_Message}}</h2>
            <div class=" space-y-6 mt-6">
                <div class="flex flex-col">
                    <label for="name" class="text-white text-xl mb-1.5">{{translation.Name}}</label>
                    <input type="text" id="name" placeholder="Enter your name" v-model="email.name"
                        class="px-3 bg-transparent text-gray-200 focus:ring-0 focus:border-t-0 appearance-none border-b py-2">
                </div>
                <div class="flex flex-col">
                    <label for="email" class="text-white text-xl mb-1.5">{{translation.Email}}</label>
                    <input type="email" id="email" placeholder="Enter your email" v-model="email.email"
                        class="px-3 bg-transparent text-gray-200 focus:ring-0 focus:border-t-0 appearance-none border-b py-2">
                </div>
                <div class="flex flex-col">
                    <label for="subject" class="text-white text-xl mb-1.5">{{translation.Subject}}</label>
                    <input type="text" id="subject" placeholder="Enter your subject" v-model="email.subject"
                        class="px-3 bg-transparent text-gray-200 focus:ring-0 focus:border-t-0 appearance-none border-b py-2">
                </div>
                <div class="flex flex-col">
                    <label for="message" class="text-white text-xl mb-1.5">{{translation.Message}}</label>
                    <textarea type="text" id="message" placeholder="Enter your message" v-model="email.message" rows="6"
                        class="px-3 bg-transparent text-gray-200 focus:ring-0 focus:border-t-0 appearance-none border-b py-2"/>
                </div>
                <div class="flex justify-end">
                    <button type="submit" class="prymary-button">
                        {{translation.Send}}
                    </button>
                </div>
            </div>
        </form>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            email: {
                name:"",
                email:"",
                subject:"",
                message:""
            }
        }
    },
    computed: {
        translation(){ return this.$store.state.translation },
    },
}
</script>

<style>

</style>