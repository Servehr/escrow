import DashboardLayout from '../../shared/DashboardLayout'


export default function Dashboard() 
{
    
    const summary: { name: string, count: number }[] = 
    [
        {
            name: 'users',
            count: 412
        },
        {
            name: 'staffs',
            count: 7
        },
        {
            name: 'complains',
            count: 27
        },
        {
            name: 'messages',
            count: 328
        },
        {
            name: 'total transactions',
            count: 4392000
        },
        {
            name: 'completed',
            count: 6589
        },
        {
            name: 'Active',
            count: 33
        },
        {
            name: 'cancelled',
            count: 50
        }
    ]

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
        <div 
            className='grid grid-cols-12 gap-5 mx-1 md:mx-7'
        >
            {
                summary.map((smry, index) => {
                    return (
                        <div 
                                key={index}
                                className='md:col-span-3 col-span-6 flex justify-between border-shadow shadow-lg p-5 border-2 border-gray-200 text-[#506f9d] hover:bg-[#d1dbea] cursor-pointer'
                        >
                            <div 
                                    className='text-md font-bold uppercase'
                            >
                                {smry.name}
                            </div>
                            <div 
                                    className='text-md text-blue-400 font-bold'
                            >
                                {smry.count}
                            </div>
                        </div>
                    )
                })
            }
        </div>
        </DashboardLayout>
    )
}
