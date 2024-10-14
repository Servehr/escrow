import React, { useState } from 'react';
import { Modal } from './Modal';
import { useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";


export const DeleteModal = ({onClick, deleteModal, deleteUrl, returnTo, message, imaegUrl, imageProductUrl=''})  =>
{
        const navigate = useNavigate();
        const [loading, setIsLoading] = useState(false)

        return (
                <Modal onClick={onClick} isOpen={deleteModal} wrapperWidth={800} margin={'100px auto 0px auto'}>
                        <div className='col-span-12 pt-1 pb-5 overflow-y-auto xm:overflow-y-scroll justify-center item-center'>
                                <h1 className='mb-5 font-bold mt-3'>{message}</h1>                               
                                {
                                        imageProductUrl && imageProductUrl !="" && <div className="max-w-sm rounded overflow-hidden shadow-lg m-auto">
                                                <img className="w-full" src={`${PRODUCT_FACE}${imageProductUrl}`} alt="Sunset in the mountains" />
                                        </div>
                                }
                                <div className="items-center gap-5 mt-2 sm:flex flex justify-between mb-2 mx-5 mt-5">                                       
                                        {
                                                <button 
                                                        className="py-3 px-4 bg-red-600 text-white font-semibold text-sm rounded-xl w-max"
                                                        onClick={() => onClick(deleteModal) }
                                                >
                                                                Cancel
                                                </button>
                                        }
                                        {
                                               <button 
                                                        className="py-3 px-4 bg-brandGreen text-white font-semibold text-sm rounded-xl w-max"
                                                        onClick={() => deleteProduct(deleteUrl)}
                                                                >
                                                        {       loading ? ( <BeatLoader size={9} color="#fff" />) : ( "Delete Image" )          }
                                              </button>
                                        }
                                </div>
                        </div>
                </Modal>  
        );
}
