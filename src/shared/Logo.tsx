import { useNavigate } from "react-router-dom"
import Logo from '../assets/middleman.png'

export default function GpayLogo({width}: { width: number })
{
  const navigate = useNavigate()

  return (
      <>
          <img 
                src={Logo}
                width={width}
                onClick={() => {
                    navigate('/')
                }}
                className="cursor-pointer p-1 bg-white rounded-full"
             />
      </>
  )
}
