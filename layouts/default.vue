<template>
    <div class="md:flex h-screen">
        <div class="md:w-1/2 md:h-screen md:h-full">
            <img src="~/assets/images/bg-layout.jpg" class="bg-layout hidden md:block md:h-screen md:w-full object-cover">
             <img src="~/assets/images/plaza-vea-logo.png" class="md:hidden m-auto">
        </div>
        <NuxtPage class="w-full md:w-1/2 relative content h-screen md:h-auto" />
    </div>
</template>

<script setup>
useHead({
        link: [
          {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap'
          }
    ],
})
</script>

<style  scoped>
.bg-layout{
    @media(min-width:750px){
        position: fixed;
        top:0px;
width:50%;
    }
}
.content{    min-width: 100vh;
}
</style>