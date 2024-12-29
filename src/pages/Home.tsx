import { BsArrowBarRight, BsBackpack2Fill } from "react-icons/bs"
import HomeLayout from "../shared/HomeLayout"
import { BeatLoader } from "react-spinners"
import { useEffect, useRef, useState } from "react"
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
// import Footer from "../shared/Footer"
// import { HiMiniPencilSquare } from "react-icons/hi2"
// import { Logout } from "../component/Logout"
// import GpayLogo from "../shared/Logo"
// import { appStore } from "../state/store"


type CategoryProp = 
{
    name: string
    value: number
    icon: any
}

export const Home = () =>
{
    const navigate = useNavigate()
    // const appState = appStore((state: any) => state)  
    const viewRef = useRef<HTMLDivElement | null>(null)
    // const navigate = useNavigate()
    // const [isMenuOpen, setMenu] = useState<boolean>(false)
    // const [user, setUser] = useState<any>()
    // const [openLogOut, setIsLogOut] = useState<boolean>(false)
    
    useEffect(() => 
    {
        // setUser(appState.getUser().token)
        // console.log(isMenuOpen)
    }, [])
    // const viewRef = useRef<HTMLDivElement | null>(null)

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
                        <p className="text-center md:text-left pr-0 md:pr-20 text-md md:text-xl "
                        >
                            The best escrow payment service company for Nigeria, Africa and international use, offering reliable online and offline buyer-protection, seller-protection, transaction and trade assurance solutions. Available to individuals, freelancers, small businesses, large companies and organizations.     
                        </p>  
                        <p className="text-center md:text-left pr-0 md:pr-20 text-md md:text-xl mt-4"
                        >
                            With Middleman you can buy and sell anything safely without the risk of being scammed.
                            Transact with Peace of Mind.    
                        </p> 
                        <ul 
                            className="mt-4 d-flex md:flex justify-center items-center text-center md:-ml-16"
                        >
                            {
                                whyUs.map((why, index) => {
                                    return (
                                        <motion.li
                                            initial={{ y: '-100vh' }}
                                            animate={{ y: '00vh' }}
                                            transition={{ delay: .5, duration: .7 }}
                                            key={index} className="flex justify-center items-center text-lg py-2 hoverfont-bold text-blue-600 mr-10 hover:text-black cursor-pointer"
                                        >
                                            {why} <BsArrowBarRight className="mt-1 ml-1 font-bold border-2 text-red-600 text-[17px]" />
                                        </motion.li>
                                    )
                                })
                            }
                        </ul>

                        <div 
                            className="flex justify-left items-center gap-5 -mt-10 md:mt-0"
                        >
                            {/* bg-[#aac84f] */}
                            <div 
                                className="bg-[#bbb84f] w-fit px-5 py-2 rounded-xl text-white hover:bg-green-400 font-bold cursor-pointer mt-16 md:mt-20 text-[11px] md:text-[16px]"
                                onClick={
                                    () => {
                                        const readMore = document.querySelector('#bbuyers')
                                        readMore?.scrollIntoView({ behavior: 'smooth' })
                                    }
                                }
                            >
                                Buyers Benfit {'>>'}
                            </div>
                            <div 
                                className="bg-[#bbb84f] w-fit px-5 py-2 rounded-xl text-white hover:bg-green-400 font-bold cursor-pointer mt-16 md:mt-20 text-[11px] md:text-[16px]"
                                onClick={
                                    () => {
                                        const readMore = document.querySelector('#bsellers')
                                        readMore?.scrollIntoView({ behavior: 'smooth' })
                                    }
                                }
                            >
                                Sellers Benefit {'>>'}
                            </div>
                            <div 
                                className="bg-red-700 w-fit px-5 py-2 rounded-xl text-white hover:bg-green-400 font-bold cursor-pointer mt-16 md:mt-20 text-[10px] md:text-[16px]"
                                onClick={
                                    () => {
                                        navigate('/dashboard/create-transaction')
                                        Search()
                                        // const readMore = document.querySelector('#initiate')
                                        // readMore?.scrollIntoView({ behavior: 'smooth' })
                                    }
                                }
                            >
                                Start Transaction {'>>'}
                            </div>
                        </div> 
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
                        className='w-2/2 md:w-1/2 md:container md:px-10 md:px-0 rounded-xl mt-14 md:mt-0 justify-center items-center'
                    >                                
                        <div 
                            className="col-span-12 md:col-span-6 h-fit md:p-10 md:rounded-lg"
                        >
                            <input  
                                className="w-full border mb-3 rounded-md p-3 bg-opacity-100 h-[80px] rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-[20px] outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out" 
                                type="text" name="code" id="code" placeholder="Enter Product Code"
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
                                {  isSearching ? ( <BeatLoader size={9} color="#fff" />) : ( "Search" )  }
                            </button>
                            { validationMsg && <Message msg={validationMsg} status={`${errMsgStyle} uppercase`} /> }
                        </div>     

                        <div 
                            className="flex justify-center items-center"
                        >
                            <div 
                                className="bg-blue-400 w-fit px-5 py-2 rounded-xl text-white hover:bg-green-400 font-bold cursor-pointer mt-16 md:mt-20 text-[12px] md:text-[16px]"
                                onClick={
                                    () => {
                                        const readMore = document.querySelector('#more')
                                        readMore?.scrollIntoView({ behavior: 'smooth' })
                                    }
                                }
                            >
                                Read About Us {'>>'}
                            </div>
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
                    id="initate"
                    ref={viewRef}
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
                    id="initiate"
                    ref={viewRef}
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
                             {  isLoading ? ( <BeatLoader size={9} color="#fff" />) : ( "Start Transaction" )   }
                         </button>
                     </div>
                 </div>
            </div>
                                           
            <div 
                className='container w-full bg-white py-10 mx-auto px-6 md:px-10'
                id="more"
                ref={viewRef}
            >
                <p 
                    className='w-full text-[30px] md:text-[22px] font-bold'
                >
                    About Middleman
                </p>
                <p 
                    className='w-full text-[16px] md:text-[17px]'
                >
                    Nigeria's Award-Winning Escrow Service Platform
                </p>
                <p 
                    className='w-full text-[16px] md:text-[18px] mt-5'
                >
                    Middleman is an eCommerce and ICT company that is popular for its buyer and seller protection service, in which it receives and secures payment from a buyer, and then releases it to the seller when the buyer has received the transacted goods or services in pre-agreed condition.
                </p>
                <p 
                    className='w-full text-[16px] md:text-[18px] mt-5'
                >
                    Middleman helps to protect each party from any fraud or foul play from the other, thereby enhancing trust in online transactions and supporting the growth of micro, small and medium businesses.
                </p>
                <p 
                    className="px-4 py-2 mt-4 bg-blue-500 hover:bg-green-500 rounded-lg text-white w-fit cursor-pointer"
                    onClick={
                        () => {
                            navigate('/about-us')
                        }
                    }
                >
                    Read More
                </p>
            </div>
                                           
            <div 
                className='w-full bg-white py-10 mx-auto px-6 md:px-20'
                id="bbuyers"
                ref={viewRef}
            >
                <div 
                    className="container mx-auto md:px-10"
                >
                    <p 
                        className='w-full text-[30px] md:text-[22px] font-bold'
                    >
                        Benefit for Buyers
                    </p>
                    <p 
                        className='w-full text-[16px] md:text-[18px] mt-5'
                    >
                        Making money is risky enough, spending it shouldn't be.
                    </p> 
                    <p 
                        className='w-full text-[16px] md:text-[18px] mt-5'
                    >
                        The ultimate benefit of using EscrowLock as a buyer is peace of mind.
                    </p>
                    <p 
                        className='w-full text-[16px] md:text-[18px] mt-5'
                    >
                        Instead of paying to the seller directly (and run the risk of having them make away with your money), you make the payment to our special escrow bank account so that we can lock it there and then ask the seller to send you the goods or provide you with the services paid for. 
                        When genuine sellers become aware that you have released the money to us (a trusted independent body), they become confident that you are indeed serious, so they go ahead with providing you with the required product/service even if it means borrowing to fund it.
                        However, mischievous sellers or outright fraudsters will not want to continue with the transaction as their aim of directly obtaining money from you has been defeated.
                    </p>
                    <p 
                        className='w-full text-[16px] md:text-[18px] mt-5'
                    >
                        {'So when you use EscrowLock, you won’t have to spend your precious time feeling anxious or worried if the goods or service you paid for will be delivered at all, or if a substandard quality is what you’ll receive.'}
                        <br/>
                        You also get to avoid any chance of having heartbreak or depression that could stem from realizing that you have been duped of your hard earned money.
                    </p>
                    <p 
                        className='w-full text-[16px] md:text-[18px] mt-5'
                    >
                        {'Once you notice any foul play from the other party while using EscrowLock, simply raise a dispute and we’d investigate and send back your money (less our service charge) if we confirm the foul play.'}
                    </p>
                </div>
            </div>
                                           
            <div 
                className='w-full bg-white py-10 px-3 -mt-12'
                id="bsellers"
                ref={viewRef}
            >
                <div 
                        className='container grid grid-cols-12 mx-auto md:d-flex justify-center gap-1 rounded-lg'
                    >
                        
                    <div className="col-span-12 p-3">
                        <p 
                            className='w-full text-[30px] md:text-[22px] font-bold'
                        >
                            Benefit for Sellers
                        </p>
                        </div>
                    <div 
                        className="d-flex md:flex col-span-12 space-x-3 m-3"
                    >
                        <div 
                            className='col-span-12 md:col-span-4 rounded-xl mb-1 md:mb-0 p-3 border-2 border-blue-100'
                        >
                            <p className="text-[15px] md:text-[18px] font-bold uppercase mb-3 bg-blue-300 px-2 py-2 rounded-md">Get more sales</p>  
                            <p 
                              className="text-[15px] md:text-[18px] mb-3"
                            >
                                A major challenge that micro and small scale enterprises (including those run by individuals) face is the issue of trust when it comes to settling payment and actual exchange of goods and services. 
                            </p>  
                            <p 
                              className="text-[15px] md:text-[18px]"
                            >
                                As a seller, some customers may be genuinely interested in what you are selling but may not go ahead to patronize you due to uncertainty on what may happen after they make payment.
                                Lots of small businesses lose sales because of this.
                            </p>  
                            <p 
                              className="text-[15px] md:text-[18px]"
                            >
                                Using EscrowLock as a trusted middleman that momentarily holds the transaction amount gives the buyers the confidence that you are genuine, since they can easily get back their money from EscrowLock should anything go wrong from your end.  
                            </p>  
                            <p 
                              className="text-[15px] md:text-[18px]"
                            >
                                This encourages a lot of them to purchase your goods/ services.
                            </p>      
                        </div>
                        <div 
                            className='col-span-12 md:col-span-4 rounded-xl mb-1 md:mb-0 p-3 border-2 border-blue-100'
                        >
                            <p className="text-[15px] md:text-[18px] font-bold uppercase mb-3 bg-blue-300 px-2 py-2 rounded-md">Avoid Unserious Buyers and Risk of Pay-On-Delivery</p>  
                            <p 
                              className="text-[15px] md:text-[18px] mb-3"
                            >
                                Some sellers have tried resorting to Pay-On-Delivery in the bid to manage skepticism and enhance customers trust.
                            </p>  
                            <p 
                              className="text-[15px] md:text-[18px]"
                            >
                                This has not worked well at all as it leaves room for a lot of unserious buyers to order for products, only to change their minds later and either switch off their phones or not respond to calls from delivery agents. This incurs hefty losses on the sellers. Using EscrowLock is a good way to avoid the risk with Pay-On-Delivery and also sieve off unserious buyers.
                            </p>      
                        </div>
                        <div 
                            className='col-span-12 md:col-span-4 rounded-xl mb-1 md:mb-0 p-3 border-2 border-blue-100'
                        >
                            <p className="text-[15px] md:text-[18px] font-bold uppercase mb-3 bg-blue-300 px-2 py-2 rounded-md">Delay on business Registration</p>  
                            <p 
                              className="text-[15px] md:text-[18px] mb-3"
                            >
                                Registering a business can have some advantages, but it also comes with other government and banking responsibilities that may be quite burdensome and not worth it for a starter.
                            </p>  
                            <p 
                              className="text-[15px] md:text-[18px]"
                            >
                                As an individual who sells products or services, it is usually best to only register a business after you must have run it for a reasonable period of time. 
                                This affords you the chance to know how lucrative the business is, and to decide if you would like to continue running it and if it will be worth registering.
                            </p>  
                            <p 
                              className="text-[15px] md:text-[18px]"
                            >
                                So, while you take your time to make a decision, you could always make your sales through EscrowLock and enjoy all the benefits of a registered business. 
                            </p>        
                        </div>
                        </div>
                </div>
                <div 
                        className='container grid grid-cols-12 mx-auto md:flex justify-center gap-1 mt-5 rounded-lg space-x-3 m-3'
                    >
                        <div 
                            className='col-span-12 md:col-span-4 rounded-xl mb-1 md:mb-0 p-3 border-2 border-blue-100'
                        >
                            <p className="text-[15px] md:text-[18px] font-bold uppercase mb-3 bg-blue-300 px-2 py-2 rounded-md">Transact from Home, confidently</p>  
                            <p 
                              className="text-[15px] md:text-[18px] mb-3"
                            >
                                On certain occasions, buyers may like to visit your business location to enable them see and be sure of what they are buying before making payment – to minimize risk of fraud or avoid stories that touch. 
                            </p>  
                            <p 
                              className="text-[15px] md:text-[18px]"
                            >
                                However, renting a business premises can be costly and keeping up with the maintenance and regulatory requirements can be stressful. 
                            </p>  
                            <p 
                              className="text-[15px] md:text-[18px]"
                            >
                                Using EscrowLock can give some assurance to your customers and eliminate the need for them to visit your premises.
                            </p>   
                            <p 
                              className="text-[15px] md:text-[18px]"
                            >
                                So you save money on renting a shop or office space and enjoy the convenience of running your business from home.
                            </p>        
                        </div>
                        <div 
                            className='col-span-12 md:col-span-4 rounded-xl mb-1 md:mb-0 p-3 border-2 border-blue-100'
                        >
                            <p className="text-[15px] md:text-[18px] font-bold uppercase mb-3 bg-blue-300 px-2 py-2 rounded-md">Keep Safe from Armed Robbers and Kidnappers</p>  
                            <p 
                              className="text-[15px] md:text-[18px] mb-3"
                            >
                                There have been several stories in recent times about how criminals pose as genuine buyers on different online forums to lure unsuspecting sellers to a physical location where they get to rob them. 
                            </p>  
                            <p 
                              className="text-[15px] md:text-[18px]"
                            >
                                A particular case was one that happened at Igando, Lagos State, in which two young men connected with a seller on Jiji.ng and then robbed the seller of his ware (a fairly used mobile phone) at gun point. 
                            </p>  
                            <p 
                              className="text-[15px] md:text-[18px]"
                            >
                                Although the buyers were extra-judicially killed by supposed members of the police force, this highlight the risks sellers may face during physical transactions.
                            </p>   
                            <p 
                              className="text-[15px] md:text-[18px]"
                            >
                                Using EscrowLock can help avoid such risks associated with physical interaction while also ensuring safety of transaction. 
                            </p>        
                        </div>
                </div>
            </div>
            
        {/* start-transaction */}
        </HomeLayout>
    )
  }
  