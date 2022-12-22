<template>
  <div class="bg-[#131313] min-h-[90vh] flex justify-center items-center"> 
    <div class="w-11/12 md:w-2/3 lg:w-1/2">
        <div class="flex justify-center">
            <img src="../assets/login_logo.png" alt="">
        </div>
        <div class="mt-6">
            <h2 class="text-white text-2xl font-semibold text-center">Login</h2>
        </div>
        <div class="text-white mt-6 space-y-4">
            <div class="flex flex-col">
                <label for="email" class="text-xl font-medium mx-2 mb-1">Email</label>
                <input type="email" id="email" v-model="user.email" 
                    class="bg-gray-600 h-12 rounded-md px-4 text-sm font-semibold">
            </div>
            <div class="flex flex-col">
                <label for="password" class="text-xl font-medium mx-2 mb-1">Password</label>
                <input type="password" id="password" v-model="user.password" 
                    class="bg-gray-600 h-12 rounded-md px-4 text-sm font-semibold">
            </div>
            <div v-if="showErrorMssg" 
                class="flex flex-col bg-red-500 rounded-md p-3 relative">
                <p>{{errorMssg}}</p>
                <button @click="(showErrorMssg=false)" class=" absolute top-0 right-0 flex items-center justify-center -mt-1.5 -mr-1.5 w-6 h-6 rounded-full bg-red-400">
                    X
                </button>
            </div>
            <div class="flex justify-end">
                <button class="bg-[#F4BE5A] rounded-md py-3 px-12 mt-6 flex items-center
                    disabled:opacity-70 disabled:cursor-not-allowed" 
                    @click="login()" :disabled="loading">
                        <svg :class="{ 'hidden': !loading }" aria-hidden="true" class="mr-2 w-5 h-5 text-gray-200 animate-spin fill-[#F4BE5A]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /> <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /> </svg>
                    Login
                </button>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            user:{
                email:"",
                password:"",
                remember:0
            },
            errorMssg:"",
            showErrorMssg:false,
            loading:false
        }
    },
    methods: {
        login() {
            this.loading = true
            this.$store.dispatch("login", this.user)
                .then(()=>{
                    this.$router.push({ name:"Dashboard" })
                    this.loading = false
            }).catch((error)=>{
                this.showErrorMssg = true
                console.log(error);
                this.errorMssg = error.response.data.message?
                    error.response.data.message:
                    error.response.data.error
                this.loading = false
            })
        }
    },
}
</script>

<style>

</style>