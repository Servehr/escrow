import { useEffect, useState } from 'react'
import DashboardLayout from '../../shared/DashboardLayout'
import AuthControl from './control/AuthControl'
import { useSettings } from '../../hook/useSettings'
import { RotateLoader } from 'react-spinners'


export default function Settings() 
{
    const { GetSettings } = useSettings()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [data, setData] = useState<string>("")

    useEffect(() => 
    {
        callApi()
    }, [])

    useEffect(() => 
    {

    }, [data])

    const callApi = () => 
    {
        setIsLoading(true)
        const settings = GetSettings()
        settings.then((stngs) => 
        {
            if(stngs?.statusCode === 200)
            {
                setData(stngs?.data?.data?.auth)
            } else {

            }
            setIsLoading(false)
        }).then(() => {
            setIsLoading(false)
        })
    }
    
    return (
        <DashboardLayout pageName="Settings"
        >
            
            <div 
                className="shadow-md border-2 border-gray-100 p-5 mb-3 mx-auto md:mx-5 pb-8 mt-5 rounded-none overflow-hidden hover:shadow-stone-400"
            >   
                {
                    (isLoading === true) && <div className="col-span-12 h-[300px] flex justify-center items-center" style={{ marginTop: '60px', paddingTop: '0px' }}
                    >
                        <RotateLoader className='w-12 h-12' />
                    </div>
                }
                {   ((isLoading === false) && (data != "")) &&
                    <div 
                        className="mb-4 md:w-full d-flex md:flex gap-5"
                    >
                        <AuthControl option={data} onClick={() => { callApi() }} />
                    </div>
                }
            </div>
        </DashboardLayout>
    )
}
