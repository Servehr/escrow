import { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { appStore } from "../state/store";


type SelectCountryProps = 
{
    placeholder: string
    categories: any
    selectedCategory: string
    onClick: (countrId: number) => void
}


const SearchCategory = ({ placeholder, categories, selectedCategory, onClick }: SelectCountryProps) => 
{
    const createTransaction = appStore((state) => state)
    
    const [data, setData] = useState<[]>(categories);
    const [inputValue, setInputValue] = useState<string>("");
  
    const [selected, setSelected] = useState<string>("");
  
    const [open, setOpen] = useState(false);  
   
    const [neverCall] = useState<number>(-1)
    const [refresh, setRefresh] = useState<number>(-1)
    
    useEffect(() => 
    {
       setTimeout(() => 
        {
            setSelected(selectedCategory)
            setData(categories)
        }, 500)
        setRefresh(-1)
    }, [])
  
    useEffect(() => 
    {
        // callData(theCountry)
    }, [selected])
  
    useEffect(() => 
    {
      
    }, [neverCall])
    
    useEffect(() => 
    {
    }, [refresh])
  
  
    return (
        
              <div 
                  className="border border-3 shadow-md relative md:mb-0 mb-3"
              >
                  <div
                      onClick={() => setOpen(!open)}
                      className={`bg-white w-full h-[60px] pt-2 md:pb-2 pb-3 px-3 flex items-center justify-between rounded ${
                      !selected && "text-gray-700"
                      }`}
                  >
                      {
                      selected
                      ? selected?.length > 25
                          ? selected?.substring(0, 25) + "..."
                          : selected
                          : placeholder
                      }
                      <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
                  </div>
                  <ul
                      className={`bg-white overflow-y-auto absolute w-full border-r-2 border-b-2 border-l-2 ${
                        open ? "max-h-120 z-20" : "max-h-0 z-20"
                        } `}
                        onMouseLeave={() => {
                            setOpen(false)
                      }}
                  >
                      <div 
                         className="flex items-center px-2 sticky top-0 bg-white shadow-md border-2 border-blue-100"
                      >
                          <AiOutlineSearch size={18} className="text-gray-700" />
                          <input
                              type="text"
                              value={inputValue}
                              onChange={(e) => setInputValue(e.target.value.toLowerCase())}
                              placeholder="... search for category"
                              className="placeholder:text-gray-700 p-2 outline-none w-full border-3 border-green-500"
                          />
                      </div>
                      <li
                          className={`p-2 text-md hover:bg-sky-600 border-2 border-gray-200 hover:border-2 hover:border-green-200 hover:text-white cursor-pointer py-3`}
                          onClick={() => 
                          {                        
                              setSelected("")
                              setInputValue("")
                              createTransaction.setCategory("")
                              setOpen(false)
                              onClick(-1)
                          }}
                      >
                          - Select Category -
                      </li>
                      {
                          data?.map((x: { id: number, name: string }, index: number) => 
                          (
                              <li
                                  key={index}
                                  className={`p-2 text-md bg-gray-100 hover:bg-sky-600 border-1 border-gray-200 hover:border-2 hover:border-green-200 hover:text-white cursor-pointer py-3
                                  ${
                                      x?.name?.toLowerCase() === selected?.toLowerCase() &&
                                      "bg-sky-600 text-white"
                                  }
                                  ${
                                      x?.name?.toLowerCase().startsWith(inputValue)
                                          ? "block"
                                          : "hidden"
                                      }`
                                  }
                                  onClick={() => 
                                  {
                                      setSelected(x?.name)
                                      setInputValue("")
                                      createTransaction.setCategory(x?.id)
                                      setOpen(false)     
                                      onClick(x?.id)                         
                                  }
                                  }
                              >
                                  <span className="font-bold text-blue-400">{x?.name}</span>
                              </li>
                          ))
                      }
                      <li
                          className={`p-2 text-md hover:bg-sky-600 border-2 border-gray-200 hover:border-2 hover:border-green-200 hover:text-white cursor-pointer py-3`}
                          onClick={() => 
                          {                        
                              setSelected("other")
                              setInputValue("")
                              createTransaction.setCategory("others")
                              setOpen(false)
                              onClick(0)
                          }}
                      >
                          Others
                      </li>
                  </ul>
              </div>
          
    );
  };

export default SearchCategory;