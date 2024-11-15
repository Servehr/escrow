import { useEffect, useState } from 'react'
import { HiHome, HiTemplate, HiPuzzle, HiPhoneOutgoing } from 'react-icons/hi'
import { HiMiniPencilSquare, HiMiniPower } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import { appStore } from '../state/store'
import GpayLogo from './Logo'
import { logUserOut } from '../hook/useAuth'


export default function WebHeader() 
{
  const appState = appStore((state: any) => state)
  // const navigate = useNavigate()
  const [isMenuOpen, setMenu] = useState<boolean>(false)
  const [user, setUser] = useState<any>()
  const { LogOut } = logUserOut()

  useEffect(() => 
  {
      setUser(appState.getUser().token)
      console.log(isMenuOpen)
  }, [])

    
  const admin = 
  [
      {
          name: "Home",
          url: "/",
          icon: <HiHome className='mr-2 mt-1 text-md' />
      },
      {
          name: "Why Us",
          url: "/why-us",
          icon: <HiMiniPencilSquare className='mr-2 mt-1 text-md' />
      },
      {
          name: "About Us",
          url: "/about-us",
          icon: <HiTemplate className='mr-2 mt-1 text-md' />
      },
      {
          name: "Our Services",
          url: "/services",
          icon: <HiPuzzle className='mr-2 mt-1 text-md' />
      },
      {
          name: "Contact Us",
          url: "/contact-us",
          icon: <HiPhoneOutgoing className='mr-2 mt-1 text-md' />
      },
  ]


  return (
      <>
          <div 
                className='container mx-auto flex justify-between items-center'
                    >
                        <div 
                            className='col-span-3 text-2xl pt-2'
                        >
                            <GpayLogo width={200} /> 
                        </div>
                        <div 
                            className='col-span-6 hidden md:block'
                        >
                            
                            <ul 
                                className='w-full flex gap-10'
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
                                                            className='flex px-5 py-3 rounded-full bg-[#506f9d] hover:bg-[#395988] hover:border-t-2 hover:border-b-2 hover:border-white mb-1 cursor-pointer text-left text-[14px] font-bold text-white hover:text-white'
                                                      >                                                
                                                          {user?.icon} {user?.name}
                                                      </li>
                                                  </Link>
                                        )
                                    })
                                }   
                            </ul>
                        </div>
                        <div 
                                className='flex justify-center items-center gap-1 col-span-3 font-bold text-md px-5 md:px-0'
                        >
                            {/* <HiOutlineUser className='text-[30px] mx-2 text-blue-600' /> */}
                            {/* <span className='text-[16px] mx-2 text-blue-600 mt-1'>Welcome User</span> */}
                            {/* <div 
                                    className='flex justify-left font-bold text-md'
                            >
                                <HiMiniPower className='mr-1 text-[30px] mt-1 cursor-pointer hover:text-red-600'/>
                            </div> */}
                            
                            {
                                !user && <>
                                    <Link to={'/auth/login'} 
                                        className='hover:text-[#506f9d] hover:font-bold px-3 py-1 text-sm hover:border-2 hover:border-[#506f9d] hover:rounded-full flex justify-center items-center'
                                    >
                                        Login
                                    </Link>
                                    <Link to={'/auth/register'} 
                                        className='hover:text-[#506f9d] hover:font-bold px-3 py-1 text-sm hover:border-2 hover:border-[#506f9d] hover:rounded-full flex justify-center items-center'
                                    >
                                        Register
                                    </Link>
                                </>
                            }
                            {
                                user && <>
                                    <Link to={'/dashboard'} 
                                        className='hover:text-[#506f9d] hover:font-bold px-3 py-1 text-sm hover:border-2 hover:border-[#506f9d] hover:rounded-full flex justify-center items-center'
                                    >
                                        Dashboard
                                    </Link>
                                    <Link to={'/#'} 
                                        className='hover:text-red-600 hover:font-bold px-3 py-1 text-sm hover:border-2 hover:border-red-600 hover:rounded-full flex justify-center items-center'
                                        onClick={LogOut}
                                    >
                                        <HiMiniPower className='mr-1 text-xl mt-0 cursor-pointer hover:text-red-600'/> Logout
                                    </Link>
                                </>
                            }
                        </div>
                    </div>
      </>
  )
}
