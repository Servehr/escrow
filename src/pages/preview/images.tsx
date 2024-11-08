import MultipleImageUpload from "../../component/MultipleImageUpload";


export default function Images() 
{

    return (
      <>
          <div 
              className="w-full d-flex mb-3 pt-7"
          >
              <MultipleImageUpload width={12} ICloudColour='text-black' allowedFileTypes={['IMAGE_ALLOWED_TYPES']} 
                                   onClick={() => {
                                                      
                                   }}  
              />
          </div> 
      </>
    )
    
}
