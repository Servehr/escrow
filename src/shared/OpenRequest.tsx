import { useState } from "react"
import { AcceptOrReject } from "../pages/user/transactions/modals/AcceptOrReject"
import { appStore } from "../state/store"


type OpenRequestProps = 
{
    validate?: boolean,
    detail?: any,
    onClick: (value: boolean| string) => void
}

export const OpenRequest = ({ onClick, detail } : OpenRequestProps)  =>
{
  
  const UserX = appStore((state) => state)
  const [acceptOrReject, setAcceptOrReject] = useState<boolean>(false)
  const [validate, setValidate] = useState<string>("")

  console.log(detail)
  
  return (
        <>

          {
             (detail?.by != Number(UserX.getUser().id)) &&
              <>
                  {
                      (detail?.delivery_status === 'pending') && 
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
                  }
              </>
          }

          

          {
              acceptOrReject && <AcceptOrReject onClick={(x: any) => {
                                                    setAcceptOrReject(false)
                                                    onClick(x)
                                            } } 
                                            acceptOrRejectModal={acceptOrReject} 
                                            validate={validate}
                                            detail={detail}                                            
                                        />
          }
        </>
  );
}
