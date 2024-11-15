import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/admin/Dashboard';
import Transactions from '../pages/admin/Transactions';
import CreateTransactions from '../pages/admin/CreateTransactions';
import Members from '../pages/admin/Members';
import Services from '../pages/admin/Services';
import Settings from '../pages/admin/Settings';
import NotFound from '../auth/notFound';
import History from '../pages/admin/History';
import Profile from '../pages/admin/Profile';
import Payment from '../pages/admin/Payment';



export const DashboardRoute = () => 
{
    return (
            
            <Routes>
                <Route path='/' element={<Dashboard />}></Route> 
                <Route path='/create-transaction' element={<CreateTransactions />}></Route> 
                <Route path='/transactions' element={<Transactions />}></Route> 
                <Route path='/users' element={<Members />}></Route> 
                <Route path='/services' element={<Services />}></Route> 
                <Route path='/payments' element={<Payment />}></Route> 
                <Route path='/history' element={<History />}></Route> 
                <Route path='/profile' element={<Profile />}></Route> 
                <Route path='/settings' element={<Settings />}></Route> 
                <Route path='/*' element={<NotFound />}></Route> 
            </Routes>
    );
}