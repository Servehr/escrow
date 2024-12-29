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
import { RotateLoader } from "react-spinners"
import { useService } from "../../hook/useService"


export default function Services() 
{
    const { GetService } = useService()
    const [categon, setCategories] = useState<any>([])
    const [error, setError] = useState<string>('')

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [addService, setServiceToAdd] = useState<boolean>(false)

    const [editService, setServiceToEdit] = useState<boolean>(false)
    const [editServ, setEditService] = useState<any>({})
    // const [categoryName, setCategoryName] = useState<string>('')
    const [deleteServiceModal, setServiceToDelete] = useState<boolean>(false)
    const [deleteServ, setDeleteService] = useState<any>({})

    const [showingStates, setShowStates] = useState<boolean>(false)
    
    useEffect(() => 
    {
        setIsLoading(true)
        callApi()
        console.log(error)
    }, [])

    useEffect(() => 
    {
        
    }, [editServ])

    const callApi = () => 
    {
        const allCategories = GetService()
        allCategories.then((categories) => 
        {
            if(categories.statusCode === 200)
            {                
                setCategories(categories?.data?.data)
                setIsLoading(false)
            }
        }).then(() => {
            setError("Try again")
            setIsLoading(false)
        })        
    }

    const ShowStates = (page: any) => 
    {
        console.log(showingStates)
        console.log(page)
        setShowStates(true)
    }

    const ServiceEdit = (x: boolean, data: any) => 
    {
        let currentValue = categon.filter((y: { id: number, name: string }) => y.id === data)[0]
        setEditService(currentValue)
        setServiceToEdit(x)
    }

    const ServiceDelete = (x: boolean, data: any) => 
    {
        let currentValue = categon.filter((y: { id: number, name: string }) => y.id === data)[0]
        setDeleteService(currentValue)
        setServiceToDelete(x)
    }

    type ServiceProps =
    {
        id: number,
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
            cell: (row: CellContext<ServiceProps, unknown>) => (<a href="#" onClick={() => {
                     ServiceEdit(true, row.renderValue())
                }}
            ><Icons iconName="edit" color="blue" width={4} height={4}/></a>),
            accessorKey: 'id',
        },
        {
            header: 'Delete',
            cell: (row: CellContext<ServiceProps, unknown>) => (<a href="#" onClick={() => {
                ServiceDelete(true, row.renderValue())
           }}
            ><Icons iconName="delete" color="red" width={4} height={4}/></a>),
            accessorKey: 'id',
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
               (isLoading === true) && <div className="col-span-12 h-[500px] flex justify-center items-center" style={{ marginTop: '60px', paddingTop: '0px' }}
               >
                   <RotateLoader className='w-12 h-12' />
               </div>
            }
            {
               ((isLoading === false) && (categon.length === 0)) && <div className="col-span-12 h-[300px] flex justify-center items-center" style={{ marginTop: '60px', paddingTop: '0px' }}
               >
                  <h1 className="font-bold text-blue-400">No Service Created Yet</h1>
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
                                                callApi()
                                                setServiceToAdd(false)
                                        } }
                                        categoryModal={addService}
                                    />
            }

            {
                editService && <EditServiceModal onClick={() => {
                                                callApi()
                                                setServiceToEdit(false)
                                        } } 
                                        categoryModal={editService} 
                                        category={editServ}
                                    />
            }

            {
                deleteServiceModal && <DeleteServiceModal onClick={() => {
                                                callApi()
                                                setServiceToDelete(false)
                                        } } 
                                        categoryModal ={deleteServiceModal} 
                                        category={deleteServ}
                                    />
            }
        </DashboardLayout>
    )
}
