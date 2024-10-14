import { useEffect, useState } from "react";
import { Modal } from "../../../../component/Modal";
import { BeatLoader } from "react-spinners";

type UserModalPropos = 
{
    onClick: (isOpen: boolean) => void,
    userModal: boolean,
    user?: string,
    returnTo?: string,
    message?: string,
} 

export const EditUserModal = ({onClick, userModal}: UserModalPropos)  =>
        {
                const [loading, setIsLoading] = useState(false)

                useEffect(() => {
                        setIsLoading(false)
                })
        
                return (
                        <Modal 
                                onClick={onClick} isOpen={userModal} wrapperWidth={800} margin={'100px auto 0px auto'}
                        >
                                <div 
                                                className='col-span-12 pt-1 pb-5 overflow-y-auto xm:overflow-y-scroll justify-center item-center'
                                >
                                        <h1 
                                                className="text-black font-bold w-full flex justify-left text-center mb-5"
                                        >
                                                Edit User
                                        </h1>
                                        <div 
                                                className="mb-4 md:w-full"
                                        >
                                                <input  
                                                        className="w-full border rounded-md p-3 bg-gray-100 bg-opacity-75 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out" 
                                                        type="text" name="firstname" id="firstname" placeholder="Enter First Name" 
                                                />
                                        </div>                                         
                                        <div 
                                                className="mb-4 md:w-full"
                                        >
                                                <input  
                                                        className="w-full border rounded-md p-3 bg-gray-100 bg-opacity-75 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out" 
                                                        type="text" name="surname" id="surname" placeholder="Enter Surname" 
                                                />
                                        </div>
                                        <div 
                                                className="mb-4 md:w-full"
                                        >
                                                <input  
                                                        className="w-full border rounded-md p-3 bg-gray-100 bg-opacity-75 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out" 
                                                        type="text" name="phone" id="phone" placeholder="Enter Phone Number" 
                                                />
                                        </div>                                         
                                        <div 
                                                className="mb-4 md:w-full"
                                        >
                                                <input  
                                                        className="w-full border rounded-md p-3 bg-gray-100 bg-opacity-75 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out" 
                                                        type="email" name="email" id="email" placeholder="Enter Email Address" 
                                                />
                                        </div>
                                        <div 
                                              className="items-center gap-5 mt-2 sm:flex flex justify-between mb-2 mx-1 mt-5"
                                        >                                       
                                                {
                                                        <button 
                                                                className="py-3 px-4 bg-red-700 hover:bg-red-800 text-white font-semibold text-sm rounded-xl w-max"
                                                                onClick={() => onClick(userModal) }
                                                        >
                                                                        Close
                                                        </button>
                                                }
                                                {
                                                       <button 
                                                                className="py-3 px-4 bg-green-800 hover:bg-green-700 text-white font-semibold text-sm rounded-xl w-max"
                                                                onClick={() => console.log('')}
                                                                        >
                                                                {       loading ? ( <BeatLoader size={9} color="#fff" />) : ( "Update" )          }
                                                      </button>
                                                }
                                        </div>
                                </div>
                        </Modal>  
                );
        }