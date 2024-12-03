import { CellContext, ColumnDef } from "@tanstack/react-table"
import { useEffect, useMemo, useState } from "react"
import { Show } from "../../../shared/Show"
import { Icons } from "../../../shared/Icons"
import { Table } from "../../../shared/Table"
import { TransactionDetailModal } from "./modals/TransactionDetailModal"
import currencyFormatter from "../../../util/currency-formatter"
import { useTransaction } from "../../../hook/useTransaction"
import { RotateLoader } from "react-spinners"


export default function CancelledTransactions() 
{

    const { CancelledTransaction } = useTransaction()
    const [viewTransactionDetail, setVeiwTransactionDetail] = useState<boolean>(false)
    const [cancelledTransaction, setCancelledTransaction] = useState<any[]>([])
  
    const [showingStates, setShowStates] = useState<boolean>(false)
  
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    const [detail, setDetail] = useState<any>("")
  
    useEffect(() => 
    {
       setIsLoading(true)
       const pending = CancelledTransaction()
       pending.then((cancelledTrans) => 
       {
        let theData: any[] = []
        cancelledTrans?.data?.data?.map((cancelled: any) => 
        {
            let buyer: string = (cancelled?.buyer != undefined) ? cancelled?.buyer?.firstname + ' ' + cancelled?.buyer?.surname : 'Awaiting Confirmation'
            let seller: string = (cancelled?.seller != undefined) ? cancelled?.seller?.firstname + ' ' + cancelled?.seller?.surname : 'Awaiting Confirmation'
            let category: string = cancelled?.category?.name
            let name: string = cancelled?.transaction?.name
            let amount: string = cancelled?.transaction?.amount
            let request: string = cancelled?.transaction?.request
            let start: string = cancelled?.transaction?.start
            let end: string = cancelled?.transaction?.end
            let validity: string = cancelled?.transaction?.validity
            let identifier: string = cancelled?.transaction?.identifier
            let delivery_status: string = cancelled?.transaction?.delivery_status
            let data:any = {seller,  buyer, category, name, amount, request, start, end, validity, identifier, delivery_status, images: cancelled?.images, description: cancelled?.transaction?.description, agreement: cancelled?.transaction?.agreement }
            theData.push({seller,  buyer, category, name, amount, request, start, end, validity, identifier, delivery_status, data })
        })
        setCancelledTransaction(theData)
        setIsLoading(false)
       }).then(() => {
          setError("Try again")
          setIsLoading(false)
          console.log(error)
       })
    }, [])
  
    const ShowStates = (page: any) => 
    {
        setShowStates(true)
        console.log({page, showingStates })
    }

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
        cancel: string,
        start: string,
        end: string,
        data: any
    }
  
  
    const AllCancelledTransaction = () => 
    {
        return cancelledTransaction
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
            header: 'View Detail',
            cell: (row: CellContext<ActiveTransProps, unknown>) => (<a href="#" onClick={() => ViewColumnId(true, row.renderValue())}><Icons iconName="eye" color="blue" width={4} height={4}/></a>),
            accessorKey: 'data',
        }
    ],[])



    return (
        <>   
            {
                ((isLoading === true) && (cancelledTransaction.length === 0)) && <div className="col-span-12 h-[300px] flex justify-center items-center" style={{ marginTop: '60px', paddingTop: '0px' }}
                >
                    <RotateLoader className='w-12 h-12' />
                </div>
            }
            {
                ((isLoading === false) && (cancelledTransaction.length === 0)) && <div className="col-span-12 h-[500px] flex justify-center items-center bg-white" style={{ marginTop: '10px', paddingTop: '0px' }}
                >
                    <h1 className="font-bold text-blue-400">No Cancelled Transaction</h1>
                </div>
            }    
            { 
            
                ((isLoading === false) && cancelledTransaction && (cancelledTransaction.length > 0)) && <>
                    <div 
                            className='mx-5 font-bold text-md mt-5 text-blue-700 uppercase'
                    > 
                            <h1 
                                className='text-black'
                            >
                                All Cancelled Transactions
                            </h1>
                    </div>
                    
                    <div 
                            className=''
                    >                          
                        <Table data={AllCancelledTransaction()} 
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
        </>
    )

}
