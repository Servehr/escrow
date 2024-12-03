import { useEffect, useState } from "react"
import DashboardLayout from '../../shared/DashboardLayout'
import Message from "../../auth/helper/Message"
import { BeatLoader, RotateLoader } from "react-spinners"
import { useUser } from "../../hook/useUser"
import { USAGE_PATH } from "../../constant/Path"
import { appStore } from "../../state/store"
import { reduceImageSize } from "../../util/image"


export default function Profile() 
{    
    const userState = appStore((state) => state)
    const { UserProfile, ChangePassport, UpdateUser  } = useUser()

    const FIRSTNAME_MESSAGE = "Enter First name"
    const SURNAME_MESSAGE = "Enter Surname"
    const EMAIL_MESSAGE = "Enter Email Address"
    const PHONE_MESSAGE = "Enter Phone Number"
    const COUNTRY_MESSAGE = "Enter Country"
    const STATE_MESSAGE = "Enter State"
    
    const [validationMsg, setValidationMessage] = useState<string>('')

    const [firstname, setFirstName] = useState<string>('')
    const [firstnameMessage, setFirstNameMessage] = useState<string>('')

    const [surname, setSurname] = useState<string>('')
    const [surnameMessage, setSurnameMessage] = useState<string>('')

    const [phone, setPhone] = useState<string>('')
    const [phoneMessage, setPhoneMessage] = useState<string>('')

    const [email, setEmail] = useState<string>('')
    const [emailMessage, setEmailMessage] = useState<string>('')

    const [gender, setGender] = useState<string>('')
    const [genderMessage] = useState<string>('')

    const [country, setCountry] = useState<string>('')
    const [countryMessage, setCountryMessage] = useState<string>('')

    const [state, setState] = useState<string>('')
    const [stateMessage, setStateMessage] = useState<string>('')

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isUploading, setIsUploading] = useState<boolean>(false)
    const [isProfiling, setIsProfiling] = useState<boolean>(false)
    const [picture, setPicture] = useState<string>("")
    const [error, setError] = useState<string>('')
    const [imgUrl, setUrl] = useState<string>("")
    const [rawImage, setRawImage] = useState<string>("")

    const [errMsgStyle, setErrMsgStyle] = useState<string>('')
    const [errorMessage, setErrorMessage] = useState<string>("")
    const [profileSuccess, setProfileSuccess] = useState<string>("")
    const [profileMessage, setProfileMessage] = useState<string>("")

    useEffect(() => 
    {
        setIsLoading(true)
        callApi()
        setPicture(userState.getPassport())
        console.log({error, profileMessage})
        setErrMsgStyle('text-md text-white font-bold bg-red-600 rounded-lg py-3 px-5')
        setUrl("")
        setProfileMessage("")
        setErrorMessage("")
    }, [])
    
    useEffect(() => 
    {

    }, [picture])
    
    useEffect(() => 
    {

    }, [imgUrl])

    useEffect(() => 
    {

    }, [rawImage])

    const callApi = () => 
    {
        const userProfile = UserProfile()
        userProfile.then((UserProfile: any) => 
        {
            console.log(UserProfile?.data?.data?.passport)
            setFirstName(UserProfile?.data?.data?.firstname)
            setSurname(UserProfile?.data?.data?.surname)
            setEmail(UserProfile?.data?.data?.email)
            setPhone(UserProfile?.data?.data?.phone)
            setCountry(UserProfile?.data?.data?.country)
            setState(UserProfile?.data?.data?.state)
            setGender(UserProfile?.data?.data?.gender)
            setPicture(UserProfile?.data?.data?.passport)
            userState.setPassport(UserProfile?.data?.data?.passport)
            setIsLoading(false)
        }).then(() => {
            setError("")
            setIsLoading(false)
        })
    }

    const ChangeImage = async () =>
    {
        setIsUploading(true)
        const UploadImage = ChangePassport(rawImage)
        UploadImage.then((response) => 
        {
            setIsUploading(true)
            if(response?.statusCode === 200)
            {
               setIsUploading(false)               
               userState.setPassport(response?.data?.data?.passport)
               userState.setPassport(response?.data?.data?.passport)
            } 
            else {
               setIsUploading(false)
               setErrorMessage("Updating Profile failed")
            }
        }).then(() => {

        })
    }

    const UpdateProfile = () => 
    {        
        setIsProfiling(true)
        const data = {
            firstname: firstname,
            surname: surname,
            phone: phone,
            email: email,
            gender: gender,
            country: country,
            state: state,
        }
        const ChangeUserProfile = UpdateUser(data)
        ChangeUserProfile.then((response) => 
        {
            if(response?.statusCode === 200)
            {
                setProfileSuccess("Profile Successfuly Updated")
                setIsProfiling(false)   
            } 
            else {
               setIsProfiling(false)
               setProfileMessage("Updating profile failed")
            }
        }).then(() => {

        })
        setTimeout(() => {
            setProfileMessage("")
            setProfileSuccess("")
        }, 5000)
    }

    const imageUrlToDisplay = (file: any) => 
    {
        const img = file[0]
        const displayedImage: any = URL.createObjectURL(img)
        setPicture("")
        setUrl(displayedImage)

        const image = Array.from(file)        
        Promise.all(
            image.map((file: any) => 
            {
               return new Promise((resolve, reject) => 
               {
                  const reader: FileReader = new FileReader();
                  reader.readAsDataURL(file);
                  reader.onload = async () => 
                  {                        
                     let sizeToCalculate = reader.result as string
                     let x = await reduceImageSize(sizeToCalculate)
                     resolve(x)
                  }
                  reader.onerror = (error) => reject(error);
               });
            })
            ).then((results) => {
               let x = results[0] as string
               setRawImage(x)
            });
    }

    const closeIt = () => 
    {
            setUrl("")               
    }

    useEffect(() => 
    {
       setErrMsgStyle('text-md text-red-600 font-bold')
       setValidationMessage("")
       if(2 > 3)
       {
            allFields()
       }
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
    
    const Gender: { name: string, value: string }[] = 
    [
        {
            name: 'Male',
            value: 'male'
        },
        {
            name: 'Female',
            value: 'female'
        }
    ]
    
    return (
        <DashboardLayout pageName="Profile"
        >
            <div
                className="w-12/12 md:px-5 border-2 pt-5 pb-14 bg-white border-[#d1dbea] px-2" 
            >
            {
                (isLoading === true) && <div className="col-span-12 h-[300px] flex justify-center items-center" style={{ marginTop: '60px', paddingTop: '0px' }}
                >
                   <RotateLoader className='w-12 h-12' />
                </div>
            }
            { !isLoading  && 
                    <div 
                        className='grid grid-cols-12 mx-auto mt-1 px-2 md:px-0'
                    >       
                        <div 
                            className='col-span-12 md:col-span-4 px-1 md:px-1 mt-5 md:mt-20 md:-ml-10'
                        >   
                            <div 
                                className='w-full d-flex md:flex gap-10 mb-5 px-5'
                            >      
                                <div 
                                    className="mb-4 md:-mt-12 flex justify-left w-10/12 rounded-lg bg-gray-200 h-[fit] mx-auto"
                                >
                                    { picture && <img src={`${USAGE_PATH.PROFILE_PICTURE}${picture}`} className='flex justify-left  bg-blue-200 mb-3' />  }
                                    { imgUrl && <img src={`${imgUrl}`} className='flex justify-left  bg-blue-200 mb-3' />  }
                                </div>
                            </div>
                            <div 
                                className="drag-area p-3 items-center text-center mx-auto"
                            >
                                <span 
                                    className="flex select justify-center items-center text-xs block" role="button"
                                >
                                    <b className="px-10 py-5">Browse</b>
                                    <input type="file" id="product" name="product" className="file" onChange={
                                                                (e) => {
                                                                            imageUrlToDisplay(e.target.files)
                                                                    }
                                                            } 
                                                    />
                                </span>
                            </div>                   
                            <div 
                                className="container grid grid-col-12 mx-auto flex justify-center items-center mb-10"
                            >
                                { errorMessage && <Message msg={errorMessage} status={errMsgStyle} />  }
                            </div> 
                            <div 
                                    className="items-center gap-5 mt-2 sm:flex flex justify-left mb-2 mx-5 mt-1 -ml-1 justify-center flexx"
                                >                                        
                                        <button 
                                                className="py-3 px-4 bg-red-600 text-white font-semibold text-sm rounded-xl w-max"
                                                onClick={closeIt}
                                                >
                                                        Cancel
                                        </button>
                                        
                                        <button 
                                            className="py-3 px-4 bg-green-700 hover:bg-green-500 text-white font-semibold text-sm rounded-xl w-max"
                                            onClick={ChangeImage}
                                        >
                                           {   (isUploading === true) ? ( <BeatLoader size={9} color="#fff" />) : ( "Upload Image" )  }
                                        </button>
                                </div>
                            <div className="md:hidden h-[70px]"></div> 
                        </div>
                        <div 
                            className='col-span-12 md:col-span-8 pl-1 md:mt-8'
                        >            
                              
                            { profileSuccess && <div 
                                    className='w-full d-flex md:flex gap-10 md:mb-3'
                                >                                    
                                    <Message msg={profileSuccess} status={`border-2 border-green-400 bg-green-700    text-white font-bold mb-2 w-full p-2 rounded-md`} />
                                </div>
                            } 
                            <div 
                                className='w-full d-flex md:flex gap-10 md:mb-3'
                            > 
                                <div 
                                    className="mb-4 md:w-1/2 w-2/2"
                                >
                                    <input  
                                        defaultValue={firstname}
                                        className="w-full border rounded-md p-3 bg-opacity-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out" 
                                        type="text" name="firstname" id="firstname" placeholder="Enter Firtsname"
                                        onChange={(e) => 
                                        {
                                            setFirstName(e.target.value)
                                        }}
                                        onBlur={(e) => 
                                        {
                                            if(e.target.value === "")
                                            {
                                                setFirstNameMessage(FIRSTNAME_MESSAGE)
                                            }
                                        }}
                                        onFocus={() => 
                                        {
                                            setFirstNameMessage("")                                                            
                                        }}
                                    />
                                    { firstnameMessage && <Message msg={firstnameMessage} status={errMsgStyle} />}
                                </div>
                                <div 
                                    className="mb-4 md:w-1/2 w-2/2"
                                >
                                    <input  
                                        defaultValue={surname}
                                        className="w-full border rounded-md p-3 bg-opacity-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out" 
                                        type="text" name="surname" id="surname" placeholder="Enter Surname" 
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
                                </div>
                            </div>
                            <div  
                                className='w-full d-flex md:flex gap-10 md:mb-3'
                            >          
                                <div 
                                    className="mb-4 md:w-full"
                                >
                                    <input  
                                        defaultValue={phone}
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
                                        defaultValue={email}
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
                                            onChange={(e: any) => 
                                            {
                                                setGender(e.target.value)
                                            }
                                            }
                                            className="block appearance-none w-full bg-white border border-gray-300 py-5 px-4 pr-8 text-lg rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-300"
                                        >
                                            { <option value={-1}> - Select Gender -  </option> }
                                            {
                                                Gender.map((gend: { name: string, value:string }, index) =>  {
                                                    return (
                                                            <option key={index} value={gend?.value} selected={(gend?.value === gender ? true : false)}>
                                                                    {gend?.name}
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
                                    { genderMessage && <Message msg={genderMessage} status={errMsgStyle} />}
                                </div>
                            </div>
                            <div  
                                className='w-full d-flex md:flex gap-10 md:mb-3'
                            >                                          
                                <div 
                                    className="mb-4 md:w-full"
                                >
                                    <input  
                                        defaultValue={country}
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
                                    defaultValue={state}
                                    className="w-full border rounded-md p-3 bg-opacity-100 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out" 
                                    type="text" name="state" id="state" placeholder="Enter State"
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
                                className='w-full flex justify-end md:flex gap-10 md:mb-3 mt-5'
                            >   
                                <button 
                                        className="block w-fit bg-[#435f88] hover:bg-[#6f7277] border-shadow text-white font-bold p-4 rounded-lg ring-2 ring-inset"
                                        onClick={UpdateProfile}
                                        disabled={isProfiling}
                                >
                                {  isProfiling ? ( <BeatLoader size={9} color="#fff" />) : ( "Update" ) }
                                </button>
                            </div>
                        </div>
                    </div>
                }   
                
                <div className="md:h-[290px]"></div>
            </div>
        </DashboardLayout>
    )
}
