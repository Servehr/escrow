import { StateCreator } from "zustand";
import { IProductOnHomePage } from "./interface/IProductOnHomePage";


const createProductSlice: StateCreator<IProductOnHomePage> = (set, get) => (
    {            
        isLoading: false,
        getLoading()
        {
            return get().isLoading
        },
        setLoading(loading: any)
        {
            set(() => ({isLoading: loading}))
        },

        error: null,
        getError()
        {
            return get().error
        },
        setError(error: any)
        {
            set(() => ({error: error}))
        },
        
        products: [],
        getProducts()
        {
            return get().products
        },
        setProducts(products: any)
        {
            set(() => ({ products: products }))
        },

        toWishList: false,
        getToWishList()
        {
            return get().toWishList
        },
        setWishList()
        {
            set(() => ({ toWishList: this.toWishList }))
        }
    }   
)

export default createProductSlice