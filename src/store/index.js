import { createStore } from "vuex";
import axiosClient from "../axios";
import en from "../lang/en.json";
import fr from "../lang/fr.json";
import ar from "../lang/ar.json";

const store = createStore({
    state:{
        drawer:false,
        user: {
            data: { },
            token: sessionStorage.getItem("TOKEN"),
        },
        realEstates:{
            data:[],
            meta:{},
            links:{},
            loading:false
        },
        realEstatesFeatred:{
            data:[],
            loading: false
        },
        currentRealEstate:{
            data:{},
            loading:false
        },
        translation: {},
        langIndex: sessionStorage.getItem("Lang"),
    },
    actions:{
        changeTranslation({ commit }, l) {
            commit("setLangIndex", l);
            switch (this.state.langIndex) {
            case "en":
                commit("setTranslation", en);
                sessionStorage.setItem("Lang", "en");
                break;
            case "fr":
                commit("setTranslation", fr);
                sessionStorage.setItem("Lang", "fr");
                break;
            case "ar":
                commit("setTranslation", ar);
                sessionStorage.setItem("Lang", "ar");
                break;
              default:
                commit("setTranslation", fr);
            }
        },
        login({ commit }, user) {
            return axiosClient.post("/auth/login", user).then(({data}) => {
              commit("setUser", data.user);
              commit("setToken", data.token);
              return data;
            });
        },
        getRealEstates({ commit }) {
            commit("setRealEstatesLoading", true);
            return axiosClient.get("/product/guest")
            .then((res) => {
              commit("setRealEstatesLoading", false);
              commit("setRealEstates", res.data.data);
              commit("setRealEstatesMeta", res.data.meta);
              commit("setRealEstatesLinks", res.data.links);
              return res;
            });
        },
        getRealEstatesFeatred({ commit }) {
            commit("setRealEstatesFeatredLoading", true);
            return axiosClient.get("/product/featred")
            .then((res) => {
              commit("setRealEstatesFeatredLoading", false);
              commit("setRealEstatesFeatred", res.data.data)
              return res;
            });
        },
        getCurrentRealEstate({ commit }, real){
            //console.log(real);
            commit("setCurrentRealEstateLoading",true)
            return axiosClient.get(`/product/details/guest/${real}`)
            .then((res) => {
                commit("setCurrentRealEstateLoading",false)
                commit("setCurrentRealEstate",res.data.data)
                console.log(res);
                return res;
            });
        },
        storeRealEstate({ commit }, real){
            console.log(real);
            if(real.id){

            }else
            return axiosClient.post("/product", real, {headers:{"Content-Type": "multipart/form-data"}})
            .then((res) => {
                console.log(res);
                return res;
            });
        },
        deleteRealEstate({dispatch}, real){
            return axiosClient.delete(`/product/${real}`)
            .then((res) => {
                dispatch("getRealEstates")
                console.log(res);
                return res;
            });
        }
        
    },
    mutations:{
        setDrawer(state, payload){
            state.drawer = payload
        },
        setLangIndex(state, payload) {
            state.langIndex = payload;
        },
        setTranslation(state, payload) {
            state.translation = payload;
        },
        logout: (state) => {
            state.user.token = null;
            state.user.data = {};
            sessionStorage.removeItem("TOKEN");
        },
        setUser: (state, user) => {
            console.log(user);
            state.user.data = user;
        },
        setToken: (state, token) =>{
            console.log(token);
            state.user.token = token
            sessionStorage.setItem("TOKEN", token)
        },
        setRealEstates: (state, payload)=>{
            state.realEstates.data = payload
        },
        setRealEstatesMeta: (state, payload)=>{
            state.realEstates.meta = payload
        },
        setRealEstatesLinks: (state, payload)=>{
            state.realEstates.links = payload
        },
        setRealEstatesLoading: (state, loading)=>{
            state.realEstates.loading = loading
        },
        setRealEstatesFeatredLoading: (state, loading) =>{
            state.realEstatesFeatred.loading = loading
        },
        setRealEstatesFeatred: (state, payload) =>{
            state.realEstatesFeatred = payload        
        },
        setCurrentRealEstate(state, payload){
            state.currentRealEstate.data = payload
        },
        setCurrentRealEstateLoading(state, loading){
            state.currentRealEstate.loading = loading
        }
    },
    modules:{

    },
    getters:{

    },
})

export default store;