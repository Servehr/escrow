import { CellContext, ColumnDef } from "@tanstack/react-table"
import { useEffect, useMemo, useState } from "react"
import { Show } from "../../shared/Show"
import { Icons } from "../../shared/Icons"
import { Table } from "../../shared/Table"
import DashboardLayout from '../../shared/DashboardLayout'
import { AddUserModal } from "./users/modals/AddUserModal"
import { EditUserModal } from "./users/modals/EditUserModal"
import { ViewUserDetailModal } from "./users/modals/ViewUserDetailModal"
import { DeleteUserModal } from "./users/modals/DeleteUserModal"
import { useUser } from "../../hook/useUser"
import { RotateLoader } from "react-spinners"


export default function Members() 
{
    const { Users } = useUser()
    const [openAddUser, setAddUserOpen] = useState<boolean>(false)
    const [openEditUser, setEditUserOpen] = useState<boolean>(false)
    const [openDeleteUser, setDeleteUserOpen] = useState<boolean>(false)
    const [openViewUser, setViewUserOpen] = useState<boolean>(false)
    const [allUsers, setAllUsers] = useState<any>({})
    const [picture, setPicture] = useState<string>("")

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [showingStates, setShowStates] = useState<boolean>(false)
    
    useEffect(() => 
    {
        setIsLoading(true)
        callApi()
    }, [])

    const callApi = () => 
    {
        const allUsers = Users()
        allUsers.then((u) => 
        {
            if(u.statusCode === 200)
            { 
                setAllUsers(u?.data?.data)
                setIsLoading(false)
            }
        }).then(() => {
            setIsLoading(false)
        })        
    }    

    const ShowStates = (page: any) => 
    {
        console.log(page)
        console.log(showingStates)
        setShowStates(true)
    }   

    const ViewUser = (x: boolean, pics: any) => 
    {
        setPicture(pics)
        setViewUserOpen(x)
    }

    type UserProps =
    {
        firstname: string,
        surname: string,
        email: string,
        phone: string,
        status: string,
        gender: string,
        country: string,
        state: string,
        picture: string
    }

    const AllActiveTransactions = () => 
    {
        return allUsers
    }

    const ActiveTransAct = useMemo<ColumnDef<UserProps>[]>(
        () => [
        {
          header: 'Firstname',
          cell: (row: CellContext<UserProps, unknown>) => (<a href="#" onClick={() => ShowStates(row.cell.row.getValue)}><Show display={row.renderValue()} /></a>),
          accessorKey: 'firstname',
        },
        {
            header: 'Surname',
            cell: (row: CellContext<UserProps, unknown>) => (<a href="#" onClick={() => ShowStates(row.cell.row.getValue)}><Show display={row.renderValue()} /></a>),
            accessorKey: 'surname',
        },
        {
            header: 'Email',
            cell: (row: CellContext<UserProps, unknown>) => (<a href="#" onClick={() => ShowStates(row.cell.row.getValue)}><Show display={row.renderValue()} /></a>),
            accessorKey: 'email',
        },
        {
            header: 'Phone',
            cell: (row: CellContext<UserProps, unknown>) => (<a href="#" onClick={() => ShowStates(row.cell.row.getValue)}><Show display={row.renderValue()} /></a>),
            accessorKey: 'phone',
        },
        {
            header: 'Gender',
            cell: (row: CellContext<UserProps, unknown>) => (<a href="#" onClick={() => ShowStates(row.cell.row.getValue)}><Show display={row.renderValue()} /></a>),
            accessorKey: 'gender',
        },
        {
            header: 'Country',
            cell: (row: CellContext<UserProps, unknown>) => (<a href="#" onClick={() => ShowStates(row.cell.row.getValue)}><Show display={row.renderValue()} /></a>),
            accessorKey: 'country',
        },
        {
            header: 'State',
            cell: (row: CellContext<UserProps, unknown>) => (<a href="#" onClick={() => ShowStates(row.cell.row.getValue)}><Show display={row.renderValue()} /></a>),
            accessorKey: 'state',
        },
        {
            header: 'Status',
            cell: (row: CellContext<UserProps, unknown>) => (<a href="#" onClick={() => ShowStates(row.cell.row.getValue)}><Show display={row.renderValue()} /></a>),
            accessorKey: 'status',
        },
        {
            header: 'View',
            cell: (row: CellContext<UserProps, unknown>) => (<a href="#" onClick={() => {
                ViewUser(true, row.renderValue())
           }}
            ><Icons iconName="eye" color="green" width={4} height={4}/></a>),
            accessorKey: 'passport',
        },
    ],[])
    
    return (
        <DashboardLayout pageName="All Users"
        >
            {/* <div 
                  className='font-bold text-2xl ml-5 mt-1 md:mt-5 flex justify-start items-left'
            >
                <HiOutlinePlus 
                                className="w-10 h-10 mr-5 cursor-pointer hover:text-blue-600" 
                                onClick={() => {
                                    setAddUserOpen(true)
                                }}
                />
            </div> */}
            {
               (isLoading === true) && <div className="col-span-12 h-[500px] flex justify-center items-center" style={{ marginTop: '60px', paddingTop: '0px' }}
               >
                   <RotateLoader className='w-12 h-12' />
               </div>
            }
            {
               ((isLoading === false) && (allUsers.length === 0)) && <div className="col-span-12 h-[300px] flex justify-center items-center" style={{ marginTop: '60px', paddingTop: '0px' }}
               >
                  <h1 className="font-bold text-blue-400">No Service Created Yet</h1>
               </div>
            }
            { 
            
                ((isLoading === false) && allUsers && (allUsers.length > 0)) &&
                
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
                                        picture={picture}
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
