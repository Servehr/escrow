import HomeLayout from "../shared/HomeLayout"

export const Home = () =>
  {
    return (
        <HomeLayout pageName="Home"
        >
        <div className='pt-10 bg-white mt-10'
        >
            <div 
                className="container d-flex md:flex mx-auto -mt-16 md:mt-0"
            >
                
                <div 
                        className='w-2/2 md:w-1/2 container'
                >                                
                    <div 
                        className="col-span-12 md:col-span-6 h-full bg-white p-5 pt-10 rounded-md text-gray-600 font-semibold text-lg"
                    >
                        
                    </div>
                </div>
                <div 
                     className='w-2/2 md:w-1/2 container'
                >                                
                    <div 
                        className="col-span-12 md:col-span-6 h-fit bg-white py-7 px-3 h-[320px] mb-20 md:rounded-lg"
                    >                  
                    
                    </div>
                </div>

            </div>
        </div>
        {/* start-transaction */}
        </HomeLayout>
    )
  }
  