<template>
  <div class="min-h-[90vh] bg-[#131313] text-white">
    <div class="h-24"></div>
    <div class="max-w-6xl mx-auto bg-slate-800 rounded-xl py-8 px-12 ">
        <form @submit.prevent="create()" class="space-y-6">
            <div class=" flex flex-col">
                <label for="name" class="text-xl font-medium mb-1">Title</label>
                <input id="name" type="text" required placeholder="enter the title" v-model="real.name"
                    class="rounded-md py-2 px-6 bg-slate-600 text-gray-200 placeholder:text-gray-300">
            </div>
            <div class=" flex flex-col">
                <label for="desc" class="text-xl font-medium mb-1">Description</label>
                <textarea id="desc" type="text" required rows="5" placeholder="enter the description" v-model="real.description"
                    class="rounded-md py-2 px-6 bg-slate-600 text-gray-200 placeholder:text-gray-300"></textarea>
            </div>
            <div class="flex gap-6">
                <div class="flex items-center gap-6">
                    <label for="status" class="text-xl font-medium mb-1">Status</label>
                    <label class="switch">
                        <input id="status" type="checkbox" v-model="real.status">
                        <span class="slider round"></span>
                    </label>
                </div>
                <div class="flex items-center gap-6">
                    <label for="feat" class="text-xl font-medium mb-1">Featred</label>
                    <label class="switch">
                        <input id="feat" type="checkbox" v-model="real.featred">
                        <span class="slider round"></span>
                    </label>
                </div>
            </div>
            <div class="flex flex-col">
                <label for="type" class="text-xl font-medium mb-1">Type</label>
                <select name="type" id="type" v-model="real.type" required
                    class="rounded-md py-2 px-6 bg-slate-600 text-gray-200 placeholder:text-gray-300">
                    <option value="sell">Sell</option>
                    <option value="rent">Rent</option>
                    <option value="rent">Buy</option>
                </select>
            </div>
            <div class=" flex flex-col">
                <label for="size" class="text-xl font-medium mb-1">Size in m²</label>
                <input id="size" type="number"  placeholder="enter the size" v-model="real.size"
                    class="rounded-md py-2 px-6 bg-slate-600 text-gray-200 placeholder:text-gray-300">
            </div>
            <div class=" flex flex-col">
                <label for="bedrooms" class="text-xl font-medium mb-1">Number of bedrooms</label>
                <input id="bedrooms" type="number"  placeholder="enter the number of bedrooms" v-model="real.bedrooms"
                    class="rounded-md py-2 px-6 bg-slate-600 text-gray-200 placeholder:text-gray-300">
            </div>
            <div class=" flex flex-col">
                <label for="bethrooms" class="text-xl font-medium mb-1">Number of Bethrooms</label>
                <input id="bethrooms" type="number"  placeholder="enter the number of bethrooms" v-model="real.bethrooms"
                    class="rounded-md py-2 px-6 bg-slate-600 text-gray-200 placeholder:text-gray-300">
            </div>
            <div class=" flex flex-col">
                <label for="price_sell" class="text-xl font-medium mb-1">Selling price</label>
                <input id="price_sell" type="number"  placeholder="enter the selling price" v-model="real.price_sell"
                    class="rounded-md py-2 px-6 bg-slate-600 text-gray-200 placeholder:text-gray-300">
            </div>
            <div class="flex flex-col">
                <label for="price_rent" class="text-xl font-medium mb-1">Renting price</label>
                <input id="price_rent" type="number"  placeholder="enter the renting price" v-model="real.price_rent"
                    class="rounded-md py-2 px-6 bg-slate-600 text-gray-200 placeholder:text-gray-300">
            </div>
            <div class="flex flex-col hidden">
                <label for="price_rent" class="text-xl font-medium mb-1">Enter Tags (optional)</label>
                <div class="flex gap-6 items-center">
                    <div class="rounded-md py-2 bg-slate-600 text-gray-200 flex gap-2 justify-between px-2">
                        tag
                        <button type="button" class=" self-center flex items-center">
                            <svg class="w-4 h-4 bg-slate-400 rounded-full hover:scale-110 duration-300 transition" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" > <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /> </svg>
                        </button>
                    </div>
                    <div>
                        <input id="tag" type="text" v-model="tagInput" placeholder="enter a tag"
                        class="rounded-md py-2 px-6 bg-slate-400 text-gray-700 placeholder:text-gray-700 w-32 border-white border">
                        <button>

                        </button>
                    </div>
                </div>
            </div>
            <div class=" flex flex-col">
                <label for="country" class="text-xl font-medium mb-1">Country</label>
                <input id="country" type="text"  placeholder="enter the title" v-model="real.localisation[0]"
                    class="rounded-md py-2 px-6 bg-slate-600 text-gray-200 placeholder:text-gray-300">
            </div>
            <div class=" flex flex-col">
                <label for="state" class="text-xl font-medium mb-1">State</label>
                <input id="state" type="text"  placeholder="enter the title" v-model="real.localisation[1]"
                    class="rounded-md py-2 px-6 bg-slate-600 text-gray-200 placeholder:text-gray-300">
                <select name="state" id="state" v-model="real.localisation[1]" class="rounded-md py-2 px-6 bg-slate-600 text-gray-200 placeholder:text-gray-300">
                    <option value="Abu Dhabi">Abu Dhabi</option>
                    <option value="Dubai">Dubai</option>
                    <option value="Sharjah">Sharjah</option>
                    <option value="Ajman">Ajman</option>
                    <option value="Umm Al Quwain">Umm Al Quwain</option>
                    <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                    <option value="Fujairah">Fujairah</option>
                </select>
            </div>
            <div class=" flex flex-col">
                <label for="province" class="text-xl font-medium mb-1">Province</label>
                <input id="province" type="text"  placeholder="enter the title" v-model="real.localisation[2]"
                    class="rounded-md py-2 px-6 bg-slate-600 text-gray-200 placeholder:text-gray-300">
            </div>
            <div class=" flex flex-col">
                <label for="street" class="text-xl font-medium mb-1">Street</label>
                <input id="street" type="text"  placeholder="enter the title" v-model="real.localisation[3]"
                    class="rounded-md py-2 px-6 bg-slate-600 text-gray-200 placeholder:text-gray-300">
            </div>
            <div class=" flex flex-col">
                <label for="street" class="text-xl font-medium mb-1">Images</label>
                <div class="flex flex-wrap gap-3">
                    <div v-for="(image, index) in tempImages" :key="image" class="relative ">
                        <img :src="image" alt="" class=" rounded-md w-32 h-32 ">
                        <button type="button" class=" absolute top-0 right-0 -mt-2 -mr-2" @click="removeImage(index)">
                            <svg class="w-6 h-6 bg-slate-400  rounded-full hover:scale-125 duration-300 transition" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" > <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /> </svg>
                        </button>
                    </div>
                    <input type="file" name="image" id="image" class="" hidden @change="handleImageFileUpload">
                    <label for="image" class="group z-10 flex items-center justify-center border-2 rounded-md w-32 h-32 hover:border-gray-500 hover:cursor-pointer">
                        <svg class="w-12 h-12 stroke-white group-hover:stroke-gray-500" xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24" stroke-width="1.5" > <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" /> </svg>
                    </label>
                </div>
            </div>
            <div class="flex justify-end gap-6">
                <div v-if="showError" class="bg-red-400 rounded-md px-6 flex items-center text-xl">
                    <p>somthing went wrong</p>
                </div>
                <button type="submit" class="bg-[#F4BE5A] rounded-md py-3 px-12 flex items-center text-xl font-semibold">
                    Create
                </button>
            </div>
        </form>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            real:{
                name:"",
                description:"",
                status:false,
                featred:false,
                type:"sell",
                size:null,
                bedrooms:null,
                bethrooms:null,
                price_sell:null,
                price_rent:null,
                localisation:["Abu Dhabi"],
                tags:[],
                images:[]
            },
            showTagInput:false,
            tagInput:"",
            image:null,
            tempImages:[],
            showError:false
        }
    },
    mounted () {
        
    },
    methods: {
        create() {
            // let formData = new FormData();
            // formData.append("name", this.real.name)
            // formData.append("description", this.real.description)
            // formData.append("status", this.real.status)
            // formData.append("featred", this.real.featred)
            // formData.append("type", this.real.type)
            // formData.append("size", this.real.size)
            // formData.append("bedrooms", this.real.bedrooms)
            // formData.append("bethrooms", this.real.bethrooms)
            // formData.append("price_sell", this.real.price_sell)
            // formData.append("price_rent", this.real.price_rent)
            // formData.append("localisation", [this.real.localisation])
            // formData.append("tags", [this.real.tags])
            // formData.append("images", [this.real.images])
            //console.log("ee");
            if(this.real.status==false) this.real.status=0
            else if(this.real.status==true) this.real.status=1
            
            if(this.real.featred==false) this.real.featred=0
            else if(this.real.featred==true) this.real.featred=1

            this.$store.dispatch("storeRealEstate", this.real).then(()=>{
                this.$router.push({name:"Dashboard"})
            }).catch((error)=>{console.log(error)})
        },
        handleImageFileUpload(ev){
            const file = ev.target.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                // The field to send on backend and apply validations
                this.addImage(file)
                this.tempImages.push(reader.result)
            
                
            };
            reader.readAsDataURL(file);
        },
        addImage(image){
            this.real.images.push(image)
        },
        removeImage(index){
            this.real.images.splice(index, 1)
            this.tempImages.splice(index, 1)
        },
        addTag(tag){
            this.real.tags.push(tag)
        },
        removeTag(index){
            this.real.tags.splice(index, 1)
        }
    },
}
</script>

<style scoped>
/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #F4BE5A;
}

input:focus + .slider {
  box-shadow: 0 0 1px #F4BE5A;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>