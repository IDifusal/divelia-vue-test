<script setup lang="ts">

import type { Product } from '~~/interfaces/product';
const { getOneProduct } = useProducts()
const {isLoged} = useLogin()

const loged   = ref(undefined)
const route = useRoute()
const router = useRouter()
const routeId = route.params.id
const isFavorite = ref<boolean>(false)
const result = ref<Product>()
const modalActive = ref<boolean>(false)

const reactionPost =() => { 
    isFavorite.value = true;
    openModal()
 }
const closeModal = () => {
    modalActive.value = false
}
const openModal = () => {
    modalActive.value = true
}
const goBack = () => {
    router.go(-1)
}
const checkUser =() => { 
    if(loged.value == false){
        router.push('/')
    }
 }
onMounted(() => {
    result.value = getOneProduct(routeId.toString()),
    loged.value =  isLoged(),
    checkUser()
})
</script>
<template>
    <SharedModal v-if="modalActive" @closeModal="closeModal"></SharedModal>
    <div class="md:w-1/2">
        <div>
            <div class="w-10/12 m-auto md:w-10/12 md:pt-10">
                <div class="flex items-center cursor-pointer" @click="goBack()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 24 24">
                        <path fill="#FC2016" d="M10.05 16.94v-4h8.92l.03-2.01h-8.95V6.94l-5 5Z" />
                    </svg>
                    <h2 class="text-plaza md:text-3xl title-product">{{ result?.title }}</h2>
                </div>
                <img :src="result?.image" class="h-[138px] md:h-[313px] w-full rounded md:pt-10">
            </div>
            <div class="prodct-desc mt-3 w-10/12 m-auto md:w-10/12">
                <div class="flex font-medium md:text-xl items-center">
                    <img src="~/assets/images/user.png" class="mr-3 md:w-[65px]">
                    Indira Panta
                </div>
                <p class="text-xs md:text-sm font-light mt-4">Hola soy Indra y te puedo ayudar a adquirir hasta un 69% de descuento. Solo
                    llego a los Plaza Vea de San Miguel y Breña.</p>
                <div class="text-[8px] md:text-sm md:mt-[30px]">
                    Publicado a las 12:30AM
                </div>
            </div>
            <div class="barmd hidden md:block md:w-10/12 m-auto">
                <div class="bar-content grid">
                    <button @click="openModal()" class="bar-button">
                    Reservar
                </button>
                <div class="bar-likes flex items-center justify-between cursor-pointer" @click="reactionPost()">
                    16
                    <div v-if="isFavorite">

                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                            <path fill="#FC2016"
                                d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z" />
                        </svg>
                    </div>
                    <div v-else>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z" />
                        </svg>
                    </div>
                </div>

            </div>
            </div>
            <SharedComents></SharedComents>
        </div>
        <div class="bar md:hidden ">
            <div class="bar-content grid">
                <div class="bar-likes flex items-center justify-between" @click="reactionPost()">
                    16
                    <div v-if="isFavorite">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z" />
                        </svg>
                    </div>
                    <div v-else>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                            <path fill="#FC2016"
                                d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z" />
                        </svg>
                    </div>
                </div>
                <button @click="openModal()" class="bar-button">
                    Reservar
                </button>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>

.input-comentario :active{
    border:1px solid #FC2016;
    outline: none;
}
.title-product{
    white-space: nowrap; overflow: scroll;
}


.bar {
    position: fixed;
    bottom: 0px;
    width: 100%;
    background-color: #f0f0f0;
    border-radius: 30px 30px 0 0;

    &-likes {
        background-color: #EAEAEA;
        padding: 6px 14px;
        border-radius: 40px;
    }

    &-content {
        padding: 16px 0px;
        grid-template-columns: 25% 75%;
        gap: 1%;
        width: 80%;
        margin: auto;
        @media(min-width:750px){
            width: 50%;
            margin: 0px;
            gap: 3%;
            grid-template-columns: 75% 25%;
        }
    }

    &-button {
        background-color: #FC2016;
        color: white;
        border-radius: 40px;
        padding: 10px 10px;
        font-size: 14px;
        font-weight: 500;
    }
}

</style>