import React, { useEffect, useState } from 'react'
import { HiCloudUpload } from 'react-icons/hi'
import { determineFileType, reduceImageSize } from '../util/image'


type ImageProps = 
{
    width: number,
    ICloudColour: string,
    allowedFileTypes: string[],
    onClick: (message: any, isValid: boolean) => void
}


export default function MultipleImageUpload({width, ICloudColour, allowedFileTypes, onClick}: ImageProps) 
{
    const [userPassport, setUserPassport] = useState<string>("")
    const [uploadText, setUploadText] = useState<string>("Click to upload pictures")
    let photograph!: HTMLDivElement

    
    const [previewUrls, setPreviewUrls] = useState<any[]>([]);   
    const [thumbnail, setImages] = useState<any[]>([])
    const [imageSizes, setImageSizes] = useState([])
    const [images, setProductImages] = useState<any[]>([]);   
    const [refresh, setRefresh] = useState<number>(0);    

    useEffect(() => 
    {
        setTimeout(() => 
        {   
            photograph = document.querySelector('.theArea')!
        }, 200)
    }, [])

    useEffect(() => 
    {        
        let photo: HTMLInputElement | null = null
        photo = document.querySelector('#passport')!
        onClick(previewUrls, true)  
    }, [userPassport, refresh, previewUrls])

    const hover = () => 
    {
        let photo: HTMLInputElement | null = null
        photo = document.querySelector('#passport')!
        if(photo === null)
        {
            let photo: HTMLInputElement
            photo = document.querySelector('#passport')!
            photo.click()
        } else {
            photo.click()
        }
    }

    const handleMultipleImages = (e: any) => 
    {
        const files = Array.from(e.target.files)
        const fileExtensions: string | string[] = determineFileType(files)
        let fileLength: number = 0

        if(Array.isArray(fileExtensions))
        {
            fileLength = fileExtensions.length
        } else {
            if(fileExtensions === null || fileExtensions === undefined)
            {     
                fileLength = -1
            } else {                
                fileLength = 1
            }
        }
        
        if(fileLength === -1)
        {
            onClick("invalid", false)
        } else if(fileLength === 1)
        {
            const f: string = fileExtensions as string
            const fileExtenstion = allowedFileTypes.includes(f)
            const isValid: boolean = fileExtenstion
            if(!isValid)
            {
                onClick("File is invalid (only jpg, jpeg, png) is allowed", false)
            } else {                
                processImage(files)
            }
        } else if(fileLength > 1) {
            let validityCount: number = 0
            for (let index = 0; index < fileExtensions.length; index++) 
            {
                if(!allowedFileTypes.includes(fileExtensions[index]))
                {
                    validityCount = validityCount + 1
                }
            }
            if(validityCount > 0)
            {
                onClick("one or more file is invalid (only jpg, jpeg, png) is allowed", false)
            } else {
                processImage(files)
            }
        } 
        setRefresh(Math.random()*739*153)           
    }

    const processImage = (files: any) => 
    {
        if (files.length > 0) 
        {
                setProductImages([...images, ...files])            
    
                Promise.all(
                    files.map((file: any) => 
                    {
                        return new Promise((resolve, reject) => {
                        const reader: FileReader = new FileReader();
                        reader.readAsDataURL(file);
                        reader.onload = async () => 
                        {                        
                            let sizeToCalculate = reader.result as string
                            let x = await reduceImageSize(sizeToCalculate, 0, 1024, 2)
                            resolve(x)
                        }
                        reader.onerror = (error) => reject(error);
                        });
                    })
                ).then((results) => {
                    setUploadText("Click to upload more pictures")
                    setPreviewUrls([...previewUrls, ...results])
                });
                // setRefresh(Math.random()*333*(Math.random()*937))
                // console.log(previewUrls)
                // onClick(previewUrls, true)
        } else {
            onClick("Upload at least a file", false)
        } 
    }

    const handleDeleteImage = (image: string, index: number) => 
    {
        const newImages = [...images];
        newImages.splice(index, 1);
        setImages(newImages);
        const newPreviewUrls = [...previewUrls];
        imageSizes.splice(index, 1);
        newPreviewUrls.splice(index, 1);
        setPreviewUrls(newPreviewUrls);
        onClick(index.toString(), true)
    }


    return (
          <>
              <div 
                  className="theArea mb-2 flex-col w-7/12 md:w-4/12 object-fill rounded-md px-10 py-1 flex justify-center items-center mx-auto cursor-pointer hover:text-green-300 uploader bg-[#f0f8ff] border-2 border-gray-200"
                  onClick={() => { 
                    hover() 
                  }}
              >                 
                    
                    <div 
                        className={`passportText ${ICloudColour} w-full d-flex justify-center mt-5 mb-4 text-center mx-auto font-bold upload`}
                    > 
                        <div className="cloudy mb-3"
                        >
                            <HiCloudUpload className={`w-10 h-10 ${ICloudColour} upload mx-auto`} />
                        </div>
                        <span className='p-1 text-black flex text-center justify-center text-sm rounded-full opacity-50 w-full text-nowrap'>{uploadText}</span>
                    </div>
                    <input 
                            type='file' 
                            id='passport' 
                            name='passport' 
                            className='passort p-5 upload' 
                            multiple 
                            onChange={handleMultipleImages}  
                            hidden
                    />
              </div> 
                    
              <div 
                    className="grid md:grid-cols-12 gap-5 p-3 mt-10 flex justify-center items-center"
              >
                {
                    previewUrls && previewUrls.map((image, index) => {
                        return (
                                <div className={` flex justify-center items-center col-span-6 md:col-span-3 z-30 p-1 h-23 relative bg-blue-300`} key={index}
                                >
                                    <img src={image} alt="upload" />
                                    <div className={`pr-1 pt-1 pb-1 absolute flex justify-between right-0 bottom-0 w-full col-span-6 md:col-span-3`}>
                                        <span className="rounded-sm border border-1 border-green-200 p-1 bg-blue-200 delete cursor-pointer hover:bg-orange-200" 
                                            onClick={() => handleDeleteImage(image, index)}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" className="w-4 h-4">
                                                <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </div>
                                </div> 
                        )
                    })
                }
              </div>
          </>
    )
}
