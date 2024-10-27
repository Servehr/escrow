import { useEffect, useState } from "react";
import { Modal } from "../../../../component/Modal";
import { BeatLoader } from "react-spinners";

type AcceptOrRejectedModalPropos = 
{
    onClick: (isOpen: boolean) => void,
    acceptOrRejectModal: boolean,
    acceptOrReject?: string,
    returnTo?: string,
    message?: string,
    validate: string
} 

export const AcceptOrReject = ({onClick, acceptOrRejectModal, validate}: AcceptOrRejectedModalPropos)  =>
{
        const [loading, setIsLoading] = useState(false)

        useEffect(() => {
                setIsLoading(false)
        })

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
                                                        >
                                                        </textarea>                                     
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
                                                                        onClick={() => console.log('')}
                                                                                >
                                                                        {       loading ? ( <BeatLoader size={9} color="#fff" />) : ( "Reject" )          }
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
                                                                        onClick={() => console.log('')}
                                                                                >
                                                                        {       loading ? ( <BeatLoader size={9} color="#fff" />) : ( "Accept" )          }
                                                        </button>
                                                        }
                                                </div>
                                        </>
                                }
                        </div>
                </Modal>  
        );
}