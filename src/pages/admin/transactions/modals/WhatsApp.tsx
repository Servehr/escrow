import { useEffect, useState } from "react";
import { Modal } from "../../../../component/Modal";
import { BeatLoader } from "react-spinners";
import delay from "delay";
import Message from "../../../../auth/helper/Message";


type WhatsAppProps = 
{
    onClick: (isOpen: boolean | string) => void,
    toggleModal: boolean,
} 

export const WhatsApp = ({onClick, toggleModal}: WhatsAppProps)  =>
{
        const [loading, setIsLoading] = useState<boolean>(false)
        const [phoneno, setPhoneNo] = useState<string>()
        const [phonenoMessage, setPhoneNoMessage] = useState<string>()
        
        const [chat, setChat] = useState<string>()
        const [chatMessage, setChatMessage] = useState<string>()

        const [errMsgStyle, setErrMsgStyle] = useState<string>('')

        useEffect(() => 
        {
            setIsLoading(false)
            setErrMsgStyle('text-md text-white rounded-lg mb-3 mt-1 font-bold bg-red-600 p-3')
        }, [])

        useEffect(() => {
        }, [])

        const WhatsAppMe = async () => 
        {
            const validity: string = 'valid'
            setIsLoading(true)
            await delay(2000)
            let isValid: string = allFields()
            if(validity === isValid)
            {                
                setIsLoading(false)
                setPhoneNo("")
                setChat("")
                onClick(false)
                // window.open(`https://wa.me/${phoneno}/?text=${chat}`, "_blank")
                // https://web.whatsapp.com/send?phone=xxxxxxxxxxxx&text=Hi!
                // window.open(`https://wa.me/send?phone=${phoneno}&text=${chat}`, "_blank")
                window.open(`https://web.whatsapp.com/send?phone=${phoneno}&text=${chat}`, "_blank")
            } else {
                setIsLoading(false)
                setTimeout(() => 
                {
                    setChatMessage("")
                    setPhoneNoMessage("")
                }, 5000)
                return false
            }
            
        }

        const allFields = () => 
        {
                let valid = 'valid'
                if(!phoneno){ setPhoneNoMessage('Enter Phone Number'); valid = 'invalid' }
                if(!chat){ setChatMessage('Enter Message to start chatting'); valid = 'invalid' }
                return valid
        }

        return (
                <Modal 
                        onClick={onClick} isOpen={toggleModal} wrapperWidth={800} margin={'100px auto 0px auto'}
                >
                        <div 
                                className='col-span-12 pt-1 pb-5 overflow-y-auto xm:overflow-y-scroll justify-center item-center'
                        >
                                <div 
                                        className="px-4 py-2"
                                >  
                                        <textarea  
                                                className="w-full border rounded-md p-3 bg-white bg-opacity-75 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out" 
                                                name="text" id="message" placeholder="Leave a message" 
                                                rows={3}
                                                onChange={(e: any) => {
                                                        setChat(e.target.value) 
                                                }}
                                        >
                                        </textarea>   
                                        { chatMessage && <Message msg={chatMessage} status={errMsgStyle}  />  }                                  
                                </div>
                                <div 
                                        className="px-4 py-2"
                                >
                                        <div className="font-bold text-sm w-12/12"><span className="text-green-600">Important</span>: Omit the first zero (0) of your number. E.g rather <span className="text-blue-500">8023454324</span> instead of <span className="text-red-600">08023454324</span></div>
                                        <div className="font-bold text-sm w-12/12 mt-3 border-t-2 border-blue-300 pt-2"><span className="text-green-600"></span>Or you prefix your number with + and your call code e.g  (0) of your number. E.g rather <span className="text-blue-500">(+234)</span> for followe by your number without (0) e.g<span className="text-red-600">+2348023454324</span></div>
                                        <input  
                                                className="w-full border rounded-md p-3 bg-opacity-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out" 
                                                type="text" name="phoneno" id="phoneno" placeholder="Enter Phone Number"
                                                onChange={(e) => 
                                                {
                                                        setPhoneNo(e.target.value)
                                                }}
                                                onBlur={(e) => 
                                                {
                                                        if(e.target.value === "")
                                                        {
                                                                setPhoneNoMessage('Enter Phone Number')
                                                        }
                                                }}
                                                onFocus={() => 
                                                {
                                                        setPhoneNoMessage("")                                                            
                                                }}
                                        />
                                        { phonenoMessage && <Message msg={phonenoMessage} status={errMsgStyle}  />  }                                   
                                </div>
                                <div 
                                        className="items-center gap-5 mt-2 sm:flex flex justify-between mb-2 mx-5 mt-5"
                                        >                                       
                                        {
                                                <button 
                                                        className="py-3 px-4 bg-black hover:bg-gray-600 text-white font-semibold text-sm rounded-xl w-max"
                                                        onClick={() => onClick(toggleModal) }
                                                >
                                                                Close
                                                </button>
                                        }
                                        {
                                        <button 
                                                        className="py-3 px-4 bg-green-600 hover:bg-green-800 text-white font-semibold text-sm rounded-xl w-max"
                                                        onClick={() => {
                                                                WhatsAppMe()
                                                        }}
                                                        >
                                                        {  (loading === true) ? ( <BeatLoader size={9} color="#fff" />) : ( "Send Message" )  }  
                                        </button>
                                        }
                                </div>
                        </div>
                </Modal>  
        );
}