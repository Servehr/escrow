import { Link } from "react-router-dom";
import Logo from "../shared/Logo";
import { HiHome } from "react-icons/hi";

export default function ForgotPassword() 
{
    
  return (
    <>  
        <main 
              className="flex md:d-flex xl:flex-row h-screen bg-[#435f88]"
        >
            <div 
                  className="w-full md:w-5/12 mx-auto my-4 d-flex items-center justify-center px-3 py-5 md:p-10 mt-20 gap-5"
            >            
                <div 
                      className='w-full flex justify-center items-center mb-10'
                  >
                      <Logo /> 
                </div>
                <div 
                      className='w-full d-flex gap-10'
                >
                  <div 
                        className='w-full'
                  >
                        <h3 
                              className='flex font-bold justify-center mb-5 uppercase text-white'
                              >
                              Sorry! your can`t access your account, We help you get it back
                        </h3>
                  </div>
                    <div 
                          className="w-full p-10 md:px-9 md:pt-10 md:pb-5 d-flex items-center justify-center rounded-md md:rounded-xl bg-white mb-20 md:mb-0"
                    >
                              <div  
                                    className='w-full d-flex gap-10 md:mb-3'
                              > 
                                  <div 
                                          className="mb-4 md:w-full"
                                    >
                                          <input  
                                                     className="w-full border rounded-md p-3 bg-gray-100 bg-opacity-75 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out" 
                                                     type="text" name="email" id="email" placeholder="Enter Email Address" />
                                    </div>
                              </div>
                              <div  
                                    className='w-full flex justify-between md:flex gap-10 md:mb-3 mt-5'
                              >   
                                    <button 
                                                className="block w-full bg-[#435f88] hover:bg-[#6f7277] border-shadow text-white font-bold py-4 px-1 rounded-lg ring-2 ring-green-800 ring-inset"
                                    >
                                          Submit
                                    </button>
                              </div>
                              <div  
                                    className='w-full flex justify-between md:flex gap-10 md:mb-3 mt-10 px-5 cursor-pointer'
                              >                                       
                                    <div 
                                          className='d-flex justify-center text-center'
                                    >
                                          <div className=''>Access your account</div>
                                          <div className='text-md hover:text-blue-300 font-bold'>
                                                <Link to={'/auth/login'}>Login</Link>
                                          </div>
                                    </div>
                                    <div 
                                          className='text-md d-flex justify-center items-center text-black hover:text-blue-300 font-bold text-md cursor-pointer'
                                    >
                                          <div className=''>
                                                <Link to={'/'}
                                                >                                
                                                      <HiHome className='ml-1 text-2xl mt-2'/> 
                                                </Link>
                                          </div>
                                          <div 
                                                className='text-md hover:text-blue-300 font-bold'
                                          >
                                                <Link to={'/'}
                                                >                                
                                                      <div className='mt-1 flex justify-center text-xs items-center'>Home</div>
                                                </Link>
                                          </div>
                                    </div>
                                    <div 
                                          className='d-flex justify-center text-center cursor-pointer'
                                    >
                                        <div className=''>If you don't have an account </div>
                                        <div className='text-md hover:text-blue-300 font-bold'>
                                            <Link to={'/auth/register'}>Create one now.</Link>
                                        </div>
                                    </div>
                              </div>
                    </div>
                  </div>
            </div>
        </main>
    </>
  )
}
