export interface IProductList
{
    picture: string;
    productName: string;
    amount: string;
    country: string;
    state: string;
    wishList: boolean;
}

export const ProductInitialData = 
{
    picture: "",
    productName: "",
    amount: "",
    country: "",
    state: "",
    wishList: false
}

export interface IProductOnHomePage
{      
    isLoading: boolean,
    getLoading: () => void
    setLoading: (loading: boolean) => void

    error: null,
    getError: () => void
    setError: (err: any) => void
    
    products: IProductList[]
    getProducts: () => void
    setProducts: (products: any) => void

    toWishList: boolean
    getToWishList:  () => void
    setWishList:  (toWishList: number) => void
}