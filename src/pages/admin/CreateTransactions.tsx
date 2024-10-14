import DashboardLayout from '../../shared/DashboardLayout'


export default function CreateTransactions() 
{
    
    const categories: { name: string, value: number }[] = 
    [
        {
            name: 'E-Commerce',
            value: 1
        },
        {
            name: 'Mortgage',
            value: 2
        },
        {
            name: 'Cars',
            value: 3
        },
    ]
    
    return (
        <DashboardLayout pageName="Create Transaction"
        >
            <div 
                className='w-full mx-auto py-20 flex justify-center items-center'
            >
                <div  
                    className='w-6/12 d-flex mx-auto gap-10 md:mb-3'
                > 
                    <div 
                        className="mb-4 md:col-span-12"
                    >
                        <div 
                            className="relative"
                        >
                            <select 
                                    className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-5 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            >
                                { <option value={-1}> - Select Category -  </option> }
                                {
                                    categories.map((category, index) =>  {
                                        return (
                                            <option key={index} value={category?.value}>
                                                {category?.name}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                            <div 
                                className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 mt-1"
                            >
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                    </div> 
                    <div 
                        className="mb-4 md:col-span-12"
                    >
                        <input  
                                className="w-full border rounded-md p-3 bg-white bg-opacity-75 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out" 
                                type="email" name="email" id="email" placeholder="Enter Product Name" 
                        />
                    </div> 
                    <div 
                        className="mb-4 md:col-span-12"
                    >
                        <input  
                                className="w-full border rounded-md p-3 bg-white bg-opacity-75 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out" 
                                type="email" name="email" id="email" placeholder="Enter Product Price" 
                        />
                    </div>                                         
                    <div 
                        className="mb-4 md:col-span-12"
                    >
                        <textarea  
                                    className="w-full border rounded-md p-3 bg-white bg-opacity-75 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out" 
                                    name="password" id="password" placeholder="Enter Service Description" 
                                    rows={5}
                        >
                        </textarea>
                    </div>
                    <button 
                            className="block w-full bg-[#435f88] hover:bg-[#6f7277] border-shadow text-white font-bold p-4 rounded-lg ring-2 ring-inset"
                    >
                        Create Transaction
                    </button>
                </div>
            </div>
        </DashboardLayout>
    )
}
