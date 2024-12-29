import { useState, useEffect } from "react"
import { HiHome, HiOutlineUserGroup, HiOutlineViewList, HiUser, HiViewGrid } from "react-icons/hi"
import { HiCog6Tooth, HiMiniPencilSquare, HiMiniPower } from "react-icons/hi2"
import { Link } from "react-router-dom"
import GpayLogo from "./Logo"
import { appStore } from "../state/store"
import { USAGE_PATH } from "../constant/Path"
import { Logout } from "../component/Logout"


export default function DashBoardSideBar()
{
  const userState = appStore((state) => state)
  const [isMenuOpen, setMenu] = useState<boolean>(false)
  const [openLogOut, setIsLogOut] = useState<boolean>(false)

  useEffect(() => 
  {
      setMenu(false)
      console.log({isMenuOpen})
  }, [])
    
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

  return (
      <>
          <div 
                    className="sidebar bg-[#076d96] text-blue-100 w-[400px] space-y-6 pt-1 pb-7 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out"
                    >
                    <div 
                          className='p-3 w-full mx-auto flex justify-left items-center'
                    >
                        <GpayLogo width={70} />
                        <span className="font-bold ml-5 text-2xl">MIDDLEMAN</span>
                    </div>
                    <div 
                          className='p-3 d-flex justify-center items-center mx-auto mt-16'
                    >
                        <div  
                              className='flex justify-left h-[fit] px-2 py-5 text-white gap-4'
                        >
                            <div 
                                  className='w-4/12'
                            >
                                <img src={`${USAGE_PATH.PROFILE_PICTURE}${userState.getPassport()}`} className='h-[70px] -mt-2  w-[180px] flex justify-left p-1 rounded-lg bg-blue-200 mb-3' />                                                        
                            </div>
                            <div 
                                  className='w-8/12'
                            >                                                        
                            <div className='w-full flex justify-left font-bold text-[15px]'>{userState.getUser().firstname} {userState.getUser().surname}</div>
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
                        </div>
                        <ul 
                              className='w-full mt-7'
                        >
                            {                              
                                sidebar.map((nav, index) => {
                                  let contains = nav?.type?.includes(userState.getUser().userType)
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
                                                      className='flex px-5 mb-2 border-shadow py-3 bg-[#0878a5] hover:bg-[#aac84f] border-b-2 border-gray-400 hover:border-t-2 hover:border-b-2 hover:border-white cursor-pointer text-left text-[14px] font-bold text-gray-300 hover:text-black'
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
                    </div>
              </div>

              { openLogOut && <Logout openLogOutModal={openLogOut} onClick={() => console.log("")} /> }
      </>
  )
}
