import { useEffect, useState } from "react";
import { Modal } from "../../../../component/Modal";
import { BeatLoader } from "react-spinners";
import { useService } from "../../../../hook/useService";
import delay from "delay";
import Message from "../../../../auth/helper/Message";


type SerivceModalPropos = 
{
    onClick: () => void,
    categoryModal: boolean,
    category: { id: number, name: string, description: string }
} 

export const DeleteServiceModal = ({onClick, categoryModal, category}: SerivceModalPropos)  =>
{
        const { DeleteService } = useService()
        const [loading, setIsLoading] = useState(false)
        const [validationMsg, setValidationMessage] = useState<string>('')
    
        const [errMsgStyle, setErrMsgStyle] = useState<string>('')     

        useEffect(() => 
        {
           console.log(category)
           setErrMsgStyle('text-md text-red-600 font-bold')
           setIsLoading(false)
        }, [])

        const DeleteServ = async () => 
        {
            setIsLoading(true)
            await delay(2000)
            const UpdateServ = DeleteService(category?.id)
            UpdateServ.then((serv) => 
            {
               if(serv.statusCode === 200)
               {
                  setIsLoading(false)
                  onClick()
               }    
            }).catch(() => {                   
                setValidationMessage('Updating failed')
                setIsLoading(false)                   
            })
        } 

        return (
                <Modal 
                        onClick={onClick} isOpen={categoryModal} wrapperWidth={800} margin={'100px auto 0px auto'}
                >
                        <div 
                            className='col-span-12 pt-1 pb-5 overflow-y-auto xm:overflow-y-scroll justify-center item-center'
                        >
                                <div 
                                        className='mb-2 mt-10 mb-5 w-full flex justify-center items-center'
                                > 
                                        {
                                                validationMsg && <Message msg={validationMsg} status={errMsgStyle} customStyle="bg-red-600 p-3 text-white font-bold rounded-md" />
                                        }
                                </div>
                                <div 
                                        className="text-black font-bold w-full flex justify-center text-center mb-10"
                                >
                                       <span
                                            className="font-bold text-xl"
                                        >
                                           You are about to delete <span className="text-red-600">{category?.name}</span>
                                        </span> 
                                </div>
                                <div 
                                      className="items-center gap-5 mt-2 sm:flex flex justify-between mb-2 mx-5 mt-5"
                                >                                       
                                        {
                                                <button 
                                                        className="py-3 px-4 bg-red-700 hover:bg-red-800 text-white font-semibold text-sm rounded-xl w-max"
                                                        onClick={() => onClick() }
                                                >
                                                                Cancel
                                                </button>
                                        }
                                        {
                                               <button 
                                                        className="py-3 px-4 bg-green-800 hover:bg-green-700 text-white font-semibold text-sm rounded-xl w-max"
                                                        onClick={DeleteServ}
                                                                >
                                                        {       loading ? ( <BeatLoader size={9} color="#fff" />) : ( "Delete" )          }
                                              </button>
                                        }
                                </div>
                        </div>
                </Modal>  
        );
}