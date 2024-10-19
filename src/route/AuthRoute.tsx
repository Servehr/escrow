import { Route, Routes } from 'react-router-dom';
import Login from '../auth/login';
import Register from '../auth/register';
import ResetPassword from '../auth/reset';
import ForgotPassword from '../auth/forgot';
import Activated from '../auth/activated';
import Registered from '../auth/registered';
import NotFound from '../auth/notFound';


export const AuthRoute = () => 
{
    return (
            
            <Routes> 
                <Route path='/login' element={<Login/>}></Route> 
                <Route path='/register' element={<Register/>}></Route>
                <Route path='/reset' element={<ResetPassword/>}></Route>
                <Route path='/forgot' element={<ForgotPassword/>}></Route>
                <Route path='/registered' element={<Registered/>}></Route>
                <Route path='/activated' element={<Activated/>}></Route>
                <Route path='/*' element={<NotFound />}></Route> 
            </Routes>
    );
}