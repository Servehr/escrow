import { CellContext, ColumnDef } from "@tanstack/react-table"
import { useMemo, useState } from "react"
import { Show } from "../../shared/Show"
import { Icons } from "../../shared/Icons"
import { Table } from "../../shared/Table"
import DashboardLayout from '../../shared/DashboardLayout'
import { HistoryModal } from "./transactions/modals/HistoryModal"


export default function History() 
{
    const [addService, setServiceToAdd] = useState<boolean>(false)
    const [editService, setServiceToEdit] = useState<boolean>(false)
    const [deleteServiceModal, setServiceToDelete] = useState<boolean>(false)
    const [openViewModal, setViewModalOpen] = useState<boolean>(false)


    const [showingStates, setShowStates] = useState<boolean>(false)
    

    const ShowStates = (page: any) => 
    {
        console.log(showingStates)
        console.log(page)
        setShowStates(true)
    }

    type ServiceProps =
    {
        category: string,
        description: string,
        amount: string,
        period: string,
        status: string
    }
      
    const ActiveTrans: ServiceProps[] = 
    [
        {
          category: 'E-Commerce',
          description: 'xxxxxx xxxxxxx xxxxxxx',
          amount: '23,000',
          period: '10-02-2024 - 14-02-2024',
          status: 'completed'
        },
        {
          category: 'Mortgage',
          description: 'xxxxxx xxxxxxx xxxxxxx',
          amount: '23,000',
          period: '10-02-2024 - 14-02-2024',
          status: 'completed'
        },
        {
          category: 'Agriculture',
          description: 'xxxxxx xxxxxxx xxxxxxx',
          amount: '23,000',
          period: '10-02-2024 - 14-02-2024',
          status: 'completed'
        },
        {
          category: 'Agriculture',
          description: 'xxxxxx xxxxxxx xxxxxxx',
          amount: '23,000',
          period: '10-02-2024 - 14-02-2024',
          status: 'completed'
        },
        {
          category: 'Agriculture',
          description: 'xxxxxx xxxxxxx xxxxxxx',
          amount: '23,000',
          period: '10-02-2024 - 14-02-2024',
          status: 'completed'
        },
    ]

    const AllActiveTransactions = () => 
    {
        return ActiveTrans
    }

    const ActiveTransAct = useMemo<ColumnDef<ServiceProps>[]>(
        () => [
        {
          header: 'Category',
          cell: (row: CellContext<ServiceProps, unknown>) => (<a href="#" onClick={() => ShowStates(row.cell.row.getValue)}><Show display={row.renderValue()} /></a>),
          accessorKey: 'category',
        },
        {
            header: 'Name',
            cell: (row: CellContext<ServiceProps, unknown>) => (<a href="#" onClick={() => ShowStates(row.cell.row.getValue)}><Show display={row.renderValue()} /></a>),
            accessorKey: 'description',
        },
        {
            header: 'Amount',
            cell: (row: CellContext<ServiceProps, unknown>) => (<a href="#" onClick={() => ShowStates(row.cell.row.getValue)}><Show display={row.renderValue()} /></a>),
            accessorKey: 'amount',
        },
        {
            header: 'Period',
            cell: (row: CellContext<ServiceProps, unknown>) => (<a href="#" onClick={() => ShowStates(row.cell.row.getValue)}><Show display={row.renderValue()} /></a>),
            accessorKey: 'period',
        },
        {
            header: 'Status',
            cell: (row: CellContext<ServiceProps, unknown>) => (<a href="#" onClick={() => ShowStates(row.cell.row.getValue)}><Show display={row.renderValue()} /></a>),
            accessorKey: 'status',
        },
        {
            header: 'View Detail',
            cell: () => (<a href="#" onClick={() => setViewModalOpen(true)}><Icons iconName="eye" color="blue" width={4} height={4}/></a>),
            accessorKey: '',
        }
    ],[])
    
    return (
        <DashboardLayout pageName="History"
        >
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
                    openViewModal && <HistoryModal onClick={() => {
                                                setViewModalOpen(false)
                                            } } 
                                            historyModal={openViewModal} 
                                        />
                }
        </DashboardLayout>
    )
}
