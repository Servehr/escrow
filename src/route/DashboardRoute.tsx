import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/admin/Dashboard';
import Transactions from '../pages/admin/Transactions';
import CreateTransactions from '../pages/admin/CreateTransactions';
import Members from '../pages/admin/Members';
import Services from '../pages/admin/Services';
import Settings from '../pages/admin/Settings';

export const DashboardRoute = () => 
{
    return (
            
            <Routes>
                <Route path='' element={<Dashboard />}></Route> 
                <Route path='/create-transaction' element={<CreateTransactions />}></Route> 
                <Route path='/transactions' element={<Transactions />}></Route> 
                <Route path='/members' element={<Members />}></Route> 
                <Route path='/services' element={<Services />}></Route> 
                <Route path='/settings' element={<Settings />}></Route> 
            </Routes>
    );
}