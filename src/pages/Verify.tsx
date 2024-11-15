import { useNavigate, useSearchParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { useTransaction } from "../hook/useTransaction"
import HomeLayout from "../shared/HomeLayout"
import { HiCheck } from "react-icons/hi"
import { RotateLoader } from "react-spinners"
import delay from "delay"

export const Verify = () =>
{
    const { VerifyPayment} = useTransaction()
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()
    const code: string | null = searchParams.get('reference')!

    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<string>('')

    useEffect(() => 
    {
        setIsLoading(false)
        console.log({error})
        callApi()
    }, [])

    useEffect(() => 
    {
    }, [isLoading, error])

    const callApi = async () => 
    {
        setIsLoading(true)
        await delay(2000)
        const isPaymentVerified = VerifyPayment(code)
        isPaymentVerified.then((response: any) => 
        {                console.log(response)
            if(response?.data?.plus)
            {
                setIsLoading(false)
                setTimeout(() => 
                {
                    navigate('/dashboard/transactions')
                }, 5000)
            } else {
                setError("Payment Unsucessful")
                setIsLoading(false)                        
            }
        }).then(() => {
            setError("Error Verifying Payment.")
            setTimeout(() => 
            {
                setError("")
            }, 5000)
            setIsLoading(false)
        })
    }    
    
 
    return (
        <HomeLayout pageName="Contact Us"
        >
            {
                (isLoading === true) &&  <div 
                                className="flex md:d-flex xl:flex-row h-[800px] bg-white justify-center items-center"
                            >
                                <h1 className="font-bold mr-20">Verifing payment</h1>
                                { isLoading && <RotateLoader className='w-12 h-12' color="black" /> }
                            </div>
            } 
            {
                (isLoading === false) &&  
                <main 
                    className="flex md:d-flex xl:flex-row h-fit bg-white pb-28"
                >
                    <div 
                        className="w-full md:w-5/12 mx-auto my-4 d-flex items-center justify-center px-3 py-5 md:p-10 mt-5 gap-5"
                    >   
                        <div 
                            className="w-full p-10 md:px-9 md:pt-10 md:pb-5 d-flex text-green-500 mx-auto items-center justify-center rounded-md md:rounded-xl bg-white mb-20 md:mb-0"
                        >
                            <div className='flex font-bold justify-center items-center mb-5'
                            >                                          
                                <HiCheck className='text-[370px]' />
                            </div>
                            <h3 
                                className='flex text-green-700 text-2xl font-bold justify-center items-center mb-5'
                                >
                                Payment Successful
                            </h3>
                        </div>
                    </div>
                </main>
            }          
                    
        </HomeLayout>
    )
  }
  