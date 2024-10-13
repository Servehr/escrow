import { Route, Routes } from 'react-router-dom';
import Login from '../auth/login';
import Register from '../auth/register';
import ResetPassword from '../auth/reset';
import ForgotPassword from '../auth/forgot';


export const AuthRoute = () => 
{
    return (
            
            <Routes>
                <Route path='' element={<Login/>}></Route> 
                <Route path='login' element={<Login/>}></Route> 
                <Route path='/register' element={<Register/>}></Route>
                <Route path='/reset' element={<ResetPassword/>}></Route>
                <Route path='/forgot' element={<ForgotPassword/>}></Route>
            </Routes>
    );
}