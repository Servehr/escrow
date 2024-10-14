import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { ContactUs } from '../pages/Contact';
import { StartTransaction } from '../pages/StartTransaction';



export const UserRoute = () => 
{
    return (
            
            <Routes>
                <Route path='' element={<Home />}></Route> 
                <Route path='/contact-us' element={<ContactUs />}></Route> 
                <Route path='/start-transaction' element={<StartTransaction />}></Route> 
            </Routes>
    );
}