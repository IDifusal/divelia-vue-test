import productsApi from "~~/api/productsApi";
import { ProductModelResponse,Product } from '../interfaces/product';

const isLoading = ref<boolean>(true);
const page = ref<number>(1)
const products =ref<Product[]>([])
const loadProducts =async () => {
    try {
        const {data} = await productsApi.get<ProductModelResponse>(`/posts/?page=1&limit=10`)
        products.value = data.items
        isLoading.value = false
        page.value ++
    } catch (error) {
        throw new Error(`Error ${error}`);
    }
}

const loadMoreProducts =async () => {
    try {
        isLoading.value = true;
        const {data} = await productsApi.get<ProductModelResponse>(`/posts/?page=${page.value}&limit=10`);
        data.items.forEach(x => 
            products.value.push(x))
        isLoading.value = false;
        page.value ++;
    } catch (error) {
        throw new Error(`Error ${error}`);
        
    }
}

const getOneProduct = (id:string) =>{ 
    const item =  products.value.find(x => {
        return x.id = id
    })
    return item
 }

const useProducts= () => { 
    return {
        loadProducts,
        loadMoreProducts,
        isLoading,
        products,
        getOneProduct
    }
 }
 export default useProducts