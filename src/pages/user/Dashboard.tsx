import { useEffect, useState } from 'react'
import DashboardLayout from '../../shared/DashboardLayout'
import { useUser } from '../../hook/useUser'
import { RotateLoader } from 'react-spinners'


export default function Dashboard() 
{    
    const { UserSummary } = useUser()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [summary, setSummary] = useState<any>({})
    const [error, setError] = useState<string>('')

    useEffect(() => 
    {
        setIsLoading(true)
        const Summary = UserSummary()
        Summary.then((summaries: any) => 
        {
            setSummary(summaries?.data?.data)
            setIsLoading(false)
        }).then(() => {
            setError("")
            setIsLoading(false)
        })
        console.log(error)
    }, [])
    

    useEffect(() => 
    {
    }, [])

    return (
        <DashboardLayout pageName="Dashboard"
        >
            <div className='grid grid-cols-12'
            >
                <div 
                        className='col-span-12'
                >
                    <p className='font-bold text-2xl ml-5 mt-5 text-white'>...</p>
                </div>
            </div>
            {
                (isLoading === true) && <div className="col-span-12 h-[300px] flex justify-center items-center" style={{ marginTop: '60px', paddingTop: '0px' }}
                >
                   <RotateLoader className='w-12 h-12' />
                </div>
            }
            { !isLoading &&
                <>
                   <div 
                        className='grid grid-cols-12 gap-5 mx-1 md:mx-7'
                    >
                        <div 
                            className='md:col-span-4 col-span-12 flex justify-between border-shadow shadow-lg p-5 border-2 border-gray-200 text-[#506f9d] hover:bg-[#d1dbea] cursor-pointer'
                        >
                            <span className='text-lg font-semibold'>Pending: </span>
                            <span className='font-bold text-xl'>{summary?.pending}</span>
                        </div>
                        <div 
                            className='md:col-span-4 col-span-12 flex justify-between border-shadow shadow-lg p-5 border-2 border-gray-200 text-[#506f9d] hover:bg-[#d1dbea] cursor-pointer'
                        >
                            <span className='text-lg font-semibold'>Declined: </span>
                            <span className='font-bold text-xl'>{summary?.declined}</span>
                        </div>
                        <div 
                            className='md:col-span-4 col-span-12 flex justify-between border-shadow shadow-lg p-5 border-2 border-gray-200 text-[#506f9d] hover:bg-[#d1dbea] cursor-pointer'
                        >
                            <span className='text-lg font-semibold'>Opened: </span>
                            <span className='font-bold text-xl'>{summary?.opened}</span>
                        </div>
                   </div>
                   <div 
                        className='grid grid-cols-12 gap-5 mx-1 md:mx-7 mt-10'
                    >
                        <div 
                            className='md:col-span-4 col-span-12 flex justify-between border-shadow shadow-lg p-5 border-2 border-gray-200 text-[#506f9d] hover:bg-[#d1dbea] cursor-pointer'
                        >
                            <span className='text-lg font-semibold'>Rejected: </span>
                            <span className='font-bold text-xl'>{summary?.rejected}</span>
                        </div>
                        <div 
                            className='md:col-span-4 col-span-12 flex justify-between border-shadow shadow-lg p-5 border-2 border-gray-200 text-[#506f9d] hover:bg-[#d1dbea] cursor-pointer'
                        >
                            <span className='text-lg font-semibold'>Completed: </span>
                            <span className='font-bold text-xl'>{summary?.completed}</span>
                        </div>
                        <div 
                            className='md:col-span-4 col-span-12 flex justify-between border-shadow shadow-lg p-5 border-2 border-gray-200 text-[#506f9d] hover:bg-[#d1dbea] cursor-pointer'
                        >
                            <span className='text-lg font-semibold'>Cancelled: </span>
                            <span className='font-bold text-xl'>{summary?.cancelled}</span>
                        </div>
                   </div>
                </>
            }           
        </DashboardLayout>
    )
}
