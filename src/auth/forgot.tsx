import { Link, useNavigate } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { useState, useEffect } from "react";
import Message from "./helper/Message";
import { BeatLoader } from "react-spinners";
import { useForgot } from "../hook/useAuth";
import GpayLogo from "../shared/Logo";
import { appStore } from "../state/store";


export default function ForgotPassword() 
{
      const navigate = useNavigate()
      const appState = appStore((state: any) => state)
      const { ForgotUser } = useForgot()

      const EMAIL_MESSAGE = "Enter Email Address"
      
      const [isLoading, setIsLoading] = useState<boolean>(false)
      const [validationMsg, setValidationMessage] = useState<string>('')

      const [errMsgStyle, setErrMsgStyle] = useState<string>('')
      const [customStyle, setCustomStyle] = useState<string>('')

      const [email, setEmail] = useState<string>('')
      const [emailMessage, setEmailMessage] = useState<string>('')


      useEffect(() => 
      {
            if(appState.getUser().token)
            {
                  navigate('/dashboard')  
            } else {
                navigate('/auth/login')             
            }
            setErrMsgStyle('bg-red-600 p-3 text-white font-bold rounded-md')            
      }, [])


      const UserForgotPassword = async () => 
      {
            let valid: string = 'passed'
            setIsLoading(true)

            valid = allFields()

            if(valid === 'passed')
            {
                  const accessingApplication = ForgotUser(email)
                  accessingApplication.then((res: any) => 
                  { 
                        if(res.statusCode === 200)
                        {
                              setErrMsgStyle('bg-green-600 p-3 text-white font-bold rounded-md')    
                              setCustomStyle('bg-green-600 p-3 text-white font-bold rounded-md')
                              setValidationMessage(res.message)
                              setIsLoading(false) 
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
            if(!email){ setEmailMessage(EMAIL_MESSAGE); allow = 'failed' }
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
                              className='w-full d-flex gap-10'
                        >
                              <div 
                                    className='w-full'
                              >
                                    <h3 
                                      className='flex text-white font-bold justify-center mb-5 uppercase items-center text-center text-[13px] md:text-[16px]'
                                    >
                                       Sorry! your can`t access your account, We help you get it back
                                    </h3>
                              </div>
                              <div 
                                    className="w-full md:p-10 py-5 px-5 md:px-9 md:pt-10 md:pb-5 d-flex items-center justify-center rounded-md md:rounded-xl rounded-xl bg-white mb-20 md:mb-0 border-2 border-green-700"
                              >
                                          <div 
                                                className="mb-4 md:w-full mt-2"
                                          >
                                                <input  
                                                      className="w-full border rounded-md p-3 bg-opacity-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out" 
                                                      type="email" name="email" id="email" placeholder="Enter Email" 
                                                      onChange={(e) => {
                                                                  setEmail(e.target.value)
                                                      }}
                                                      onBlur={(e) => {
                                                            if(e.target.value === "")
                                                            {
                                                            setEmailMessage(EMAIL_MESSAGE)
                                                            }
                                                      }}
                                                      onFocus={() => {
                                                            setEmailMessage("")                                                            
                                                      }}
                                                />
                                                { emailMessage && <Message msg={emailMessage} status={errMsgStyle} /> }
                                          </div>
                                          {
                                                validationMsg && <Message msg={validationMsg} status={errMsgStyle} customStyle={customStyle} />
                                          }
                                          <div  
                                                className='w-full flex justify-between md:flex gap-10 md:mb-3 mt-5'
                                          >   
                                                <button 
                                                      className="block w-full bg-[#096083] hover:bg-[#096083] border-shadow text-white font-bold p-4 rounded-lg ring-2 ring-inset"
                                                      onClick={() => {
                                                                  UserForgotPassword()
                                                      }}
                                                      disabled={isLoading}
                                                >                                              
                                                            {  isLoading ? ( <BeatLoader size={9} color="#fff" />) : ( "Submit" )          }
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
                                                <div 
                                                      className='text-md text-black hover:text-blue-300 font-bold text-md cursor-pointer'
                                                >
                                                      <div className=''>
                                                            <Link to={'/'}
                                                            >                                
                                                                  <div className='mt-1 mr-2 flex justify-center items-center'><HiHome className='mr-1 text-2xl md:mt-2'/></div>
                                                            </Link>
                                                      </div>
                                                      <div 
                                                            className='text-md hover:text-blue-300 font-bold'
                                                      >
                                                            <Link to={'/'}
                                                            >                                
                                                                  <div className='mt-1 flex justify-center text-xs items-center'>Home</div>
                                                            </Link>
                                                      </div>
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
