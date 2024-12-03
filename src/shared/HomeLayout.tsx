import React from 'react'
import Footer from './Footer'
import WebHeader from './WebHeader'
import MobileHeader from './MobileHeader'

type ILayoutProps = {
    children: React.ReactNode,
    pageName: string
}  

export default function HomeLayout({children, pageName}: ILayoutProps) 
{
    console.log(pageName)

    return (
          <div 
                className="relative min-h-screen md:flex bg-gray-100"
          >

              <MobileHeader /> 

              <div 
                    className='w-full md:bg-[#aac84f]'
                >
                    
                    <WebHeader />

                    <div 
                            className=''
                    >
                        { children }
                    </div>
                    
                    <Footer />
              </div>

          </div>
    )
}
