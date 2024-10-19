import React, { useEffect } from 'react'
import { appStore } from '../state/store'
import { useNavigate } from 'react-router-dom'


type ProtectedProps = 
{
    children: React.ReactNode   
}


export default function Protected({ children }: ProtectedProps) 
{
    const navigate = useNavigate()
    const appState = appStore((state: any) => state)

    useEffect(() => 
    {
        if(appState.getUser().token === "")
        {
          navigate('/auth/login')
        }
    })
    
    return children
}
