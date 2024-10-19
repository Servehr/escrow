import { BsArrowBarRight } from "react-icons/bs"
import HomeLayout from "../shared/HomeLayout"
import { BeatLoader } from "react-spinners"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


export const Home = () =>
{
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => 
    {
        setIsLoading(false)
    }, [])

    const whyUs: string[] = [
        "Ease of use",
        "Risk free transaction",
        "Tracked Negation",
        "Assurance"
    ]

    const Search = () => 
    {
        
    }

    return (
        <HomeLayout pageName="Home"
        >
            <div className='pt-10 bg-white mt-5 pb-20'
            >
                <div 
                    className="container d-flex md:flex mx-auto md:mt-0 p-5 md:p-0"
                >                   
                    <div 
                         className='w-2/2 md:w-1/2 container mx-auto md:mx-0'
                    >    
                        <h1 className="text-[30px] md:text-[44px] text-center md:text-left mb-5 -mt-10 md:-mt-0">GPay Escrow Payment Made Easy</h1> 
                        <p className="text-center md:text-left pr-0 md:pr-20 text-md md:text-xl"
                        >
                            With GPay you can buy and sell anything safely without the risk of being scammed.
                            Transact with Peace of Mind.    
                        </p>  
                        <ul className="mt-4 flex justify-left items-center text-center">
                            {
                                whyUs.map((why, index) => {
                                    return (
                                        <li 
                                            key={index} className="flex items-center text-lg py-2 hoverfont-bold text-blue-600 mr-10 hover:text-black cursor-pointer"
                                        >
                                            {why} <BsArrowBarRight className="mt-1 font-bold border-2 text-red-600 text-[17px]" />
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        {/* <ul className="mt-4 flex justify-left items-center text-center md:hidden">
                            {
                                whyUs.map((why, index) => {
                                    return (
                                        <li 
                                            key={index} className="flex items-center text-lg py-2 hoverfont-bold text-blue-600 mr-10 hover:text-black cursor-pointer"
                                        >
                                            {why} <BsArrowBarRight className="mt-1 font-bold border-2 text-red-600 text-[17px]" />
                                        </li>
                                    )
                                })
                            }
                        </ul> */}
                    </div>
                    <div 
                        className='w-2/2 md:w-1/2 md:container md:px-10 md:px-0 rounded-xl mt-10 md:mt-0'
                    >                                
                        <div 
                            className="col-span-12 md:col-span-6 h-fit md:p-10 md:rounded-lg"
                        >        
                            <input  
                                className="w-full border mb-3 rounded-md p-3 bg-opacity-100 h-[80px] rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-[20px] outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out" 
                                type="text" name="code" id="code" placeholder="Enter User or Product Code"
                            />
                            <button 
                                    className="block w-full bg-[#435f88] hover:bg-[#6f7277] border-shadow text-white font-bold p-4 rounded-lg ring-2 ring-inset"
                                    onClick={() => {
                                        navigate('/transaction')
                                        Search()
                                   }}
                                    disabled={isLoading}
                            >
                                {  isLoading ? ( <BeatLoader size={9} color="#fff" />) : ( "Search" )          }
                            </button>
                        </div>                        
                    </div>

                </div>
            </div>
        {/* start-transaction */}
        </HomeLayout>
    )
  }
  