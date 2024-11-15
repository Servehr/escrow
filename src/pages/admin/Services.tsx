import { CellContext, ColumnDef } from "@tanstack/react-table"
import { useEffect, useMemo, useState } from "react"
import { Show } from "../../shared/Show"
import { Icons } from "../../shared/Icons"
import { Table } from "../../shared/Table"
import { HiOutlinePlus } from "react-icons/hi"
import DashboardLayout from '../../shared/DashboardLayout'
import { DeleteServiceModal } from "./services/modals/DeleteServiceModal"
import { AddServiceModal } from "./services/modals/AddServiceModal"
import { EditServiceModal } from "./services/modals/EditServiceModal"
import { useTransaction } from '../../hook/useTransaction';
import { RotateLoader } from "react-spinners"


export default function Services() 
{
    const { Categories } = useTransaction()
    const [categon, setCategories] = useState<any[]>([])
    const [error, setError] = useState<string>('')

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [categId, setCategId] = useState<number>(-1)
    const [categName, setCategName] = useState<string>("")
    const [addService, setServiceToAdd] = useState<boolean>(false)

    const [editService, setServiceToEdit] = useState<boolean>(false)
    const [deleteServiceModal, setServiceToDelete] = useState<boolean>(false)

    const [showingStates, setShowStates] = useState<boolean>(false)
    
    useEffect(() => 
    {
        setIsLoading(true)
        const allCategories = Categories()
        allCategories.then((categories) => 
        {
            setCategories(categories?.data?.data)
            console.log(categories?.data?.data)
            setIsLoading(false)
        }).then(() => {
            setError("Try again")
            setIsLoading(false)
        })
        setCategId(-1)
        setCategName("")
        console.log(error)
    }, [])

    const ShowStates = (page: any) => 
    {
        console.log(showingStates)
        console.log(page)
        setShowStates(true)
    }

    type ServiceProps =
    {
        name: string,
        description: string,
    }
      
    const AllActiveTransactions = () => 
    {
        return categon
    }

    const ActiveTransAct = useMemo<ColumnDef<ServiceProps>[]>(
        () => [
        {
          header: 'Name',
          cell: (row: CellContext<ServiceProps, unknown>) => (<a href="#" onClick={() => ShowStates(row.cell.row.getValue)}><Show display={row.renderValue()} /></a>),
          accessorKey: 'name',
        },
        {
            header: 'Description',
            cell: (row: CellContext<ServiceProps, unknown>) => (<a href="#" onClick={() => ShowStates(row.cell.row.getValue)}><Show display={row.renderValue()} /></a>),
            accessorKey: 'description',
        },
        {
            header: 'Edit',
            cell: () => (<a href="#" onClick={() => setServiceToEdit(true)}><Icons iconName="edit" color="blue" width={4} height={4}/></a>),
            accessorKey: '',
        },
        {
            header: 'Delete',
            cell: () => (<a href="#" onClick={() => setServiceToDelete(true)}><Icons iconName="delete" color="red" width={4} height={4}/></a>),
            accessorKey: '',
        }
    ],[])
    
    return (
        <DashboardLayout pageName="Services"
        >
            <div 
                  className='font-bold text-2xl ml-5 mt-1 md:mt-5 flex justify-start items-left'
            >
                <HiOutlinePlus 
                                className="w-10 h-10 mr-5 cursor-pointer hover:text-blue-600" 
                                onClick={() => {
                                    setServiceToAdd(true)
                                }}
                />
            </div>
            {
               ((isLoading === true) && (categon.length === 0)) && <div className="col-span-12 h-[500px] flex justify-center items-center" style={{ marginTop: '60px', paddingTop: '0px' }}
               >
                   <RotateLoader className='w-12 h-12' />
               </div>
            }
            {
               ((isLoading === false) && (categon.length === 0)) && <div className="col-span-12 h-[500px] flex justify-center items-center" style={{ marginTop: '60px', paddingTop: '0px' }}
               >
                   {/* <h1>Category is empty, transaction cannot begin</h1> */}
                   <RotateLoader className='w-12 h-12' />
               </div>
            }
            { 
            
                ((isLoading === false) && categon && (categon.length > 0)) &&
                <div 
                    className='mx-1 md:mx-4 -mt-5'
                >                          
                    <Table data={AllActiveTransactions()} 
                            columns={ActiveTransAct} 
                            showNavigation={false} 
                            searchPlaceHolder='search for transactions ...' 
                            path='transactions' 
                            from='transactions' 
                            headerTextColor="white"
                    /> 

                    <div 
                        className="py-10"
                    >
                    </div>              
                </div>
            }
            
            {
                addService && <AddServiceModal onClick={() => {
                                                setServiceToAdd(false)
                                        } }
                                        categoryModal={addService}
                                    />
            }

            {
                editService && <EditServiceModal onClick={() => {
                                                setServiceToEdit(false)
                                        } } 
                                        categoryModal={editService} 
                                        categId={categId}
                                    />
            }

            {
                deleteServiceModal && <DeleteServiceModal onClick={() => {
                                                setServiceToDelete(false)
                                        } } 
                                        categoryModal ={deleteServiceModal} 
                                        categName={categName}
                                        categId={categId}
                                    />
            }
        </DashboardLayout>
    )
}
