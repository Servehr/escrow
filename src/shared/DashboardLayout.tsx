import React from 'react'
// import HeaderNavigation from '../../../components/shared/HeaderNavigation'
// import Footer from '../../../components/shared/Footer'
import { HiBookmarkSquare, HiCog6Tooth, HiEnvelope, HiHome, HiMapPin, HiMiniAdjustmentsHorizontal, HiMiniHashtag, HiMiniPencil, HiMiniPencilSquare, HiMiniPower, HiMiniShoppingCart, HiMiniUser, HiMiniUserCircle, HiMiniUsers, HiMiniViewColumns } from 'react-icons/hi2'
import { HiAcademicCap, HiBookOpen, HiOutlineTag } from 'react-icons/hi'
import { BsFillTelephoneInboundFill, BsXCircle } from 'react-icons/bs'
import { FiMenu } from 'react-icons/fi'
import { useState, useEffect } from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import Logo from './Logo'


type ILayoutProps = {
    children: React.ReactNode,
    pageName: string
}

export default function DashboardLayout({children, pageName}: ILayoutProps) 
{
    const [isMenuOpen, setMenu] = useState<boolean>(false)

    useEffect(() => {
      setMenu(false)
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
            name: "Members",
            url: "/dashboard/members",
            icon: <HiMiniUser className='mr-2 mt-1 text-md' />
        },
        // {
        //     name: "Adverts",
        //     url: "/dashboard/adverts",
        //     icon: <HiMiniUserCircle className='mr-2 mt-1 text-md' />
        // },
        // {
        //     name: "Plans/Packages",
        //     url: "/dashboard/plans",
        //     icon: <HiOutlineTag className='mr-2 mt-1 text-md' />
        // },
        // {
        //     name: "FAQS",
        //     url: "/dashboard/faqs",
        //     icon: <HiBookmarkSquare className='mr-2 mt-1 text-md' />
        // },
        // {
        //     name: "Location",
        //     url: "/dashboard/location",
        //     icon: <HiMapPin className='mr-2 mt-1 text-md' />
        // },
        {
            name: "Services",
            url: "/dashboard/services",
            icon: <HiMiniUsers className='mr-2 mt-1 text-md' />
        },
        // {
        //     name: "CMS",
        //     url: "/dashboard/cms",
        //     icon: <HiMiniAdjustmentsHorizontal className='mr-2 mt-1 text-md' />
        // },
        // {
        //     name: "Contact Messages",
        //     url: "/dashboard/contact-messages",
        //     icon: <HiEnvelope className='mr-2 mt-1 text-md' />
        // },
        {
            name: "Settings",
            url: "/dashboard/settings",
            icon: <HiCog6Tooth className='mr-2 mt-1 text-md' />
        },
    ]

    return (
          <div 
                className="relative min-h-screen md:flex"
          >

              <section 
                        className='md:w-0/12 w-12/12 md:hidden p-2 flex justify-between relative bg-gray-600'
              >
                  <span className='flex justify-center items-center 10/12 md:absolute z-50 md:-mt-5 mt-1'
                  >
                      <BsFillTelephoneInboundFill 
                          className='text-white w-16' 
                      />
                      <p className='text-white md:text-[14px] font-bold text-lg -ml-4 md:-mt-1'>+23409033333367</p>
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
                                    <Logo />
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
                                          <div className='w-full flex justify-left font-bold text-[15px]'>Emeka Obinna </div>
                                          <div className='w-full flex justify-left font-bold text-md'>Manager</div>
                                          <div className='w-full flex justify-left font-bold text-md'><HiMiniPower className='mr-1 text-2xl mt-2 cursor-pointer hover:text-red-600'/></div>
                                        </div>
                                    </div>
                                    <ul className='w-full'>
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

              <div 
                    className="sidebar bg-[#435f88] text-blue-100 w-[400px] space-y-6 pt-1 pb-7 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out"
                    >
                    <div 
                          className='p-3 w-full mx-auto flex justify-center items-center -mb-12 -mt-3'
                    >
                        <Logo />
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
                              <div className='w-full flex justify-left font-bold text-[15px]'>Emeka Obinna</div>
                              <div className='w-full flex justify-left font-bold text-md'>Manager</div>
                              <div className='w-full flex justify-left font-bold text-md'><HiMiniPower className='mr-1 text-2xl mt-2 cursor-pointer hover:text-red-600'/></div>
                            </div>
                        </div>
                        <ul className='w-full mt-2'>
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

              <div 
                    className='w-full'
                >
                    <div 
                          className='bg-gray-300 flex justify-between'
                    >
                        <div className='col-span-3 text-2xl p-5'>{pageName}</div>
                        <div className='col-span-6'></div>
                        <div className='col-span-6 font-bold text-md p-5'>Welcom User</div>
                    </div>
                    
                  { children }
              </div>

          </div>
    )
}
