import { useNavigate, useSearchParams } from "react-router-dom"
import HomeLayout from "../shared/HomeLayout"
import { useTransaction } from "../hook/useTransaction"
import { useState, useEffect } from "react"
import delay from "delay"
import { BeatLoader, RotateLoader } from "react-spinners"
import SlideShowThumbnail from "../component/SlideShowThumbnail"
import Message from "../auth/helper/Message"


export const Confirm = () =>
{
    const { Confirm, Initiate } = useTransaction()
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const code: string | null = searchParams.get('product-code')!

    const ACCEPT_OR_DECLINE = 'Enter reason for declining'

    const [foundProduct, setFoundProduct] = useState<any[]>([])  
    const [image, setImage] = useState<any[]>([])    
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isAccepting, setIsAccepting] = useState<boolean>(false)
    const [isDeclining, setIsDeclining] = useState<boolean>(false)
    
    const [acceptOrDecline, setAcceptOrDecline] = useState<string>("")
    const [acceptOrDeclineMessage, setAcceptOrDeclineMessage] = useState<string>("")
     
    const [errMsgStyle, setErrMsgStyle] = useState<string>('')
    const [errorMessage, setErrorMessage] = useState<string>("")
    
    const [error, setError] = useState<string>('')

    useEffect(() => 
    {

    }, [acceptOrDecline])

    useEffect(() => 
    {
       product()
       setErrMsgStyle('text-md text-white font-bold bg-red-600 rounded-lg py-3 px-5')
       setErrorMessage("")
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

    const pointOfTransaction = async (action: string) => 
    { 
        if(action === 'accepted')
        {
            setIsAccepting(true)
            await delay(2000)
        } else if(action === 'declined') {
            setIsDeclining(true)
            await delay(2000)
            if(!acceptOrDecline)
            {
                setAcceptOrDeclineMessage(ACCEPT_OR_DECLINE)
            }
            setIsDeclining(false)
        }
        const toDo = Initiate(foundProduct[0]?.id, action, acceptOrDecline)        
        toDo.then((response: any) => 
        {
            console.log(response)
            if(response?.statusCode === 200)
            {
                navigate('/dashboard/transactions')
            } else {
                navigate('/')
            }
        }).then(() => {
            setError("Try again")
            setIsLoading(false)
            setIsAccepting(false)
            setIsDeclining(false)
        })
    }
    
    return (
        <HomeLayout pageName="Contact Us"
        >
            <div className='pt-1 mt-7 bg-white'
            >
                <div 
                    className="container d-flex md:flex mx-auto rounded-md p-2"
                >
                    <h1 className="font-bold text-sm">Product Code <span className="text-green-700 text-lg">({code})</span></h1>
                </div>
            </div>            
                                           
            <div 
                className='w-full py-30 bg-white h-fit'
            >
                <div 
                    className='container h-fit mx-auto flex justify-center items-center gap-5'
                >
                    {
                        (((code === "") || (code === null) || (code === undefined)) && (isLoading === true) && foundProduct) && (foundProduct?.length > 0) && <div className="col-span-12 h-[600px] flex justify-center items-center" style={{ marginTop: '60px', paddingTop: '0px' }}
                        >
                            <h1>No keyword provided</h1>
                        </div>
                    }
                    {
                        ((code != "") || (code != null) || (code != undefined)) && (isLoading === true) && <div className="col-span-12 h-[600px] flex justify-center items-center mb-20" style={{ marginTop: '60px', paddingTop: '0px' }}
                        >
                            <RotateLoader className='w-12 h-12' />
                        </div>
                    }
                    {
                        (((code != "") || (code != null) || (code != undefined)) && (isLoading === false) && foundProduct && (foundProduct?.length === 0)) && 
                            <div className="col-span-12 h-[600px] flex justify-center items-center" style={{ marginTop: '10px', marginBottom: '50px', paddingTop: '0px' }}
                            >
                                <h1 className="text-blue-700 font-bold flex justify-center items-center font-bold w-full p-20">No result found for {code}</h1>
                            </div>
                    }
                    {
                        (((code != "") || (code != null) || (code != undefined)) && (isLoading === false) && foundProduct) && (foundProduct?.length > 0) && <>
                            
                            <div
                                className="w-full md:px-2 pb-1 md:px-0 px-2 mb-2" 
                            >
                                <div 
                                    className='grid grid-cols-12 mx-auto mt-1 px-2 md:px-0 gap-10'
                                >
                                    <div 
                                        className='col-span-12 md:col-span-7 md:mt-5'
                                    >     
                                        <SlideShowThumbnail data={image} imageSize={image?.length} waterMark={'nothing'} />
                                    </div>
                                    <div 
                                        className="col-span-12 md:col-span-5 -mt-14 md:mt-0 mb-10"
                                    > 
                                    {   (foundProduct[0]?.request === 'pending') &&
                                        <div 
                                            className="w-12/12 md:w-12/12 px-1 py-5 d-flex justify-center items-center gap-10"
                                        >
                                            <div className="font-bold text-2xl w-full mb-3 text-blue-700 font-bold">Service/Product Name: {foundProduct[0]?.name}</div> 
                                            <div className="font-semi-bold text-2xl w-full mb-2">Category: {foundProduct[0]?.category}</div> 
                                            <div className="font-semi-bold text-2xl w-full mb-2">Amount: {foundProduct[0]?.amount}</div>  
                                            <div className="font-semi-bold text-2xl w-full mb-2">Product Code: {foundProduct[0]?.identifier}</div> 
                                            { errorMessage && <Message msg={errorMessage} status={errMsgStyle} />  }
                                            <textarea  
                                                    defaultValue={acceptOrDecline}
                                                    className="w-full border rounded-md p-3 bg-gray-100 mt-10 bg-opacity-75 rounded mb-2 border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out" 
                                                    placeholder="Give reason if you are declining" rows={2}                              
                                                    onChange={(e: any) => 
                                                    {
                                                        let value: string = e.target.value
                                                        setAcceptOrDecline(value)
                                                        setAcceptOrDeclineMessage("")
                                                    }}
                                                    // onBlur={(e: any) => 
                                                    // {
                                                    //     let value: string = e.target.value
                                                    //     if(value === "" || value === undefined || value === null)
                                                    //     {
                                                    //         setAcceptOrDeclineMessage(ACCEPT_OR_DECLINE)
                                                    //     }
                                                    // }}
                                                >
                                            </textarea>
                                            { acceptOrDeclineMessage && <Message msg={acceptOrDeclineMessage} status={'text-red-600 -mt-1 font-bold rounded-md'} /> }
                                        </div>
                                    }
                                        
                                        {  (foundProduct[0]?.request === 'declined') && <>
                                                <div 
                                                    className="w-full md:h-[400px] flex justify-center items-center"
                                                >
                                                    <h1 className="text-[30px] font-bold text-red-600 md:mt-20">Product request already declined</h1>
                                                </div>
                                            </>
                                        } 
                                        {  (foundProduct[0]?.request === 'accepted') && <>
                                                <div 
                                                    className="w-full md:h-[400px] flex justify-center items-center"
                                                >
                                                    <h1 className="text-[30px] font-bold text-green-800 md:mt-20">Product request already accepted</h1>
                                                </div>
                                            </>
                                        }   
                                        {  (foundProduct[0]?.request === 'pending') &&
                                            <div 
                                                className="w-12/12 md:w-12/12 py-1 flex justify-left items-center gap-10"
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
                                        }
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
  