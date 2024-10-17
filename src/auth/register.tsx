import { Link, useNavigate } from "react-router-dom";
import Logo from "../shared/Logo";
import { HiHome } from "react-icons/hi";
import { useEffect, useState } from "react";
import { useRegister } from "./hook/useAuth";
import { BeatLoader } from "react-spinners";
import Message from "./helper/Message";


function Register()
{
      const { RegisterUser } = useRegister()
      const navigate = useNavigate()

      const FIRSTNAME_MESSAGE = "Enter First name"
      const SURNAME_MESSAGE = "Enter Surname"
      const EMAIL_MESSAGE = "Enter Email Address"
      const PHONE_MESSAGE = "Enter Phone Number"
      const PASSWORD_MESSAGE = "Enter Password"
      const CONFIRM_PASSWORD_MESSAGE = "Enter Password Again"
      
      const [isLoading, setIsLoading] = useState<boolean>(false)
      const [validationMsg, setValidationMessage] = useState<string>('')

      const [errMsgStyle, setErrMsgStyle] = useState<string>('')

      const [firstname, setFirstName] = useState<string>('')
      const [firstnameMessage, setFirstNameMessage] = useState<string>('')

      const [surname, setSurname] = useState<string>('')
      const [surnameMessage, setSurnameMessage] = useState<string>('')

      const [phone, setPhone] = useState<string>('')
      const [phoneMessage, setPhoneMessage] = useState<string>('')

      const [email, setEmail] = useState<string>('')
      const [emailMessage, setEmailMessage] = useState<string>('')

      const [password, setPassword] = useState<string>('')
      const [passwordMessage, setPasswordMessage] = useState<string>('')

      const [confirmPassword, setConfirmPassword] = useState<string>('')
      const [confirmPasswordMessage, setConfirmPasswordMessage] = useState<string>('')

      useEffect(() => 
      {
         setErrMsgStyle('text-md text-red-600 font-bold')
      }, [])


      const CreateUser = async () => 
      {
            let valid: string = 'passed'
            setIsLoading(true)

            valid = allFields()

            const confirm_password: string = confirmPassword
            const user = { firstname, surname, phone, email, password, confirm_password }
            if(valid === 'passed')
            {
                  const registerData = RegisterUser(user)
                  registerData.then((res: any) => 
                  { 
                        if(res.statusCode === 200)
                        {
                              navigate('/auth/registered')
                        } else {
                              setValidationMessage(res.message)
                              setIsLoading(false) 
                              setTimeout(() => {
                                 setValidationMessage("")
                              }, 10000)  
                        }      
                  }).catch(() => {
                        setValidationMessage("Application Error")
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
            if(!firstname){ setFirstNameMessage(FIRSTNAME_MESSAGE); allow = 'failed' }
            if(!surname){ setSurnameMessage(SURNAME_MESSAGE); allow = 'failed' }
            if(!phone){ setPhoneMessage(PHONE_MESSAGE); allow = 'failed' }
            if(!email){ setEmailMessage(EMAIL_MESSAGE); allow = 'failed' }
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
                    className="flex md:d-flex xl:flex-row h-screen bg-[#435f88]"
            >
                <div 
                      className="w-full md:w-6/12 mx-auto my-4 d-flex items-center justify-center px-3 py-5 md:p-10 -mt-3 md:-mt-1 mt-20 gap-5"
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
                                  className='flex text-white text-xl font-bold justify-center mb-5 uppercase'
                              >
                                  Signup to become a member
                            </h3>
                      </div>
                      <div 
                              className="w-full p-10 md:px-9 md:pt-10 md:pb-5 d-flex items-center justify-center rounded-md md:rounded-xl bg-gray-200 hover:text-white mb-20 md:mb-0"
                        >
                                  <div 
                                        className='w-full d-flex md:flex gap-10 md:mb-3'
                                  >           
                                        <div 
                                              className="mb-4 md:w-1/2 w-2/2"
                                        >
                                              <input  
                                                         className="w-full border rounded-md p-3 bg-opacity-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out" 
                                                         type="text" name="firstname" id="firstname" placeholder="Enter Firtsname"
                                                         onChange={(e) => {
                                                            setFirstName(e.target.value)
                                                         }}
                                                         onBlur={(e) => {
                                                            if(e.target.value === "")
                                                            {
                                                                  setFirstNameMessage(FIRSTNAME_MESSAGE)
                                                            }
                                                         }}
                                                         onFocus={() => {
                                                            setFirstNameMessage("")                                                            
                                                         }}
                                                />
                                                { firstnameMessage && <Message msg={firstnameMessage} status={errMsgStyle} />}
                                        </div>
                                        <div 
                                              className="mb-4 md:w-1/2 w-2/2"
                                        >
                                              <input  
                                                      className="w-full border rounded-md p-3 bg-opacity-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out" 
                                                      type="text" name="surname" id="surname" placeholder="Enter Surname" 
                                                      onChange={(e) => {
                                                           setSurname(e.target.value)
                                                      }}
                                                      onBlur={(e) => {
                                                         if(e.target.value === "")
                                                         {
                                                               setSurnameMessage(SURNAME_MESSAGE)
                                                         }
                                                      }}
                                                      onFocus={() => {
                                                         setSurnameMessage("")                                                            
                                                      }}
                                                />
                                                { surnameMessage && <Message msg={surnameMessage} status={errMsgStyle} />}
                                        </div>
                                  </div>
                                  <div  
                                        className='w-full d-flex md:flex gap-10 md:mb-3'
                                  >                                          
                                        <div 
                                              className="mb-4 md:w-full"
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
                                                { emailMessage && <Message msg={emailMessage} status={errMsgStyle} />}
                                        </div>
                                        <div 
                                              className="mb-4 md:w-full"
                                        >
                                              <input  
                                                      className="w-full border rounded-md p-3 bg-opacity-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out" 
                                                      type="text" name="phone" id="phone" placeholder="Enter Phone" 
                                                      onChange={(e) => {
                                                          setPhone(e.target.value)
                                                      }}
                                                      onBlur={(e) => {
                                                         if(e.target.value === "")
                                                         {
                                                               setPhoneMessage(PHONE_MESSAGE)
                                                         }
                                                      }}
                                                      onFocus={() => {
                                                         setPhoneMessage("")                                                            
                                                      }}
                                                />
                                                { phoneMessage && <Message msg={phoneMessage} status={errMsgStyle} />}
                                        </div>
                                  </div>
                                  <div  
                                        className='w-full d-flex md:flex gap-10 md:mb-3'
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
                                                className="block w-fit bg-[#435f88] hover:bg-[#6f7277] border-shadow text-white font-bold p-4 rounded-lg ring-2 ring-inset"
                                                onClick={() => {
                                                      CreateUser()
                                                }}
                                                disabled={isLoading}
                                        >
                                              
                                              {  isLoading ? ( <BeatLoader size={9} color="#fff" />) : ( "Register" )          }
                                        </button>
                                  </div>
                        </div>
                      </div>
                      
                      <div  
                            className='w-full flex justify-between text-white md:flex gap-10 md:mb-3 mt-10 px-5'
                              >   
                                    <div 
                                          className='d-flex justify-center text-center'
                                    >
                                        <div className=''>Access Dashboard</div>
                                        <div className='text-md hover:text-blue-300 font-bold'>
                                            <Link to={'/auth/login'}>Login</Link>
                                        </div>
                                    </div> 
                                    <div 
                                          className='text-md d-flex justify-center items-center hover:text-blue-300 font-bold text-md cursor-pointer'
                                    >
                                          <div className=''>
                                                <Link to={'/'}
                                                >                                
                                                      <HiHome className='ml-1 text-2xl mt-2'/> 
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
                                          className='d-flex justify-center text-center'
                                    >
                                        <div className=''>I can remember my password again</div>
                                        <div className='text-md hover:text-blue-300 font-bold'>
                                            <Link to={'/auth/forgot'}>Reset It Here</Link>
                                        </div>
                                    </div>
                              </div>
                </div>
            </main>
        </>
      )
}

export default Register
