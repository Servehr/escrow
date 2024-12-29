import { useEffect, useState } from 'react'
import { BeatLoader } from 'react-spinners'
import Message from '../../../auth/helper/Message'
import { useSettings } from '../../../hook/useSettings'



export default function AuthControl({ option, onClick }: { option: string, onClick: () => void }) 
{
    const AuthOption: string[] = ["Select", 'yes', 'no']
    const [loading, setIsLoading] = useState<boolean>(false)
    const [auth, setAuth] = useState<string>("")
    const [theOption] = useState<string>(option)
    const [errMsgStyle, setErrMsgStyle] = useState<string>('')
    const [errorMessage, setErrorMessage] = useState<string>("")
    const [successMsgStyle, setSuccessMsgStyle] = useState<string>('')
    const [successMessage, setSuccessMessage] = useState<string>("")

    const { UpdateAuthControl } = useSettings()

    useEffect(() => 
    {
        setErrMsgStyle('text-md text-red-600 font-bold rounded-lg py-3 px-2')
        setSuccessMsgStyle('text-md text-white bg-green-600 font-bold rounded-lg py-3 px-2 mt-2 mb-2')
    }, []) 

    useEffect(() => 
    {
            
    }, [auth])

    useEffect(() => 
    {
            
    }, [theOption])

    const UpdateControl = () => 
    {
        setErrorMessage("")
        setSuccessMessage("")
        setIsLoading(true)
        if(auth === "Select")
        {  
            setErrorMessage("Select an option")
            setIsLoading(false)
            return false  
        }
        const userProfile = UpdateAuthControl(auth)
        userProfile.then((response: any) => 
        {
            if(response?.statusCode === 200)
            {
                setSuccessMessage(response?.message)
                onClick()
                setTimeout(() => 
                {
                    setSuccessMessage("")
                }, 3000)                
                setIsLoading(false)
            } else {
                setErrorMessage("Select an option")
                setTimeout(() => 
                {
                    setErrorMessage("")
                }, 3000)
                setIsLoading(false)
            }
        }).then(() => {
        })
    }

    return (        
        <div 
            className="w-full md:w-1/2 rounded-lg mb-5 md:mb-5"
        >
            <div 
              className="relative"
            >
              <h1 className='font-bold text-gray-500'>Allow email to be sent on authentication phases</h1>
              { errorMessage && <Message msg={errorMessage} status={errMsgStyle} />  }
              { successMessage && <Message msg={successMessage} status={successMsgStyle} />  }
              { theOption && <div 
                    className='text-[14px] md:text-[20px] text-blue-600 font-bold'
                >
                    Current selection is: <span className='text-[20px] md:text-[24px] text-green-700 font-bold'>{theOption}</span>
                </div> 
              }
              <select 
                    defaultValue={auth}
                    className="block appearance-none mb-3 w-full bg-white border border-gray-200 text-gray-700 py-5 px-4 pr-8 text-lg rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    onChange={(e: any) => 
                        {
                           setAuth(e.target.value)
                        }
                  }
              >
              {
                    AuthOption.map((type:string, index:number) =>  {
                    return (
                                <option 
                                    key={index} 
                                    value={type} 
                                    selected={ type === theOption ? true : false }
                                 >
                                      {type}
                                </option>
                          )
                    })
              }
              </select> 
              <div 
                  className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 -mt-7"
              >
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>                      
              <button 
                    className="px-5 py-3 bg-blue-600 text-white font-semibold text-sm rounded-xl w-max hover:bg-green-800"
                    onClick={() => UpdateControl()}
              >
                    { loading ? ( <BeatLoader size={9} color="#fff" className="text-white" />) : ( "Save" ) } 
              </button>
            </div> 
        </div>
    )
}
