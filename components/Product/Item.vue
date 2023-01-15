 <script setup lang="ts">
import { Product } from '~~/interfaces/product';
const props = defineProps<{item:Product}>()
const router = useRouter();


const detailsPage = (id:String) => { 
    router.push({path:`/products/${id}`})
 }
</script>
<template>
    <div @click="detailsPage(props.item.id)" class="p-5 bg-[#FCFCFC] rounded item mt-4 hover:shadow-xl cursor-pointer">   
        <div class="item__image relative">
            <img :src="props.item.image" class="item__image_pic"/>
            <img src="~/assets/images/user.png" class="absolute user">
        </div>
        <div class="item__content mt-3">
            <h3 class="text-[#434343] text-sm font-medium">{{ props.item.title }}</h3>
        <p class="font-light text-xs mt-2">{{ props.item.description }}</p>
        </div>
    </div>
</template>



<style lang="scss" scoped>
    .item{
        &__image_pic{
            height: 106px;
            width: 100%;
            object-fit: cover;
            border-radius: 5px;
        }
        & .user{
            bottom: 0;
            left: 0;
        }
    }
</style>