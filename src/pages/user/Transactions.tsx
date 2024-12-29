import { useState } from 'react';
import DashboardLayout from '../../shared/DashboardLayout'
import ActiveTransactions from './transactions/ActiveTransactions';
import CompletedTransactions from './transactions/CompletedTransactions';
import CancelledTransactions from './transactions/CancelledTransactions';
import FlaggedTransactions from './transactions/FlaggedTransactions';
import RejectedTransactions from './transactions/RejectedTransactions';
import DeclinedTransactions from './transactions/DeclinedTransactions';
import { appStore } from '../../state/store';


export default function Transactions() 
{  
    const userState = appStore((state) => state)
    const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

    const tabsData = [   
      {
        label: "Pending",
        content: <FlaggedTransactions />,
        type: ['member', 'admin']
      },
      {
        label: "Declined",
        content: <DeclinedTransactions />,
        type: ['member', 'admin']
      },  
      {
        label: "Open",
        content: <ActiveTransactions />,
        type: ['member', 'admin']
      },
      {
        label: "Rejected",
        content: <RejectedTransactions />,
        type: ['member', 'admin']
      },
      {
        label: "Completed",
        content: <CompletedTransactions />,
        type: ['member', 'admin']
      },
      {
        label: "Cancelled",
        content: <CancelledTransactions />,
        type: ['member', 'admin']
      }, 
    ]
    
    return (
        <DashboardLayout 
            pageName="Transactions"
        >
            <div className='grid grid-cols-12'
            >
                <div 
                    className='col-span-12'
                >
                    <p className='font-bold text-2xl ml-5 mt-0 text-white'>...</p>
                </div>

            </div>

            {/* <div 
                  className='relative grid grid-cols-12 gap-5'
            > */}
                {/* <div 
                    className='md:col-span-12 col-span-12 bg-green-400 d-flex bg-green-50 border-shadow drop-shadow-lg md:block h-[fit] px-1 py-5 mt-3 rounded-none'
                >  */}
                        <div 
                            className="flex space-x-20 w-12/12 h-16 -mt-2 overflow-x-scroll scrollbar-track-white scrollbar-thin overflow-y-hidden px-1 mx-1 md:px-5 md:mx-5 border-2 bg-white border-bg-[#d1dbea]" 
                        >
                            <div 
                                    className="flex w-full mr-5 mt-1 mb-2" 
                            >
                                {
                                    tabsData.map((tab, index) => {
                                        let contains = tab?.type?.includes(userState.getUser().userType)
                                        return (
                                              <>
                                                  {
                                                      contains && 
                                                      <button
                                                          key={index}
                                                          className={` rounded-none py-2 rounded-2xl flex justify-between items-center border-b-4 px-5 m-auto font-semibold transition-colors duration-300 text-md border-t-1 ${
                                                          index === activeTabIndex
                                                          ? "border-black bg-[#119dd5] text-white font-bold"
                                                          : "border-transparent hover:border-green-700 text-black"
                                                          }`}
                                                          style={{fontSize:"12px", paddingTop: '15px', fontWeight: 'bolder'}}
                                                          onClick={() => setActiveTabIndex(index)}>
                                                          {tab.label.toUpperCase()}
                                                      </button>
                                                  }
                                              </>                                                
                                            );
                                        })
                                }
                            </div>
                        </div>
                        
                        {/* Show active tab content. */}
                        <div 
                            className="px-1 md:px-5 mt-3"
                        >
                            <p>{tabsData[activeTabIndex].content}</p>
                        </div>
                {/* </div> */}
            {/* </div> */}

        </DashboardLayout>
    )
}