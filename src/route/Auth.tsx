import { Route, Routes, useRoutes } from 'react-router-dom';
import Login from '../auth/login';
import Register from '../auth/register';
import ResetPassword from '../auth/reset';
import ForgotPassword from '../auth/forgot';


export const Auth = () => 
{
    return (
            
            <Routes>
                <Route path='' element={<Login/>}></Route> 
                <Route path='login' element={<Login/>}></Route> 
                <Route path='/register' element={<Register/>}></Route>
                <Route path='/reset' element={<ResetPassword/>}></Route>
                <Route path='/forgot' element={<ForgotPassword/>}></Route> 
                {/* <Route path='change-password' element={<ChangePassword/>}></Route> */}
                {/* <Route path='enquiry' element={<Enquiry/>}></Route>  */}
            </Routes>
    );
}