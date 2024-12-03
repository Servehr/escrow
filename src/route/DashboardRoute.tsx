import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/user/Dashboard';
import Transactions from '../pages/user/Transactions';
import CreateTransactions from '../pages/user/CreateTransactions';
import Members from '../pages/user/Members';
import Services from '../pages/user/Services';
import Settings from '../pages/user/Settings';
import NotFound from '../auth/notFound';
import History from '../pages/user/History';
import Profile from '../pages/user/Profile';
import Payment from '../pages/user/Payment';
import { ChangePassword } from '../pages/user/ChangePassword';



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
                <Route path='/change-password' element={<ChangePassword />}></Route> 
                <Route path='/*' element={<NotFound />}></Route> 
            </Routes>
    );
}