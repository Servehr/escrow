import HomeLayout from "../shared/HomeLayout"
import ContactAddress from "./address/contactAddress"


export const ContactUs = () =>
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
                        <div 
                            className="col-span-12 md:col-span-6 h-full bg-white p-5 pt-10 rounded-md text-gray-600 font-semibold text-lg"
                        >
                            <p className="mb-1 font-bold text-red-600">Head Office:</p>
                            <p className="mb-5">xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx</p>
                            <p className="mb-5"><span className="text-red-600">Tel:</span> +234xxxxx xxxxx</p>
                            <p className="mb-5"><span className="text-red-600">Email:</span> xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx</p>
                            <p className="mb-5"><span className="text-red-600">Website:</span> xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx</p>
                        </div>
                    </div>
                    <div 
                         className='w-2/2 md:w-1/2 container'
                    >                                
                        <ContactAddress />
                    </div>
                </div>
            </div>            
                                           
            <div 
                className='w-full py-20 bg-white'
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
  