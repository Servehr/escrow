import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/admin/Dashboard';
import CreateTransaction from '../pages/admin/Create-Transaction';
import Transactions from '../pages/admin/Transactions';

export const DashboardRoute = () => 
{
    return (
            
            <Routes>
                <Route path='' element={<Dashboard />}></Route> 
                <Route path='/dashboard/create-transaction' element={<CreateTransaction />}></Route> 
                <Route path='/dashboard/create-transaction' element={<Transactions />}></Route> 
            </Routes>
    );
}