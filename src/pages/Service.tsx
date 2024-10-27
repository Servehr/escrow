import HomeLayout from "../shared/HomeLayout"

export const Service = () =>
  {
    return (
        <HomeLayout pageName="Contact Us"
        >
            <div className='pt-10 bg-white mt-10'
            >
                <div 
                    className="container d-flex md:flex mx-auto -mt-16 md:mt-0"
                >
                    
                    <div 
                            className='w-2/2 md:w-1/2 container'
                    > 
                        Service
                    </div>
                    <div 
                         className='w-2/2 md:w-1/2 container'
                    >                                
                        {/* <div 
                                className="col-span-12 md:col-span-6 h-fit bg-white py-7 px-3 md:border-2 md:border-gray-200 border-shadow md:rounded-lg"
                        >    
                        </div> */}
                    </div>
                </div>
            </div>            
                                           
            <div 
                className='w-full py-80 bg-white'
            >
                <div 
                        className='container mx-auto flex justify-between items-center gap-5'
                    >
                        <div 
                            className='col-span-3 text-2xl'
                        >
                                
                        </div>
                        <div 
                            className='col-span-3 text-2xl pt-2'
                        >
                                                            
                        </div>
                        <div 
                            className='col-span-3 text-2xl pt-2'
                        >
                                                               
                        </div>
                        <div 
                            className='col-span-3 text-2xl pt-2'
                        >
                                                               
                        </div>
                    </div>
            </div>
        </HomeLayout>
    )
  }
  