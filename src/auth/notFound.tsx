import { HiHand } from 'react-icons/hi'
import HomeLayout from '../shared/HomeLayout'


function NotFound() 
{

      return (
              <HomeLayout pageName={'Not-Found'}>
                  <div 
                        className="w-full md:w-5/12 mx-auto my-4 d-flex items-center justify-center px-3 py-5 md:p-10 mt-20 gap-5"
                  >     
                        <div 
                              className='w-full d-flex gap-10'
                        >
                              <div 
                                    className="w-full p-10 md:px-9 md:pt-20 md:pb-20 d-flex text-gray-500 mx-auto items-center justify-center rounded-md md:rounded-xl mb-20 md:mb-0"
                              >
                                    <div 
                                          className='flex font-bold justify-center items-center mb-5'
                                    >                                          
                                          <HiHand className='text-[280px]' />
                                    </div>
                                    <h3 
                                          className='flex text-[#435f88] text-[30px] font-bold justify-center items-center mb-5'
                                    >
                                          404
                                    </h3>
                              </div>
                        </div>
                  </div>
              </HomeLayout>
      )
}

export default NotFound
