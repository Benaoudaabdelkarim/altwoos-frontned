<template>
  <div class="min-h-[90vh] bg-[#131313]">
    <div class="h-24"></div>
    <div class="bg-gray-700 h-20 flex justify-between items-center px-2 lg:px-12">
      <h1 class="text-xl lg:text-2xl text-white font-semibold">
        Dashboard
      </h1>
      <router-link to="/createRealestate" class="bg-[#F4BE5A] rounded-md py-3 px-12 flex items-center text-xl font-semibold">
        create post
      </router-link>
    </div>
    <div  class="px-12 mt-8 grid lg:grid-cols-4 gap-4">
      <div v-for="real in Realestates" :key="real" class="rounded-lg black-shadow flex flex-col justify-between">
        <img class="w-full rounded-t-lg" :src="real.images[0]" alt="">
        <div class="m-6">
            <span class="text-[#F4BE5A] font-semibold">For {{real.type}}</span>
            <h2 class=" text-white text-xl font-semibold mb-6">
                {{real.name}}
            </h2>
            <p class="text-[#ACACAC]">
              {{real.description}}
            </p>
        </div>
        <div class="flex justify-between">
          <router-link :to="{ name: 'CreateRealestate', params: { id: real.id } }" 
            class="bg-[#F4BE5A] rounded-md py-3 px-12 flex items-center text-xl font-semibold">
            edit
          </router-link>
          <button class="text-white bg-red-500 rounded-md px-4" @click="deleteReal(real.id)">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /> </svg>
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
      
    }
  },
  mounted () {
    this.$store.dispatch("getRealEstates")
  },
  computed: {
    Realestates() {
      return this.$store.state.realEstates.data
    }
  },
  methods: {
    deleteReal(real) {
      this.$store.dispatch("deleteRealEstate", real)
    }
  },
}
</script>

<style>

</style>