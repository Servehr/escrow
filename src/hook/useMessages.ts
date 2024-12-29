import { handShake } from "../service/handshake"
import { appStore } from "../state/store"


export const useMessages = () =>
{    
    const userToken = appStore((state) => state)
    const token = userToken.getUser().token

    const GetMessages = async () => 
    {  
        const dataPoint: any = {
            url: ['message/all'],
            method: 'GET',
            isHeader: true,
            token: token
        }
        return await handShake(dataPoint) 
    }

    const SendMessage = async ( data: { firstname: string, surname: string, phone: string, email: string, message: string }) => 
    {  
        const dataPoint: any = {
            url: ['message/send'],
            method: 'PUT',
            isHeader: true,
            token: token,
            data: { firstname: data?.firstname, surname: data?.surname, phone: data?.phone, email: data?.email, message: data?.message }
        }
        return await handShake(dataPoint) 
    }

    return { GetMessages, SendMessage}
}
