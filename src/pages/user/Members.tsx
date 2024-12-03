import { CellContext, ColumnDef } from "@tanstack/react-table"
import { useMemo, useState } from "react"
import { Show } from "../../shared/Show"
import { Icons } from "../../shared/Icons"
import { Table } from "../../shared/Table"
import { HiOutlinePlus } from "react-icons/hi"
import DashboardLayout from '../../shared/DashboardLayout'
import { AddUserModal } from "./users/modals/AddUserModal"
import { EditUserModal } from "./users/modals/EditUserModal"
import { ViewUserDetailModal } from "./users/modals/ViewUserDetailModal"
import { DeleteUserModal } from "./users/modals/DeleteUserModal"


export default function Members() 
{
    const [openAddUser, setAddUserOpen] = useState<boolean>(false)
    const [openEditUser, setEditUserOpen] = useState<boolean>(false)
    const [openDeleteUser, setDeleteUserOpen] = useState<boolean>(false)
    const [openViewUser, setViewUserOpen] = useState<boolean>(false)


    const [showingStates, setShowStates] = useState<boolean>(false)
    

    const ShowStates = (page: any) => 
    {
        console.log(page)
        console.log(showingStates)
        setShowStates(true)
    }

    type ActiveTransProps =
    {
        firstname: string,
        surname: string,
        email: string,
        phone: string,
        status: string,
    }
      
    const ActiveTrans: ActiveTransProps[] = 
    [
        {
          firstname: 'Kingsley',
          surname: ' Effiong',
          email: 'kinglseyeffy2000@gmail.com',
          phone: '+234-80 324-98-938',
          status: 'active',
        },
        {
          firstname: 'Mathew',
          surname: 'Peter',
          email: 'mathewp@yahoo.com',
          phone: '+234-0 316-11-009',
          status: 'pending',
        },
        {
          firstname: 'Tijani',
          surname: 'Bayero',
          email: 'bayero_tijani002@mail.com',
          phone: '+234-70 987-72-298',
          status: 'suspended',
        },
    ]

    const AllActiveTransactions = () => 
    {
        return ActiveTrans
    }

    const ActiveTransAct = useMemo<ColumnDef<ActiveTransProps>[]>(
        () => [
        {
          header: 'Firstname',
          cell: (row: CellContext<ActiveTransProps, unknown>) => (<a href="#" onClick={() => ShowStates(row.cell.row.getValue)}><Show display={row.renderValue()} /></a>),
          accessorKey: 'firstname',
        },
        {
            header: 'Surname',
            cell: (row: CellContext<ActiveTransProps, unknown>) => (<a href="#" onClick={() => ShowStates(row.cell.row.getValue)}><Show display={row.renderValue()} /></a>),
            accessorKey: 'surname',
        },
        {
            header: 'Email',
            cell: (row: CellContext<ActiveTransProps, unknown>) => (<a href="#" onClick={() => ShowStates(row.cell.row.getValue)}><Show display={row.renderValue()} /></a>),
            accessorKey: 'email',
        },
        {
            header: 'Phone',
            cell: (row: CellContext<ActiveTransProps, unknown>) => (<a href="#" onClick={() => ShowStates(row.cell.row.getValue)}><Show display={row.renderValue()} /></a>),
            accessorKey: 'phone',
        },
        {
            header: 'Status',
            cell: (row: CellContext<ActiveTransProps, unknown>) => (<a href="#" onClick={() => ShowStates(row.cell.row.getValue)}><Show display={row.renderValue()} /></a>),
            accessorKey: 'status',
        },
        {
            header: 'View',
            cell: () => (<a href="#" onClick={() => setViewUserOpen(true)}><Icons iconName="eye" color="green" width={4} height={4}/></a>),
            accessorKey: '',
        },
        {
            header: 'Edit',
            cell: () => (<a href="#" onClick={() => setEditUserOpen(true)}><Icons iconName="edit" color="blue" width={4} height={4}/></a>),
            accessorKey: '',
        },
        {
            header: 'Delete',
            cell: () => (<a href="#" onClick={() => setDeleteUserOpen(true)}><Icons iconName="delete" color="red" width={4} height={4}/></a>),
            accessorKey: '',
        }
    ],[])
    
    return (
        <DashboardLayout pageName="All Users"
        >
            <div 
                  className='font-bold text-2xl ml-5 mt-1 md:mt-5 flex justify-start items-left'
            >
                <HiOutlinePlus 
                                className="w-10 h-10 mr-5 cursor-pointer hover:text-blue-600" 
                                onClick={() => {
                                    setAddUserOpen(true)
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
                    openAddUser && <AddUserModal onClick={() => {
                                                    setAddUserOpen(false)
                                            } } 
                                            userModal ={openAddUser} 
                                        />
                }
                {
                    openEditUser && <EditUserModal onClick={() => {
                                                    setEditUserOpen(false)
                                            } } 
                                            userModal={openEditUser} 
                                        />
                }

                {
                    openViewUser && <ViewUserDetailModal onClick={() => {
                                                    setViewUserOpen(false)
                                            } } 
                                            userModal={openViewUser} 
                                        />
                }
                {
                    openDeleteUser && <DeleteUserModal onClick={() => {
                                                    setDeleteUserOpen(false)
                                            } } 
                                            userModal={openDeleteUser} 
                                        />
                }
        </DashboardLayout>
    )
}
