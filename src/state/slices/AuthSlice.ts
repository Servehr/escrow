import { StateCreator } from "zustand";
import { AuthInitialData, IAuthentication } from "./interface/IAuth";


const createAuthSlice: StateCreator<IAuthentication> = (set, get) => (
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
        
        user: AuthInitialData,
        getUser()
        {
            return get().user
        },
        setUser(user: any)
        {
            set(() => ({ user: user }))
        }
    }   
)

export default createAuthSlice