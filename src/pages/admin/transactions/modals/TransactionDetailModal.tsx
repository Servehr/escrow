import { useEffect, useState } from "react";
import { Modal } from "../../../../component/Modal";


type FlaggedModalPropos = 
{
    onClick: (isOpen: boolean) => void,
    transactionModal: boolean,
    transaction?: string,
    returnTo?: string,
    message?: string,
} 

export const TransactionDetailModal = ({onClick, transactionModal}: FlaggedModalPropos)  =>
  {
          const [loading, setIsLoading] = useState(false)

          useEffect(() => {
                  setIsLoading(false)
                  console.log(loading)
          })
  
          return (
                  <Modal 
                          onClick={onClick} isOpen={transactionModal} wrapperWidth={900} margin={'130px auto 0px auto'}
                  >
                          <div 
                                className='col-span-12 pt-1 pb-5 overflow-y-auto xm:overflow-y-scroll justify-center item-center'
                          >
                                  <h1 
                                        className="text-black font-bold w-full flex justify-center text-center mb-10"
                                  >
                                      X Transaction Detail
                                  </h1>
                                  
                                <div 
                                    className="w-full md:p-5 md:px-1 md:pt-1 md:pb-5 d-flex items-center justify-center rounded-md md:rounded-xl mb-1 md:mb-0"
                                >
                                        <div 
                                              className='w-full d-flex md:flex gap-10 md:mb-3 bg-gray-100 md:p-4'
                                        >          
                                            Category: 
                                        </div>
                                        <div 
                                              className='w-full d-flex md:flex gap-10 md:mb-1'
                                        >           
                                              <div 
                                                    className="mb-4 md:w-1/2 w-2/2 d-flex md:flex md:mb-1 bg-gray-100 md:p-4"
                                              >
                                                  Seller: 
                                              </div>
                                              <div 
                                                    className="mb-4 md:w-1/2 w-2/2 d-flex md:flex md:mb-1 bg-gray-100 md:p-4"
                                              >
                                                  Buyer: 
                                              </div>
                                        </div>
                                        <div  
                                              className='w-full d-flex md:flex gap-10 md:mb-1'
                                        >                                          
                                              <div 
                                                    className="mb-4 md:w-1/2 w-2/2 d-flex md:flex md:mb-1 bg-gray-100 md:p-4"
                                              >
                                                  TransactionId: 
                                              </div>
                                              <div 
                                                    className="mb-4 md:w-1/2 w-2/2 d-flex md:flex md:mb-1 bg-gray-100 md:p-4"
                                              >
                                                  Amount: 
                                              </div>
                                        </div>
                                        <div  
                                              className='w-full d-flex md:flex gap-10'
                                        >                                          
                                              <div 
                                                    className="mb-4 md:w-1/2 w-2/2 d-flex md:flex md:mb-1 bg-gray-100 md:p-4"
                                              >
                                                  Date:
                                              </div>
                                              <div 
                                                    className="mb-4 md:w-1/2 w-2/2 d-flex md:flex md:mb-1 bg-gray-100 md:p-4"
                                              >
                                                  Percentage: 
                                              </div>
                                        </div>
                                </div>

                                  <div 
                                        className="items-center gap-5 sm:flex flex justify-between mb-2 mx-1"
                                  >                                       
                                          {
                                                  <button 
                                                          className="py-3 px-4 bg-red-700 hover:bg-red-800 text-white font-semibold text-sm rounded-xl w-max"
                                                          onClick={() => onClick(!transactionModal) }
                                                  >
                                                                  Cancel
                                                  </button>
                                          }
                                  </div>
                          </div>
                  </Modal>  
          );
  }
