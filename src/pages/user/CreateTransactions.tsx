import { useState, useEffect } from 'react';
import { BeatLoader, RotateLoader } from 'react-spinners';
import DashboardLayout from '../../shared/DashboardLayout'
import Editor from '../../component/editor/Editor';
import Message from '../../auth/helper/Message';
import MultipleImageUpload from '../../component/MultipleImageUpload';
import VideoUpload from '../preview/VideoUpload';
import delay from 'delay';
import { appStore } from '../../state/store';
import { useTransaction } from '../../hook/useTransaction';
import { useNavigate } from 'react-router-dom';
import { useService } from '../../hook/useService';


export default function CreateTransactions() 
{
    const navigate = useNavigate()
    const createTransaction = appStore((state) => state)
    const { CreateTransaction } = useTransaction()
    const { GetService } = useService()
    const [categon, setCategories] = useState<any[]>([])
    const [error, setError] = useState<string>('')

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
    const [validationMsg, setValidationMessage] = useState<string>('')
    
    useEffect(() => 
    {
        setIsLoading(true)
        const allCategories = GetService()
        allCategories.then((categories) => 
        {
            setCategories(categories?.data?.data)
            setIsLoading(false)
        }).then(() => {
            setError("Try again")
            setIsLoading(false)
        })
        console.log(error)
    }, [])

    const IMAGE_ALLOWED_TYPES = ['jpg', 'jpeg', 'png']
    const VIDEO_ALLOWED_TYPES = ['mp4', 'webm', 'ogg']

    const CATEGORY_MESSAGE = "Select Category"
    const SERVICE_NAME_MESSAGE = "Enter Item or Service Name"
    const AMOUNT_MESSAGE = "Enter Amount"
    const DESCRIPTION_MESSAGE = "Enter Description"
    const AGREEMENT_MESSAGE = "Enter Agreement"
    const START_DATE_MESSAGE = "Enter Start Date"
    const END_DATE_MESSAGE = "Enter End Date"
    const UPLOAD_IMAGE_MESSAGE = "Maximum upload of 8"
    // const UPLOAD_VIDEO_MESSAGE = "Upload video"
    const AS_MESSAGE = "Select whether you are a buyer or a seller"

    const [errMsgStyle, setErrMsgStyle] = useState<string>('')      

    const [category, setCategory] = useState<number>(0)
    const [categoryMessage, setCategoryMessage] = useState<string>("")

    const [as, setAs] = useState<string>("")
    const [asMessage, setAsMessage] = useState<string>("")

    const [serviceName, setServiceName] = useState<string>("")
    const [serviceNameMessage, setServiceNameMessage] = useState<string>("")

    const [amount, setAmount] = useState<string>("")
    const [amountMessage, setAmountMessage] = useState<string>("")

    const [description, setDescription] = useState<string>("")
    const [descriptionMessage, setDescriptionMessage] = useState<string>("")

    const [agreement, setAgreement] = useState<string>("")
    const [agreementMessage, setAgreementMessage] = useState<string>("")

    const [startDate, setStartDate] = useState<string>("")
    const [startDateMessage, setStartDateMessage] = useState<string>("")

    const [endDate, setEndDate] = useState<string>("")
    const [endDateMessage, setEndDateMessage] = useState<string>("")

    const [uploadedImages, setUploadedImages] = useState<string[]>([])
    const [isImageUpload, setIsImageUpload] = useState<boolean>(false)
    const [imageUploadMessage, setImageUploadMessage] = useState<string>("")

    const [uploadedVideo, setUploadedVideo] = useState<string>("")
    const [isVideoUpload, setIsVideoUpload] = useState<boolean>(false)
    const [videoUploadMessage, setVideoUploadMessage] = useState<string>("")

    useEffect(() => 
    {
       setErrMsgStyle('text-md text-red-600 font-bold')
       setIsLoading(false)
       console.log({ as, serviceName, amount, description, agreement, startDate, isImageUpload, uploadedVideo, isVideoUpload })
    }, [])

    useEffect(() => 
    {
    }, [isLoading])

    const BuyerOrSeller: { name: string }[] = [{ name: 'buyer' },  { name: 'seller' } ]

    const SaveTransaction = async () => 
    {
       let valid: string = 'passed'
       setIsSubmitting(true)
       await delay(2000)

       valid = allFields()

       if(valid === 'passed')
       {
            const data: any = 
            {
                category: createTransaction.getCategory(), 
                as: createTransaction.getAs(), 
                serviceName: createTransaction.getServiceName(), 
                amount: createTransaction.getAmount(), 
                description: createTransaction.getDescription(), 
                agreement: createTransaction.getAgreement(), 
                startDate: createTransaction.getStartDate(), 
                endDate: createTransaction.getEndDate(), 
                images: uploadedImages
                // video: uploadedVideo
            } 
            //////////////////////////
            const accessingApplication = CreateTransaction(data)
            accessingApplication.then((res: any) => 
            { 
                if(res.statusCode === 200)
                {
                    setIsLoading(false) 
                    createTransaction.setCategory("")
                    createTransaction.setAs("") 
                    createTransaction.setServiceName("") 
                    createTransaction.setAmount("") 
                    createTransaction.setDescription("") 
                    createTransaction.setAgreement("") 
                    createTransaction.setStartDate("") 
                    createTransaction.setEndDate("") 
                    navigate('/dashboard/transactions')
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
            /////////////////////////
            setIsSubmitting(false)
       } else {             
            setIsSubmitting(false)  
            setValidationMessage('Attempt all fields')
            setTimeout(() => {
                setValidationMessage('')
            }, 10000)              
       }
    }

    const transactionDate = (date: Date) => 
    {        
        const theDate: Date = new Date(date)
        let x: string = theDate.getFullYear() + '/' + theDate.getMonth() + '/' +  theDate.getDay()
        return x
    }

    const allFields = () => 
    {
       let allow: string = 'passed'
       if(createTransaction.getCategory() === -1 || createTransaction.getCategory() === 0){ setCategoryMessage(CATEGORY_MESSAGE); allow = 'failed' }
       if(createTransaction.getAs() === "none"){ setAsMessage(AS_MESSAGE); allow = 'failed' }
       if(createTransaction.getServiceName() === ""){ setServiceNameMessage(SERVICE_NAME_MESSAGE); allow = 'failed' }
       if(createTransaction.getAmount() === ""){ setAmountMessage(AMOUNT_MESSAGE); allow = 'failed' }
       if(createTransaction.getDescription() === ""){ setDescriptionMessage(DESCRIPTION_MESSAGE); allow = 'failed' }
       if(createTransaction.getAgreement() === ""){ setAgreementMessage(AGREEMENT_MESSAGE); allow = 'failed' }
       if(createTransaction.getStartDate() === ""){ setStartDateMessage(START_DATE_MESSAGE); allow = 'failed' }
       if(createTransaction.getEndDate() === ""){ setEndDateMessage(END_DATE_MESSAGE); allow = 'failed' }
       if(uploadedImages.length === 0){ setImageUploadMessage("Kindly upload images"); allow = 'failed' }
       if(uploadedImages.length > 8){ setImageUploadMessage(UPLOAD_IMAGE_MESSAGE); allow = 'failed' }       
       setErrMsgStyle('text-md text-red-600 font-bold')
    //    if(uploadedVideo === ""){ setVideoUploadMessage(UPLOAD_VIDEO_MESSAGE); allow = 'failed' }
       return allow
    }
    
    
    return (
        <DashboardLayout 
                pageName="Create Transaction"
        >
            {
               ((isLoading === true) && (categon.length === 0)) && <div className="col-span-12 h-[500px] flex justify-center items-center" style={{ marginTop: '60px', paddingTop: '0px' }}
               >
                   <RotateLoader className='w-12 h-12' />
               </div>
            }
            {
               ((isLoading === false) && (categon.length === 0)) && <div className="col-span-12 h-[500px] flex justify-center items-center" style={{ marginTop: '60px', paddingTop: '0px' }}
               >
                   {/* <h1>Category is empty, transaction cannot begin</h1> */}
                   <RotateLoader className='w-12 h-12' />
               </div>
            }
            { 
            
                ((isLoading === false) && categon && (categon.length > 0)) &&
                <div
                    className="w-12/12 md:pl-1 border-2 pt-5 pb-14 bg-white border-[#d1dbea]" 
                >
                    <div className='grid grid-cols-12 pl-1 pr-2 md:px-5 mx-auto mt-1'
                    >
                        <div 
                            className='col-span-12 md:col-span-6 pl-1 md:mt-0'
                        >
                            <div  
                                className='w-full md:mx-0 d-flex mx-auto gap-10 md:mb-3'
                            >  
                                <div 
                                    className="mb-4 md:col-span-12"
                                >
                                    <div 
                                        className="relative"
                                    >
                                        <select 
                                                defaultValue={createTransaction.getAs()}
                                                className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-5 px-4 pr-8 text-lg rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                onChange={(e: any) => {
                                                    const selected = e.target.value
                                                    if(selected === -1)
                                                    {
                                                        setAs("")
                                                        setAsMessage(AS_MESSAGE)
                                                        createTransaction.setAs("")
                                                    } else {
                                                        setAs(e)
                                                        createTransaction.setAs(selected)
                                                        setAsMessage("")                                                        
                                                    }
                                                }}
                                        >
                                            { <option value={"none"}> - Are you a Seller/Buyer -  </option> }
                                            {
                                                BuyerOrSeller.map((type, index) =>  {
                                                    return (
                                                        <option key={index} value={type?.name} selected={type?.name === createTransaction.getAs() ? true : false} >
                                                            {type?.name}
                                                        </option>
                                                    )
                                                })
                                            }
                                        </select>
                                        <div 
                                            className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 mt-1"
                                        >
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                        </div>
                                    </div>
                                    { (asMessage != "none") && <Message msg={asMessage} status={errMsgStyle} /> }
                                </div>
                                <div 
                                    className="mb-4 md:col-span-12"
                                >
                                    <div 
                                        className="relative"
                                    >
                                        <select 
                                                defaultValue={createTransaction.getCategory()}
                                                className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-5 px-4 pr-8 text-lg rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                onChange={(e: any) => {
                                                    const selected = Number(e.target.value)
                                                    if(selected === -1)
                                                    {
                                                        setCategory(-1)
                                                        setCategoryMessage("Kindly select category")
                                                        createTransaction.setCategory(-1)
                                                    } else {
                                                        setCategory(e)
                                                        createTransaction.setCategory(selected)
                                                        setCategoryMessage("")                                                        
                                                    }
                                                }}
                                        >
                                            { <option value={-1}> - Select Category -  </option> }
                                            {
                                                categon.map((cat, index) =>  {
                                                    return (
                                                        <option key={index} value={cat?.id} selected={cat?.id === createTransaction.getCategory() ? true : false} >
                                                            {cat?.name}
                                                        </option>
                                                    )
                                                })
                                            }
                                        </select>
                                        <div 
                                            className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 mt-1"
                                        >
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                        </div>
                                    </div>
                                    { ((category === -1) || (category === 0)) && <Message msg={categoryMessage} status={errMsgStyle} />}
                                </div>
                                <div 
                                    className="mb-4 md:col-span-12"
                                >
                                    <input  
                                            defaultValue={createTransaction.getServiceName()}
                                            className="w-full border rounded-md p-3 bg-white bg-opacity-75 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out" 
                                            type="text" name="serviceName" id="serviceName" placeholder="Enter Item/Service Name"
                                            onChange={(e: any) => {
                                                const value = e.target.value
                                                if(value === "" || value === undefined || value === null)
                                                {
                                                    setServiceName("")
                                                    createTransaction.setServiceName("")
                                                    setServiceNameMessage("Kindly enter service name")
                                                } else {
                                                    setServiceName(value)
                                                    createTransaction.setServiceName(value)
                                                    setServiceNameMessage("")                                                        
                                                }
                                            }}
                                            onMouseLeave={(e: any) => {
                                                const value = e.target.value
                                                if(value === "" || value === undefined || value === null)
                                                {
                                                    setServiceName("")
                                                    createTransaction.setServiceName("")
                                                    setServiceNameMessage("Kindly enter service name")
                                                } else {
                                                    setServiceName(value)
                                                    createTransaction.setServiceName(value)
                                                    setServiceNameMessage("")                                                        
                                                }
                                            }}  
                                    />                                    
                                    { serviceNameMessage && <Message msg={serviceNameMessage} status={errMsgStyle} />}
                                </div> 
                                <div 
                                    className="mb-4 md:col-span-12"
                                >
                                    <input  
                                            defaultValue={createTransaction.getAmount()}
                                            className="w-full border rounded-md p-3 bg-white bg-opacity-75 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out" 
                                            type="text" name="amount" id="amount" placeholder="Enter Product Price/Service Amont"
                                            onChange={(e: any) => {
                                                const value = e.target.value
                                                if(value === "" || value === undefined || value === null)
                                                {
                                                    setAmount("")
                                                    createTransaction.setAmount(value)
                                                    setAmountMessage("Kindly enter amount for the service")
                                                } else {
                                                    setAmount(value)
                                                    createTransaction.setAmount(value)
                                                    setAmountMessage("")                                                        
                                                }
                                            }}
                                            onMouseLeave={(e: any) => {
                                                const value = e.target.value
                                                if(value === "" || value === undefined || value === null)
                                                {
                                                    setAmount("")
                                                    createTransaction.setAmount(value)
                                                    setAmountMessage("Kindly enter amount for the service")
                                                } else {
                                                    setAmount(value)
                                                    createTransaction.setAmount(value)
                                                    setAmountMessage("")                                                        
                                                }
                                            }}  
                                    />
                                    { amountMessage && <Message msg={amountMessage} status={errMsgStyle} />}
                                </div>   
                                                                     
                                <div 
                                    className="mb-4 md:col-span-12"
                                >
                                    <Editor id={'description'} name={'Description'} content={createTransaction.getDescription()} 
                                            onClick={(value: string) => {
                                                if(value === "<br>")
                                                {
                                                    setDescription("")
                                                    createTransaction.setDescription(value)
                                                    setDescriptionMessage("Kindly enter description")
                                                } else {
                                                    setDescription(value)
                                                    createTransaction.setDescription(value)
                                                    setDescriptionMessage("")                                                        
                                                }
                                            }} 
                                    />
                                    { descriptionMessage && <Message msg={descriptionMessage} status={errMsgStyle} />}
                                </div>
                                                                     
                                <div 
                                    className="mb-4 md:col-span-12"
                                >
                                    <Editor id={'agreement'} name={'Agreement'} content={createTransaction.getAgreement()}
                                            onClick={(value: string) => {
                                                if(value === "<br>")
                                                {
                                                    setAgreement("")
                                                    createTransaction.setAgreement(value)
                                                    setAgreementMessage("Kindly enter agreement on ground")
                                                } else {
                                                    setAgreement(value)
                                                    createTransaction.setAgreement(value)
                                                    setAgreementMessage("")                                                        
                                                }
                                            }} 
                                    />
                                    { agreementMessage && <Message msg={agreementMessage} status={errMsgStyle} />}
                                </div>
                                
                                <div className='font-bold text-md between w-full flex ml-1 justify-left items-center mt-6 text-gray-400'>Transaction Period</div>
                                <div 
                                    className="mb-4 flex md:d-flex"
                                >
                                    <div 
                                        className="py-3 w-1/2"
                                    >
                                        <span className='p-2 text-gray-400 font-semibold'>Start Date</span>
                                        <input  
                                                defaultValue={createTransaction.getStartDate()}
                                                className="w-full border rounded-md p-3 mx-1 bg-white bg-opacity-75 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out" 
                                                type="date" name="from" id="from" 
                                                onChange={(e: any) => {
                                                    const value: string = e.target.value
                                                    if(value === "" || value === undefined || value === null)
                                                    {
                                                        setStartDate(endDate)
                                                        createTransaction.setStartDate(value)
                                                        setStartDateMessage("Enter transaction start date")
                                                    } else {
                                                        const endDate: string = transactionDate(e.target.value)
                                                        setStartDate(endDate)
                                                        createTransaction.setStartDate(value)
                                                        setStartDateMessage("")
                                                    }
                                                }}
                                        />
                                        { startDateMessage && <Message msg={startDateMessage} status={errMsgStyle} />}
                                    </div>
                                    <div 
                                        className="p-3 w-1/2"
                                    >
                                        <span className='p-2 text-gray-400 font-semibold'>End Date</span>
                                        <input   
                                                defaultValue={createTransaction.getEndDate()}
                                                className="w-full border rounded-md p-3 bg-white bg-opacity-75 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out" 
                                                type="date" name="toArrive" id="toArrive"  
                                                onChange={(e: any) => {
                                                    const value: string = e.target.value
                                                    if(value === "" || value === undefined || value === null)
                                                    {
                                                        setEndDate(endDate)
                                                        createTransaction.setEndDate(value)
                                                        setEndDateMessage("Enter transaction end date")
                                                    } else {
                                                        const endDate: string = transactionDate(e.target.value)
                                                        setEndDate(endDate)
                                                        createTransaction.setEndDate(value)
                                                        setEndDateMessage("")
                                                    }
                                                }}
                                        />
                                        { endDateMessage && <Message msg={endDateMessage} status={errMsgStyle} />}
                                    </div>
                                </div> 
                            </div>
                        </div>
                        <div 
                                className='col-span-12 md:col-span-6 px-1 md:px-5 md:px-10 mt-5 md:mt-0'
                        >
                            <div 
                                className='px-3 py-4 font-bold bg-blue-200 text-gray-500 rounded-md mb-7'
                            >
                                Upload Picture
                            </div>
                            <div 
                                className="flex justify-center items-center mx-auto"
                            >                                
                                { imageUploadMessage && <Message msg={imageUploadMessage} status={errMsgStyle} />}
                            </div>
                            <div 
                                className="d-flex w-full md:mt-1 mt-3 justify-center items-center" 
                            >
                                <MultipleImageUpload width={12} ICloudColour='text-black' allowedFileTypes={IMAGE_ALLOWED_TYPES} 
                                                     onClick={(message: any, isValid) => 
                                                     {
                                                        if(isValid)
                                                        {             
                                                            setIsImageUpload(false)
                                                            setImageUploadMessage("")
                                                            setUploadedImages(message)                       
                                                        } else {
                                                            setIsImageUpload(isValid)
                                                            setTimeout(() => 
                                                            {                                                                
                                                                setImageUploadMessage(message)
                                                            }, 1000)
                                                        }
                                                     }}
                                />
                            </div>

                            <div 
                                className='px-3 py-4 font-bold bg-blue-200 text-gray-500 rounded-md'
                            >
                                Upload Videos
                            </div>
                            <div 
                                className="flex justify-center items-center mx-auto"
                            >                                
                                { videoUploadMessage && <Message msg={videoUploadMessage} status={errMsgStyle} />}
                            </div>
                            <div 
                                className="d-flex justify-center items-center w-full md:mt-1 mb-2 p-3"  
                            >
                                <VideoUpload width={12} ICloudColour='text-black' allowedFileTypes={VIDEO_ALLOWED_TYPES} 
                                            onClick={(message: any, isValid: boolean) => 
                                            {
                                                if(isValid)
                                                {             
                                                    setIsVideoUpload(false)
                                                    setVideoUploadMessage("")
                                                    setUploadedVideo(message)
                                                } else {
                                                    setIsVideoUpload(isValid)
                                                    setTimeout(() => 
                                                    {                                   
                                                        setVideoUploadMessage(message)
                                                    }, 1000)
                                                }
                                            }}   
                                />
                            </div>  
                        </div>

                    </div>
                    <div 
                        className='mb-2 mt-10 md:mt-10 w-fit mx-auto flex justify-center items-center px-5'
                    > 
                        {
                            validationMsg && <Message msg={validationMsg} status={errMsgStyle} customStyle="bg-red-600 p-3 text-white font-bold rounded-md" />
                        }
                    </div>
                    <div 
                        className='mb-10 mt-7 md:mt-7 w-full flex justify-center items-center'
                    > 
                        <button 
                                className="block w-fit bg-[#435f88] hover:bg-[#6f7277] border-shadow text-white font-bold p-4 rounded-lg ring-2 ring-inset"
                                onClick={SaveTransaction}
                        >
                            {  (isSubmitting === true) ? ( <BeatLoader size={9} color="#fff" />) : ( "Create Transaction" )  }                            
                        </button>
                    </div>
                </div>
            }
        </DashboardLayout>
    )
}
