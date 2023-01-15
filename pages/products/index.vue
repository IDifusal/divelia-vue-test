<script setup>
const { isLoading, loadMoreProducts } = useProducts()
const step = ref(0)
const intersect = () => {
    step.value++
    if (step.value != 1) {
        loadMoreProducts()
    }
}
</script>

<template>
    <div>
        <SharedLoading v-if="isLoading"></SharedLoading>
        <div class="w-10/12 m-auto md:w-10/12">
            <h2 class="mt-6 md:mt-0 text-xs md:text-2xl text-plaza font-semibold text-xs md:text-[30px] text-center">
                Todas las promociones</h2>
            <div class="divider md:hidden"></div>
            <h3 class="mt-10  md:mt-0 font-semibold text-textColor text-base md:text-lg">Últimas promociones</h3>
            <ProductListProducts></ProductListProducts>
            <Observer @intersect="intersect"></Observer>
        </div>
    </div>
</template>


