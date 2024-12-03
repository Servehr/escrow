import { BsDashCircleFill } from "react-icons/bs"
import HomeLayout from "../shared/HomeLayout"
import { useNavigate } from "react-router-dom"

export const Decline = () =>
{
    const navigate = useNavigate()
    return (
        <HomeLayout pageName="Payment Decline"
        >
            <div className='pt-10 bg-white mt-10'
            >
                <div 
                    className="container d-flex md:flex mx-auto -mt-16 md:mt-0 py-10"
                >
                    
                    <div 
                            className='w-full container py-20 mt-1 mb-20 flex justify-center items-center'
                    > 
                        <div 
                            className="d-flex"
                        >
                            <BsDashCircleFill className="text-[200px] text-red-600 mb-10" />
                            <div 
                                className="text-[20px] mt-5 text-red-600 font-bold"
                            >
                                Payment Declined
                            </div>
                            <div 
                                className="bg-green-700 mt-5 p-5 rounded-lg text-white font-bold text-center cursor-pointer hover:bg-green-500"
                                onClick={() => {
                                    navigate('/dashboard/transactions')
                                }}
                            >
                                My Transactions
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </HomeLayout>
    )
  }
  