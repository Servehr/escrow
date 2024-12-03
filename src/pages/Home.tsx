import { BsArrowBarRight, BsBackpack2Fill } from "react-icons/bs"
import HomeLayout from "../shared/HomeLayout"
import { BeatLoader } from "react-spinners"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { HiOutlineShoppingCart, HiOutlineLibrary, HiOutlineTruck } from "react-icons/hi"
import Message from "../auth/helper/Message"
import delay from "delay"
import { motion } from 'framer-motion'
import BuyerAndSellerAgree from '../assets/buyer-seller-agree.png'
import BuyerMakePayment from '../assets/make-payment.png'
import Delivery from '../assets/delivery.png'
import Approval from '../assets/approval.png'
import PaymentRelease from '../assets/payment-release.png'

type CategoryProp = 
{
    name: string
    value: number
    icon: any
}
export const Home = () =>
{
    const navigate = useNavigate()
    const PRODUCT_CODE: string = "Enter Product Code"
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isSearching, setIsSearching] = useState<boolean>(false)
    const [validationMsg, setValidationMessage] = useState<string>('')    
    const [code, setCode] = useState<string>('')

    const [errMsgStyle, setErrMsgStyle] = useState<string>('')      

    useEffect(() => 
    {
       setErrMsgStyle('text-md text-red-600 font-bold')
       setIsLoading(false)
       setIsSearching(false)
    }, [])

    useEffect(() => 
    {
       setTimeout(() => 
       {
          setValidationMessage('')  
       }, 10000)
    }, [validationMsg])

    useEffect(() => 
    {
    }, [code])

    const whyUs: string[] = [
        "Ease of use",
        "Risk free transaction",
        "Tracked Negation",
        "Assurance"
    ]

    const Confirm = async () => 
    {
        setIsSearching(true)
        await delay(3000)
        if(!code && (code === ""))
        {
            setValidationMessage(PRODUCT_CODE)
            setIsSearching(false)
        } else {
            navigate(`/confirm?product-code=${code}`)
        }
    }

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
        {
            name: 'Electronics',
            value: 4,
            icon: <BsBackpack2Fill />
        }
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
                        <motion.h1 
                            initial={{ y: -30 }}
                            animate={{ y: 1 }}
                            transition={{ delay: 0.5, type: 'spring' }}
                            className="text-[30px] md:text-[44px] text-center md:text-left mb-5 -mt-10 md:-mt-0"
                        >
                            MiddleMan Payment Made Easy
                        </motion.h1> 
                        <p className="text-center md:text-left pr-0 md:pr-20 text-md md:text-xl"
                        >
                            With GPay you can buy and sell anything safely without the risk of being scammed.
                            Transact with Peace of Mind.    
                        </p>  
                        <ul className="mt-4 flex justify-left items-center text-center">
                            {
                                whyUs.map((why, index) => {
                                    return (
                                        <motion.li
                                            initial={{ y: '-100vh' }}
                                            animate={{ y: '00vh' }}
                                            transition={{ delay: .5, duration: .7 }}
                                            key={index} className="flex items-center text-lg py-2 hoverfont-bold text-blue-600 mr-10 hover:text-black cursor-pointer"
                                        >
                                            {why} <BsArrowBarRight className="mt-1 font-bold border-2 text-red-600 text-[17px]" />
                                        </motion.li>
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
                                onChange={(e) => {
                                    let selected: string = e.target.value
                                    if(selected === "")
                                    {
                                        setValidationMessage(PRODUCT_CODE)
                                    } else {
                                        setCode(selected)
                                        setValidationMessage("")
                                    }
                                }}
                            />
                            {/* bg-[#435f88] hover:bg-[#6f7277] */}
                            <button 
                                    className="block w-full bg-[#0878a5] hover:bg-[#056991] border-shadow text-white font-bold p-4 rounded-lg ring-2 ring-inset"
                                    onClick={Confirm}
                                    disabled={isLoading}
                            >
                                {  isSearching ? ( <BeatLoader size={9} color="#fff" />) : ( "Search" )          }
                            </button>
                            { validationMsg && <Message msg={validationMsg} status={`${errMsgStyle} uppercase`} /> }
                        </div>                        
                    </div>
                </div>
            </div>     
            <div 
                className='pt-8 pb-3 bg-[#0878a5] p-5 -mt-10 md:mt-0'
            >
                <div 
                    className='md:container d-flex md:flex mx-auto mt-5 md:mt-5 gap-10 md:py-3 rounded-xl justity-center items-center'
                > 
                    {
                        categories.map((category: CategoryProp, index: number) => {
                            return (                                                               
                                <div 
                                    key={index}
                                    className="flex justify-center items-center w-12/12 md:w-4/12 mb-5 text-md md:text-2xl text-center border-2 border-gray-200 bg-blue-100 md:col-span-6 h-fit md:p-5 rounded-lg"
                                >     
                                    <span 
                                        className="px-5 md:py-1 py-3 text-5xl -mr-5"
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
                <div className="container flex justify-center items-center mx-auto text-white font-bold text-md cursor-pointer mb-20">and many more ...</div>  

                <div 
                    className='container grid md:grid-cols-12 hidden d-flex md:flex mx-auto mt-5 md:mt-10 gap-5 md:py-5 rounded-xl space-x-10'
                > 
                    <div 
                        className="col-span-10 md:col-span-2 mx-auto"
                    >
                        <img src={BuyerAndSellerAgree} width={240} />
                    </div>  
                    <div 
                        className="col-span-10 md:col-span-2 mx-auto"
                    >
                        <img src={BuyerMakePayment} width={240} />
                    </div> 
                    <div 
                        className="col-span-10 md:col-span-2 mx-auto"
                    >
                        <img src={Delivery} width={240} />
                    </div> 
                    <div 
                        className="col-span-10 md:col-span-2 mx-auto"
                    >
                        <img src={Approval} width={240} />
                    </div> 
                    <div 
                        className="col-span-10 md:col-span-2 mx-auto"
                    >
                        <img src={PaymentRelease} width={240} />
                    </div>                  
                </div>

                <div 
                    className='container grid grid-cols-12 md:hidden d-flex md:flex mx-auto mt-5 md:mt-10 gap-5 md:py-5 rounded-xl space-x-10'
                > 
                    <div 
                        className="col-span-12 flex gap-10 mx-auto"
                    >
                        <div 
                            className="col-span-6 md:col-span-2 mx-auto"
                        >
                            <img src={BuyerAndSellerAgree} width={240} />
                        </div>  
                        <div 
                            className="col-span-6 md:col-span-2 mx-auto"
                        >
                            <img src={BuyerMakePayment} width={240} />
                        </div>
                    </div> 
                    <div 
                        className="col-span-12 flex gap-10 mx-auto"
                    >
                        <div 
                            className="col-span-6 md:col-span-2 mx-auto -ml-10"
                        >
                            <img src={Delivery} width={240} />
                        </div>  
                        <div 
                            className="col-span-6 md:col-span-2 mx-auto"
                        >
                            <img src={Approval} width={240} />
                        </div>
                    </div>
                    <div 
                        className="col-span-12 flex justify-center items-center gap-10 mx-auto"
                    >
                        <div 
                            className="col-span-6 md:col-span-2 mx-auto"
                        >
                            <img src={PaymentRelease} width={275} className="-ml-10" />
                        </div>
                    </div>                 
                </div>
                 
                
                 <div 
                     className='md:container md:px-10 d-flex md:flex mx-auto md:p-5 pt-5 mt-10 gap-10 rounded-xl justity-center items-center mb-14'
                 > 
                     <div 
                         className="w-full flex justify-center items-center md:mt-0 mb-5 md:mb-5"
                     >
                         <button 
                                 className="flex justify-center items-center block w-fit bg-[#0878a5] hover:bg-green-600 border-shadow text-white font-bold px-20 py-7 rounded-lg ring-2 ring-inset"
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
                className='w-full bg-white py-10'
            >
                <div 
                        className='container mx-auto md:flex justify-center items-center gap-10 p-5'
                    >
                        <div 
                            className='w-12/12 md:w-6/12 text-2xl h-[500px] border-2 border-gray-200 rounded-xl mb-10 md:mb-0'
                        >
                                
                        </div>
                        <div 
                            className='w-12/12 md:w-6/12 text-2xl h-[500px] border-2 border-gray-200 rounded-xl'
                        >
                                                        
                        </div>
                    </div>
            </div>
        {/* start-transaction */}
        </HomeLayout>
    )
  }
  