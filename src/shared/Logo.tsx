import { useNavigate } from "react-router-dom"

export default function GpayLogo({width}: { width: number })
{
  const navigate = useNavigate()

  return (
      <>
          <img 
                src="/logo/Gpay.png"
                width={width}
                onClick={() => {
                    navigate('/')
                }}
                className="cursor-pointer"
             />
      </>
  )
}
