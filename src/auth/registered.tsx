// import { useNavigate } from 'react-router-dom'
import Logo from '../shared/Logo'
import { HiCheck } from 'react-icons/hi'
// import { useEffect, useState } from 'react'
// import { appStore } from '../state/store'


function Registered() 
{
      // const appState = appStore((state: any) => state)
      // const [activated, setActivated] = useState<number>(-1)
      // const navigate = useNavigate()

      // useEffect(() => 
      // {
            // if(appState.getRegistered() === 1)
            // {
            //       navigate('/auth/login')
            // }
            // setActivated(appState.getRegistered())
            // setTimeout(() => 
            // {
            //       setActivated(appState.getRegistered()+1)
            // }, 20000)
      // }, [])

      // useEffect(() => 
      // {
      //       navigate('/auth/login')
      // }, [activated])


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
                                          className='flex text-white text-[22px] font-bold justify-center mb-5'
                                          >
                                          Registration Successful
                                    </h3>
                              </div>
                              <div 
                                    className="w-full p-10 md:px-9 md:pt-10 md:pb-5 d-flex text-green-500 mx-auto items-center justify-center rounded-md md:rounded-xl bg-white mb-20 md:mb-0"
                              >
                                    <div className='flex font-bold justify-center items-center mb-5'
                                    >                                          
                                          <HiCheck className='text-[370px]' />
                                    </div>
                                    <h3 
                                          className='flex text-red-500 text-lg font-bold justify-center items-center mb-5'
                                          >
                                          Kindly use the activation link sent to your mail to complete your registration
                                    </h3>
                              </div>
                              </div>
                        </div>
                  </main>
              </>
      )
}

export default Registered
