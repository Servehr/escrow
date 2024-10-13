
import { Route, Routes } from "react-router-dom";
import { AuthRoute } from "./AuthRoute";
import { DashboardRoute } from "./DashboardRoute";


export const RoutePath = () => 
{
    return (
            <Routes>
                <Route path='/*' element={<AuthRoute/>}></Route> 
                <Route path='/dashboard/*' element={<DashboardRoute/>}></Route> 
            </Routes>
    );
}