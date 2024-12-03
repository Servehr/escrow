import { useEffect, useState } from "react"
import { BeatLoader } from "react-spinners"
import { logUserOut } from "../hook/useAuth"
import { appStore } from "../state/store"
import Message from "../auth/helper/Message"
import { Modal } from "./Modal"



type SaveDraftProps = 
{
    onClick: () => void 
    openLogOutModal: boolean
}    

export const Logout = ({onClick, openLogOutModal}: SaveDraftProps)  =>
{
        const UserPics = appStore((state) => state)
        const { LogOut } = logUserOut()
        const [loading] = useState<boolean>(false)
    
        const [errMsgStyle, setErrMsgStyle] = useState<string>('')
        const [errorMessage, setErrorMessage] = useState<string>("")
   
        useEffect(() => 
        {
           setErrMsgStyle('text-md text-white font-bold bg-red-600 rounded-lg py-3 px-5')
           setErrorMessage("")
           LogUserOut()
        }, []) 

        const LogUserOut = async () => 
        {    
           LogOut()
        }

        return (
                <Modal onClick={onClick} isOpen={openLogOutModal} wrapperWidth={500} margin={'240px auto 0px auto'}>
                        <div 
                             className='col-span-12 pt-1 pb-5 overflow-y-auto xm:overflow-y-scroll justify-center item-center'
                        >
                                { errorMessage && <Message msg={errorMessage} status={errMsgStyle} /> }                            
                                
                                <div 
                                    className="items-center gap-5 mt-2 sm:flex d-flex justify-center items-center mb-2 mx-5 mt-5"
                                >               
                                        <button 
                                             className="py-3 px-4 bg-green-600 text-white font-semibold text-sm rounded-xl w-max hover:bg-green-800"
                                        >
                                            {       (loading === false) ? ( <BeatLoader size={9} color="#fff" className="text-white" />) : ( "Logging Out" ) } 
                                        </button>
                                        <div>
                                                Loggin 
                                                <span 
                                                        className="text-blue-500 font-bold ml-1 mr-1"
                                                >
                                                        {UserPics.getUser().firstname} {UserPics.getUser().surname}
                                                </span>
                                                <span 
                                                        className="font-bold text-red-600"
                                                >
                                                        Out
                                                </span>
                                        </div>
                                </div>
                        </div>
                </Modal>  
        );
}
