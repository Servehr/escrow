
import { Route, Routes } from "react-router-dom";
import { Auth } from "./Auth";


export const RoutePath = () => 
{
    return (
            <Routes>
                <Route path='/*' element={<Auth/>}></Route> 
            </Routes>
    );
}