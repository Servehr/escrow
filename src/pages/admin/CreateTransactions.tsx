import { useState, useEffect } from 'react';
import { BeatLoader } from 'react-spinners';
import DashboardLayout from '../../shared/DashboardLayout'
import Images from '../preview/images';
import Videos from '../preview/videos';


export default function CreateTransactions() 
{
    const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [complain, setComplain] = useState<boolean>(false)

    useEffect(() => 
    {
        setIsLoading(false)
    }, [])

    const tabsData = [   
      {
        label: "Images",
        content: <Images />
      },   
      {
        label: "Videos",
        content: <Videos />
      }
    ]

    
    const categories: { name: string, value: number }[] = 
    [
        {
            name: 'Item',
            value: 1
        },
        {
            name: 'Mortgage',
            value: 2
        },
        {
            name: 'Vehicles',
            value: 3
        },
    ]
    
    return (
        <DashboardLayout 
                pageName="Create Transaction"
        >
            {/* border-2 border-gray-100
                className="flex space-x-20 w-12/12 mt-10 overflow-x-scroll scrollbar-track-white scrollbar-thin overflow-y-hidden px-1 md:px-5 border-2 bg-white border-bg-[#d1dbea]"  */}
                <div
                    className="w-12/12 md:pl-1 border-2 pt-5 pb-14 bg-white border-[#d1dbea]" 
                >
                    <div className='grid grid-cols-12 px-5 mx-auto mt-1'
                    >
                        <div 
                            className='col-span-12 md:col-span-6 pl-1 md:mt-0'
                        >
                            <div  
                                className='w-full md:mx-0 d-flex mx-auto gap-10 md:mb-3'
                            > 
                                <div 
                                    className="mb-4 md:col-span-12"
                                >
                                    <div 
                                        className="relative"
                                    >
                                        <select 
                                                className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-5 px-4 pr-8 text-lg rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        >
                                            { <option value={-1}> - Select Category -  </option> }
                                            {
                                                categories.map((category, index) =>  {
                                                    return (
                                                        <option key={index} value={category?.value}>
                                                            {category?.name}
                                                        </option>
                                                    )
                                                })
                                            }
                                        </select>
                                        <div 
                                            className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 mt-1"
                                        >
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                        </div>
                                    </div>
                                </div> 
                                <div 
                                    className="mb-4 md:col-span-12"
                                >
                                    <input  
                                            className="w-full border rounded-md p-3 bg-white bg-opacity-75 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out" 
                                            type="email" name="email" id="email" placeholder="Enter Item/Service Name" 
                                    />
                                </div> 
                                <div 
                                    className="mb-4 md:col-span-12"
                                >
                                    <input  
                                            className="w-full border rounded-md p-3 bg-white bg-opacity-75 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out" 
                                            type="email" name="email" id="email" placeholder="Enter Product Price/Service Amont" 
                                    />
                                </div>                                         
                                <div 
                                    className="mb-4 md:col-span-12"
                                >
                                    <textarea  
                                                className="w-full border rounded-md p-3 bg-white bg-opacity-75 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out" 
                                                name="password" id="password" placeholder="Enter Service Description/Product Detail" 
                                                rows={3}
                                    >
                                    </textarea>
                                </div>                                        
                                <div 
                                    className="mb-4 md:col-span-12"
                                >
                                    <textarea  
                                                className="w-full border rounded-md p-3 bg-white bg-opacity-75 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out" 
                                                name="password" id="password" placeholder="Enter agreement between you and buyer/seller" 
                                                rows={3}
                                    >
                                    </textarea>
                                </div>

                                <div className='font-bold text-md between w-full flex justify-left items-center mt-6 text-gray-400'>Duration</div>
                                <div 
                                    className="mb-4 flex md:d-flex"
                                >
                                    {/* <div 
                                        className="p-3 w-1/2"
                                    > */}
                                        <input  
                                                className="w-full border rounded-md p-3 mx-1 bg-white bg-opacity-75 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out" 
                                                type="date" name="from" id="from" 
                                        />
                                    {/* </div> */}
                                    {/* <div 
                                        className="p-3 w-1/2"
                                    >*/}
                                        <input   
                                                className="w-full border rounded-md p-3 bg-white bg-opacity-75 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out" 
                                                type="date" name="toArrive" id="toArrive" 
                                        />
                                    {/* </div> */}
                                </div> 
                            </div>
                        </div>
                        <div 
                                className='col-span-12 md:col-span-6 px-1 md:px-5 md:px-10 mt-5 md:mt-0'
                        >
                            <div 
                                    className="flex w-full md:mt-1 mb-2 bg-[#f0f8ff] border-2 border-gray-200" 
                            >
                                {
                                    tabsData.map((tab, index) => {
                                        return (
                                                <button
                                                        key={index}
                                                        className={` rounded-none py-2 rounded-2xl flex justify-between items-center border-b-4 px-5 m-auto font-semibold transition-colors duration-300 text-md border-t-1 ${
                                                        index === activeTabIndex
                                                        ? "border-black bg-[#506f9d] text-white font-bold"
                                                        : "border-transparent hover:border-green-700 text-black"
                                                        }`}
                                                        style={{fontSize:"12px", paddingTop: '15px', fontWeight: 'bolder'}}
                                                        onClick={() => setActiveTabIndex(index)}>
                                                        {tab.label.toUpperCase()}
                                                </button>
                                                );
                                        })
                                }
                            </div>            
                            <div 
                                className="flex justify-center items-center md:px-5 mt-3 border-2 border-gray-200 rounded-lg w-full object-fill"
                            >
                                <p>{tabsData[activeTabIndex].content}</p>
                            </div>  
                            <div 
                                className={`${(complain === false) ? 'hidden' : 'block'} col-span-12 md:col-span-6 h-fit md:p-1 md:rounded-lg mt-3 mb-5`}
                            >        
                                
                                <textarea  
                                            className="w-full border rounded-md p-3 bg-gray-100 mb-3 bg-opacity-75 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out" 
                                            placeholder="Enter Message" rows={2}>
                                </textarea>
                                <div 
                                    className='w-full flex justify-between items-center'
                                >     
                                    <button 
                                            className="block w-fit bg-red-600 hover:bg-red-800 border-shadow text-white font-bold p-4 rounded-lg"
                                            onClick={() => {
                                                setComplain(!complain)
                                        }}
                                            disabled={isLoading}
                                    >
                                        {  isLoading ? ( <BeatLoader size={9} color="#fff" />) : ( "Cancel" )          }
                                    </button>                           
                                    <button 
                                            className="block w-fit bg-[#435f88] hover:bg-[#6f7277] border-shadow text-white font-bold p-4 rounded-lg"
                                            onClick={() => {
                                        }}
                                            disabled={isLoading}
                                    >
                                        {  isLoading ? ( <BeatLoader size={9} color="#fff" />) : ( "Send" )          }
                                    </button>
                                </div>
                            </div> 
                        </div>

                    </div>
                    <div 
                        className='mb-10 mt-7 md:mt-2 w-full flex justify-left items-center'
                    > 
                        <button 
                                className="block w-fit bg-[#435f88] ml-8 hover:bg-[#6f7277] border-shadow text-white font-bold p-4 rounded-lg ring-2 ring-inset"
                        >
                            Create Transaction
                        </button>
                    </div>
                </div>

            {/* <div 
                className='w-full mx-auto py-20 flex justify-center items-center'
            >
            </div> */}
        </DashboardLayout>
    )
}
