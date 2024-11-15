import { useEffect, useState } from "react";
import { Modal } from "../../../../component/Modal";
import { BeatLoader } from "react-spinners";
import { useTransaction } from "../../../../hook/useTransaction";
import delay from "delay";
import Message from "../../../../auth/helper/Message";

type AcceptOrRejectedModalPropos = 
{
    onClick: (isOpen: boolean | string) => void,
    acceptOrRejectModal: boolean,
    acceptOrReject?: string,
    returnTo?: string,
    message?: string,
    validate: string,
    detail: any
} 

export const AcceptOrReject = ({onClick, acceptOrRejectModal, validate, detail}: AcceptOrRejectedModalPropos)  =>
{
        const { DeliveryStatus } = useTransaction()
        const [isRejecting, setIsRejecting] = useState<boolean>(false)
        const [isReceiving, setIsReceiving] = useState<boolean>(false)
        const [rejectMessage, setRejectMessage] = useState<string>("")
        const [message, setMessage] = useState<string>('')
        const [errMsgStyle, setErrMsgStyle] = useState<string>('')
        const [error, setError] = useState<string>('')

        useEffect(() => 
        {
           setErrMsgStyle('text-md text-red-600 font-bold')
        }, [])

        const IsDelivered = async (status: string, type: string) => 
        {
            if(status === "rejected")
            { 
                setIsRejecting(true) 
                if(message === "" || message == undefined || message === null)
                {
                   setRejectMessage("Enter Message")
                   setIsRejecting(false)
                   return false
                }

            }
            if(status === "received"){ setIsReceiving(true)  }
            
            await delay(2000)
            const validityCheck = DeliveryStatus(detail?.sellerId, detail?.buyerId, type, detail?.id, message, status)
            validityCheck.then(() => 
            {
                setIsRejecting(false)
                setIsReceiving(false)
                onClick('successful')
            }).then(() => {
                setIsRejecting(false)
                setIsReceiving(false)
                setError("Try again")
                console.log(error)
            })     
        }

        return (
                <Modal 
                        onClick={onClick} isOpen={acceptOrRejectModal} wrapperWidth={800} margin={'100px auto 0px auto'}
                >
                        <div 
                                className='col-span-12 pt-1 pb-5 overflow-y-auto xm:overflow-y-scroll justify-center item-center'
                        >
                                <div 
                                    className="p-3 w-full"
                                >
                                    <span className="p-3 font-bold text-lg w-full border-2 flex justify-center items-center">Transaction Validation</span>
                                </div>
                                {  (validate === "reject") &&
                                        <>
                                             <div 
                                                 className="px-4 py-2"
                                             >
                                                        <textarea  
                                                                className="w-full border rounded-md p-3 bg-white bg-opacity-75 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out" 
                                                                name="password" id="password" placeholder="Tell us your reason why you are rejecting" 
                                                                rows={3}
                                                                onChange={(e: any) => {
                                                                    let selected: string = e.target.value
                                                                    if(!selected)
                                                                    {
                                                                        setRejectMessage("Enter message before sending")
                                                                    } else {
                                                                        setMessage(e.target.value)
                                                                        setRejectMessage("")
                                                                    }
                                                                }}
                                                        >
                                                        </textarea>  
                                                        { rejectMessage && <Message msg={rejectMessage} status={errMsgStyle} /> }                                   
                                                </div>
                                                <div 
                                                  className="items-center gap-5 mt-2 sm:flex flex justify-between mb-2 mx-5 mt-5"
                                                >                                       
                                                        {
                                                                <button 
                                                                        className="py-3 px-4 bg-black hover:bg-gray-600 text-white font-semibold text-sm rounded-xl w-max"
                                                                        onClick={() => onClick(acceptOrRejectModal) }
                                                                >
                                                                                Close
                                                                </button>
                                                        }
                                                        {
                                                        <button 
                                                                        className="py-3 px-4 bg-red-600 hover:bg-red-800 text-white font-semibold text-sm rounded-xl w-max"
                                                                        onClick={() => {
                                                                                IsDelivered('rejected', 'open')
                                                                        }}
                                                                        >
                                                                        {       isRejecting ? ( <BeatLoader size={9} color="#fff" />) : ( "Reject" )          }
                                                        </button>
                                                        }
                                                </div>
                                        </>
                                }
                                {  (validate === "accept") &&
                                        <>
                                                <div 
                                                  className="items-center mt-2 sm:flex gap-5 flex justify-between mb-2 mx-5 mt-5"
                                                >                                       
                                                        {
                                                                <button 
                                                                        className="py-4 px-4 bg-black hover:bg-gray-700 text-white font-semibold text-sm rounded-xl w-full"
                                                                        onClick={() => onClick(acceptOrRejectModal) }
                                                                >
                                                                                Close
                                                                </button>
                                                        }
                                                        {
                                                        <button 
                                                                        className="py-4 px-4 bg-green-800 hover:bg-green-700 text-white font-semibold text-sm rounded-xl w-full"
                                                                        onClick={() => {
                                                                                IsDelivered('received', 'open')
                                                                        }}
                                                                        >
                                                                        {       isReceiving ? ( <BeatLoader size={9} color="#fff" />) : ( "Accept" ) }
                                                        </button>
                                                        }
                                                </div>
                                        </>
                                }
                        </div>
                </Modal>  
        );
}