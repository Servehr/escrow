import { useEffect, useState } from 'react'
import { HiHome, HiTemplate, HiPuzzle, HiPhoneOutgoing } from 'react-icons/hi'
import { HiMiniPencilSquare, HiMiniPower } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import { appStore } from '../state/store'
import GpayLogo from './Logo'
import clsx from 'clsx'
import { BsFillTelephoneInboundFill, BsXCircle } from 'react-icons/bs'
import { FiMenu } from 'react-icons/fi'
import { logUserOut } from '../auth/hook/useAuth'

export default function WebHeader() 
{    
  const { LogOut } = logUserOut()
  const appState = appStore((state: any) => state)
  // const navigate = useNavigate()
  const [isMenuOpen, setMenu] = useState<boolean>(false)
  const [user, setUser] = useState<any>('')

  useEffect(() => 
  {
      setUser(appState.getUser().token)
      setMenu(false)
      console.log(user)
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
<section 
                        className='md:w-0/12 w-12/12 md:hidden p-2 px-4 flex justify-between relative bg-[#506f9d]'
              >
                  <span className='flex justify-center items-center 10/12 md:absolute z-50 md:-mt-5 mt-1'
                  >
                      <BsFillTelephoneInboundFill 
                          className='text-white w-16' 
                      />
                      {/* <p className='text-white md:text-[14px] font-bold text-lg -ml-4 md:-mt-1'>+23409033333367</p> */}
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
                                className='w-8/12 pt-5 bg-[#435f88] border-blue-500'
                          >
                              <span className='10/12 flex justify-end pr-5'
                              >
                                  <BsXCircle 
                                              className='w-10 h-10 text-white hover:text-green-300 font-bold cursor-pointer' 
                                              onClick={() => { setMenu(false) }}
                                  />
                              </span>
                                {/* starts here  */}
                                <div 
                                      className='p-3 w-full mx-auto flex justify-left items-center mb-5 ml-5 -mt-20'
                                >
                                    <GpayLogo width={200} />
                                </div>
                                <div 
                                      className='p-3 d-flex -mt-10'
                                >
                                    <div  
                                          className='flex justify-left h-[fit] px-10 py-5 text-white gap-3'
                                    >
                                        <div 
                                              className='w-5/12'
                                        >
                                            <img src='' className='h-[90px] w-[90px] flex justify-left rounded-full bg-blue-200 mb-1' />                                                        
                                        </div>
                                        <div 
                                              className='w-7/12'
                                        >                                                        
                                          <div className='w-full flex justify-left font-bold text-[15px]'>Richard Festus</div>
                                          <div className='w-full flex justify-left font-bold text-md'>C.E.O</div>
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
      </>
  )
}
