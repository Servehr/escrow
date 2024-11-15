import React from 'react'
import { HiMiniPower } from 'react-icons/hi2'
import MobileHeader from './MobileHeader'
import DashBoardSideBar from './DashBoardSideBar'
import { logUserOut } from '../hook/useAuth'


type ILayoutProps = {
    children: React.ReactNode,
    pageName: string
}

export default function DashboardLayout({children, pageName}: ILayoutProps) 
{
    const { LogOut } = logUserOut()
    

    return (
          <div 
                className="relative min-h-screen md:flex bg-gray-100"
          >

              <MobileHeader /> 

              <DashBoardSideBar />

              <div 
                    className='w-full'
                >
                    <div 
                          className='md:bg-[#d1dbea] flex justify-between'
                    >
                        <div className='col-span-3 text-2xl p-5'>{pageName}</div>
                        <div className='col-span-6'></div>
                        <div 
                                className='flex col-span-6 font-bold text-md p-5'
                        >
                            {/* <HiOutlineUser className='text-[30px] mx-2 text-blue-600' /> */}
                            <span className='text-[16px] mx-2 text-blue-600 mt-1'>Welcome User</span>
                            <div 
                                    className='flex justify-left font-bold text-md'
                            >
                                <HiMiniPower 
                                        className='mr-1 text-[30px] mt-1 cursor-pointer hover:text-red-600'                                
                                        onClick={LogOut}
                                />
                            </div>
                        </div>
                    </div>

                    <div 
                            className=''
                    >
                        { children }
                    </div>
              </div>

          </div>
    )
}
