import { useNavigate, useSearchParams } from "react-router-dom"
import HomeLayout from "../shared/HomeLayout"
import { useTransaction } from "../auth/hook/useTransaction"
import { useState, useEffect } from "react"
import delay from "delay"
import { BeatLoader, RotateLoader } from "react-spinners"
import { USAGE_PATH } from "../constant/Path"


export const Confirm = () =>
{
    const { Confirm, Initiate } = useTransaction()
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const code: string | null = searchParams.get('product-code')!

    const [foundProduct, setFoundProduct] = useState<any[]>([])  
    const [image, setImage] = useState<any[]>([])    
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isAccepting, setIsAccepting] = useState<boolean>(false)
    const [isDeclining, setIsDeclining] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    useEffect(() => 
    {
       product()
       console.log({error})
    }, [])

    const product = async () => 
    {
        if((code != "") || (code != null) || (code != undefined))
        {
            setIsLoading(true)
            await delay(1000)
            const search = Confirm(code)
            search.then((x: any) => 
            {
                setFoundProduct(x?.data?.data)
                setImage(x?.data?.plus)
                setIsLoading(false)
            }).then(() => {
                setError("Try again")
                setIsLoading(false)
            })
        }
    }

    const pointOfTransaction = (action: string) => 
    {
        if(action === 'accepted')
        {
            setIsAccepting(true)
        } else {
            setIsDeclining(true)
        }
        const toDo = Initiate(foundProduct[0]?.id, action)        
        toDo.then(() => 
        {
            navigate('/dashboard/transactions')
        }).then(() => {
            setError("Try again")
            setIsLoading(false)
        })
    }
    
    return (
        <HomeLayout pageName="Contact Us"
        >
            <div className='pt-10 bg-white mt-10'
            >
                <div 
                    className="container d-flex md:flex mx-auto -mt-16 md:mt-0 rounded-md p-2"
                >
                    <h1 className="font-bold text-sm">Product Code <span className="text-green-700 text-lg">({code})</span></h1>
                </div>
            </div>            
                                           
            <div 
                className='w-full py-30 bg-white'
            >
                <div 
                    className='container mx-auto flex justify-center items-center gap-5'
                >
                    {
                        (((code === "") || (code === null) || (code === undefined)) && (isLoading === true) && foundProduct) && (foundProduct?.length > 0) && <div className="col-span-12 h-[300px] flex justify-center items-center" style={{ marginTop: '60px', paddingTop: '0px' }}
                        >
                            <h1>No keyword provided</h1>
                        </div>
                    }
                    {
                        ((code != "") || (code != null) || (code != undefined)) && (isLoading === true) && <div className="col-span-12 h-[300px] flex justify-center items-center mb-20" style={{ marginTop: '60px', paddingTop: '0px' }}
                        >
                            <RotateLoader className='w-12 h-12' />
                        </div>
                    }
                    {
                        (((code != "") || (code != null) || (code != undefined)) && (isLoading === false) && foundProduct && (foundProduct?.length === 0)) && 
                            <div className="col-span-12 h-[500px] flex justify-center items-center" style={{ marginTop: '10px', marginBottom: '50px', paddingTop: '0px' }}
                            >
                                <h1 className="text-blue-200 font-bold flex justify-center items-center font-bold w-full p-20">No result found for {code}</h1>
                            </div>
                    }
                    {
                        (((code != "") || (code != null) || (code != undefined)) && (isLoading === false) && foundProduct) && (foundProduct?.length > 0) && <>
                            
                            <div
                                className="w-full md:px-5 border-2 pt-5 pb-14 bg-white border-[#d1dbea] px-2 mt-5 mb-20" 
                            >
                                <div 
                                    className='grid grid-cols-12 mx-auto mt-1 px-2 md:px-0'
                                >
                                    <div 
                                        className='col-span-12 md:col-span-12 px-1 md:px-1 md:mt-10 md:ml-10'
                                    >                       
                                        <div 
                                            className='w-full d-flex md:flex gap-10 mb-5 px-5'
                                        >           
                                            {
                                                    image.map((img: any, index: number) => {
                                                        return (
                                                            <div className={` flex justify-center items-center col-span-6 md:col-span-3 z-30 p-1 h-full relative bg-blue-100 rounded-md`} key={index}
                                                            >
                                                                <img src={`${USAGE_PATH?.PRODUCT_IMAGE}${img?.url}`} alt="upload" />
                                                            </div> 
                                                        )
                                                    })
                                                }
                                        </div> 
                                        {/* <div className="md:hidden h-[70px]"></div>  */}
                                    <div 
                                        className='col-span-12 md:col-span-8 d-flex md:flex pl-1 md:mt-8'
                                    >  
                                        <div 
                                            className="w-12/12 md:w-8/12 px-10 py-5 d-flex justify-center items-center gap-10"
                                        >
                                            <div className="font-bold text-2xl w-full mb-2 text-blue-700 font-bold">Service/Product Name: {foundProduct[0]?.name}</div> 
                                            <div className="font-semi-bold text-2xl w-full mb-2">Category: {foundProduct[0]?.category}</div> 
                                            <div className="font-semi-bold text-2xl w-full mb-2">Amount: {foundProduct[0]?.amount}</div>  
                                            <div className="font-semi-bold text-2xl w-full mb-2">Product Code: {foundProduct[0]?.identifier}</div> 
                                            {/* <div className="font-semi-bold text-md w-full mb-2 text-red-700 font-bold">Accept to view more details</div>  */}
                                        </div>
                                        <div 
                                            className="w-12/12 md:w-4/12 px-10 py-5 mt-5 flex justify-center items-center gap-10"
                                        >
                                            <button 
                                                    className="block w-fit bg-red-700 hover:bg-[#435f88] border-shadow text-white font-bold p-4 rounded-lg"
                                                    onClick={() => { pointOfTransaction('declined') }}
                                                    disabled={isDeclining}
                                            >
                                                {  isDeclining ? ( <BeatLoader size={9} color="white" />) : ( "Decline" ) }
                                            </button>  
                                            <button 
                                                    className="block w-fit bg-green-800 hover:bg-[#435f88] border-shadow text-white font-bold p-4 rounded-lg"
                                                    onClick={() => { pointOfTransaction('accepted') }}
                                                    disabled={isAccepting}
                                            >
                                                {  isAccepting ? ( <BeatLoader size={9} color="white" />) : ( "Accept" ) }
                                            </button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                </div>
            </div>
        </HomeLayout>
    )
  }
  