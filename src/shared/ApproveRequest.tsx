import { useState } from "react"
import { ValidOrInvalid } from "../pages/admin/transactions/modals/ValidOrInvalid"

type ShowProperties = {
    display: any
    color?: string
    textSize?: string
}

type OpenRequestProps = 
{
    validate?: boolean,
    onClick: (value: boolean) => void
}

export const ApproveRequest = ({ onClick } : OpenRequestProps)  =>
{
  const [validOrInvalid, setValidOrInvalid] = useState<boolean>(false)
  const [validate, setValidate] = useState<string>("")
  
  return (
        <>
          <div 
              className="w-full flex gap-3"
          >
              <div 
                className="px-3 py-1 bg-red-800 text-center text-white text-sm rounded-lg"
                onClick={() => {
                    setValidate("invalid")
                    setValidOrInvalid(true)
                }}
              >
                Valid
              </div>
              <div 
                className="px-3 py-1 bg-green-800 text-center text-white text-sm rounded-lg"
                onClick={() => {
                    setValidate("valid")
                    setValidOrInvalid(true)
                }}
              >
                Invalid
              </div>
          </div>

          

          {
              validOrInvalid && <ValidOrInvalid onClick={(x) => {
                                                    setValidOrInvalid(false)
                                                    onClick(x)
                                            } } 
                                            validOrInvalidModal={validOrInvalid} 
                                            validate={validate}
                                        />
          }
        </>
  );
}
