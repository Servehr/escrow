import { HiArrowSmLeft, HiArrowSmRight, HiHome } from "react-icons/hi";
import Logo from "../shared/Logo";
import { Link } from "react-router-dom";


function Register() 
{
    
    return (
        <>  
            <main 
                    className="flex md:d-flex xl:flex-row h-screen bg-[#435f88]"
            >
                <div 
                      className="w-full md:w-6/12 mx-auto my-4 d-flex items-center justify-center px-3 py-5 md:p-10 -mt-3 md:-mt-1 mt-20 gap-5"
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
                                  className='flex text-white text-xl font-bold justify-center mb-5 uppercase'
                              >
                                  Signup to become a member
                            </h3>
                      </div>
                      <div 
                              className="w-full p-10 md:px-9 md:pt-10 md:pb-5 d-flex items-center justify-center rounded-md md:rounded-xl bg-gray-200 hover:text-white mb-20 md:mb-0"
                        >
                                  <div 
                                        className='w-full d-flex md:flex gap-10 md:mb-3'
                                  >           
                                        <div 
                                              className="mb-4 md:w-1/2 w-2/2"
                                        >
                                              <input  
                                                         className="w-full border rounded-md p-3 bg-opacity-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out" 
                                                         type="text" name="surname" id="surname" placeholder="Enter Surname" />
                                        </div>
                                        <div 
                                              className="mb-4 md:w-1/2 w-2/2"
                                        >
                                              <input  
                                                         className="w-full border rounded-md p-3 bg-opacity-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out" 
                                                         type="text" name="middlename" id="middlename" placeholder="Enter Middlename (Optional)" />
                                        </div>
                                  </div>
                                  <div  
                                        className='w-full d-flex md:flex gap-10 md:mb-3'
                                  >                                          
                                        <div 
                                              className="mb-4 md:w-full"
                                        >
                                              <input  
                                                         className="w-full border rounded-md p-3 bg-opacity-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out" 
                                                         type="email" name="email" id="email" placeholder="Enter Email" />
                                        </div>
                                        <div 
                                              className="mb-4 md:w-full"
                                        >
                                              <input  
                                                         className="w-full border rounded-md p-3 bg-opacity-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out" 
                                                         type="number" name="phone" id="phone" 
                                              />
                                        </div>
                                  </div>
                                  <div  
                                        className='w-full d-flex md:flex gap-10 md:mb-3'
                                  >                                          
                                        <div 
                                              className="mb-4 md:w-full"
                                        >
                                              <input  
                                                         className="w-full border rounded-md p-3 bg-opacity-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out" 
                                                         type="password" name="password" id="password" placeholder="Enter Password" />
                                        </div>
                                        <div 
                                              className="mb-4 md:w-full"
                                        >
                                              <input  
                                                         className="w-full border rounded-md p-3 bg-opacity-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out" 
                                                         type="password" name="cPassword" id="cPassword" placeholder="Enter Passowrd Again" />
                                        </div>
                                  </div>
                                  <div  
                                        className='w-full flex justify-between md:flex gap-10 md:mb-3 mt-5'
                                  >   
                                        <button 
                                                    className="block w-fit bg-[#435f88] hover:bg-[#6f7277] border-shadow text-white font-bold p-4 rounded-lg ring-2 ring-inset"
                                        >
                                              Register
                                        </button>
                                  </div>
                        </div>
                      </div>
                      
                      <div  
                            className='w-full flex justify-between text-white md:flex gap-10 md:mb-3 mt-10 px-5'
                              >   
                                    <div 
                                          className='d-flex justify-center text-center'
                                    >
                                        <div className=''>Access Dashboard</div>
                                        <div className='text-md hover:text-blue-300 font-bold'>
                                            <Link to={'/login'}>Login</Link>
                                        </div>
                                    </div>                                    
                                    <div 
                                          className='d-flex justify-center text-center'
                                    >
                                        <div className=''>I can remember my password again</div>
                                        <div className='text-md hover:text-blue-300 font-bold'>
                                            <Link to={'/forgot'}>Reset It Here</Link>
                                        </div>
                                    </div>
                              </div>
                </div>
            </main>
        </>
      )
}

export default Register
