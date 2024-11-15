import { useEffect, useState } from "react";
import { Modal } from "../../../../component/Modal";
import { BeatLoader } from "react-spinners";
import delay from "delay";
import { useTransaction } from "../../../../hook/useTransaction";
import Message from "../../../../auth/helper/Message";


type PayModalProps = 
{
    onClick: (isOpen: boolean | string) => void,
    payModal: boolean
    detail: any
} 

export const PayModal = ({onClick, payModal, detail}: PayModalProps)  =>
{
        const { MakePayment } = useTransaction()
        const [isLoading, setIsLoading] = useState<boolean>(false)
        const [error, setError] = useState<string>('')
        const [errMsgStyle, setErrMsgStyle] = useState<string>('')

        useEffect(() => 
        {
            setIsLoading(false)
            setErrMsgStyle('text-md text-white rounded-lg mb-3 mt-1 font-bold bg-red-600 p-3')
            console.log({error})
        }, [])

        useEffect(() => 
        {
        }, [isLoading, error])


        const Pay = async () => 
        {
            setIsLoading(true)
            await delay(2000)
            const initializePayment = MakePayment(detail?.id)
            initializePayment.then((response: any) => 
            {                
                if(response?.data?.plus)
                {
                  const url: string = response?.data?.data?.authorization_url
                  onClick(false)
                  //   window.open(`${url}`, "_blank")
                  window.location.href = url
                } else {
                  setError("Payment Unsucessful")
                  setIsLoading(false)                        
                }
            }).then(() => {
                setError("Initializing payment Failed.")
                setTimeout(() => 
                {
                   setError("")
                }, 5000)
                setIsLoading(false)
            })
        }

        return (
                <Modal 
                        onClick={onClick} isOpen={payModal} wrapperWidth={800} margin={'100px auto 0px auto'}
                >
                        <div 
                                        className='col-span-12 pt-1 pb-5 overflow-y-auto xm:overflow-y-scroll justify-center item-center'
                        >
                                <h1 
                                        className="text-black font-bold w-full flex justify-center text-center mb-10 uppercase"
                                >
                                        You are about to make payment
                                </h1>
                                { error && <Message msg={error} status={errMsgStyle}  />  }  
                                <div 
                                    className="p-3 rounded-lg border-2 border-gray-200 mb-5 flex justify-center items-center text-lg"
                                >
                                   <p>{detail?.name}</p>
                                </div>
                                <div 
                                    className="p-3 rounded-lg border-2 border-gray-200 mt-5 flex justify-center items-center text-lg"
                                >
                                   <p>{detail?.amount}</p>
                                </div>
                                <div 
                                      className="items-center gap-5 mt-2 sm:flex flex justify-between mb-2 mx-0 mt-5"
                                >                                       
                                        {
                                                <button 
                                                        className="py-3 px-4 bg-red-700 hover:bg-red-800 text-white font-semibold text-sm rounded-xl w-max"
                                                        onClick={() => onClick(payModal) }
                                                >
                                                        Cancel
                                                </button>
                                        }
                                        {
                                               <button 
                                                        className="py-3 px-4 bg-green-800 hover:bg-green-700 text-white font-semibold text-sm rounded-xl w-max"
                                                        onClick={() => Pay()}
                                                >
                                                        {       isLoading ? ( <BeatLoader size={9} color="#fff" />) : ( "Pay" )          }
                                              </button>
                                        }
                                </div>
                        </div>
                </Modal>  
        );
}