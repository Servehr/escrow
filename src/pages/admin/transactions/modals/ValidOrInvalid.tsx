import { useEffect, useState } from "react";
import { Modal } from "../../../../component/Modal";
import { BeatLoader } from "react-spinners";
import { useTransaction } from "../../../../hook/useTransaction";

type ValidOrInvalidedModalPropos = 
{
    onClick: (isOpen: boolean | string) => void,
    validOrInvalidModal: boolean,
    validOrInvalid?: string,
    returnTo?: string,
    message?: string,
    validate: string,
    detail: any
} 

export const ValidOrInvalid = ({onClick, validOrInvalidModal, validate, detail}: ValidOrInvalidedModalPropos)  =>
{
        const { Validity } = useTransaction()
        const [loading, setIsLoading] = useState<boolean>(false)
        const [message, setMessage] = useState<string>('')
        const [error, setError] = useState<string>('')

        useEffect(() => {
                setIsLoading(false)
                console.log(error)
        })

        const Validate = (status: string, type: string) => 
        {
            setIsLoading(true)
            console.log({detail, message, status})
            const validityCheck = Validity(detail?.seller_id, detail?.buyer_id, type, detail?.id, message, status)
            validityCheck.then(() => 
            {
               setIsLoading(false)
               onClick('successful')
            }).then(() => {
               setError("Try again")
               setIsLoading(false)
            })
        }

        return (
                <Modal 
                        onClick={onClick} isOpen={validOrInvalidModal} wrapperWidth={800} margin={'100px auto 0px auto'}
                >
                        <div 
                                className='col-span-12 pt-1 pb-5 overflow-y-auto xm:overflow-y-scroll justify-center item-center'
                        >
                                <div 
                                    className="p-3 w-full"
                                >
                                    <span className="p-3 font-bold text-lg w-full border-2 flex justify-center items-center">Transaction Approval</span>
                                </div>
                                {  (validate === "invalid") &&
                                        <>
                                                <div 
                                                        className="px-4 py-2"
                                                >
                                                        <textarea  
                                                                className="w-full border rounded-md p-3 bg-white bg-opacity-75 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out" 
                                                                name="text" id="message" placeholder="Tell us your reason why you consider it invalid" 
                                                                rows={3}
                                                                onChange={(e: any) => {
                                                                   setMessage(e.target.value) 
                                                                }}
                                                        >
                                                        </textarea>                                     
                                                </div>
                                                <div 
                                                  className="items-center gap-5 mt-2 sm:flex flex justify-between mb-2 mx-5 mt-5"
                                                >                                       
                                                        {
                                                                <button 
                                                                        className="py-3 px-4 bg-black hover:bg-gray-600 text-white font-semibold text-sm rounded-xl w-max"
                                                                        onClick={() => onClick(validOrInvalidModal) }
                                                                >
                                                                                Close
                                                                </button>
                                                        }
                                                        {
                                                        <button 
                                                                        className="py-3 px-4 bg-red-600 hover:bg-red-800 text-white font-semibold text-sm rounded-xl w-max"
                                                                        onClick={() => {
                                                                                Validate('invalid', 'pending')
                                                                        }}
                                                                        >
                                                                        {       loading ? ( <BeatLoader size={9} color="#fff" />) : ( "Invalid" )          }
                                                        </button>
                                                        }
                                                </div>
                                        </>
                                }
                                {  (validate === "valid") &&
                                        <>
                                                <div 
                                                  className="items-center mt-2 sm:flex gap-5 flex justify-between mb-2 mx-5 mt-5"
                                                >                                       
                                                        {
                                                                <button 
                                                                        className="py-4 px-4 bg-black hover:bg-gray-700 text-white font-semibold text-sm rounded-xl w-full"
                                                                        onClick={() => onClick(validOrInvalidModal) }
                                                                >
                                                                                Close
                                                                </button>
                                                        }
                                                        {
                                                        <button 
                                                                        className="py-4 px-4 bg-green-800 hover:bg-green-700 text-white font-semibold text-sm rounded-xl w-full"
                                                                        onClick={() => {
                                                                                Validate('valid', 'pending')
                                                                        }}
                                                                        >
                                                                        {       loading ? ( <BeatLoader size={9} color="#fff" />) : ( "Valid" )          }
                                                        </button>
                                                        }
                                                </div>
                                        </>
                                }
                        </div>
                </Modal>  
        );
}