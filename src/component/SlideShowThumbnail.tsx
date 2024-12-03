import { useEffect, useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import { USAGE_PATH } from '../constant/Path'


export default function SlideShowThumbnail({ data, imageSize, waterMark }: { data: any, imageSize: any, waterMark: string | any }) 
{
    const [slide, setSlide] = useState<number>(0)
    let sliderTimeOut: any
    console.log(waterMark)

    useEffect(() => 
    {
        sliderTimeOut =  setTimeout(() => 
        {
            if(slide === 0)
            {
                if(imageSize?.length > 1)
                {
                  setSlide(slide+1)
                }
            } else if((imageSize?.length-1) > slide) {
                setSlide(slide+1)
            } else {
                setSlide(0)
            }
        }, 10000);
    }, [slide])

    const nextSlide = () => 
    {
        clearTimeout(sliderTimeOut)
        setSlide(slide === (data?.length - 1) ? 0 : slide + 1)
    }
  
    const prevSlide = () => 
    {
        clearTimeout(sliderTimeOut)
        setSlide(slide === 0 ? (data?.length - 1) : slide - 1)
    }


    return (
          <>
              {
                //  (data?.length === 0) && <>
                //     <div 
                //         className="w-full h-[10px] md:h-[400px] d-flex justify-center items-center mx-auto pt-20"
                //     >
                //             <div 
                //                 className='w-full flex justify-center items-center mt-10'
                //             >
                //                 <HiOutlineSpeakerphone className='h-40 text-[130px] text-green-600' />
                //             </div>
                //             <div 
                //                 className='w-full flex justify-center items-center'
                //             >             
                //                 <h1 className="font-bold text-md text-green-900"
                //                 >
                //                     Place An Advert
                //                 </h1>                    
                //             </div>
                //     </div>
                //   </>
              }
              {
                
          <div 
                className="h-fit m-auto relative cursor-pointer mb-20"                
          >
             {
                 ((data?.length > 0)) && <img
                                                src={`${USAGE_PATH.PRODUCT_IMAGE}${data[slide]?.url}`} 
                                                className="w-full h-fit object-cover"
                                            />
             }

             {
                (data?.length > 1) && <>
                    <div 
                        className="absolute top-[40%] -translate-x-0 translate-y-[-50%] z-5 left-5 text-xl rounded-full cursor-pointer bg-green-100 p-1"
                    > 
                        <BsArrowLeftCircleFill color="gray" className="arrow arrow-left w-9 h-9 text-white hover:bg-green-700 hover:fill-red" style={{ backgroundColor: "" }} onClick={prevSlide} />
                    </div>
                    <div 
                        className="absolute top-[40%] -translate-x-0 translate-y-[-50%] right-5 text-xl rounded-full cursor-pointer bg-green-100 p-1"
                    >
                       <BsArrowRightCircleFill color="gray" className="arrow arrow-right w-9 h-9 text-white" style={{ backgroundColor: "" }} onClick={nextSlide} />
                    </div>
                </>
             }
             
             {
                (data?.length > 1) && <>
                    <div 
                        className="flex border-2 border-gray-200 mt-2 gap-3 overflow-x-auto py-3 px-2"
                    > 
                        {
                            data.map((img: { url: string   }, index: number) => 
                            {
                                return (
                                    <img
                                           src={`${USAGE_PATH.PRODUCT_IMAGE}${img?.url}`} 
                                           className="w-[200px] h-[140px] object-fit border-2 border-gray-10"
                                           onClick={() => 
                                           {
                                              setSlide((index))
                                           }}
                                    />
                                )
                            })
                        }
                    </div>
                </>
             }

         </div>
        }
    </>
    )
}
