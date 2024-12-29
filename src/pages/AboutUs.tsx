import HomeLayout from "../shared/HomeLayout"
import Escrow from '../../public/escrow.jpg'


export const AboutUs = () =>
  {
    return (
        <HomeLayout pageName="About Us"
        >
            <div className='pt-10 bg-white mt-10 px-5'
            >
                <div 
                    className="container d-flex md:flex mx-auto -mt-5 md:mt-0"
                >
                    
                    <div 
                            className='w-2/2 md:w-1/2 container font-bold text-[20px] md:text-[26px] text-[#2f6594]'
                    > 
                        About Middleman
                        <p className="text-[15px] md:text-[20px] text-black mb-5">eCommerce Platform, Best Escrow Service Provider</p>
                        <img src={Escrow} className="" width={550} height={550} />
                    </div>
                    <div 
                            className='w-2/2 md:w-1/2 container font-bold text-[20px] md:text-[26px] md:pt-20'
                    > 
                        <p 
                            className="text-[16px] md:text-[20px] text-gray-600 mb-10"
                        >
                            EscrowLock is an award-winning eCommerce and ICT company that has become renowned as the best escrow service provider due to its popular escrow payment service.
                        </p>
                        <p 
                            
                            className="text-[16px] md:text-[20px] text-gray-600 mb-10"
                        >
                            It serves as a trusted middleman for facilitating payments between two parties, usually buyers and sellers, in order to protect each of them against any fraudulent practice by the other.
                        </p>
                        <p 
                            
                            className="text-[16px] md:text-[20px] text-gray-600 mb-10"
                        >
                            The arrangement is such that EscrowLock receives and secures payment from a buyer, and then releases it to the seller when the buyer has received the transacted goods or services in pre-agreed condition.
                        </p>
                        <p 
                            
                            className="text-[16px] md:text-[20px] text-gray-600 mb-10"
                        >
                            This effectively solves trust issues in business situations where a buyer does not trust the seller to deliver specific product or service after receiving payment, or where the seller does not trust that the buyer will send across payment after receiving goods and services. 
                        </p>
                    </div>
                </div>
            </div>            
                                           
            <div 
                className='w-full py-10 bg-white'
            >
                
            </div>
        </HomeLayout>
    )
  }
  