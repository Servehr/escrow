import { handShake } from "../service/handshake"
import { appStore } from "../state/store"


export const useSettings = () =>
{    
    const userToken = appStore((state) => state)
    const token = userToken.getUser().token

    const GetSettings = async () => 
    {  
        const dataPoint: any = {
            url: ['settings/controls'],
            method: 'GET',
            isHeader: true,
            token: token
        }
        return await handShake(dataPoint) 
    }

    const UpdateAuthControl = async ( data: string) => 
    {  
        const dataPoint: any = {
            url: ['settings/auth-control'],
            method: 'PUT',
            isHeader: true,
            token: token,
            data: { auth: data  }
        }
        return await handShake(dataPoint) 
    }

    return { GetSettings, UpdateAuthControl}
}
