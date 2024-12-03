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
        },
        
        passport: '',
        getPassport()
        {
            return get().passport
        },
        setPassport(passport: any)
        {
            set(() => ({ passport: passport }))
        },
        
        allow: "loggedOut",
        getAllow()
        {
            return get().allow
        },
        setAllow(allow: any)
        {
            set(() => ({ allow: allow }))
        }
    }   
)

export default createAuthSlice