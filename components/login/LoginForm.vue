<template>
    <div class="w-10/12 md:w-8/12 m-auto">
        <form @submit.prevent="sendForm">
            <input id="file-input" accept="image/*" type="file" v-on:change="handleFileUpload" />
            <label for="file-input">
                <h2 class="text-center mb-14">Foto de perfil</h2>
                <img v-if="!imageSrc" class="cursor-pointer m-auto" src="~/assets/images/placeholder-img.png">
                <div v-on:dragover="handleDragOver" v-on:drop="handleDrop">
                    <img v-if="imageSrc" :src="imageSrc" class="img-upload m-auto" />
                </div>
                <span class="error-message" v-if="errorImage">
                    {{ errorImage }}
                </span>
            </label>
            <label for="name">
                Nombres
                <input v-model="user.name" type="text" name="name" placeholder="Rodrigo">
                <span class="error-message" v-if="errorName">
                    {{ errorName }}
                </span>
            </label>
            <label for="apellidos">
                Apellidos
                <input v-model="user.apellidos" type="text" name="apellidos" placeholder="Fernandez Panta">
                <span class="error-message" v-if="errorApellido">
                    {{ errorApellido }}
                </span>
            </label>
            <button type="submit" class="btn-submit">Ingresar</button>
        </form>
        <img src="~/assets/images/gift.png" class="absolute gift w-2/3">
    </div>
</template>

<script setup>
import { use } from 'h3';
const router = useRouter();
const {logUser} = useLogin()

const imageSrc = ref('')
const errorName = ref(undefined)
const errorApellido = ref(undefined)
const errorImage = ref(undefined)
const user = reactive({
    name: '',
    apellidos: ''
})
function handleFileUpload(e) {
    imageSrc.value = URL.createObjectURL(e.target.files[0]);
}
function handleDragOver(e) {
    e.preventDefault();
}
function handleDrop(e) {
    e.preventDefault();
    imageSrc.value = URL.createObjectURL(e.dataTransfer.files[0]);
}
const validateFields = () => {
    if (imageSrc.value == '') {
        errorImage.value = 'Se requiere una foto para el perfil'
    } else {
        errorImage.value = undefined
    }
    if (user.name == "") {
        errorName.value = 'Se requiere un nombre'
    } else {
        errorName.value = undefined
    }
    if (user.apellidos == "") {
        errorApellido.value = 'Se requiere un apellido'
    } else {
        errorApellido.value = undefined
    }
    if (
        imageSrc.value !== '' && use.name !== '' && user.apellidos !== ''
    ) {
        return true
    } else {
        return false
    }

}
const sendForm = () => {
    if(validateFields()){
        logUser(user)
        router.push({ path: "/products" });
    }else{
        return
    }
}
</script>

<style scoped>
.gift{
    bottom: 0;
    right:0
}
.img-upload {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 50%;
}

#file-input {
    opacity: 0;
    pointer-events: none;
}
</style>