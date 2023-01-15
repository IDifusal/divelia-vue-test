import { User } from '../interfaces/product';

const loged = ref<boolean>(false)
const userObj=ref<User | null>()

const isLoged =() => { 
    if(loged.value == true){
        return true 
    }else{
        return  false
    }
 }
const logUser =(user:User) => { 
    loged.value =true
    userObj.value = user
    window.localStorage.setItem('user',JSON.stringify(user))
 }

const useLogin =() => { 
    return {
        isLoged,
        logUser
    }
 }
 export default useLogin