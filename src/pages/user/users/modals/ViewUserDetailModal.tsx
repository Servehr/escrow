import { useEffect, useState } from "react";
import { Modal } from "../../../../component/Modal";
import { USAGE_PATH } from "../../../../constant/Path";


type UserModalPropos = 
{
    onClick: (isOpen: boolean) => void,
    userModal: boolean,
    picture?: string,
} 

export const ViewUserDetailModal = ({onClick, userModal, picture}: UserModalPropos)  =>
  {
          const [loading, setIsLoading] = useState(false)

          useEffect(() => {
                  setIsLoading(false)
                  console.log(loading)
          })
  
          return (
                  <Modal 
                          onClick={onClick} isOpen={userModal} wrapperWidth={900} margin={'70px auto 0px auto'}
                  >
                          <div 
                                className='col-span-12 pt-1 pb-5 overflow-y-auto xm:overflow-y-scroll justify-center item-center'
                          >
                                  <h1 
                                        className="text-black font-bold w-full flex justify-center text-center mb-10"
                                  >
                                      {/* X Detail */}
                                  </h1>
                                  
                                <div 
                                    className="w-full md:p-5 md:px-1 md:pt-1 md:pb-5 d-flex items-center justify-center rounded-md md:rounded-xl mb-1 md:mb-0"
                                >
                                        <div 
                                              className='w-full d-flex md:flex gap-10 md:mb-1'
                                        > 
                                              <img src={`${USAGE_PATH.PROFILE_PICTURE}${picture}`} className="flex justify-center items-center" width={600} height={200} />
                                        </div>
                                        {/* <div 
                                              className='w-full d-flex md:flex gap-10 md:mb-1'
                                        >           
                                              <div 
                                                    className="mb-4 md:w-1/2 w-2/2 d-flex md:flex md:mb-1 bg-gray-100 md:p-4"
                                              >
                                                  Firstname: 
                                              </div>
                                              <div 
                                                    className="mb-4 md:w-1/2 w-2/2 d-flex md:flex md:mb-1 bg-gray-100 md:p-4"
                                              >
                                                  Surname: 
                                              </div>
                                        </div>
                                        <div  
                                              className='w-full d-flex md:flex gap-10 md:mb-1'
                                        >                                          
                                              <div 
                                                    className="mb-4 md:w-1/2 w-2/2 d-flex md:flex md:mb-1 bg-gray-100 md:p-4"
                                              >
                                                  Phone Number: 
                                              </div>
                                              <div 
                                                    className="mb-4 md:w-1/2 w-2/2 d-flex md:flex md:mb-1 bg-gray-100 md:p-4"
                                              >
                                                  Email: 
                                              </div>
                                        </div>
                                        <div  
                                              className='w-full d-flex md:flex gap-10'
                                        >                                          
                                              <div 
                                                    className="mb-4 md:w-1/2 w-2/2 d-flex md:flex md:mb-1 bg-gray-100 md:p-4"
                                              >
                                                  Status:
                                              </div>
                                        </div> */}
                                </div>

                                  <div 
                                        className="items-center gap-5 sm:flex flex justify-between mb-2 mx-1 mt-10"
                                  >                                       
                                          {
                                                  <button 
                                                          className="py-3 px-4 bg-red-700 hover:bg-red-800 text-white font-semibold text-sm rounded-xl w-max"
                                                          onClick={() => onClick(!userModal) }
                                                  >
                                                      Close
                                                  </button>
                                          }
                                  </div>
                          </div>
                  </Modal>  
          );
  }
