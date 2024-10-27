import GpayLogo from "./Logo"

export default function Footer()
{

  return (
      <>
         <div 
            className='w-full py-20 bg-black'
        >
            <div 
                className='container mx-auto flex justify-between items-center gap-5'
            >
                <div 
                    className='col-span-3 text-2xl pt- bg-gray-100'
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
            <div 
                className='container mx-auto flex justify-center items-center gap-5'
            >
                <GpayLogo width={100} /> 
                <span className='font-bold text-white'>@copyRight 2024</span>                           
            </div>
        </div>
      </>
  )
}
