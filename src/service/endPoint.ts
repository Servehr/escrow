import axios from "axios";

// const client = axios.create({baseURL: import.meta.env.BASE_URL })
// const client = axios.create({baseURL: 'http://127.0.0.1:8181/api/'})
const client = axios.create({baseURL: 'https://www.scentsbyhoppey.com/api/'})


export const request = async ( options: any ) => 
{
    if(options.isHeader)
    {
        client.defaults.headers.common.Authorization = `Bearer ${options.token}`
    }
    const onSuccess = async (responseData: any) => 
    {
        if(responseData.data.status === 403)
        {
            let msg: string | string[] = []
            if(responseData.data.data.length > 0)
            {
                for (let index = 0; index < responseData.data.data.length; index++) 
                {
                    msg.push(`${responseData.data.data[index]}`);
                }
            } else {
                msg =  responseData.data.message
            }
            const response: any = 
            {
                statusCode: responseData.data.status,
                message: msg,
                statusText: "",
            }
            return response
        }
        if(responseData.data.status === 200)
        {
            const response: any = {
                statusCode: responseData.data.status,
                message: responseData.data.message,
                statusText: responseData.statusText,
                data: responseData.data
            }
            return await response
        }
    }
    const onError = (error: any) => 
    {
        if(error?.status === 404)
        {
            const response: any = 
            {
                statusCode: error.response.status,
                message: "Application Error NF", //error.response.data.message,
                statusText: error.response.statusText,
            }
            return response
        }
        if(error?.status === 500)
        {
            const response: any = 
            {
                statusCode: error.response.status,
                message: error.response.data.message,
                statusText: error.response.statusText,
            }
            return response
        }
    }
    try {
        const response = await client(options)
        return onSuccess(response)
    } catch (error) {
        return onError(error)
    }
}