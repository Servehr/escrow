import { useEffect, useState } from "react"
import HomeLayout from "../shared/HomeLayout"
import Message from "../auth/helper/Message"
import { BeatLoader } from "react-spinners"
import { reduceImageSize } from "../util/image"
import { useUser } from "../hook/useUser"
import { appStore } from "../state/store"
import { useNavigate } from "react-router-dom"


export const Passport = () =>
{
    const navigate = useNavigate()
    const UseState = appStore((state) => state)
    const { UploadPassport } = useUser()
    const [imgUrl, setUrl] = useState<string>("")
    const [loading, setIsLoading] = useState<boolean>(false)
    const [rawImage, setRawImage] = useState<string>("")

    const [errMsgStyle, setErrMsgStyle] = useState<string>('')
    const [errorMessage, setErrorMessage] = useState<string>("")

    useEffect(() => 
    {
       setErrMsgStyle('text-md text-white font-bold bg-red-600 rounded-lg py-3 px-5')
       setErrorMessage("")
    }, []) 
    
    useEffect(() => 
    {

    }, [imgUrl])

    useEffect(() => 
    {

    }, [rawImage])

    const uploadImage = async () =>
    {
        setIsLoading(true)
        const UploadImage = UploadPassport(rawImage)
        UploadImage.then((response) => 
        {
            if(response?.statusCode === 200)
            {
               setIsLoading(false)
               UseState.setPassport(response?.data?.data?.passport)
               UseState.setAllow("loggedIn")
               navigate('/')
            } else {
               setIsLoading(false)
               setErrorMessage("Error Uploading Passport")
            }

        }).then(() => {

        })
    }

    const imageUrlToDisplay = (file: any) => 
    {
        const img = file[0]
        const displayedImage: any = URL.createObjectURL(img)
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
    
    return (
        <HomeLayout pageName="Contact Us"
        >
            <div className='pt-10 bg-white mt-10 -mb-20'
            >
                <div 
                    className="container d-flex mx-auto mt-5 md:mt-20 md:mb-20"
                >
                    {/* <div 
                        className=""
                    > */}
                        { errorMessage && <Message msg={errorMessage} status={errMsgStyle} />  }
                        <div 
                            className="grid grid:col-12 mx-auto gap-5 mt-5 mb-5 justify-center items-center"
                        >
                            { 
                                imgUrl &&
                                <div 
                                    className="col-span-3 bg-white border-2 border-gray-200 shadow-md w-[400px] mx-auto justify-center item-center"
                                >
                                    <img src={imgUrl} alt="Product image" className="object-cover" />
                                </div>
                            }
                            { 
                                !imgUrl &&
                                <div 
                                    className="col-span-3 bg-white border-2 border-gray-200 shadow-md w-[400px] h-[300px] flex mx-auto justify-center item-center"
                                >
                                    <span className="mt-20 font-bold ">Upload Passport</span>
                                </div>
                            }

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
                        </div>
                                
                        {
                            imgUrl &&
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
                                                onClick={uploadImage}
                                          >
                                             {   (loading === true) ? ( <BeatLoader size={9} color="#fff" />) : ( "Upload Image" )  }
                                          </button>
                            </div>    
                        }                
                    {/* </div> */}
                </div>

                <div className="p-20"></div>

                {/* <SingleImageUpload width={0} ICloudColour={"blue"} /> */}

                {/* <div className="p-20"></div> */}
            </div>  
        </HomeLayout>
    )
  }
  