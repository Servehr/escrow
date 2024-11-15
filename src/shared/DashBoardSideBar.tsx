import { useState, useEffect } from "react"
import { HiHome, HiOutlineUserGroup, HiOutlineViewList, HiUser, HiViewGrid } from "react-icons/hi"
import { HiMiniPencilSquare, HiCog6Tooth, HiMiniPower } from "react-icons/hi2"
import { Link } from "react-router-dom"
import GpayLogo from "./Logo"
import { logUserOut } from "../hook/useAuth"
import { appStore } from "../state/store"


export default function DashBoardSideBar()
{
  const userState = appStore((state) => state)
  const [isMenuOpen, setMenu] = useState<boolean>(false)
  const { LogOut } = logUserOut()

  useEffect(() => 
  {
      setMenu(false)
      console.log({isMenuOpen})
  }, [])
    
  const admin = 
  [
      {
          name: "Dashboard",
          url: "/dashboard",
          icon: <HiHome className='mr-2 mt-1 text-md' />
      },
      {
          name: "Create Transactions",
          url: "/dashboard/create-transaction",
          icon: <HiMiniPencilSquare className='mr-2 mt-1 text-md' />
      },
      {
          name: "Transactions",
          url: "/dashboard/transactions",
          icon: <HiMiniPencilSquare className='mr-2 mt-1 text-md' />
      },
      {
          name: "Users",
          url: "/dashboard/users",
          icon: <HiOutlineUserGroup className='mr-2 mt-1 text-md' />
      },
      {
          name: "Payment",
          url: "/dashboard/payments",
          icon: <HiViewGrid className='mr-2 mt-1 text-md' />
      },
      {
          name: "Services",
          url: "/dashboard/services",
          icon: <HiOutlineViewList className='mr-2 mt-1 text-md' />
      },
      {
          name: "Profile",
          url: "/dashboard/profile",
          icon: <HiUser className='mr-2 mt-1 text-md' />
      },
      {
          name: "Settings",
          url: "/dashboard/settings",
          icon: <HiCog6Tooth className='mr-2 mt-1 text-md' />
      },
  ]

  return (
      <>
          <div 
                    className="sidebar bg-[#435f88] text-blue-100 w-[400px] space-y-6 pt-1 pb-7 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out"
                    >
                    <div 
                          className='p-3 w-full mx-auto flex justify-center items-center -mb-12'
                    >
                        <GpayLogo width={200} />
                    </div>
                    <div 
                          className='p-3 d-flex justify-center items-center mx-auto -mt-10'
                    >
                        <div  
                              className='flex justify-left h-[fit] px-2 py-5 text-white gap-4'
                        >
                            <div 
                                  className='w-4/12'
                            >
                                <img src='' className='h-[80px] w-[110px] flex justify-left rounded-full bg-blue-200 mb-3' />                                                        
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
                                        onClick={LogOut}
                                />
                            </div>
                            </div>
                        </div>
                        <ul 
                              className='w-full mt-7'
                        >
                            {
                              
                                admin.map((user, index) => {
                                  return (
                                      <Link 
                                            to={`${user?.url}`}
                                            key={index}
                                      >
                                          {/* [#bdbcbb] */}
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
              </div>
      </>
  )
}
