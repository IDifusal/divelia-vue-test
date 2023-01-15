<script setup>
const router = useRouter()

const { loadProducts, products } = useProducts()
const {isLoged} = useLogin()
const loged   = ref(undefined)
const checkUser =() => { 
    if(loged.value == false){
        router.push('/')
    }
 }

onMounted(() => {
    loadProducts(),
    loged.value =  isLoged(),
    checkUser()
})


</script>
<template>
    <template v-if="products.length > 0">
        <ProductItem v-for="item in products" :item="item">
        </ProductItem>
    </template>
</template>


