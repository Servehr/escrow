import { useEffect, useState } from 'react'
import { HiHome, HiTemplate, HiPhoneOutgoing, HiOutlineUserGroup, HiOutlineViewList, HiUser, HiViewGrid } from 'react-icons/hi'
import { HiCog6Tooth, HiMiniPencilSquare, HiMiniPower } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import { appStore } from '../state/store'
import GpayLogo from './Logo'
import clsx from 'clsx'
import { BsXCircle } from 'react-icons/bs'
import { FiMenu } from 'react-icons/fi'
import { Logout } from '../component/Logout'
import { USAGE_PATH } from '../constant/Path'

export default function WebHeader() 
{    
  const appState = appStore((state: any) => state)
  const [openLogOut, setIsLogOut] = useState<boolean>(false)
  const [isMenuOpen, setMenu] = useState<boolean>(false)
  const [user, setUser] = useState<any>('')
  const [x] = useState<boolean>(false)

  useEffect(() => 
  {
      setUser(appState.getUser().token)
      setMenu(false)
  }, [])

  useEffect(() => 
  {
     console.log(user)
  }, [x])

  const sidebar = 
  [
      {
          name: "Dashboard",
          url: "/dashboard",
          icon: <HiHome className='mr-2 mt-1 text-md' />,
          type: ['member', 'admin']
      },
      {
          name: "Create Transactions",
          url: "/dashboard/create-transaction",
          icon: <HiMiniPencilSquare className='mr-2 mt-1 text-md' />,
          type: ['member', 'admin']
      },
      {
          name: "Transactions",
          url: "/dashboard/transactions",
          icon: <HiMiniPencilSquare className='mr-2 mt-1 text-md' />,
          type: ['member', 'admin']
      },
      {
          name: "Users",
          url: "/dashboard/users",
          icon: <HiOutlineUserGroup className='mr-2 mt-1 text-md' />,
          type: ['admin']
      },
      {
          name: "Payment History",
          url: "/dashboard/payments",
          icon: <HiViewGrid className='mr-2 mt-1 text-md' />,
          type: ['member', 'admin']
      },
      {
          name: "Services",
          url: "/dashboard/services",
          icon: <HiOutlineViewList className='mr-2 mt-1 text-md' />,
          type: ['admin']
      },
      {
          name: "Profile",
          url: "/dashboard/profile",
          icon: <HiUser className='mr-2 mt-1 text-md' />,
          type: ['member', 'admin']
      },
      {
          name: "Change Password",
          url: "/dashboard/change-password",
          icon: <HiCog6Tooth className='mr-2 mt-1 text-md' />,
          type: ['member', 'admin']
      },
      {
          name: "Messages",
          url: "/dashboard/messages",
          icon: <HiCog6Tooth className='mr-2 mt-1 text-md' />,
          type: ['admin']
      },
      {
          name: "Settings",
          url: "/dashboard/settings",
          icon: <HiCog6Tooth className='mr-2 mt-1 text-md' />,
          type: ['admin']
      },
  ]
    
  const admin = 
  [
      {
          name: "Home",
          url: "/",
          icon: <HiHome className='mr-2 mt-1 text-md' />
      },
    //   {
    //       name: "Why Us",
    //       url: "/why-us",
    //       icon: <HiMiniPencilSquare className='mr-2 mt-1 text-md' />
    //   },
      {
          name: "About Us",
          url: "/about-us",
          icon: <HiTemplate className='mr-2 mt-1 text-md' />
      },
    //   {
    //       name: "Our Services",
    //       url: "/services",
    //       icon: <HiPuzzle className='mr-2 mt-1 text-md' />
    //   },
      {
          name: "Contact Us",
          url: "/contact-us",
          icon: <HiPhoneOutgoing className='mr-2 mt-1 text-md' />
      },
  ]

  return (
        <>
            <section 
                className='md:w-0/12 w-12/12 md:hidden p-2 px-4 flex justify-between relative bg-[#076d96]'
            >
                <span className='flex justify-center items-center 10/12 md:absolute z-50 md:-mt-5 mt-1'
                >
                {/* <BsFillTelephoneInboundFill 
                    className='text-white w-16' 
                /> */}
                <p className='text-white text-[16px] font-bold md:-mt-1'>Welcome {appState.getUser().firstname} {appState.getUser().surname}</p>
                </span>
                <FiMenu 
                    className='text-4xl mr-1 text-white cursor-pointer md:hidden' 
                    onClick={() => {
                        setMenu(true)
                    }}
                />
              </section>  
              <div className="max-w-[1440px] mx-auto px-8 px-3 md:hidden md:p-3 z-50 -mb-2"
              > 
                  <div className={
                        clsx("fixed z-50 h-screen w-screen lg:hidden bg-black/50 top-0 right-0 -translate-x-full duration-500", isMenuOpen && "transition ease-out duration-500 translate-x-0")
                      }
                  >
                      <div 
                            className='flex text-black left-0 top-0 h-screen z-50 w-12/12'
                      >
                          <div 
                                className='w-8/12 pt-5 bg-[#72950a] border-blue-500'
                          >                               
                             { appState.getUser().Firtsname }
                              <span className='10/12 flex justify-end pr-5'
                              >
                                  <BsXCircle 
                                              className='w-10 h-10 text-white hover:text-green-300 font-bold cursor-pointer' 
                                              onClick={() => setMenu(false)}
                                  />
                              </span>
                                {/* starts here  */}
                                <div 
                                      className='p-3 w-full mx-auto flex justify-left items-center mb-5 ml-10 -mt-14'
                                >
                                    <GpayLogo width={90} />
                                </div>
                                <div 
                                      className='p-3 d-flex -mt-5'
                                >
                                    <div  
                                        className='flex justify-left h-[fit] px-2 py-5 text-white gap-4'
                                    >
                                    {
                                        appState.getUser().userType && <>
                                            <div 
                                                className='w-4/12'
                                            >
                                                <img src={`${USAGE_PATH.PROFILE_PICTURE}${appState.getPassport()}`} className='h-[70px] -mt-2  w-[180px] flex justify-left p-1 rounded-lg bg-blue-200 mb-3' />                                                        
                                            </div>
                                            <div 
                                                className='w-8/12'
                                            >                                                        
                                                <div className='w-full flex justify-left font-bold text-[15px]'>{appState.getUser().firstname} {appState.getUser().surname}</div>
                                                {/* <div className='w-full flex justify-left font-bold text-[15px]'>{userState.getUser().token}</div> */}
                                                {/* <div className='w-full flex justify-left font-bold text-md'>C.E.O</div> */}
                                                <div 
                                                    className='w-full flex justify-left font-bold text-md'
                                                >
                                                    <HiMiniPower 
                                                            className='mr-1 text-2xl mt-2 cursor-pointer hover:text-red-600'
                                                            onClick={() => setIsLogOut(true)}
                                                    />
                                                </div>
                                            </div>
                                            </>
                                        }
                                    </div>
                                    { 
                                        appState.getUser().userType &&
                                        <ul 
                                            className='w-full'
                                        >
                                            {                              
                                                sidebar.map((nav, index) => {
                                                let contains = nav?.type?.includes(appState.getUser().userType)
                                                return (
                                                    <>
                                                        {
                                                            contains && 
                                                            <Link 
                                                                to={`${nav?.url}`}
                                                                key={index}
                                                            >
                                                                {/* [#bdbcbb] */}
                                                                <li 
                                                                    className='flex px-5 mb-1 border-shadow py-3 bg-[#0878a5] hover:bg-[#aac84f] border-b-2 border-gray-400 hover:border-t-2 hover:border-b-2 hover:border-white cursor-pointer text-left text-[14px] font-bold text-gray-300 hover:text-black'
                                                                >                                                
                                                                    {nav?.icon} {nav?.name}
                                                                </li>
                                                            </Link>
                                                        }
                                                    </>
                                                )
                                                })
                                            }   
                                        </ul> 
                                    }
                                    <ul 
                                        className='w-full mt-2'
                                    >
                                        {
                                          
                                            admin.map((user, index) => {
                                              return (
                                                  <Link 
                                                        to={`${user?.url}`}
                                                        key={index}
                                                        onClick={() => { setMenu(false) }}
                                                  >
                                                      <li 
                                                            className='flex px-5 py-3 bg-[#506f9d] hover:bg-[#395988] hover:border-t-2 hover:border-b-2 hover:border-white mb-1 cursor-pointer text-left text-[14px] font-bold text-white hover:text-white'
                                                      >                                                
                                                          {user?.icon} {user?.name}
                                                      </li>
                                                  </Link>
                                              )
                                            })
                                        }   
                                    </ul>                    
                                </div>
                                {/* ends here  */}
                          </div>                      
                          <div 
                                className='w-4/12 backdrop-blur-sm'                            
                                onClick={() => {
                                  setMenu(false)
                                }}
                          >    
                                               
                        </div>
                      </div>
                  </div>
              </div>             

             { openLogOut && <Logout openLogOutModal={openLogOut} onClick={() => console.log("")} /> }
      </>
  )
}
