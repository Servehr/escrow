import { CellContext, ColumnDef } from "@tanstack/react-table"
import { useEffect, useMemo, useState } from "react"
import { Show } from "../../../shared/Show"
import { Icons } from "../../../shared/Icons"
import { Table } from "../../../shared/Table"
import { TransactionDetailModal } from "./modals/TransactionDetailModal"
import currencyFormatter from "../../../util/currency-formatter"
import { useTransaction } from "../../../hook/useTransaction"
import { RotateLoader } from "react-spinners"
import { PayModal } from "./modals/PayModal"


export default function CompletedTransactions() 
{

    const { CompletedTransaction } = useTransaction()
    const [viewTransactionDetail, setVeiwTransactionDetail] = useState<boolean>(false)
    const [completedTransaction, setCompletedTransaction] = useState<any[]>([])
    const [payment] = useState<boolean>(false)
  
    const [showingStates, setShowStates] = useState<boolean>(false)
  
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    const [detail, setDetail] = useState<any>("")

    useEffect(() => 
    {
        console.log({error})
    }, [])
  
    useEffect(() => 
    {
       setIsLoading(true)
       const completed = CompletedTransaction()
       completed.then((completedTrans) => 
       {
          let theData: any[] = []
          completedTrans?.data?.data?.map((complete: any) => 
          {
              let buyer: string = (complete?.buyer != undefined) ? complete?.buyer?.firstname + ' ' + complete?.buyer?.surname : 'Awaiting Confirmation'
              let seller: string = (complete?.seller != undefined) ? complete?.seller?.firstname + ' ' + complete?.seller?.surname : 'Awaiting Confirmation'
              let category: string = complete?.category?.name
              let name: string = complete?.transaction?.name
              let amount: string = complete?.transaction?.amount
              let request: string = complete?.transaction?.request
              let start: string = complete?.transaction?.start
              let end: string = complete?.transaction?.end
              let validity: string = complete?.transaction?.validity
              let identifier: string = complete?.transaction?.identifier
              let delivery_status: string = complete?.transaction?.delivery_status
              let payment: string = complete?.transaction?.payment
              let data:any = {seller,  buyer, category, name, amount, request, start, end, validity, identifier, delivery_status, images: complete?.images, description: complete?.transaction?.description, agreement: complete?.transaction?.agreement, payment: complete?.transaction?.payment }
              theData.push({seller,  buyer, category, name, amount, request, start, end, validity, identifier, delivery_status, payment, data })
          })
          setCompletedTransaction(theData)
          setIsLoading(false)
       }).then(() => {
          setError("Try again")
          setIsLoading(false)
       })
    }, [])
  
    const ShowStates = (page: any) => 
    {
        console.log(showingStates)
        console.log(page)
        setShowStates(true)
    }

    const ViewColumnId = (x: boolean, trans: any) =>
    {
      setDetail(trans)
      setVeiwTransactionDetail(x)
    }

    // const MakePayment = (x: boolean, trans: any) =>
    // {
    //   setPayment(trans)
    // }
  
    type ActiveTransProps =
    {
        category: string,
        name: string,
        seller: string,
        buyer: string,
        amount: number,
        delivery_status: string,
        start: string,
        end: string,
        data: any
    }
  
  
    const AllCompletedTranaction = () => 
    {
        return completedTransaction
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
            header: 'Amount',
            cell: (row: CellContext<ActiveTransProps, unknown>) => (<a href="#" onClick={() => ShowStates(row.cell.row.getValue)}><Show display={currencyFormatter(row.renderValue())} /></a>),
            accessorKey: 'amount',
        },
        {
            header: 'Status',
            cell: (row: CellContext<ActiveTransProps, unknown>) => (<a href="#" onClick={() => ShowStates(row.cell.row.getValue)}><Show display={row.renderValue()} /></a>),
            accessorKey: 'delivery_status',
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
        {
            header: 'Pay',
            cell: (row: CellContext<ActiveTransProps, unknown>) => {
                                                            const value:any = row.renderValue() as {}
                                                            const payment: string = value?.payment
                                                            return (                                                                                                                               
                                                                <>
                                                                    {
                                                                        (payment === 'not-paid') && <>
                                                                            <span className="px-2 py-2 font-semibold cursor-pointer text-xs hover:text-white rounded-xl bg-yellow-400 hover:bg-yellow-700"
                                                                                // onClick={() => MakePayment(true, payment)}
                                                                            >
                                                                                {payment}
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
            header: 'View Detail',
            cell: (row: CellContext<ActiveTransProps, unknown>) => (<a href="#" onClick={() => ViewColumnId(true, row.renderValue())}><Icons iconName="eye" color="blue" width={4} height={4}/></a>),
            accessorKey: 'data',
        }
    ],[])



    return (
        <>   
            {
                ((isLoading === true) && (completedTransaction.length === 0)) && <div className="col-span-12 h-[300px] flex justify-center items-center" style={{ marginTop: '60px', paddingTop: '0px' }}
                >
                    <RotateLoader className='w-12 h-12' />
                </div>
            }
            {
                ((isLoading === false) && (completedTransaction.length === 0)) && <div className="col-span-12 h-[500px] flex justify-center items-center bg-white" style={{ marginTop: '10px', paddingTop: '0px' }}
                >
                    <h1 className="font-bold text-blue-400">No Transaction Completed Yet</h1>
                </div>
            }    
            { 
            
                ((isLoading === false) && completedTransaction && (completedTransaction.length > 0)) && <>
                    <div 
                            className='mx-5 font-bold text-md mt-5 text-blue-700 uppercase'
                    > 
                            <h1 
                                className='text-black'
                            >
                                All Completed Transactions
                            </h1>
                    </div>
                    
                    <div 
                            className=''
                    >                          
                        <Table data={AllCompletedTranaction()} 
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

                                    }} 
                                    detail={''}
                />
            }
    </>
    )

}
