export interface IAuthModel
{
    firstname: string;
    surname: string;
    token: string;
    verified: string;
    reset: string;
}

export const AuthInitialData = 
{
    firstname: "",
    surname: "",
    token: "",
    verified: "",
    reset: ""
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
}