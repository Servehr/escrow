import { CellContext, ColumnDef } from "@tanstack/react-table"
import { useEffect, useMemo, useState } from "react"
import { Show } from "../../shared/Show"
import { Table } from "../../shared/Table"
import DashboardLayout from '../../shared/DashboardLayout'
import { HistoryModal } from "./transactions/modals/HistoryModal"
import { useUser } from "../../hook/useUser"
import { RotateLoader } from "react-spinners"
import currencyFormatter from "../../util/currency-formatter"


export default function Payment() 
{
    const { PaymentHistory } = useUser()
    const [openViewModal, setViewModalOpen] = useState<boolean>(false)
    const [showingStates, setShowStates] = useState<boolean>(false)
    const [paymentTransactions, setOpenPaymentTransactions] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    
    useEffect(() => 
    {
        callApi()
    }, [])

    const callApi = () => 
    {
        setIsLoading(true)
        const history =  PaymentHistory()
        history.then((pay) => 
        {
            if(pay.statusCode === 200)
            {
                setOpenPaymentTransactions(pay?.data?.data)
                setIsLoading(false)
            }
        }).catch(() => {
            
        })
    }    

    const ShowStates = (page: any) => 
    {
        console.log(showingStates)
        console.log(page)
        setShowStates(true)
    }

    type PaymentHistoryProps =
    {
        id: number,
        transaction_id: number,
        access_code: string,
        seller: string,
        buyer: string,
        name: string,
        amount: string,
        identifier: string
    }

    const AllPaymentHistory = () => 
    {
        return paymentTransactions
    }

    const PaymentTransaction = useMemo<ColumnDef<PaymentHistoryProps>[]>(
        () => [
        {
          header: 'Paystack Payment Code',
          cell: (row: CellContext<PaymentHistoryProps, unknown>) => (<a href="#" onClick={() => ShowStates(row.cell.row.getValue)}><Show display={row.renderValue()} /></a>),
          accessorKey: 'access_code',
        },
        {
            header: 'Transaction Name',
            cell: (row: CellContext<PaymentHistoryProps, unknown>) => (<a href="#" onClick={() => ShowStates(row.cell.row.getValue)}><Show display={row.renderValue()} /></a>),
            accessorKey: 'name',
        },
        {
            header: 'Amount',
            cell: (row: CellContext<PaymentHistoryProps, unknown>) => (<a href="#" onClick={() => ShowStates(row.cell.row.getValue)}><Show display={currencyFormatter(row.renderValue())} /></a>),
            accessorKey: 'amount',
        },
        {
            header: 'Transaction Code',
            cell: (row: CellContext<PaymentHistoryProps, unknown>) => (<a href="#" onClick={() => ShowStates(row.cell.row.getValue)}><Show display={row.renderValue()} /></a>),
            accessorKey: 'identifier',
        }
    ],[])
    
    return (
        <DashboardLayout pageName="All Payments"
        >
            <div 
                    className='mx-1 md:mx-4 -mt-5'
                >                   
                {
                    (isLoading === true) && <div className="col-span-12 h-[500px] flex justify-center items-center" style={{ marginTop: '60px', paddingTop: '0px' }}
                    >
                        <RotateLoader className='w-12 h-12' />
                    </div>
                }
                {
                    (isLoading === false) && (paymentTransactions.length === 0) && <div className="col-span-12 h-[300px] flex justify-center items-center" style={{ marginTop: '60px', paddingTop: '0px' }}
                    >
                        <h1 className="font-bold text-blue-400">No Payment Made Yet</h1>
                    </div>
                }
                {
                    (isLoading === false) && (paymentTransactions.length > 0) && 
                    <div 
                        className='container mx-auto mt-1'
                    >       
                        <div 
                            className='col-span-12 md:col-span-4 px-1 md:px-1 mt-5 md:mt-10'
                        >   
                            <Table data={AllPaymentHistory()} 
                                   columns={PaymentTransaction} 
                                   showNavigation={false} 
                                   searchPlaceHolder='search for transactions ...' 
                                   path='transactions' 
                                   from='transactions' 
                                   headerTextColor="white"
                            /> 
                        </div>
                    </div>
                }       
                    

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
