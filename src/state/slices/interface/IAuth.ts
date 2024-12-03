export interface IAuthModel
{
    id?: number;
    firstname?: string;
    surname?: string;
    token?: string;
    verified?: string;
    reset?: string;
    userIdentifier?: string
    passport?: string
    userType?: string
}

export const AuthInitialData = 
{
    id: -1,
    firstname: "",
    surname: "",
    token: "",
    verified: "",
    reset: "",
    userIdentifier: "",
    passport: "",
    userType: ""
}

export interface IAuthentication
{      
    isLoading: boolean,
    getLoading: () => void
    setLoading: (loading: boolean) => void

    error: null,
    getError: () => void
    setError: (err: any) => void
    
    user: IAuthModel
    getUser: () => void
    setUser: (user: any) => void
    
    passport: string
    getPassport: () => void
    setPassport: (passport: any) => void
    
    allow: string
    getAllow: () => void
    setAllow: (allow: any) => void
}