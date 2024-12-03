import { useState } from "react"
import { ValidOrInvalid } from "../pages/user/transactions/modals/ValidOrInvalid"



type OpenRequestProps = 
{
    validate?: boolean,
    detail?: any,
    onClick: (value: boolean | string) => void
}

export const ApproveRequest = ({ onClick, detail } : OpenRequestProps)  =>
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
                Invalid
              </div>
              <div 
                className="px-3 py-1 bg-green-800 text-center text-white text-sm rounded-lg"
                onClick={() => {
                    setValidate("valid")
                    setValidOrInvalid(true)
                }}
              >
                Valid
              </div>
          </div>

          

          {
              validOrInvalid && <ValidOrInvalid onClick={(x: boolean | string) => {
                                                    setValidOrInvalid(false)
                                                    onClick(x)
                                            } } 
                                            validOrInvalidModal={validOrInvalid} 
                                            validate={validate}
                                            detail={detail}  
                                        />
          }
        </>
  );
}
