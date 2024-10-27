import { BsArrowBarRight } from "react-icons/bs"
import HomeLayout from "../shared/HomeLayout"
import { BeatLoader } from "react-spinners"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { HiOutlineShoppingCart, HiOutlineLibrary, HiOutlineTruck } from "react-icons/hi"

type CategoryProp = 
{
    name: string
    value: number
    icon: any
}
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

    const categories: CategoryProp[] = 
    [
        {
            name: 'Item',
            value: 1,
            icon: <HiOutlineShoppingCart />
        },
        {
            name: 'Mortgage',
            value: 2,
            icon: <HiOutlineLibrary />
        },
        {
            name: 'Vehicles',
            value: 3,
            icon: <HiOutlineTruck />
        },
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
                            {/* bg-[#435f88] hover:bg-[#6f7277] */}
                            <button 
                                    className="block w-full bg-blue-900 hover:bg-[#435f88] border-shadow text-white font-bold p-4 rounded-lg ring-2 ring-inset"
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
            <div 
                className='pt-8 pb-3 bg-[#506f9d] p-5 -mt-10 md:mt-0'
            >
                <div 
                    className='md:container d-flex md:flex mx-auto mt-5 md:mt-0 gap-5 md:py-5 rounded-xl justity-center items-center'
                > 
                    {
                        categories.map((category: CategoryProp, index: number) => {
                            return (                                                               
                                <div 
                                    key={index}
                                    className="flex justify-center items-center w-12/12 md:w-4/12 mb-5 text-md md:text-2xl text-center border-2 border-gray-200 bg-blue-100 md:col-span-6 h-fit md:p-10 rounded-lg"
                                >     
                                    <span 
                                        className="w-fll px-5 md:py-2 py-5 text-5xl -mr-5"
                                    >
                                        {category?.icon}
                                    </span>
                                    <span 
                                        className="w-fll p-5"
                                    >
                                        {category?.name}
                                    </span>
                                </div> 
                            )
                        })
                    }                      
                </div>

                <div 
                    className='md:container md:px-10 d-flex md:flex mx-auto md:p-5 pt-7 md:mt-0 gap-10 rounded-xl justity-center items-center'
                > 
                    <div 
                        className="w-full flex justify-center items-center -mt-5 md:mt-0 mb-5 md:mb-5"
                    >
                        <button 
                                className="flex justify-center items-center block w-fit bg-[#435f88] hover:bg-blue-900 border-shadow text-white font-bold px-20 py-7 rounded-lg ring-2 ring-inset"
                                onClick={() => {
                                    navigate('/dashboard/create-transaction')
                                    Search()
                                }}
                                disabled={isLoading}
                        >
                            {  isLoading ? ( <BeatLoader size={9} color="#fff" />) : ( "Start Transaction" )          }
                        </button>
                    </div>
                </div>
            </div>
                                           
            <div 
                className='w-full py-60 bg-white'
            >
                <div 
                        className='container mx-auto flex justify-between items-center gap-5'
                    >
                        <div 
                            className='col-span-3 text-2xl'
                        >
                                
                        </div>
                        <div 
                            className='col-span-3 text-2xl pt-2'
                        >
                                                            
                        </div>
                        <div 
                            className='col-span-3 text-2xl pt-2'
                        >
                                                               
                        </div>
                        <div 
                            className='col-span-3 text-2xl pt-2'
                        >
                                                               
                        </div>
                    </div>
            </div>
        {/* start-transaction */}
        </HomeLayout>
    )
  }
  