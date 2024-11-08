import { Modal } from "../../../../component/Modal";
import { USAGE_PATH } from "../../../../constant/Path";

type FlaggedModalPropos = 
{
    onClick: (isOpen: boolean | string) => void,
    transactionModal: boolean,
    detail: any
} 

export const TransactionDetailModal = ({onClick, transactionModal, detail}: FlaggedModalPropos)  =>
{
console.log(detail)
  
          return (
                  <Modal 
                          onClick={onClick} isOpen={transactionModal} wrapperWidth={1200} margin={'110px auto 0px auto'}
                  >
                          <div 
                                className='col-span-12 pt-1'
                          >
                                  <h1 
                                        className="text-black font-bold w-full flex justify-center text-center mb-10 text-xl text-color-[#435f88]"
                                  >
                                      Transaction between { detail?.seller } and { detail?.buyer }
                                  </h1>
                                  
                                <div 
                                    className="w-full md:p-5 md:px-1 md:pt-1 md:pb-5 d-flex items-center justify-center rounded-md md:rounded-xl mb-1 md:mb-0 overflow-y-auto xm:overflow-y-scroll justify-center item-center h-[500px]"
                                >
                                        <div 
                                              className='w-full d-flex md:flex gap-10 mb-3 bg-gray-100 p-4'
                                        >          
                                            <span className="text-sm text-lg w-2/12">Service/Product Name:</span> <span className="font-semibold text-lg w-10/12">{ detail?.name }</span>
                                        </div>
                                        <div 
                                              className='w-full d-flex md:flex gap-10 md:mb-1'
                                        >           
                                              <div 
                                                    className="mb-4 md:w-1/2 w-2/2 d-flex md:flex md:mb-1 bg-gray-100 p-4"
                                              >
                                                      <span className="text-sm text-lg w-2/12">Seller:</span> <span className="font-semibold text-lg w-10/12">{ detail?.seller }</span>
                                              </div>
                                              <div 
                                                    className="mb-4 md:w-1/2 w-2/2 d-flex md:flex md:mb-1 bg-gray-100 p-4"
                                              >
                                                   <span className="text-sm text-lg w-2/12">Buyer:</span> <span className="font-semibold text-lg w-10/12">{ detail?.buyer }</span>
                                              </div>
                                        </div>
                                        <div  
                                              className='w-full d-flex md:flex gap-10 md:mb-1'
                                        >                                          
                                              <div 
                                                    className="mb-4 md:w-1/2 w-2/2 flex md:flex md:mb-1 bg-gray-100 p-4"
                                              >
                                                   <span className="text-sm text-lg w-3/12">Transaction ID:</span> <span className="font-semibold text-lg w-9/12">{ detail?.transaction_code }</span>
                                              </div>
                                              <div 
                                                    className="mb-4 md:w-1/2 w-2/2 d-flex md:flex md:mb-1 bg-gray-100 p-4"
                                              >
                                                   <span className="text-sm text-lg w-3/12">Amount:</span> <span className="font-semibold text-lg w-9/12">{ detail?.amount }</span>
                                              </div>
                                        </div>
                                        <div  
                                              className='w-full d-flex md:flex gap-10'
                                        >                                          
                                              <div 
                                                    className="mb-4 md:w-1/2 w-2/2 d-flex md:flex md:mb-1 bg-gray-100 p-4"
                                              >
                                                   <span className="text-sm text-lg w-3/12">Category:</span> <span className="font-semibold text-lg w-9/12">{ detail?.category }</span>
                                              </div>
                                              <div 
                                                    className="mb-4 md:w-1/2 w-2/2 d-flex md:flex md:mb-1 bg-gray-100 p-4"
                                              >
                                                   <span className="text-sm text-lg w-3/12">Transaction Validity:</span> <span className="font-semibold text-lg w-9/12">{ detail?.validity }</span>
                                              </div>
                                        </div>
                                        <div  
                                              className='w-full d-flex md:flex gap-10'
                                        >                                          
                                              <div 
                                                    className="mb-4 md:w-1/2 w-2/2 d-flex md:flex md:mb-1 bg-gray-100 p-4"
                                              >
                                                   <span className="text-sm text-lg w-3/12">Delivery Status:</span> <span className="font-semibold text-lg w-9/12">{ detail?.delivery_status }</span>
                                              </div>
                                              <div 
                                                    className="mb-4 md:w-1/2 w-2/2 d-flex md:flex md:mb-1 bg-gray-100 p-4"
                                              >
                                                   <span className="text-sm text-lg w-3/12">Transaction Validity:</span> <span className="font-semibold text-lg w-9/12">{ detail?.validity }</span>
                                              </div>
                                        </div>
                                        <div  
                                              className='w-full d-flex md:flex gap-10'
                                        >                                          
                                              <div 
                                                    className="mb-4 md:w-1/2 w-2/2 d-flex md:flex md:mb-1 bg-gray-100 p-4"
                                              >
                                                   <span className="text-sm text-lg w-3/12">Start Date:</span> <span className="font-semibold text-lg w-9/12">{ detail?.start }</span>
                                              </div>
                                              <div 
                                                    className="mb-4 md:w-1/2 w-2/2 d-flex md:flex md:mb-1 bg-gray-100 p-4"
                                              >
                                                   <span className="text-sm text-lg w-3/12">End Date:</span> <span className="font-semibold text-lg w-9/12">{ detail?.end }</span>
                                              </div>
                                        </div>
                                        <div 
                                              className='w-full d-flex md:flex gap-10 md:mb-3 bg-gray-100 p-4'
                                        >          
                                            <span className="text-sm text-lg w-2/12">Description:</span> <span className="font-semibold text-lg w-10/12">{ detail?.description }</span>
                                        </div>
                                        <div 
                                              className='w-full d-flex md:flex gap-10 md:mb-3 bg-gray-100 p-4'
                                        >          
                                            <span className="text-sm text-lg w-2/12">Agreement:</span> <span className="font-semibold text-lg w-10/12">{ detail?.agreement }</span>
                                        </div>
                                        <div 
                                              className='grid grid-cols-12 gap-5 pt-10'
                                        >          
                                          {
                                                detail?.images?.map((image: any, index: number) => {
                                                      return (
                                                            <div 
                                                                  className="col-span-12 md:col-span-6 border-2 border-gray-200"
                                                            >
                                                                  <img key={index} src={`${USAGE_PATH?.PRODUCT_IMAGE}${image?.url}`} />
                                                            </div>
                                                      )
                                                })
                                          }
                                        </div>
                                </div>

                                  <div 
                                        className="items-center gap-5 sm:flex flex justify-between mb-2 mx-1"
                                  >                                       
                                          {
                                                  <button 
                                                          className="py-3 px-4 bg-red-700 hover:bg-red-800 text-white font-semibold text-sm rounded-xl w-max mt-10"
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
 