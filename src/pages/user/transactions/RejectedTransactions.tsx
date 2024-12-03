import { CellContext, ColumnDef } from "@tanstack/react-table"
import { useEffect, useMemo, useState } from "react"
import { Show } from "../../../shared/Show"
import { Icons } from "../../../shared/Icons"
import { Table } from "../../../shared/Table"
import { TransactionDetailModal } from "./modals/TransactionDetailModal"
import { useTransaction } from "../../../hook/useTransaction"
import { RotateLoader } from "react-spinners"
import currencyFormatter from "../../../util/currency-formatter"
import { RejectedMessage } from "./modals/RejectedMessage"


export default function RejectedTransactions() 
{

  const { RejectedTransaction } = useTransaction()
  const [viewTransactionDetail, setVeiwTransactionDetail] = useState<boolean>(false)
  const [rejectedTransaction, setRejectedTransaction] = useState<any[]>([])

  const [showingStates, setShowStates] = useState<boolean>(false)

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const [detail, setDetail] = useState<any>("")
  const [showMessageBox, setShowMessageBox] = useState<boolean>(false)
  const [sentMessage, setSentMessage] = useState<string>("")

  useEffect(() => 
  {
    console.log(error)
  }, [])

  useEffect(() => 
  {
     setIsLoading(true)
     const reject = RejectedTransaction()
     reject.then((rejectedTrans) => 
     {
        let theData: any[] = []
        rejectedTrans?.data?.data?.map((rejected: any) => 
        {
            let buyer: string = (rejected?.buyer != undefined) ? rejected?.buyer?.firstname + ' ' + rejected?.buyer?.surname : 'Awaiting Confirmation'
            let seller: string = (rejected?.seller != undefined) ? rejected?.seller?.firstname + ' ' + rejected?.seller?.surname : 'Awaiting Confirmation'
            let category: string = rejected?.category?.name
            let name: string = rejected?.transaction?.name
            let amount: string = rejected?.transaction?.amount
            let request: string = rejected?.transaction?.request
            let start: string = rejected?.transaction?.start
            let end: string = rejected?.transaction?.end
            let validity: string = rejected?.transaction?.validity
            let identifier: string = rejected?.transaction?.identifier
            let delivery_status: string = rejected?.transaction?.delivery_status
            let message: string = rejected?.message?.message
            let data:any = {seller,  buyer, category, name, amount, request, start, end, validity, identifier, delivery_status, images: rejected?.images, description: rejected?.transaction?.description, agreement: rejected?.transaction?.agreement }
            theData.push({seller, buyer, message, category, name, amount, request, start, end, validity, identifier, delivery_status, data })
        })
        setRejectedTransaction(theData)
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

  const ShowMessage = (x: boolean, msg: any) => 
  {
        setSentMessage(msg)
        setShowMessageBox(x)
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
      delivery_status: string,
      start: string,
      end: string,
      data: any,
      message: string
  }


  const AllRejectedTransaction = () => 
  {
      return rejectedTransaction
  }

  const RejectedTrans = useMemo<ColumnDef<ActiveTransProps>[]>(
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
    //   {
    //       header: 'Delivery Status',
    //       cell: (row: CellContext<ActiveTransProps, unknown>) => (<a href="#" onClick={() => ShowStates(row.cell.row.getValue)}><Show display={row.renderValue()} /></a>),
    //       accessorKey: 'delivery_status',
    //   },
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
    //   {
    //       header: 'Validity',
    //       cell: (row: CellContext<ActiveTransProps, unknown>) => (<a href="#" onClick={() => ShowStates(row.cell.row.getValue)}><Show display={row.renderValue()} /></a>),
    //       accessorKey: 'validity',
    //   },
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
          header: 'Message',
          cell: (row: CellContext<ActiveTransProps, unknown>) => (<a href="#" onClick={() => ShowMessage(true, row.renderValue())}><Icons iconName="message" color="red" width={4} height={4}/></a>),
          accessorKey: 'message',
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
                ((isLoading === true) && (rejectedTransaction.length === 0)) && <div className="col-span-12 h-[300px] flex justify-center items-center" style={{ marginTop: '60px', paddingTop: '0px' }}
                >
                    <RotateLoader className='w-12 h-12' />
                </div>
            }
            {
                ((isLoading === false) && (rejectedTransaction.length === 0)) && <div className="col-span-12 h-[500px] flex justify-center items-center bg-white" style={{ marginTop: '10px', paddingTop: '0px' }}
                >
                    <h1 className="font-bold text-blue-400">No Rejected Transaction</h1>
                </div>
            }    
            { 
            
                ((isLoading === false) && rejectedTransaction && (rejectedTransaction.length > 0)) && <>
                    <div 
                            className='mx-5 font-bold text-md mt-5 text-blue-700 uppercase'
                    > 
                            <h1 
                                className='text-black'
                            >
                                All Rejected Transactions
                            </h1>
                    </div>
                    
                    <div 
                            className=''
                    >                          
                        <Table data={AllRejectedTransaction()} 
                                columns={RejectedTrans} 
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
                showMessageBox && <RejectedMessage onClick={() => {
                                                setShowMessageBox(false)
                                        } } 
                                        rejectedMessageModal={showMessageBox}
                                        msg={sentMessage}
                                    />
            }

      </>
   )
}
