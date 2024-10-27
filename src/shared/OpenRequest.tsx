import { useState } from "react"
import { AcceptOrReject } from "../pages/admin/transactions/modals/AcceptOrReject"


type OpenRequestProps = 
{
    validate?: boolean,
    onClick: (value: boolean) => void
}

export const OpenRequest = ({ onClick } : OpenRequestProps)  =>
{
  const [acceptOrReject, setAcceptOrReject] = useState<boolean>(false)
  const [validate, setValidate] = useState<string>("")
  
  return (
        <>
          <div 
              className="w-full flex gap-3"
          >
              <div 
                className="px-3 py-1 bg-red-800 text-center text-white text-sm rounded-lg"
                onClick={() => {
                    setValidate("reject")
                    setAcceptOrReject(true)
                }}
              >
                Reject
              </div>
              <div 
                className="px-3 py-1 bg-green-800 text-center text-white text-sm rounded-lg"
                onClick={() => {
                    setValidate("accept")
                    setAcceptOrReject(true)
                }}
              >
                Accept
              </div>
          </div>

          

          {
              acceptOrReject && <AcceptOrReject onClick={(x) => {
                                                    setAcceptOrReject(false)
                                                    onClick(x)
                                            } } 
                                            acceptOrRejectModal={acceptOrReject} 
                                            validate={validate}
                                        />
          }
        </>
  );
}
