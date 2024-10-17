export interface IAuthModel
{
    firstname: string;
    surname: string;
    token: string;
}

export const AuthInitialData = 
{
    firstname: "",
    surname: "",
    token: ""
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

    registered: number,
    getRegistered: () => void 
    setRegistered: (registered: any) => void 

    activated: number,
    getActivated: () => void 
    setActivated: (activated: any) => void 
}