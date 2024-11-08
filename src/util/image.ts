export function readableFileSize(attachmentSize: number, MinimumSize = 0, MaximumSize = 1, precision = 0) 
{
    const DEFAULT_SIZE = 0;
    const fileSize = attachmentSize ?? DEFAULT_SIZE;
      
    if (!fileSize) 
    {
        return `${DEFAULT_SIZE} kb`;
    }
      
    const sizeInKb = fileSize / MaximumSize;
    console.log({MinimumSize})
      
    if (sizeInKb > MaximumSize) {
       return `${(sizeInKb / MaximumSize).toFixed(precision)} mb`;
    } else {
        return `${sizeInKb.toFixed(precision)} kb`;
    }
}

export async function reduceImageSize(base64String: string, MinimumSize: number, MaximumSize: number, precision: number)
{
    let reducedImage = await new Promise((resolve) => 
    {
        let img = new Image()
        img.src = base64String
        img.onload = () => 
        {
            let canvas = document.createElement('canvas')

            let workedImage: CanvasRenderingContext2D = canvas.getContext('2d')!
            canvas.width = img.naturalWidth
            canvas.height = img.naturalHeight
            workedImage.drawImage(img, 0, 0)
            canvas.toBlob((blob: any) => 
            {
              console.log({width: blob.width, height: blob.height, size: readableFileSize(blob.size, MinimumSize, MaximumSize, precision)})                        
              const fr: FileReader = new FileReader()
              fr.readAsDataURL(blob)
              fr.addEventListener('load', () => 
              {   
                  const dataUrl = fr.result
                  const picture: HTMLImageElement | ArrayBuffer | string = new Image()
                  picture.src = dataUrl as string
                //   console.log(dataUrl)
                  resolve(dataUrl)
              })
            }, 'image/webp', 0.1)
        }
      })
      return reducedImage
}

export function determineFileType(files: any)
{
    if(files.length === 0)
    {
        return "Kindly pass at least a file to file type checking"
    } else if(files.length === 1)
    {
        const file:any = files[0]
        const fileType:any = file?.type
        const getType: string = fileType.split("/")
        return getType[1]
    } else {
        const fileTypes: string | string[] = []
        for (let index = 0; index < files.length; index++) 
        {
            const file:any = files[index]
            const fileType:string = file?.type
            const getType: string[] = fileType.split("/")
            fileTypes.push(getType[1])
        }
        return fileTypes
    }
}