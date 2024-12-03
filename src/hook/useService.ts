import { handShake } from "../service/handshake"
import { appStore } from "../state/store"


export const useService = () =>
{    
    const userToken = appStore((state) => state)
    const token = userToken.getUser().token

    const AddService = async (name: string, description: string) => 
    {  
        const dataPoint: any = {
            url: ['xn/category/create'],
            method: 'POST',
            isHeader: true,
            token: token,
            data: { name: name, description: description }
        }
        return await handShake(dataPoint) 
    }

    const UpdateService = async (id: number, name: string, description: string) => 
    {  
        const dataPoint: any = {
            url: ['xn/category/update'],
            method: 'PUT',
            isHeader: true,
            token: token,
            data: { id: id, name: name, description: description }
        }
        return await handShake(dataPoint) 
    }

    const DeleteService = async (id: number) => 
    {  
        const dataPoint: any = {
            url: ['xn/category/delete'],
            method: 'POST',
            isHeader: true,
            data: { id: id },
            token: token
        }
        return await handShake(dataPoint) 
    }

    const GetService = async () => 
    {  
        const dataPoint: any = {
            url: ['xn/category/all'],
            method: 'GET',
            isHeader: true,
            token: token
        }
        return await handShake(dataPoint) 
    }


    return { AddService, UpdateService, DeleteService, GetService }
}
