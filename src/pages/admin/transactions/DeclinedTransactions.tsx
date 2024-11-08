import { CellContext, ColumnDef } from "@tanstack/react-table"
import { useEffect, useMemo, useState } from "react"
import { Show } from "../../../shared/Show"
import { Icons } from "../../../shared/Icons"
import { Table } from "../../../shared/Table"
import { TransactionDetailModal } from "./modals/TransactionDetailModal"
import { useTransaction } from "../../../auth/hook/useTransaction"
import { RotateLoader } from "react-spinners"
import currencyFormatter from "../../../util/currency-formatter"


export default function DeclinedTransactions() 
{

  const { DeclinedTransaction } = useTransaction()
  const [invalidTransaction, setVeiwTransactionDetail] = useState<boolean>(false)
  const [declinedTransaction, setDeclinedTransaction] = useState<any[]>([])

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
     const invalid = DeclinedTransaction()
     invalid.then((declinedTrans) => 
     {
        let theData: any[] = []
        declinedTrans?.data?.data?.map((declined: any) => 
        {
            let buyer: string = (declined?.buyer != undefined) ? declined?.buyer?.firstname + ' ' + declined?.buyer?.surname : 'Awaiting Confirmation'
            let seller: string = (declined?.seller != undefined) ? declined?.seller?.firstname + ' ' + declined?.seller?.surname : 'Awaiting Confirmation'
            let category: string = declined?.category?.name
            let name: string = declined?.transaction?.name
            let amount: string = declined?.transaction?.amount
            let request: string = declined?.transaction?.request
            let start: string = declined?.transaction?.start
            let end: string = declined?.transaction?.end
            let validity: string = declined?.transaction?.validity
            let identifier: string = declined?.transaction?.identifier
            let delivery_status: string = declined?.transaction?.delivery_status
            let data:any = {id: declined?.id, seller, buyer, category, name, amount, request, start, end, validity, identifier, delivery_status, images: declined?.images, description: declined?.transaction?.description, agreement: declined?.transaction?.agreement }
            theData.push({seller,  buyer, category, name, amount, request, start, end, validity, identifier, delivery_status, data })
        })
        setDeclinedTransaction(theData)
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
      return declinedTransaction
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
                    ((isLoading === true) && (declinedTransaction.length === 0)) && <div className="col-span-12 h-[300px] flex justify-center items-center" style={{ marginTop: '60px', paddingTop: '0px' }}
                    >
                        <RotateLoader className='w-12 h-12' />
                    </div>
                }
                {
                    ((isLoading === false) && (declinedTransaction.length === 0)) && <div className="col-span-12 h-[500px] flex justify-center items-center bg-white" style={{ marginTop: '10px', paddingTop: '0px' }}
                    >
                        <h1 className="font-bold text-blue-400">No Declined Transaction</h1>
                    </div>
                }    
                { 
                
                    ((isLoading === false) && declinedTransaction && (declinedTransaction.length > 0)) && <>
                        <div 
                                className='mx-5 font-bold text-md mt-5 text-blue-700 uppercase'
                        > 
                                <h1 
                                    className='text-black'
                                >
                                    All Declined Transactions
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
                invalidTransaction && <TransactionDetailModal onClick={() => {
                                                setVeiwTransactionDetail(false)
                                        } } 
                                        transactionModal={invalidTransaction} 
                                        detail={detail}
                                    />
            }

        </>
  )
}
