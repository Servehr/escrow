import { useEffect, useState } from "react"
import Message from "../../auth/helper/Message"
import { BeatLoader } from "react-spinners"
import { useMessages } from "../../hook/useMessages"


export default function ContactAddress() 
{  
    const { SendMessage } = useMessages()
    const FIRSTNAME_MESSAGE = "Enter First name"
    const SURNAME_MESSAGE = "Enter Surname"
    const EMAIL_MESSAGE = "Enter Email Address"
    const PHONE_MESSAGE = "Enter Phone Number"
    const MSG_MESSAGE = "Enter Address"

    const [firstname, setFirstname] = useState<string>("")
    const [firstnameMessage, setFirstNameMessage] = useState<string>("")

    const [surname, setSurname] = useState<string>("")
    const [surnameMessage, setSurnameMessage] = useState<string>("")

    const [phone, setPhone] = useState<string>("")
    const [phoneMessage, setPhoneMessage] = useState<string>("")

    const [email, setEmail] = useState<string>("")
    const [emailMessage, setEmailMessage] = useState<string>("")

    const [message, setMessage] = useState<string>("")
    const [msgMessage, setMsgMessage] = useState<string>("")

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [errMsgStyle, setErrMsgStyle] = useState<string>('')
    const [errorMessage, setErrorMessage] = useState<string>("")
    const [successStyle, setSuccessStyle] = useState<string>('')
    const [contactSuccess, setContactSuccess] = useState<string>("")
  
    useEffect(() => 
    {
        setErrMsgStyle('text-md text-red-600 font-bold rounded-lg py-1')
        setSuccessStyle('text-md text-white font-bold bg-green-700 rounded-lg py-2 mx-2 pl-2')
    }, [])

    useEffect(() => 
    {

    }, [firstname, surname, phone, email, message])


    const sendMessage = () => 
    {
        setIsLoading(true)
        const isValid = allFields()
        if(isValid === 'passed')
        {
            const data = { firstname: firstname, surname: surname, phone: phone, email: email, message: message }
            const send = SendMessage(data)
            send.then((res) => 
            {
                if(res.statusCode === 200)
                {
                    setContactSuccess("Message Successfully sent")
                    setIsLoading(false)
                    setTimeout(() => 
                    {
                        setContactSuccess("")
                    }, 3000)
                } else {
                    setErrorMessage("Failed Sending")
                    setIsLoading(false)
                    setTimeout(() => 
                    {
                        setErrorMessage("")
                    }, 3000)                    
                }
            }).then(() => {

            })
            
        }
    }
    
    const allFields = () => 
    {
        let allow: string = 'passed'
        if(!firstname){ setFirstNameMessage(FIRSTNAME_MESSAGE); allow = 'failed' }
        if(!surname){ setSurnameMessage(SURNAME_MESSAGE); allow = 'failed' }
        if(!phone){ setPhoneMessage(PHONE_MESSAGE); allow = 'failed' }
        if(!email){ setEmailMessage(EMAIL_MESSAGE); allow = 'failed' }
        if(!message){ setMsgMessage(MSG_MESSAGE); allow = 'failed' }
        if(allow === 'failed')
        {
            setIsLoading(false)
        }
        return allow
    }

    return (
            <div 
                className="col-span-12 md:col-span-6 h-fit bg-white py-7 px-3 md:border-2 md:border-gray-200 border-shadow md:rounded-lg"
            >                            
                                    
                <h1 className="font-bold text-lg px-7 md:text-black md:ml-0 py-3 rounded-md bg-[#506f9d] md:bg-white text-white">Leave a message</h1>
                <div 
                    className="flex flex-wrap -m-2 mt-2 mb-2 md:mx-5"
                >
                    { errorMessage && <Message msg={errorMessage} status={errMsgStyle} /> }
                    { contactSuccess && <Message msg={contactSuccess} status={successStyle} /> }
                    <div 
                        className="p-2 w-full md:w-1/2"
                    >
                        <span className="w-full font-bold text-sm">Firstname</span>
                        <input 
                            onChange={
                              (e) => {
                                 setFirstname(e.target.value)
                              } 
                            }
                            onBlur={(e) => 
                              {
                                  if(e.target.value === "")
                                  {
                                      setFirstNameMessage(FIRSTNAME_MESSAGE)
                                  }
                              }
                            }
                            onFocus={() => 
                              {
                                  setFirstNameMessage("")                                                            
                              }
                            }
                            type="text" id="firstname" defaultValue={''}  name="firstname" placeholder="Enter Your Firstname" 
                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 text-sm py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
                        />
                        { firstnameMessage && <Message msg={firstnameMessage} status={errMsgStyle} />}
                    </div>
                    <div 
                        className="p-2 w-full md:w-1/2"
                    >
                        <span className="w-full font-bold text-sm">Surname</span>
                        <input 
                            type="text" id="surname" defaultValue={''} 
                            name="surname" placeholder="Enter Your Surname" 
                            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 text-sm leading-8 transition-colors duration-200 ease-in-out" 
                            onChange={(e) => 
                            {
                                setSurname(e.target.value)
                            }}
                            onBlur={(e) => 
                            {
                                if(e.target.value === "")
                                {
                                    setSurnameMessage(SURNAME_MESSAGE)
                                }
                            }}
                            onFocus={() => 
                            {
                                setSurnameMessage("")                                                            
                            }}
                        />
                        { surnameMessage && <Message msg={surnameMessage} status={errMsgStyle} />}
                        <div className="text-red-500 font-bold text-sm"></div>
                    </div>
                </div>
                <div 
                    className="flex flex-wrap -m-2 mt-2 mb-2 md:mx-5"
                >
                    <div 
                        className="p-2 w-full md:w-1/2"
                    >
                        <span className="w-full font-bold text-sm">Phone Number</span>
                        <input 
                              type="text" id="phoneNumber" defaultValue={''}  
                              name="phoneNumber" placeholder="Enter Your Phone Number" 
                              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 text-sm py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
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
                        className="p-2 w-full md:w-1/2"
                    >
                        <span className="w-full font-bold text-sm">Email</span>
                        <input 
                              type="email" id="email" 
                              defaultValue={''} name="email" 
                              placeholder="Enter Your Email" 
                              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 text-sm leading-8 transition-colors duration-200 ease-in-out" 
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
                        <div className="text-red-500 font-bold text-sm"></div>
                    </div>
                  </div>
                  <div 
                      className="flex flex-wrap -m-2 mt-2 mb-2 md:mx-5 px-3"
                  >
                      <span className="w-full font-bold text-sm">Message</span>
                      <textarea  
                            className="w-full border rounded-md p-3 bg-gray-100 bg-opacity-75 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out" 
                            name="message" id="message" placeholder="Enter Message" 
                            rows={5}
                            onChange={(e: any) => {
                            const value = e.target.value
                                if(value === "" || value === undefined || value === null)
                                {
                                    setMessage("")
                                    setMsgMessage(MSG_MESSAGE)
                                } else {
                                    setMsgMessage("")
                                    setMessage(value)                                                        
                                }
                            }}
                            onMouseLeave={(e: any) => {
                                const value = e.target.value
                                if(value === "" || value === undefined || value === null)
                                {
                                    setMessage("")
                                    setMsgMessage(MSG_MESSAGE)
                                } else {
                                    setMessage(value)
                                    setMsgMessage("")                                                        
                                }
                            }} 
                       >
                      </textarea>                      
                      { msgMessage && <Message msg={msgMessage} status={errMsgStyle} />}
                  </div>
                  <div  
                        className='w-full flex justify-end md:flex gap-10 md:mb-3 mt-5 md:-ml-8 ml-0'
                  >   
                      <button 
                            className="block w-fit bg-[#435f88] hover:bg-[#6f7277] border-shadow text-white font-bold p-4 rounded-lg ring-2 ring-inset"
                            onClick={sendMessage}
                            disabled={isLoading}
                      >
                        {  (isLoading === true) ? ( <BeatLoader size={9} color="#fff" />) : ( "Send" ) }
                      </button>
                  </div>
                  <div className="p-1"></div>
            </div>
    )
}
