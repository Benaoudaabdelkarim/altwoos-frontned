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
                            <p class="text-[#9f9f9f] font-medium">mohamed@tawoosrealty.com</p>
                            <p class="text-[#9f9f9f] font-medium">altawoosrealestate@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div class=" space-y-4 mt-12 ml-4">
                    <div class="flex items-center gap-4">
                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M1.34167 23C0.958334 23 0.638889 22.8722 0.383333 22.6167C0.127778 22.3611 0 22.0417 0 21.6583V16.4833C0 16.1852 0.0958332 15.9241 0.2875 15.7001C0.479167 15.4769 0.724074 15.3333 1.02222 15.2694L5.43056 14.375C5.7287 14.3324 6.03239 14.3588 6.34161 14.4542C6.64998 14.5505 6.9 14.6944 7.09167 14.8861L10.0944 17.8889C11.713 16.9093 13.1931 15.7486 14.5347 14.4069C15.8764 13.0653 16.9944 11.6278 17.8889 10.0944L14.8222 6.96389C14.6306 6.77222 14.5079 6.55372 14.4542 6.30839C14.4014 6.06391 14.3963 5.79259 14.4389 5.49444L15.2694 1.02222C15.312 0.724074 15.4505 0.479167 15.6847 0.2875C15.919 0.0958332 16.1852 0 16.4833 0H21.6583C22.0417 0 22.3611 0.127778 22.6167 0.383333C22.8722 0.638889 23 0.958334 23 1.34167C23 4.08889 22.3875 6.76669 21.1626 9.37506C19.9384 11.9843 18.3199 14.2949 16.307 16.307C14.2949 18.3199 11.9847 19.9384 9.37633 21.1626C6.76711 22.3875 4.08889 23 1.34167 23Z" fill="#F4BE5A"/> </svg>
                        <div>
                            <p class="text-[#fff] text-xl font-medium">{{translation.Phone}}</p>
                            <span class="text-[#9f9f9f] font-medium">+971 04 321 1210</span>
                            <div class="flex items-start gap-2">
                                <span class="text-[#9f9f9f] font-medium">+971 54 463 7060</span>
                                <svg class="w-4" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0.676113 47.3334L3.83078 35.7414C1.7521 32.178 0.660003 28.1253 0.666779 24C0.666779 11.113 11.1131 0.666687 24.0001 0.666687C36.8871 0.666687 47.3334 11.113 47.3334 24C47.3334 36.887 36.8871 47.3334 24.0001 47.3334C19.8766 47.34 15.8256 46.2487 12.2634 44.1717L0.676113 47.3334ZM15.5791 13.052C15.2778 13.0707 14.9834 13.1501 14.7134 13.2854C14.4603 13.4287 14.2293 13.6079 14.0274 13.8174C13.7474 14.081 13.5888 14.3097 13.4184 14.5314C12.5561 15.6537 12.0922 17.0313 12.1001 18.4467C12.1048 19.59 12.4034 20.703 12.8701 21.7437C13.8244 23.8484 15.3948 26.0767 17.4691 28.1417C17.9684 28.6387 18.4561 29.138 18.9811 29.6024C21.5557 31.8691 24.6237 33.5038 27.9411 34.3764L29.2688 34.5794C29.7004 34.6027 30.1321 34.57 30.5661 34.549C31.2457 34.5139 31.9092 34.3299 32.5098 34.01C32.8153 33.8526 33.1135 33.6813 33.4034 33.4967C33.4034 33.4967 33.5038 33.4314 33.6951 33.2867C34.0101 33.0534 34.2038 32.8877 34.4651 32.6147C34.6588 32.414 34.8268 32.1784 34.9551 31.91C35.1371 31.5297 35.3191 30.804 35.3938 30.1997C35.4498 29.7377 35.4334 29.4857 35.4264 29.3294C35.4171 29.0797 35.2094 28.8207 34.9831 28.711L33.6251 28.102C33.6251 28.102 31.5951 27.2177 30.3561 26.653C30.2255 26.5961 30.0855 26.5636 29.9431 26.5574C29.7835 26.541 29.6222 26.5589 29.47 26.61C29.3179 26.6611 29.1785 26.7442 29.0611 26.8537V26.849C29.0494 26.849 28.8931 26.982 27.2061 29.026C27.1093 29.1561 26.9759 29.2545 26.823 29.3085C26.6701 29.3625 26.5045 29.3698 26.3474 29.3294C26.1954 29.2887 26.0465 29.2372 25.9018 29.1754C25.6124 29.054 25.5121 29.0074 25.3138 28.921L25.3021 28.9164C23.9672 28.3335 22.7313 27.5463 21.6388 26.583C21.3448 26.3264 21.0718 26.0464 20.7918 25.7757C19.8738 24.8966 19.0738 23.902 18.4118 22.817L18.2741 22.5954C18.1752 22.4464 18.0953 22.2857 18.0361 22.117C17.9474 21.774 18.1784 21.4987 18.1784 21.4987C18.1784 21.4987 18.7454 20.878 19.0091 20.542C19.2287 20.2628 19.4335 19.9723 19.6228 19.6717C19.8981 19.2284 19.9844 18.7734 19.8398 18.421C19.1864 16.825 18.5098 15.236 17.8144 13.6587C17.6768 13.346 17.2684 13.122 16.8974 13.0777C16.7714 13.0637 16.6454 13.0497 16.5194 13.0404C16.2061 13.0248 15.8921 13.0279 15.5791 13.0497V13.052Z" fill="#F4BE5A"/> </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <form class="bg-gradient-to-t from-[#171717] rounded-lg px-4 lg:px-12 py-12" @submit.prevent="">
            <h2>{{translation.Send_Us_Message}}</h2>

            
            <div class="space-y-6 mt-6">
                <div class="flex flex-col ">
                    <label for="subject" class="text-white text-xl mb-1.5">{{translation.Subject}}</label>
                    <!-- <input type="text" id="subject" placeholder="Enter your subject" v-model="email.subject"
                        class="px-3 bg-transparent text-gray-200 focus:ring-0 focus:border-t-0 appearance-none border-b py-2"> -->
                    <select name="" id="subject" v-model="email.subject"
                    class="px-3 bg-[#1D1B1B] text-gray-200 focus:ring-0 focus:border-t-0 appearance-none border-b py-2">
                        <option value="ask">{{ translation.ask_info }}</option>
                        <option value="sell">{{ translation.Sell }}</option>
                        <option value="rent">{{ translation.Rent }}</option>
                    </select>
                </div>
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
                subject:"ask",
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