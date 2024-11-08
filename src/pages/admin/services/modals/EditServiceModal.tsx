import { useEffect, useState } from "react";
import { Modal } from "../../../../component/Modal";
import { BeatLoader } from "react-spinners";
import delay from "delay";
import Message from "../../../../auth/helper/Message";

type CategoryModalProps = 
{
    onClick: (isOpen: boolean) => void,
    categoryModal: boolean
    categId: number
} 

export const EditServiceModal = ({onClick, categoryModal, categId}: CategoryModalProps)  =>
{
        const [loading, setIsLoading] = useState(false)
        const [validationMsg, setValidationMessage] = useState<string>('')

        const CATEGORY_MESSAGE = "Enter Name"
        const DESCRIPTION_MESSAGE = "Enter Description"
    
        const [errMsgStyle, setErrMsgStyle] = useState<string>('')      
    
        const [categoryName, setCategoryName] = useState<string>('')
        const [categoryNameMessage, setCategoryNameMessage] = useState<string>('')
    
        const [description, setDescription] = useState<string>('')
        const [descriptionMessage, setDescriptionMessage] = useState<string>('')

        useEffect(() => 
        {       
           setErrMsgStyle('text-md text-red-600 font-bold')
           setIsLoading(false)
           console.log(categId)
        }, [])

        const SaveService = async () => 
        {
                let valid: string = 'passed'
                valid = allFields()
                if(valid === "passed")
                {
                   setIsLoading(true)
                   await delay(3000)
                   setIsLoading(false)
                   alert("Great")
                } else {
                   setValidationMessage('Attempt all fields')
                   setTimeout(() => 
                   {
                      setValidationMessage('')
                   }, 5000)
                }
        }

        

        const allFields = () => 
        {
           let allow: string = 'passed'
           if(categoryName === ""){ setCategoryNameMessage(CATEGORY_MESSAGE); allow = 'failed' }
           if(description === ""){ setDescriptionMessage(DESCRIPTION_MESSAGE); allow = 'failed' }
           return allow
        }


        return (
                <Modal 
                        onClick={onClick} isOpen={categoryModal} wrapperWidth={800} margin={'100px auto 0px auto'}
                >
                        <div 
                                        className='col-span-12 pt-1 pb-5 overflow-y-auto xm:overflow-y-scroll justify-center item-center'
                        >
                                <h1 
                                        className="text-black font-bold w-full flex justify-left text-center mb-5"
                                >
                                        Create A Service
                                </h1>
                                <div 
                                        className='mb-2 mt-10 mb-5 w-full flex justify-center items-center'
                                > 
                                        {
                                                validationMsg && <Message msg={validationMsg} status={errMsgStyle} customStyle="bg-red-600 p-3 text-white font-bold rounded-md" />
                                        }
                                </div>
                                <div 
                                        className="mb-4 md:w-full"
                                >
                                        <input  
                                                className="w-full border rounded-md p-3 bg-gray-100 bg-opacity-75 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out" 
                                                type="text" name="categoryName" id="categoryName" placeholder="Enter Category Name"
                                                onChange={(e: any) => {
                                                        const value = e.target.value
                                                        if(value === "" || value === undefined || value === null)
                                                        {
                                                            setCategoryName("")
                                                            setCategoryNameMessage("Kindly enter category name")
                                                        } else {
                                                            setCategoryName(value)
                                                            setCategoryNameMessage("")                                                        
                                                        }
                                                    }}
                                                onMouseLeave={(e: any) => {
                                                    const value = e.target.value
                                                    if(value === "" || value === undefined || value === null)
                                                    {
                                                        setCategoryName("")
                                                        setCategoryNameMessage("Kindly enter category name")
                                                    } else {
                                                        setCategoryName(value)
                                                        setCategoryNameMessage("")                                                        
                                                    }
                                                }}   
                                        />  
                                        { categoryNameMessage && <Message msg={categoryNameMessage} status={errMsgStyle} />}
                                </div>                                         
                                <div 
                                        className="mb-4 md:w-full"
                                >
                                        <textarea  
                                                className="w-full border rounded-md p-3 bg-gray-100 bg-opacity-75 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out" 
                                                name="password" id="password" placeholder="Enter Service Description" 
                                                rows={5}
                                                onChange={(e: any) => {
                                                        const value = e.target.value
                                                        if(value === "" || value === undefined || value === null)
                                                        {
                                                            setDescription("")
                                                            setDescriptionMessage("Kindly enter description")
                                                        } else {
                                                            setDescription(value)
                                                            setDescriptionMessage("")                                                        
                                                        }
                                                    }}
                                                onMouseLeave={(e: any) => {
                                                    const value = e.target.value
                                                    if(value === "" || value === undefined || value === null)
                                                    {
                                                        setDescription("")
                                                        setDescriptionMessage("Kindly enter description")
                                                    } else {
                                                        setDescription(value)
                                                        setDescriptionMessage("")                                                        
                                                    }
                                                }} 
                                        >
                                        </textarea>
                                        { descriptionMessage && <Message msg={descriptionMessage} status={errMsgStyle} />}
                                </div>
                                <div 
                                      className="items-center gap-5 mt-2 sm:flex flex justify-between mb-2 mx-1 mt-5"
                                >                                       
                                        {
                                                <button 
                                                        className="py-3 px-4 bg-red-700 hover:bg-red-800 text-white font-semibold text-sm rounded-xl w-max"
                                                        onClick={() => onClick(categoryModal) }
                                                >
                                                                Close
                                                </button>
                                        }
                                        {
                                               <button 
                                                        className="py-3 px-4 bg-green-800 hover:bg-green-700 text-white font-semibold text-sm rounded-xl w-max"
                                                        onClick={SaveService}
                                                                >
                                                        {       loading ? ( <BeatLoader size={9} color="#fff" />) : ( "Create" )          }
                                              </button>
                                        }
                                </div>
                        </div>
                </Modal>  
        );
}