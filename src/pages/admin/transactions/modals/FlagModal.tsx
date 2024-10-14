import { useEffect, useState } from "react";
import { Modal } from "../../../../component/Modal";
import { BeatLoader } from "react-spinners";

type FlaggedModalPropos = 
{
    onClick: (isOpen: boolean) => void,
    flagModal: boolean,
    flag?: string,
    returnTo?: string,
    message?: string,
} 

export const FlagModal = ({onClick, flagModal}: FlaggedModalPropos)  =>
{
        const [loading, setIsLoading] = useState(false)

        useEffect(() => {
                setIsLoading(false)
        })

        return (
                <Modal 
                        onClick={onClick} isOpen={flagModal} wrapperWidth={800} margin={'100px auto 0px auto'}
                >
                        <div 
                                        className='col-span-12 pt-1 pb-5 overflow-y-auto xm:overflow-y-scroll justify-center item-center'
                        >
                                <h1 
                                        className="text-black font-bold w-full flex justify-center text-center mb-10"
                                >
                                        You are about to flag selected transaction
                                </h1>
                                <div 
                                      className="items-center gap-5 mt-2 sm:flex flex justify-between mb-2 mx-5 mt-5"
                                >                                       
                                        {
                                                <button 
                                                        className="py-3 px-4 bg-red-700 hover:bg-red-800 text-white font-semibold text-sm rounded-xl w-max"
                                                        onClick={() => onClick(flagModal) }
                                                >
                                                                Cancel
                                                </button>
                                        }
                                        {
                                               <button 
                                                        className="py-3 px-4 bg-green-800 hover:bg-green-700 text-white font-semibold text-sm rounded-xl w-max"
                                                        onClick={() => console.log('')}
                                                                >
                                                        {       loading ? ( <BeatLoader size={9} color="#fff" />) : ( "Flag" )          }
                                              </button>
                                        }
                                </div>
                        </div>
                </Modal>  
        );
}