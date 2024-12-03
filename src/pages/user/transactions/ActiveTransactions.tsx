import { CellContext, ColumnDef } from "@tanstack/react-table"
import { useEffect, useMemo, useState } from "react"
import { Show } from "../../../shared/Show"
import { Icons } from "../../../shared/Icons"
import { Table } from "../../../shared/Table"
// import { HiFlag } from "react-icons/hi"
// import { FlagModal } from "./modals/FlagModal"
import { TransactionDetailModal } from "./modals/TransactionDetailModal"
import { OpenRequest } from "../../../shared/OpenRequest"
import currencyFormatter from "../../../util/currency-formatter"
import { useTransaction } from "../../../hook/useTransaction"
import { RotateLoader } from "react-spinners"
import { appStore } from "../../../state/store"
import { PayModal } from "./modals/PayModal"


export default function ActiveTransactions() 
{
    const tabPage = appStore((state) => state)
    const { OpenTransaction } = useTransaction()
    // const [openFlagModal, setFlagModalOpen] = useState<boolean>(false)
    const [viewTransactionDetail, setVeiwTransactionDetail] = useState<boolean>(false)
    const [openTransaction, setOpenTransaction] = useState<any[]>([])
    const [payment, setPayment] = useState<boolean>(false)
  
    const [showingStates, setShowStates] = useState<boolean>(false)
    const [refreshPage, setRefreshPage] = useState<number>(tabPage.getFlagPendingTab())
  
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    // const [rowId, setRowId] = useState<number>(-1)
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
        const open = OpenTransaction()
        open.then((openTrans) => 
        {          
           let theData: any[] = []
           openTrans?.data?.data?.map((open: any) => 
           {
                 let buyer: string = (open?.buyer != undefined) ? open?.buyer?.firstname + ' ' + open?.buyer?.surname : 'Awaiting Confirmation'
                 let seller: string = (open?.seller != undefined) ? open?.seller?.firstname + ' ' + open?.seller?.surname : 'Awaiting Confirmation'
                 let sellerId: number = (open?.seller != undefined) ? open?.seller?.id : null
                 let buyerId: number = (open?.buyer != undefined) ? open?.buyer?.id : null
                 let category: string = open?.category?.name
                 let name: string = open?.transaction?.name
                 let amount: string = open?.transaction?.amount
                 let request: string = open?.transaction?.request
                 let start: string = open?.transaction?.start
                 let end: string = open?.transaction?.end
                 let validity: string = open?.transaction?.validity
                 let identifier: string = open?.transaction?.identifier
                 let by: string = open?.posted_by?.id
                 let delivery_status: string = open?.transaction?.delivery_status
                 let payment: string = open?.transaction?.payment
                 let data:any = {id: open?.transaction?.id, identification: open?.buyer?.identification_no, sellerId, buyerId, seller, buyer, category, name, amount, request, start, end, validity, by, delivery_status, images: open?.images, description: open?.transaction?.description, agreement: open?.transaction?.agreement, payment: open?.transaction?.payment  }
                 theData.push({seller,  buyer, category, name, amount, request, start, end, validity, by, delivery_status, payment, data, identifier })
           })
           setOpenTransaction(theData)
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

    const MakePayment = (x: boolean, trans: any) =>
    {
        setPayment(x)
        setDetail(trans)
    }

    // const FlaggedColumnId = (x: boolean, id: any) =>
    // {
    //   setRowId(id)
    //   setFlagModalOpen(x)
    // }

    const ViewColumnId = (x: boolean, trans: any) =>
    {
      setDetail(trans)
      setVeiwTransactionDetail(x)
    }
  
    type ActiveTransProps =
    {
        category: string,
        name: string,
        seller: string,
        buyer: string,
        amount: number,
        request: string,
        start: string,
        end: string,
        validity: string,
        data: string
    }
  
  
    const AllOpenTransaction = () => 
    {
        return openTransaction
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
        // {
        //     header: 'Validity',
        //     cell: (row: CellContext<ActiveTransProps, unknown>) => (<a href="#" onClick={() => ShowStates(row.cell.row.getValue)}><Show display={row.renderValue()} /></a>),
        //     accessorKey: 'validity',
        // },
        {
            header: 'Delivery Status',
            cell: (row: CellContext<ActiveTransProps, unknown>) => (<a href="#" onClick={() => ShowStates(row.cell.row.getValue)}><Show display={row.renderValue()} /></a>),
            accessorKey: 'delivery_status',
        },
        {
            header: 'Amount',
            cell: (row: CellContext<ActiveTransProps, unknown>) => (<a href="#" onClick={() => ShowStates(row.cell.row.getValue)}><Show display={currencyFormatter(row.renderValue())} /></a>),
            accessorKey: 'amount',
        },
        {
            header: 'Request',
            cell: (row: CellContext<ActiveTransProps, unknown>) => (<a href="#" onClick={() => ShowStates(row.cell.row.getValue)}><Show display={row.renderValue()} /></a>),
            accessorKey: 'request',
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
            enableHiding: true
        },
        {
            header: 'Pay',
            cell: (row: CellContext<ActiveTransProps, unknown>) => {
                                                            const value:any = row.renderValue() as {}
                                                            const payment: string = value?.payment
                                                            return (                                                                                                                               
                                                                <>
                                                                    {
                                                                        ((payment === 'not-paid') && (value?.by != Number(tabPage.getUser().id)))&& <>
                                                                            <span className="px-2 py-2 font-semibold cursor-pointer text-xs hover:text-white rounded-xl bg-yellow-400 hover:bg-yellow-700"
                                                                                onClick={() => MakePayment(true, value)}
                                                                            >
                                                                                {'Make Payment'}
                                                                            </span>
                                                                        </>
                                                                    }
                                                                    {
                                                                        ((payment === 'not-paid') && (value?.by === Number(tabPage.getUser().id)))&& <>
                                                                            <span className="px-2 py-2 font-semibold cursor-pointer text-xs hover:text-white rounded-xl bg-yellow-400 hover:bg-yellow-700"
                                                                                onClick={() => MakePayment(true, value)}
                                                                            >
                                                                                {'Not Paid'}
                                                                            </span>
                                                                        </>
                                                                    }
                                                                    {
                                                                        (payment === 'paid') && <>
                                                                            <span className="px-2 py-2 font-semibold text-xs hover:text-white rounded-xl bg-green-400 hover:bg-green-700"
                                                                                >
                                                                                {payment}
                                                                            </span>
                                                                        </>
                                                                    }
                                                                </>
                                                            )
                                                        },
            accessorKey: 'data',
        },
        {
            header: 'Accept/Reject',
            cell: (row: CellContext<ActiveTransProps, unknown>) => (<a href="#"><OpenRequest onClick={(x: string | boolean) => {
                                            if(x === 'successful')
                                            {
                                                setTimeout(() => {
                                                    setRefreshPage(Math.random()*((3391)*3219))
                                                })
                                            }
                                        }} 
                                        detail={row.renderValue()}
                                    />
            </a>),
            accessorKey: 'data',
        },
        // {
        //     header: 'Flag',
        //     cell: (row: CellContext<ActiveTransProps, unknown>) => (<a href="#" onClick={() => FlaggedColumnId(true, row.renderValue())}><HiFlag className="text-black-600 hover:text-red-600" width={5} height={5}/></a>),
        //     accessorKey: 'id',
        // },
        {
            header: 'View Detail',
            cell: (row: CellContext<ActiveTransProps, unknown>) => (<a href="#" onClick={() => ViewColumnId(true, row.renderValue())}><Icons iconName="eye" color="blue" width={4} height={4}/></a>),
            accessorKey: 'data',
        }
    ],[])



    return (
        <>   
            {
                ((isLoading === true) && (openTransaction.length === 0)) && <div className="col-span-12 h-[300px] flex justify-center items-center" style={{ marginTop: '60px', paddingTop: '0px' }}
                >
                    <RotateLoader className='w-12 h-12' />
                </div>
            }
            {
                ((isLoading === false) && (openTransaction.length === 0)) && <div className="col-span-12 h-[500px] flex justify-center items-center bg-white" style={{ marginTop: '10px', paddingTop: '0px' }}
                >
                    <h1 className="font-bold text-blue-400">No Active Transaction Yet</h1>
                </div>
            }    
            { 
            
                ((isLoading === false) && openTransaction && (openTransaction.length > 0)) && <>
                    <div 
                            className='mx-5 font-bold text-md mt-5 text-blue-700 uppercase'
                    > 
                            <h1 
                                className='text-black'
                            >
                                All Active Transactions - {tabPage.getUser().userIdentifier}
                            </h1>
                    </div>
                    
                    <div 
                            className=''
                    >                          
                        <Table data={AllOpenTransaction()} 
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

            {/* {
                openFlagModal && <FlagModal onClick={() => {
                                                setFlagModalOpen(false)
                                        } } 
                                        flagModal={openFlagModal}                                     
                                        rowId={rowId} 
                                    />
            } */}

            {
                viewTransactionDetail && <TransactionDetailModal onClick={() => {
                                                setVeiwTransactionDetail(false)
                                        } } 
                                        transactionModal={viewTransactionDetail} 
                                        detail={detail}
                                    />
            }
            {
                payment && <PayModal 
                                    payModal={payment} 
                                    onClick={() => {
                                        setPayment(false)
                                    }} 
                                    detail={detail}
                />
            }
        </>
    )

}
