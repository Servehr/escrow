import { CellContext, ColumnDef } from "@tanstack/react-table"
import { useEffect, useMemo, useState } from "react"
import { Show } from "../../shared/Show"
import { Table } from "../../shared/Table"
import DashboardLayout from '../../shared/DashboardLayout'
import { RotateLoader } from "react-spinners"
import { useMessages } from "../../hook/useMessages"


export default function ContactMessages() 
{
    const { GetMessages } = useMessages()
    const [messages, setMessages] = useState<any>([])
    const [error, setError] = useState<string>('')

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [showingStates, setShowStates] = useState<boolean>(false)
    
    useEffect(() => 
    {
        setIsLoading(true)
        callApi()
        console.log(error)
    }, [])

    const callApi = () => 
    {
        const allMessages = GetMessages()
        allMessages.then((msgs) => 
        {
            if(msgs.statusCode === 200)
            {                
                setMessages(msgs?.data?.data)
                setIsLoading(false)
            }
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

    type ServiceProps =
    {
        id: number,
        fistname: string,
        surname: string,
        phone: string,
        email: string,        
        message: string,
    }
      
    const AllActiveTransactions = () => 
    {
        return messages
    }

    const ActiveTransAct = useMemo<ColumnDef<ServiceProps>[]>(
        () => [
        {
          header: 'Firstname',
          cell: (row: CellContext<ServiceProps, unknown>) => (<a href="#" onClick={() => ShowStates(row.cell.row.getValue)}><Show display={row.renderValue()} /></a>),
          accessorKey: 'firstname',
        },
        {
            header: 'Surname',
            cell: (row: CellContext<ServiceProps, unknown>) => (<a href="#" onClick={() => ShowStates(row.cell.row.getValue)}><Show display={row.renderValue()} /></a>),
            accessorKey: 'surname',
        },
        {
            header: 'Phone',
            cell: (row: CellContext<ServiceProps, unknown>) => (<a href="#" onClick={() => ShowStates(row.cell.row.getValue)}><Show display={row.renderValue()} /></a>),
            accessorKey: 'phone',
        },
        {
            header: 'Email',
            cell: (row: CellContext<ServiceProps, unknown>) => (<a href="#" onClick={() => ShowStates(row.cell.row.getValue)}><Show display={row.renderValue()} /></a>),
            accessorKey: 'email',
        },
        {
            header: 'Message',
            cell: (row: CellContext<ServiceProps, unknown>) => (<a href="#" onClick={() => ShowStates(row.cell.row.getValue)}><Show display={row.renderValue()} /></a>),
            accessorKey: 'message',
        }
    ],[])
    
    return (
        <DashboardLayout pageName="Messages"
        >
            {
               (isLoading === true) && <div className="col-span-12 h-[500px] flex justify-center items-center" style={{ marginTop: '60px', paddingTop: '0px' }}
               >
                   <RotateLoader className='w-12 h-12' />
               </div>
            }
            {
               ((isLoading === false) && (messages.length === 0)) && <div className="col-span-12 h-[300px] flex justify-center items-center" style={{ marginTop: '60px', paddingTop: '0px' }}
               >
                  <h1 className="font-bold text-blue-400">No Service Created Yet</h1>
               </div>
            }
            { 
            
                ((isLoading === false) && messages && (messages.length > 0)) &&
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
        </DashboardLayout>
    )
}
