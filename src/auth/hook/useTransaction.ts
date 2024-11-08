// import { useQuery } from "@tanstack/react-query"
import { handShake } from "../../service/handshake"
import { appStore } from "../../state/store"
// import { TLoginHandShake } from "../type/TLoginHandShake"


export const useTransaction = () =>
{    
    const userToken = appStore((state) => state)
    const token = userToken.getUser().token

    const Categories = async () => 
    {  
        const dataPoint: any = {
            url: ['xn/category/all'],
            method: 'GET',
            isHeader: true,
            token: token
        }
        return await handShake(dataPoint) 
    }

    const CreateTransaction = async (data: any) => 
    {  
        const dataPoint: any = {
            url: ['transaction/create'],
            method: 'POST',
            isHeader: true,
            data: data,
            token: token
        }
        return await handShake(dataPoint) 
    }

    const PendingTransaction = async () => 
    {  
        const dataPoint: any = {
            url: ['transaction/pending'],
            method: 'GET',
            isHeader: true,
            token: token
        }
        return await handShake(dataPoint) 
    }

    const InvalidTransaction = async () => 
    {  
        const dataPoint: any = {
            url: ['transaction/invalid'],
            method: 'GET',
            isHeader: true,
            token: token
        }
        return await handShake(dataPoint) 
    }

    const OpenTransaction = async () => 
    {  
        const dataPoint: any = {
            url: ['transaction/open'],
            method: 'GET',
            isHeader: true,
            token: token
        }
        return await handShake(dataPoint) 
    }

    const RejectedTransaction = async () => 
    {  
        const dataPoint: any = {
            url: ['transaction/rejected'],
            method: 'GET',
            isHeader: true,
            token: token
        }
        return await handShake(dataPoint) 
    }

    const DeclinedTransaction = async () => 
    {  
        const dataPoint: any = {
            url: ['transaction/declined'],
            method: 'GET',
            isHeader: true,
            token: token
        }
        return await handShake(dataPoint) 
    }

    const CompletedTransaction = async () => 
    {  
        const dataPoint: any = {
            url: ['transaction/completed'],
            method: 'GET',
            isHeader: true,
            token: token
        }
        return await handShake(dataPoint) 
    }

    const CancelledTransaction = async () => 
    {  
        const dataPoint: any = {
            url: ['transaction/cancelled'],
            method: 'GET',
            isHeader: true,
            token: token
        }
        return await handShake(dataPoint) 
    }

    const FlaggedTransaction = async (id: number) => 
    {  
        const dataPoint: any = {
            url: ['transaction/flag'],
            method: 'PUT',
            data: {id: id},
            isHeader: true,
            token: token
        }
        return await handShake(dataPoint) 
    }

    const Validity = async (seller: string, buyer: string, type: string, transaction_id: number, message: string, status: string) => 
    {  
        const dataPoint: any = {
            url: ['transaction/validity'],
            method: 'PUT',
            data: {seller: seller, buyer: buyer, type: type, transaction_id: transaction_id, message: message, status: status},
            isHeader: true,
            token: token
        }
        return await handShake(dataPoint) 
    }
                                
    const DeliveryStatus = async (sellerId: string, buyerId: string, type: string, id: number, message: string, status: string) => 
    {  
        const dataPoint: any = {
            url: ['transaction/status'],
            method: 'PUT',
            data: {seller: sellerId, buyer: buyerId, type: type, transaction_id: id, message: message, status: status},
            isHeader: true,
            token: token
        }
        return await handShake(dataPoint) 
    }

    const Detail = async (id: number) => 
    {  
        const dataPoint: any = {
            url: [`transaction/detail/${id}`],
            method: 'GET',
            isHeader: true,
            token: token
        }
        return await handShake(dataPoint) 
    }

    const Confirm = async (keyword: string) => 
    {  
        const dataPoint: any = {
            url: [`transaction/search/${keyword}`],
            method: 'GET',
            isHeader: true,
            token: token
        }
        return await handShake(dataPoint) 
    }

    const Initiate = async (id: number, action: string) => 
    {
        const dataPoint: any = {
            url: [`transaction/initiate-transaction`],
            method: 'PUT',
            isHeader: true,
            data: { id: id, action: action },
            token: token
        }
        return await handShake(dataPoint) 
    }

    // const Pending = async () => 
    // {
        // const dataPoint: any = {
        //     url: ['transaction/pending'],
        //     method: 'GET',
        //     isHeader: true,
        //     token: token
        // }
        // const pnd:any = await handShake(dataPoint) 

        // const { data, isLoading, refetch, isRefetching } = useQuery(['exam-date-for-user'], () => UserExamDate(userId), { cacheTime: 0 })
        // const { data, isLoading, refetch, isRefetching } = useQuery(["pendingit"], () => pnd)
        // console.log(data)

        // return useQuery("user", fetchProfile, {
        //     enabled: !!token,
        //     staleTime: Infinity,
        //   });
    // }

    return {    
                Categories,
                CreateTransaction, 
                PendingTransaction, 
                OpenTransaction, 
                CompletedTransaction,
                CancelledTransaction, 
                FlaggedTransaction, 
                Validity, 
                DeliveryStatus, 
                Detail,
                Confirm,
                Initiate,
                InvalidTransaction,
                RejectedTransaction,
                DeclinedTransaction
    }
}