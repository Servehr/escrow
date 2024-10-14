import HomeLayout from "../shared/HomeLayout"

export const StartTransaction = () =>
  {
    return (
        <HomeLayout pageName="Contact Us"
        >
            <div className='pt-10 bg-white mt-10'
            >
                <div 
                    className="container d-flex md:flex mx-auto -mt-16 md:mt-0"
                >
                    
                    <div 
                            className='w-2/2 md:w-1/2 container'
                    >                                
                        <div 
                            className="col-span-12 md:col-span-6 h-full bg-white p-5 pt-10 rounded-md text-gray-600 font-semibold text-lg"
                        >
                            <p className="mb-1 font-bold text-red-600">Head Office:</p>
                            <p className="mb-5">xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx</p>
                            <p className="mb-5"><span className="text-red-600">Tel:</span> +234xxxxx xxxxx</p>
                            <p className="mb-5"><span className="text-red-600">Email:</span> xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx</p>
                            <p className="mb-5"><span className="text-red-600">Website:</span> xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx</p>
                        </div>
                    </div>
                    <div 
                         className='w-2/2 md:w-1/2 container'
                    >                                
                        <div 
                                className="col-span-12 md:col-span-6 h-fit bg-white py-7 px-3 md:border-2 md:border-gray-200 border-shadow mb-20 md:rounded-lg"
                        >                            
                                    
                                    <h1 className="font-bold text-lg px-7 md:text-black md:ml-0 py-3 rounded-md bg-[#506f9d] md:bg-white text-white">Leave a message</h1>
                                    <div className="flex flex-wrap -m-2 mt-2 mb-2 md:mx-5">
                                        <div className="p-2 w-1/2">
                                            <span className="w-full font-bold text-sm">First Name</span>
                                            <input onBlur={() => {
                                                       
                                                }} type="text" id="firstname" defaultValue={''}  name="firstname" placeholder="Enter Your Firstname" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 text-sm py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
                                            />
                                        </div>
                                        <div className="p-2 w-1/2">
                                            <span className="w-full font-bold text-sm">Surname</span>
                                            <input onKeyUp={() => {   
                                                        
                                                }} type="text" id="surname" defaultValue={''} name="surname" placeholder="Enter Your Surname" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 text-sm leading-8 transition-colors duration-200 ease-in-out" 
                                            />
                                            <div className="text-red-500 font-bold text-sm"></div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap -m-2 mt-2 mb-2 md:mx-5">
                                        <div className="p-2 w-1/2">
                                            <span className="w-full font-bold text-sm">Phone Number</span>
                                            <input onBlur={() => {
                                                       
                                                }} type="text" id="phoneNumber" defaultValue={''}  name="phoneNumber" placeholder="Enter Your Phone Number" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 text-sm py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
                                            />
                                        </div>
                                        <div className="p-2 w-1/2">
                                            <span className="w-full font-bold text-sm">Email</span>
                                            <input onKeyUp={() => {   
                                                        
                                                }} type="email" id="email" defaultValue={''} name="email" placeholder="Enter Your Email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 text-sm leading-8 transition-colors duration-200 ease-in-out" 
                                            />
                                            <div className="text-red-500 font-bold text-sm"></div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap -m-2 mt-2 mb-2 md:mx-5 px-3">
                                        <span className="w-full font-bold text-sm">Message</span>
                                        <textarea onChange={() => { 
                                                               
                                            } } defaultValue={''} 
                                            className="shadow form-textarea mb-2 block w-full border rounded w-full 
                                                       py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                            rows={2} 
                                            placeholder="Enter Description"
                                        >
                                        </textarea>
                                    </div>
                                    <div className="flex flex-wrap -m-2 mb-1 md:mx-5 mt-3">
                                        <div className="w-1/2 p-2 flex justify-item item-center">
                                            <div
                                                 className="peer relative appearance-none w-fit text-white p-3 cursor-pointer bg-[#506f9d] hover:bg-[#395988] hover:font-bold rounded-md">Submit</div>
                                        </div>
                                    </div>
                                    <div className="p-1"></div>
                                </div>
                    </div>

                </div>
            </div>
        </HomeLayout>
    )
  }
  