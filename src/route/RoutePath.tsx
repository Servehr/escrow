
import { Route, Routes } from "react-router-dom";
import { AuthRoute } from "./AuthRoute";
import { DashboardRoute } from "./DashboardRoute";
import { UserRoute } from "./User";
import Protected from "./Protected";


export const RoutePath = () => 
{
    return (
            <Routes>
                <Route path='/*' element={<UserRoute/>}></Route> 
                <Route path='/auth/*' element={<AuthRoute/>}></Route> 
                <Route path='/dashboard/*' element={<Protected><DashboardRoute/></Protected>}></Route>
            </Routes>
    );
}