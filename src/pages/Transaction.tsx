import { useEffect, useState } from 'react';
import Images from './preview/images';
import Videos from './preview/videos';
import HomeLayout from '../shared/HomeLayout';
import { BeatLoader } from 'react-spinners';


export default function Transaction() 
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

    
    return (
        <HomeLayout pageName="Transactions"
        >
            {/* border-2 border-gray-100
                className="flex space-x-20 w-12/12 mt-10 overflow-x-scroll scrollbar-track-white scrollbar-thin overflow-y-hidden px-1 md:px-5 border-2 bg-white border-bg-[#d1dbea]"  */}
            <div
                className="space-x-20 w-12/12 mt-4 md:mt-5 px-3 md:px-5 border-2 bg-white border-[#d1dbea]" 
            >
                <div className='grid grid-cols-12 container mx-auto mt-10'
                >
                    <div 
                            className='col-span-12 md:col-span-6'
                    >
                        <div 
                                className="flex w-full -mt-5 md:mt-1 mb-2 bg-[#f0f8ff] border-2 border-gray-200" 
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
                            className="flex justify-center items-center px-1 md:px-5 mt-3 border-2 border-gray-200 rounded-lg w-full object-fill"
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
                        
                        <div 
                            className={`${(complain === true) ? 'hidden' : 'block'} w-2/2 md:container md:px-10 md:px-0 rounded-xl mt-5  flex justify-center items-center`}
                        >   
                            <button 
                                    className="block w-fit bg-[#435f88] hover:bg-[#6f7277] border-shadow text-white font-bold p-4 rounded-lg ring-2 ring-inset"
                                    onClick={() => {
                                        setComplain(!complain)
                                }}
                            >
                                Make Complaint
                            </button>                        
                        </div>
                    </div>
                    <div 
                         className='col-span-12 md:col-span-6 pl-1 mt-10 md:mt-0'
                    >
                        <p className='font-bold text-[20px] ml-5 mt-3 text-gray-500 border-b-2 border-gray-200 p-2 rounded-lg'>Product Description</p>
                        <div 
                            className='text-[16px] ml-1 md:ml-5 mt-3 text-gray-500'
                        >
                            <div 
                                className='mb-7'
                            >
                                <span className='font-bold text-lg text-black'>Alec Elec Power-Bank</span>, PowerCore Slim 20000, Ultra Slim Portable Charger, Compact 20000mAh External Battery, 
                                High-Speed PowerIQ Charging Technology for Mobile phones, ipad, and more The New Generation Power-Bank 
                                P2W (20000mAh) is light, convenient and portable. The dual USB output ports support multiple charging protocols, 
                                making it a partner in your travels that won't let you down.The Power-Bank P2W (20000mAh) can charge at up to 
                                18W (12V, 1.5A/9V, 2.0A), cutting back significantly on charging time. Order for this Power-Bank P2W, 20000mAh 
                                online from Jumia Nigeria and have it delivered to you.
                            </div>
                            <div 
                                className=''
                            >
                                <div 
                                    className='font-bold text-lg text-black mb-2 bg-blue-100 p-2 mt-3'
                                >
                                        General Reqiurement
                                </div> 
                                <ul 
                                    className='list-inside list-disc w-full border-2 border-gray-100 p-2'
                                >
                                    <li><span className='font-bold'>Brand:</span>Floveme</li>
                                    <li><span className='font-bold'>Model:</span>P2W</li>
                                    <li><span className='font-bold'>Material:</span>Fireproof  ABS+PC</li>
                                    <li><span className='font-bold'>Capacity:</span>20000mAh </li>
                                    <li><span className='font-bold'>Input interface:</span>Micro USB 5V 2.1A</li>
                                    <li><span className='font-bold'>Output USB:</span>2 USB (USB-A) 5V 2.1A</li>
                                    <li><span className='font-bold'>Dimensions:</span>135 * 65 * 25mm</li>
                                    <li><span className='font-bold'>Color:</span>Black/White</li>
                                </ul>
                                <div 
                                    className='font-bold text-lg text-black mb-2 bg-blue-100 p-2 mt-3'
                                >
                                        Specification
                                </div> 
                                <ul 
                                    className='list-inside list-disc w-full border-2 border-gray-100 p-2'
                                >
                                    <li><span className='font-bold'>SKU:</span>GE779EA3TXI2ZNAFAMZ</li>
                                    <li><span className='font-bold'>Product Line:</span>Zeemak Ltd - AC</li>
                                    <li><span className='font-bold'>Weight (kg):</span>0.2</li>
                                    <li><span className='font-bold'>Color:</span>Black </li>
                                    <li><span className='font-bold'>Product Type:</span>Power Bank</li>
                                </ul>

                            </div>

                        </div>

                    </div>

                </div>
                <div className='p-20'></div>
            </div> 

        </HomeLayout>
    )
}





 
 
 
 
 
 
