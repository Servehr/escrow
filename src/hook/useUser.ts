import { handShake } from "../service/handshake"
import { appStore } from "../state/store"


export const useUser = () =>
{    
    const appState = appStore((state) => state)
    const UserSummary = async () => 
    {  
        const dataPoint: any = {
            url: ['user/dashboard'],
            method: 'GET',
            isHeader: true,
            token: appState.getUser().token
        }
        return await handShake(dataPoint) 
    }

    const UserProfile = async () => 
    {  
        const dataPoint: any = {
            url: ['user/profile'],
            method: 'GET',
            isHeader: true,
            token: appState.getUser().token
        }
        return await handShake(dataPoint) 
    }

    const UpdateUser = async (data: { firstname: string, surname: string, phone: string, email: string, gender: string, country: string, state: string }) => 
    {  
        const dataPoint: any = {
            url: ['user/update-profile'],
            method: 'PUT',
            isHeader: true,
            data: { firstname: data?.firstname, surname: data?.surname, phone: data?.phone, email: data?.email, gender: data?.gender, country: data?.country, state: data?.state },
            token: appState.getUser().token
        }
        return await handShake(dataPoint) 
    }

    const UploadPassport = async (passport: string) => 
    {  
        const dataPoint: any = {
            url: ['user/upload-passport'],
            method: 'PUT',
            isHeader: true,
            data: { passport: passport },
            token: appState.getUser().token
        }
        return await handShake(dataPoint) 
    }

    const ChangePassport = async (passport: string) => 
    {  
        const dataPoint: any = {
            url: ['user/change-passport'],
            method: 'PUT',
            isHeader: true,
            data: { passport: passport },
            token: appState.getUser().token
        }
        return await handShake(dataPoint) 
    }

    const ChangeUserPassword = async (currentPassword: string, newPassword: string, confirmPassword: string) => 
    {  
        const dataPoint: any = {
            url: ['user/change-password'],
            method: 'PUT',
            isHeader: true,
            data: { current_password: currentPassword, password: newPassword, confirm_password: confirmPassword },
            token: appState.getUser().token
        }
        return await handShake(dataPoint) 
    }

    const PaymentHistory = async () => 
    {  
        const dataPoint: any = {
            url: ['user/payment-history'],
            method: 'GET',
            isHeader: true,
            token: appState.getUser().token
        }
        return await handShake(dataPoint) 
    }

    return { UserSummary, UserProfile, UploadPassport, ChangePassport, UpdateUser, ChangeUserPassword, PaymentHistory }
}
