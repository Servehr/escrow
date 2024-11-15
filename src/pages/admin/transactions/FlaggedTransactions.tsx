import { CellContext, ColumnDef } from "@tanstack/react-table"
import { useEffect, useMemo, useState } from "react"
import { Show } from "../../../shared/Show"
import { Icons } from "../../../shared/Icons"
import { Table } from "../../../shared/Table"
import { HiFlag } from "react-icons/hi"
import { FlagModal } from "./modals/FlagModal"
import { TransactionDetailModal } from "./modals/TransactionDetailModal"
import { useTransaction } from "../../../hook/useTransaction"
import { RotateLoader } from "react-spinners"
import currencyFormatter from "../../../util/currency-formatter"
import { appStore } from "../../../state/store"
import { MdOutlineWhatsapp } from "react-icons/md"
import { WhatsApp } from "./modals/WhatsApp"


export default function FlaggedTransactions() 
{
    const tabPage = appStore((state) => state)

    const { PendingTransaction } = useTransaction()
    const [openFlagModal, setFlagModalOpen] = useState<boolean>(false)
    const [viewTransactionDetail, setVeiwTransactionDetail] = useState<boolean>(false)
    const [pendingTransaction, setPendingTransaction] = useState<any[]>([])
    const [openWhatsApp, setOpenWhatsApp] = useState<any>("")

    const [showingStates, setShowStates] = useState<boolean>(false)

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [refreshPage, setRefreshPage] = useState<number>(tabPage.getActiveTab())
    const [error, setError] = useState<string>('')

    const [rowId, setRowId] = useState<number>(-1)
    const [detail, setDetail] = useState<any>("")

    useEffect(() => 
    {
        callApi()
    }, [refreshPage])

  
    useEffect(() => 
    {
       setIsLoading(true)
       callApi()
       console.log(error)
    }, [])

    const callApi = () => 
    {
            const pending = PendingTransaction()
            pending.then((pendTrans) => 
            {  
            let theData: any[] = []
            pendTrans?.data?.data?.map((pending: any) => 
            {
                let buyer: string = (pending?.buyer != undefined) ? pending?.buyer?.firstname + ' ' + pending?.buyer?.surname : 'Awaiting Confirmation'
                let seller: string = (pending?.seller != undefined) ? pending?.seller?.firstname + ' ' + pending?.seller?.surname : 'Awaiting Confirmation'
                let category: string = pending?.category?.name
                let name: string = pending?.transaction?.name
                let id: string = pending?.transaction?.id
                let amount: string = pending?.transaction?.amount
                let request: string = pending?.transaction?.request
                let start: string = pending?.transaction?.start
                let end: string = pending?.transaction?.end
                let validity: string = pending?.transaction?.validity
                let identifier: string = pending?.transaction?.identifier
                let delivery_status: string = pending?.transaction?.delivery_status
                let data:any = {seller,  buyer, category, name, amount, request, start, end, validity, identifier, delivery_status, images: pending?.images, description: pending?.transaction?.description, agreement: pending?.transaction?.agreement }
                theData.push({id, seller,  buyer, category, name, amount, request, start, end, validity, identifier, delivery_status, data })
            })
            setPendingTransaction(theData)
            setIsLoading(false)
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
    
    const FlaggedColumnId = (x: boolean, id: any) =>
    {
        setRowId(id)
        setFlagModalOpen(x)
    }

    const ViewColumnId = (x: boolean, trans: any) =>
    {
        setDetail(trans)
        setVeiwTransactionDetail(x)
    }

    const ConnectWhatsApp = (x: boolean) => 
    {
        setOpenWhatsApp(x)
    }

    type ActiveTransProps =
    {
        id: number,
        category: string, 
        name: string,
        seller: string,
        buyer: string,
        validity: string,
        amount: string,
        request: string,
        start: string,
        end: string,
        data: any
    }

    const AllActiveTransactions = () => 
    {
        return pendingTransaction
    }

    const ActiveTransAct = useMemo<ColumnDef<ActiveTransProps>[]>(
        () => [
        {
            header: 'Category',
            cell: (row: CellContext<ActiveTransProps, unknown>) => (<a href="#" onClick={() => ShowStates(row.cell.row.getValue)}><Show display={row.renderValue()} /></a>),
            accessorKey: 'category',
        },
        {
            header: 'Service/Product Name',
            cell: (row: CellContext<ActiveTransProps, unknown>) => (<a href="#" onClick={() => ShowStates(row.cell.row.getValue)}><Show display={row.renderValue()} /></a>),
            accessorKey: 'name',
        },
        {
            header: 'Seller',
            cell: (row: CellContext<ActiveTransProps, unknown>) => (<a href="#" onClick={() => ShowStates(row.cell.row.getValue)}><Show display={row.renderValue()} /></a>),
            accessorKey: 'seller',
        },
        {
            header: 'Buyer',
            cell: (row: CellContext<ActiveTransProps, unknown>) => (<a href="#" onClick={() => ShowStates(row.cell.row.getValue)}><Show display={row.renderValue()} /></a>),
            accessorKey: 'buyer',
        },
        {
            header: 'Request',
            cell: (row: CellContext<ActiveTransProps, unknown>) => (<a href="#" onClick={() => ShowStates(row.cell.row.getValue)}><Show display={row.renderValue()} /></a>),
            accessorKey: 'request',
        },
        //   {
        //       header: 'Validity',
        //       cell: (row: CellContext<ActiveTransProps, unknown>) => (<a href="#" onClick={() => ShowStates(row.cell.row.getValue)}><Show display={row.renderValue()} /></a>),
        //       accessorKey: 'validity',
        //   },
        {
            header: 'Amount',
            cell: (row: CellContext<ActiveTransProps, unknown>) => (<a href="#" onClick={() => ShowStates(row.cell.row.getValue)}><Show display={currencyFormatter(row.renderValue())} /></a>),
            accessorKey: 'amount',
        },
        {
            header: 'Start Date',
            cell: (row: CellContext<ActiveTransProps, unknown>) => (<a href="#" onClick={() => ShowStates(row.cell.row.getValue)}><Show display={row.renderValue()} /></a>),
            accessorKey: 'start',
        },
        {
            header: 'End Date',
            cell: (row: CellContext<ActiveTransProps, unknown>) => (<a href="#" onClick={() => ShowStates(row.cell.row.getValue)}><Show display={row.renderValue()} /></a>),
            accessorKey: 'end',
        },
        {
            header: 'Product Code',
            cell: (row: CellContext<ActiveTransProps, unknown>) => (<a href="#" onClick={() => ShowStates(row.cell.row.getValue)}><Show display={row.renderValue()} /></a>),
            accessorKey: 'identifier',
        },
        //   {
        //       header: 'Validate',
        //       cell: (row: CellContext<ActiveTransProps, unknown>) => (<a href="#">
        //                                 <ApproveRequest onClick={(x) => {
                                            
        //                                 }}
        //                                 detail={row.renderValue()}
        //                     />
        //       </a>),
        //       accessorKey: 'transaction',
        //   },
        {
            header: 'Flag',
            cell: (row: CellContext<ActiveTransProps, unknown>) => (<a href="#" onClick={() => FlaggedColumnId(true, row.renderValue())}><HiFlag className="text-black-600 hover:text-red-600" width={5} height={5}/></a>),
            accessorKey: 'id',
        },
        {
            header: 'WhatsAp',
            cell: (row: CellContext<ActiveTransProps, unknown>) => (<a href="#" onClick={() => ConnectWhatsApp(true)}><MdOutlineWhatsapp className="w-5 h-5 text-green-600 hover:text-green-800" /></a>),
            accessorKey: 'id',
        },
        {
            header: 'View Detail',
            cell: (row: CellContext<ActiveTransProps, unknown>) => (<a href="#" onClick={() => ViewColumnId(true, row.renderValue())}><Icons iconName="eye" color="blue" width={6} height={6}/></a>),
            accessorKey: 'data',
        }
    ],[])



    return (
        <>   
                {
                    ((isLoading === true) && (pendingTransaction.length === 0)) && <div className="col-span-12 h-[300px] flex justify-center items-center" style={{ marginTop: '60px', paddingTop: '0px' }}
                    >
                        <RotateLoader className='w-12 h-12' />
                    </div>
                }
                {
                    ((isLoading === false) && (pendingTransaction.length === 0)) && <div className="col-span-12 h-[500px] flex justify-center items-center bg-white" style={{ marginTop: '10px', paddingTop: '0px' }}
                    >
                        <h1 className="font-bold text-blue-400">No Pending Transaction</h1>
                    </div>
                }    
                { 
                
                    ((isLoading === false) && pendingTransaction && (pendingTransaction.length > 0)) && <>
                        <div 
                                className='mx-5 font-bold text-md mt-5 text-blue-700 uppercase'
                        > 
                                <h1 
                                    className='text-black'
                                >
                                    All Pending Transactions
                                    {/* <span className="mr-20 cursor-pointer" onClick={() => { setRefreshPage(Math.random()*776612) }}>Refresh</span> */}
                                </h1>
                        </div>
                        
                        <div 
                                className=''
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
                    </>
                }

            {
                openFlagModal && <FlagModal onClick={(x) =>
                                        {                    
                                            if(x === 'successful')
                                            {
                                                setTimeout(() => {
                                                    setRefreshPage(Math.random()*((3391)*3219))
                                                })
                                            }
                                                setFlagModalOpen(false)
                                        } } 
                                        flagModal={openFlagModal} 
                                        rowId={rowId}
                                    />
            }

            {
                viewTransactionDetail && <TransactionDetailModal onClick={() => 
                                        {
                                                setVeiwTransactionDetail(false)
                                        } } 
                                        transactionModal={viewTransactionDetail} 
                                        detail={detail}
                                    />
            }

            {
                openWhatsApp && <WhatsApp toggleModal={openWhatsApp} onClick={() => 
                    {
                        setOpenWhatsApp(false)  
                    }} 
                />
            }

        </>
    )
}
