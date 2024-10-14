import { CellContext, ColumnDef } from "@tanstack/react-table"
import { useMemo, useState } from "react"
import { Show } from "../../shared/Show"
import { Icons } from "../../shared/Icons"
import { Table } from "../../shared/Table"
import { HiFlag, HiOutlinePlus } from "react-icons/hi"
import DashboardLayout from '../../shared/DashboardLayout'
import { DeleteServiceModal } from "./services/modals/DeleteServiceModal"
import { AddServiceModal } from "./services/modals/AddServiceModal"
import { EditServiceModal } from "./services/modals/EditServiceModal"


export default function Services() 
{
    const [addService, setServiceToAdd] = useState<boolean>(false)
    const [editService, setServiceToEdit] = useState<boolean>(false)
    const [deleteServiceModal, setServiceToDelete] = useState<boolean>(false)


    const [showingStates, setShowStates] = useState<boolean>(false)
    const [action, setAction] = useState<boolean>(false)
    

    const ShowStates = (page: any) => 
    {
        setShowStates(true)
    }

    const pages = (page: any) => {
        setAction(true)
    }

    type ServiceProps =
    {
        name: string,
        description: string,
    }
      
    const ActiveTrans: ServiceProps[] = 
    [
        {
          name: 'E-Commerce',
          description: 'xxxxxx xxxxxxx xxxxxxx',
        },
        {
          name: 'Mortgage',
          description: 'xxxxxx xxxxxxx xxxxxxx',
        },
        {
          name: 'Agriculture',
          description: 'xxxxxx xxxxxxx xxxxxxx',
        },
    ]

    const AllActiveTransactions = () => 
    {
        return ActiveTrans
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
            cell: (row: CellContext<ServiceProps, unknown>) => (<a href="#" onClick={() => setServiceToEdit(true)}><Icons iconName="edit" color="blue" width={4} height={4}/></a>),
            accessorKey: '',
        },
        {
            header: 'Delete',
            cell: (row: CellContext<ServiceProps, unknown>) => (<a href="#" onClick={() => setServiceToDelete(true)}><Icons iconName="delete" color="red" width={4} height={4}/></a>),
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

                {
                    addService && <AddServiceModal onClick={() => {
                                                    setServiceToAdd(false)
                                            } } 
                                            serviceModal ={addService} 
                                        />
                }

                {
                    editService && <EditServiceModal onClick={() => {
                                                    setServiceToEdit(false)
                                            } } 
                                            serviceModal ={editService} 
                                        />
                }

                {
                    deleteServiceModal && <DeleteServiceModal onClick={() => {
                                                    setServiceToDelete(false)
                                            } } 
                                            serviceModal ={deleteServiceModal} 
                                        />
                }
        </DashboardLayout>
    )
}
