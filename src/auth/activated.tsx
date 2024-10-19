import { useNavigate } from 'react-router-dom'
import Logo from '../shared/Logo'
import { HiShieldCheck } from 'react-icons/hi'
// import { useEffect, useState } from 'react'
// import { appStore } from '../state/store'


function Activated() 
{
      // const appState = appStore((state: any) => state)
      // const [activated, setActivated] = useState<number>(-1)
      const navigate = useNavigate()

      // useEffect(() => 
      // {
      //       if(appState.getActivated() === 1)
      //       {
      //             navigate('/auth/login')
      //       }
      //       setActivated(appState.getActivated())
      //       setTimeout(() => 
      //       {
      //             setActivated(appState.getActivated()+1)
      //       }, 20000)
      // }, [])

      // useEffect(() => 
      // {
      //       navigate('/auth/login')
      // }, [activated])

      // useEffect(() => 
      //       {
      //             if(appState.getUser().verified === 'verified')
      //             {
      //                   navigate('/auth/login')
      //             }
      //       }, [])


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
                                                className='flex text-white text-[19px] font-bold justify-center mb-5'
                                                >
                                                Registration Completed and Account Activated
                                          </h3>
                                    </div>
                                    <div 
                                          className="w-full p-10 md:px-9 md:pt-10 md:pb-5 d-flex text-green-500 mx-auto items-center justify-center rounded-md md:rounded-xl bg-white mb-20 md:mb-0"
                                    >
                                          <div className='flex font-bold justify-center items-center mb-5'
                                          >                                          
                                                <HiShieldCheck className='text-[370px] mb-12' />
                                          </div>
                                          <div  
                                          className='w-full flex justify-center md:flex md:mb-14 mt-5'
                                    >   
                                          <button 
                                                      className="block w-fit bg-[#435f88] hover:bg-[#6f7277] border-shadow text-white font-bold p-4 rounded-lg ring-2 ring-inset"
                                                      onClick={() => {
                                                            navigate('/auth/login')
                                                      }}
                                          >
                                                Login
                                          </button>
                                    </div>
                                    </div>
                              </div>
                        </div>
                  </main>
            </>
      )
}

export default Activated
