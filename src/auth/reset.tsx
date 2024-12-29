import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { useState, useEffect } from "react";
import { BeatLoader } from "react-spinners";
import Message from "./helper/Message";
import { useReset } from "../hook/useAuth";
import GpayLogo from "../shared/Logo";
import { appStore } from "../state/store";


export default function ResetPassword() 
{
      const appState = appStore((state: any) => state)
      const navigate = useNavigate()
      
      const { ResetUser } = useReset()
      const [searchParams, setSearchParams] = useSearchParams()
      const userId: string = searchParams.get('miorftfdwcdfyhnvgfedd')!

      const PASSWORD_MESSAGE = "Enter Password"
      const CONFIRM_PASSWORD_MESSAGE = "Enter Password Again"
      
      const [isLoading, setIsLoading] = useState<boolean>(false)
      const [validationMsg, setValidationMessage] = useState<string>('')

      const [errMsgStyle, setErrMsgStyle] = useState<string>('')

      const [password, setPassword] = useState<string>('')
      const [passwordMessage, setPasswordMessage] = useState<string>('')

      const [confirmPassword, setConfirmPassword] = useState<string>('')
      const [confirmPasswordMessage, setConfirmPasswordMessage] = useState<string>('')

      useEffect(() => 
      {
         if(appState.getUser().token)
         {
            navigate('/dashboard')  
         }
         setErrMsgStyle('text-md text-red-600 font-bold')
      }, [])

      useEffect(() => 
      {
         setSearchParams(searchParams)
      }, [searchParams])


      const UserResetPassword = async () => 
      {
            let valid: string = 'passed'
            setIsLoading(true)

            valid = allFields()

            const confirm_password: string = confirmPassword
            const id:string | null = userId
            const user = { id, password, confirm_password }
            if(valid === 'passed')
            {
                  const accessingApplication = ResetUser(user)
                  accessingApplication.then((res: any) => 
                  { 
                        if(res.statusCode === 200)
                        {
                              navigate('/auth/login')
                        } else {
                              setValidationMessage(res.message)
                              setIsLoading(false) 
                              setTimeout(() => {
                                 setValidationMessage("")
                              }, 10000)  
                        }      
                  }).catch(() => {
                        setValidationMessage("Check your internet connecteion")
                        setIsLoading(false)
                        setTimeout(() => {
                           setValidationMessage("")
                        }, 10000)   
                  })
            } else {                  
                  setTimeout(() => {
                     setValidationMessage('')
                  }, 5000)         
            } 

      }

      const allFields = () => 
      {
            let allow: string = 'passed'
            if(!password){ setPasswordMessage(PASSWORD_MESSAGE); allow = 'failed' }
            if(!confirmPassword){ setConfirmPasswordMessage(CONFIRM_PASSWORD_MESSAGE); allow = 'failed' }
            if(allow === 'failed')
            {
                  setIsLoading(false)
            }
            return allow
      }
    

      return (
      <>  
            <main 
                  className="flex md:d-flex xl:flex-row h-screen bg-[#076d96]"
            >
                  <div 
                        className="w-full md:w-5/12 mx-auto my-4 d-flex items-center justify-center px-3 py-5 md:p-10 mt-20 gap-5"
                  >            
                  <div 
                        className='w-full flex justify-center items-center mb-10'
                        >
                        <GpayLogo width={80} />
                  </div>                
                  <div 
                     className='w-full'
                  >
                     <h3 
                        className='flex text-white text-xl font-bold justify-center mb-5 uppercase'
                     >
                        Create a new password
                     </h3>
                  </div>
                  <div 
                        className='w-full d-flex gap-10'
                  >
                        <div 
                              className="w-full px-4 py-4 md:px-9 md:pt-10 md:pb-5 pb-14 d-flex items-center justify-center rounded-md md:rounded-xl bg-white hover:text-white mb-20 md:mb-0 border-2 border-green-700"
                        >
                                    <div  
                                          className='w-full d-flex gap-10 md:mb-3 mt-3'
                                    > 
                                          <div 
                                                className="mb-4 md:w-full"
                                          >
                                                <input  
                                                      className="w-full border rounded-md p-3 bg-opacity-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out" 
                                                      type="password" name="password" id="password" placeholder="Enter Password"
                                                      onChange={(e) => {
                                                          setPassword(e.target.value)
                                                      }}
                                                      onBlur={(e) => {
                                                         if(e.target.value === "")
                                                         {
                                                               setPasswordMessage(PASSWORD_MESSAGE)
                                                         }
                                                      }}
                                                      onFocus={() => {
                                                         setPasswordMessage("")                                                            
                                                      }}
                                                />
                                                { passwordMessage && <Message msg={passwordMessage} status={errMsgStyle} /> }
                                          </div>                                         
                                          <div 
                                                className="mb-4 md:w-full"
                                          >
                                                <input  
                                                      className="w-full border rounded-md p-3 bg-opacity-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out" 
                                                      type="password" name="cPassword" id="cPassword" placeholder="Enter Passowrd Again"
                                                      onChange={(e) => {
                                                         setConfirmPassword(e.target.value)
                                                      }}
                                                      onBlur={(e) => {
                                                         if(e.target.value === "")
                                                         {
                                                               setConfirmPasswordMessage(CONFIRM_PASSWORD_MESSAGE)
                                                         }
                                                      }}
                                                      onFocus={() => {
                                                         setConfirmPasswordMessage("")                                                            
                                                      }}
                                                />
                                                { confirmPasswordMessage && <Message msg={confirmPasswordMessage} status={errMsgStyle} />}
                                          </div>
                                    </div>
                                    {
                                          validationMsg && <Message msg={validationMsg} status={errMsgStyle} customStyle="bg-red-600 p-3 text-white font-bold rounded-md" />
                                    }
                                    <div  
                                          className='w-full flex justify-between md:flex gap-10 md:mb-3 mt-5'
                                    >   
                                          <button 
                                                      className="block w-full bg-[#096083] hover:bg-[#6f7277] border-shadow text-white font-bold p-4 rounded-lg ring-2 ring-inset"
                                                      onClick={() => {
                                                            UserResetPassword()
                                                      }}
                                                      disabled={isLoading}
                                          >
                                                
                                                {  isLoading ? ( <BeatLoader size={9} color="#fff" />) : ( "Set New Password" )          }
                                          </button>
                                    </div>
                                    <div  
                                          className='w-full flex justify-between md:flex gap-10 md:mb-3 mt-10 px-5 pb-5'
                                    >                                       
                                          <div 
                                                className='d-flex justify-center text-center text-black'
                                          >
                                                <div className='hidden md:block'>Access your account</div>
                                                <div className='text-md hover:text-blue-300 font-bold'>
                                                      <Link to={'/auth/login'}>Login</Link>
                                                </div>
                                          </div>  
                                          <div className='text-md text-black hover:text-blue-300 font-bold text-md'>
                                                <Link to={'/'}
                                                >                                
                                                      <div className='mt-1 mr-2 flex justify-center items-center'><HiHome className='mr-1 text-2xl md:mt-2'/></div>
                                                </Link>
                                          </div> 
                                          <div 
                                                className='d-flex justify-center text-center text-black'
                                          >
                                          <div className='hidden md:block'>If you do not have an account </div>
                                          <div className='text-md hover:text-blue-300 font-bold'>
                                                <Link to={'/auth/register'}>Create one now.</Link>
                                          </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </main>
      </>
      )
}
