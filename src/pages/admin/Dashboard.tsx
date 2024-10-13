import DashboardLayout from '../../shared/DashboardLayout'


export default function Dashboard() 
{
    
    return (
        <DashboardLayout pageName="Dashboard"
        >
            <div className='grid grid-cols-12'
            >
                <div 
                        className='col-span-12'
                >
                    <p className='font-bold text-2xl ml-5 mt-5'>...</p>
                </div>

            </div>
        </DashboardLayout>
    )
}
