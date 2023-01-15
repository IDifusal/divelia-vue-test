<template>
            <div class="product__social bg-[#FCFCFC] mt-9 md:bg-white">
                <div class="prodct__social_content w-10/12 m-auto md:w-10/12 py-5 md:bg-[#FCFCFC]">
                    <h3 class="font-medium text-base mb-4">
                        Comentarios
                    </h3>
                    <div v-for="item in coments " class="com grid mb-4 ">
                        <div class="com-image">
                            <img src="~/assets/images/user.png" alt="">
                        </div>
                        <div class="com-context">
                            <h4 class="font-medium text-xs">
                                {{ item.name }}
                            </h4>
                            <p class="font-light text-[10px]">
                                {{ item.message }}
                            </p>
                        </div>
                    </div>
                    <input type="text" class="input-comentario" placeholder="Escribe un comentario...">
                </div>
            </div>
</template>

<script setup>
const coments = ref([{ name: 'Tom Holland', message: 'Muchas gracias Indra, realmente me ayudaste con la compra de ese producto. Estoy muy feliz con la nueva tele para mi casa :3' }, { name: 'Tobey Maguirre', message: 'Muchas gracias Indra, realmente me ayudaste con la compra de ese producto. Estoy muy feliz con la nueva tele para mi casa :3' }])
</script>

<style lang="scss" scoped>
.input-comentario{
    background-color: white;
    border-radius: 40px;
    padding: 14px 30px;
}
.prodct__social_content{
    @media(min-width:750px){
        padding: 20px 36px;
    }
}
.com {
    grid-template-columns: 10% 90%;
    gap: 5%;
    @media(min-width:750px){
        grid-template-columns: 8% 92%;
        gap: 1%;
    }
}
</style>