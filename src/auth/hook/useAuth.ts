import { handShake } from "../../service/handshake"
import { ILogin } from "../Interface/Auth/ILogin"
import { IRegistration } from "../Interface/Auth/IRegistration"
import { IReset } from "../Interface/Auth/IReset"
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