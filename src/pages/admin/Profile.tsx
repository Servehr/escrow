import { useEffect, useState } from "react"
import DashboardLayout from '../../shared/DashboardLayout'
import Message from "../../auth/helper/Message"
import { BeatLoader } from "react-spinners"
import { useNavigate } from "react-router-dom"


export default function Profile() 
{
    // const { RegisterUser } = useRegister()
    const navigate = useNavigate()

    const FIRSTNAME_MESSAGE = "Enter First name"
    const SURNAME_MESSAGE = "Enter Surname"
    const EMAIL_MESSAGE = "Enter Email Address"
    const PHONE_MESSAGE = "Enter Phone Number"
    const COUNTRY_MESSAGE = "Enter Country"
    const STATE_MESSAGE = "Enter State"
    
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

    const [country, setCountry] = useState<string>('')
    const [countryMessage, setCountryMessage] = useState<string>('')

    const [state, setState] = useState<string>('')
    const [stateMessage, setStateMessage] = useState<string>('')

    useEffect(() => 
    {
       setErrMsgStyle('text-md text-red-600 font-bold')
    }, [])
    
    const allFields = () => 
        {
              let allow: string = 'passed'
              if(!firstname){ setFirstNameMessage(FIRSTNAME_MESSAGE); allow = 'failed' }
              if(!surname){ setSurnameMessage(SURNAME_MESSAGE); allow = 'failed' }
              if(!phone){ setPhoneMessage(PHONE_MESSAGE); allow = 'failed' }
              if(!email){ setEmailMessage(EMAIL_MESSAGE); allow = 'failed' }
              if(!country){ setCountryMessage(COUNTRY_MESSAGE); allow = 'failed' }
              if(!state){ setStateMessage(STATE_MESSAGE); allow = 'failed' }
              if(allow === 'failed')
              {
                    setIsLoading(false)
              }
              return allow
        }
    
    const Gender: { name: string, value: number }[] = 
    [
        {
            name: 'Male',
            value: 1
        },
        {
            name: 'Female',
            value: 2
        }
    ]
    
    return (
        <DashboardLayout pageName="Profile"
        >
            <div
                className="w-12/12 md:px-5 border-2 pt-5 pb-14 bg-white border-[#d1dbea]" 
            >
                <div 
                    className='grid grid-cols-12 px-5 mx-auto mt-1'
                >
                    <div 
                        className='col-span-12 md:col-span-6 pl-1 md:mt-5'
                    >                        
                        <div 
                            className='w-full d-flex md:flex gap-10 mb-5'
                        >           
                            <div 
                                className="mb-4 w-6/12 rounded-lg bg-gray-200 h-[350px] mx-auto"
                            >
                                
                            </div>
                        </div>

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
                        </div>
                        
                        <div 
                            className='w-full d-flex md:flex gap-10 md:mb-3'
                        >           
                            <div 
                                className="mb-4 md:w-full"
                            >
                                <div 
                                    className="relative"
                                >
                                    <select 
                                        className="block appearance-none w-full bg-white border border-gray-300 text-gray-400 py-5 px-4 pr-8 text-lg rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-300"
                                    >
                                        { <option value={-1}> - Select Gender -  </option> }
                                        {
                                            Gender.map((gender, index) =>  {
                                                   return (
                                                           <option key={index} value={gender?.value}>
                                                                {gender?.name}
                                                            </option>
                                                          )
                                                    })
                                                }
                                    </select>
                                    <div 
                                        className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 mt-1"
                                    >
                                        <svg className="fill-current h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                        </svg>
                                    </div>
                                </div>
                                { firstnameMessage && <Message msg={firstnameMessage} status={errMsgStyle} />}
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
                                    type="text" name="country" id="country" placeholder="Enter Country"
                                    onChange={(e) => {
                                            setCountry(e.target.value)
                                    }}
                                    onBlur={(e) => {
                                        if(e.target.value === "")
                                        {
                                            setCountryMessage(COUNTRY_MESSAGE)
                                        }
                                    }}
                                    onFocus={() => {
                                            setCountryMessage("")                                                            
                                    }}
                                />
                                { countryMessage && <Message msg={countryMessage} status={errMsgStyle} /> }
                            </div>
                        <div 
                            className="mb-4 md:w-full"
                        >
                            <input  
                                className="w-full border rounded-md p-3 bg-opacity-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out" 
                                type="text" name="state" id="state" placeholder="Enter Steate"
                                onChange={(e) => {
                                    setState(e.target.value)
                                }}
                                onBlur={(e) => {
                                    if(e.target.value === "")
                                    {
                                        setStateMessage(STATE_MESSAGE)
                                    }
                                }}
                                onFocus={() => {
                                    setStateMessage("")                                                            
                                }}
                            />
                            { stateMessage && <Message msg={STATE_MESSAGE} status={errMsgStyle} />}
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
                                        console.log("")
                                    }}
                                    disabled={isLoading}
                            >
                               {  isLoading ? ( <BeatLoader size={9} color="#fff" />) : ( "Save" ) }
                            </button>
                        </div>

                        <div className="hidden md:h-[550px]"></div>
                    </div>

                    <div 
                        className='col-span-12 md:col-span-6 px-1 md:px-5 md:px-10 mt-20 md:mt-5'
                    >                       
                        <div 
                            className='w-full d-flex md:flex gap-10 mb-5'
                        >           
                            <div 
                                className="mb-4 w-6/12 rounded-lg bg-gray-200 h-[350px] mx-auto"
                            >
                                
                            </div>
                        </div>                  
                        <div 
                            className='col-span-12 md:col-span-6 px-1 md:px-5 md:px-10 mt-20 md:mt-0'
                        >
                            <div 
                                className='w-full d-flex md:flex gap-10 md:mb-3'
                            >           
                                <div 
                                    className="mb-4 md:w-1/2 w-2/2 border-2 border-gray-200 p-3"
                                >
                                    <p className="text-gray-500">Firstname</p>
                                </div>
                                <div 
                                    className="mb-4 md:w-1/2 w-2/2 border-2 border-gray-200 p-3"
                                >
                                    <p className="text-gray-500">Surname</p>
                                </div>
                            </div>
                            <div 
                                className='w-full d-flex md:flex gap-10 md:mb-3'
                            >           
                                <div 
                                    className="mb-4 md:w-1/2 w-2/2 border-2 border-gray-200 p-3"
                                >
                                    <p className="text-gray-500">Phone</p>
                                </div>
                                <div 
                                    className="mb-4 md:w-1/2 w-2/2 border-2 border-gray-200 p-3"
                                >
                                    <p className="text-gray-500">Email</p>
                                </div>
                            </div>
                            <div 
                                className='w-full d-flex md:flex gap-10 md:mb-3'
                            >           
                                <div 
                                    className="mb-4 md:w-1/2 w-2/2 border-2 border-gray-200 p-3"
                                >
                                    <p className="text-gray-500">Gender</p>
                                </div>
                                <div 
                                    className="mb-4 md:w-1/2 w-2/2 border-2 border-gray-200 p-3"
                                >
                                    <p className="text-gray-500">...</p>
                                </div>
                            </div>
                            <div 
                                className='w-full d-flex md:flex gap-10 md:mb-3'
                            >           
                                <div 
                                    className="mb-4 md:w-1/2 w-2/2 border-2 border-gray-200 p-3"
                                >
                                    <p className="text-gray-500">Country</p>
                                </div>
                                <div 
                                    className="mb-4 md:w-1/2 w-2/2 border-2 border-gray-200 p-3"
                                >
                                    <p className="text-gray-500">State</p>
                                </div>
                            </div>
                        </div>

                        <div className="md:hidden h-[200px]"></div> 
                    </div>

                </div>
            </div>
        </DashboardLayout>
    )
}
