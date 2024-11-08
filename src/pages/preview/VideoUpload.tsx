"use client"

import { useEffect, useState } from 'react'
import { HiCloudUpload } from 'react-icons/hi'
import '../css/upload.css'
import { determineFileType, readableFileSize } from '../../util/image'

type VideoProps = 
{
    width: number,
    ICloudColour: string,
    allowedFileTypes: string[],
    onClick: (message: string, isValid: boolean) => void
}


export default function VideoUpload({width, ICloudColour, allowedFileTypes, onClick}: VideoProps) 
{
    const [userVideo, setUserVideo] = useState<string>("")
    const [video, setVideo] = useState<boolean>(false)
    const [uploadText, setUploadText] = useState<string>("Click to upload vidoes")
    /* tslint:disable:no-unused-variable */
    let videograph: HTMLDivElement | null = null
    console.log(videograph)
    const ALLOWED_VIDEO_SIZE: number = 5240000

    useEffect(() => 
    {
        setTimeout(() => 
        {   
            videograph = document.querySelector('.theAreaVideo')!
        }, 200)
        console.log({width})
    }, [])

    /* tslint:disable:no-unused-variable */
    useEffect(() => 
    {        
        let vid: HTMLInputElement | null = null
        console.log(vid)
        vid = document.querySelector('#video')!
        onClick(userVideo, true)
    }, [userVideo, video])

    const hover = () => 
    {
        let vid: HTMLInputElement | null = null
        vid = document.querySelector('#video')!
        if(vid === null)
        {
            let vid: HTMLInputElement
            vid = document.querySelector('#video')!
            vid.click()
        } else {
            vid.click()
        }
    }

    const displayVideo = (e: any) => 
    {
        let vid: HTMLInputElement | null = null
        console.log(vid)
        let cloud: HTMLInputElement | null = null
        console.log(vid)
        vid = document.querySelector('.theAreaVideo')!
        cloud = document.querySelector('.cloudy')!
        
        const files = Array.from(e.target.files)
        const videoSize = e.target.files[0].size
        if(videoSize > ALLOWED_VIDEO_SIZE)
        {
            onClick(`File is large - (${readableFileSize(videoSize, 0, 1024, 2)}), cannot be more than ${readableFileSize(ALLOWED_VIDEO_SIZE, 0, 1024, 2)}`, false)
            return false
        }

        const fileExtensions: string | string[] = determineFileType(files)
        let fileLength: number = 0

        if(fileExtensions === null || fileExtensions === undefined)
        {     
            fileLength = -1
        } else {                
            fileLength = 1
        }

        if(fileLength === -1)
        {
            setVideo(false)       
            onClick("File is invalid (mp4, webm, ogg) is allowed", false)
        } else if(fileLength === 1){
        
            const f: string = fileExtensions as string
            const fileExtenstion = allowedFileTypes.includes(f)
            const isValid: boolean = fileExtenstion
            if(!isValid)
            {
                setVideo(false)       
                onClick("File is invalid (mp4, webm, ogg) is allowed", false)
            } else {

                if(files.length > 0) 
                {
                    Promise.all(
                        files.map((file: any) => 
                        {
                            return new Promise((resolve, reject) => {
                            const reader: FileReader = new FileReader();
                            reader.readAsDataURL(file);
                            reader.onload = async () => 
                            {
                               resolve(reader.result)
                            }
                            reader.onerror = (error) => reject(error);
                            });
                        })
                    ).then((results) => {
                        let x = results[0] as string
                        setVideo(true)       
                        setUploadText('Click to change video')
                        setUserVideo(x)
                    })
                }                
            }
        }

    }


    return (
          <>
              {
                  (video === true) && <>
                    <div 
                        className='flex justify-center items-center relative'
                    >
                        <video src={userVideo} controls autoPlay={false} />

                        <div 
                            className={`pr-1 pt-1 pb-1 absolute flex justify-between right-0 top-0 w-full col-span-6 md:col-span-3`}
                        >
                            <span 
                                    className="rounded-full border-2 border-blue-400 p-4 bg-white delete cursor-pointer hover:bg-orange-200" 
                                    onClick={() => {setVideo(false); setUserVideo('');} }
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
                                </svg>
                            </span>
                        </div>                        
                    </div>
                </>
              }
              <div 
                  className={`theAreaVideo mb-2 flex-col w-7/12 md:w-4/12 object-fill mt-10 border-2 rounded-md px-10 py-2 flex justify-center items-center mx-auto cursor-pointer bg-[#f0f8ff] border-2 border-gray-200 hover:text-green-300 uploader`}
                  onClick={() => { 
                    hover() 
                  }}
              >                 
                    
                    <div 
                        className={`videoText ${ICloudColour} w-full d-flex justify-center mt-2 pb-2 text-center mx-auto font-bold upload`}
                      > 
                        <div className="cloudy mb-3"
                        >
                            <HiCloudUpload className={`w-10 h-10 ${ICloudColour} upload mx-auto`} />
                        </div>
                        <span className='p-1 text-black flex text-center justify-center text-sm rounded-full opacity-50 w-full text-nowrap'>{uploadText}</span>
                    </div>
                    <input type='file' id='video' name='video' className='video p-5 upload' hidden
                            onChange={(e: any) => {                                       
                                displayVideo(e)
                            }} 
                    />
              </div>
          </>
    )
}
