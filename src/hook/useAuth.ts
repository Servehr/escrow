import { useNavigate } from "react-router-dom"
import { handShake } from "../service/handshake"
import { IAuthModel } from "../state/slices/interface/IAuth"
import { appStore } from "../state/store"
import { ILogin } from "../auth/Interface/Auth/ILogin"
import { IRegistration } from "../auth/Interface/Auth/IRegistration"
import { IReset } from "../auth/Interface/Auth/IReset"
// import { TLoginHandShake } from "../type/TLoginHandShake"


export const useRegister = () =>
{    
    const RegisterUser = async (user: IRegistration) => 
    {  
        const dataPoint: any = {
            url: ['auth/signup'],
            method: 'POST',
            data: user,
            isHeader: false
        }
        return await handShake(dataPoint) 
    }

    return { RegisterUser }
}


export const useLogin = () =>
{    
    const LoginUser = async (user: ILogin) => 
    {  
        const dataPoint: any = {
            url: ['auth/login'],
            method: 'POST',
            data: user,
            isHeader: false
        }
        return await handShake(dataPoint) 
    }

    return { LoginUser }
}


export const useForgot = () =>
{    
    const ForgotUser = async (email: string) => 
    {  
        const dataPoint: any = {
            url: ['auth/forgot-password'],
            method: 'POST',
            data: { email },
            isHeader: false
        }
        return await handShake(dataPoint) 
    }

    return { ForgotUser }
}


export const useReset = () =>
{   
    const ResetUser = async (user: IReset) => 
    {
        const dataPoint: any = {
            url: ['auth/set-new-password'],
            method: 'PUT',
            data: user,
            isHeader: false
        }
        return await handShake(dataPoint) 
    }
    return { ResetUser }
}


export const checkReset = () =>
{   
    const CheckUser = async (id: number) => 
    {  
        const dataPoint: any = {
            url: ['auth/check-user-reset'],
            method: 'GET',
            data: { id },
            isHeader: false
        }
        return await handShake(dataPoint) 
    }
    return { CheckUser }
}


export const logUserOut = () =>
{   
    const navigate = useNavigate()
    const appState = appStore((state) => state)
    const LogOut = async () => 
    {
        const credentials: IAuthModel = 
        {
           firstname: "",
           surname: "",
           token: "",
           verified: "",
           reset: ""
       }
       appState.setUser(credentials)
       localStorage.clear()
       setTimeout(() => {            
            navigate('/auth/login')
       }, 3000)
    //    setRefresh(Math.random()*Math.random())        
    }
    // const LogOut = async () => 
    // {  
    //     const dataPoint: any = {
    //         url: ['auth/logout'],
    //         method: 'POST',
    //         data: '',
    //         isHeader: true,
    //         token: appState.getUser().token
    //     }
    //     return await handShake(dataPoint) 
    // }
    return { LogOut }
}