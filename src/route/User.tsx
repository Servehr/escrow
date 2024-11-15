import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { ContactUs } from '../pages/Contact';
import { StartTransaction } from '../pages/StartTransaction';
import UnAuthorized from '../auth/unauthorized';
import NotFound from '../auth/notFound';
import Transaction from '../pages/Transaction';
import { AboutUs } from '../pages/AboutUs';
import { Service } from '../pages/Service';
import { Confirm } from '../pages/Confirm';
import Protected from './Protected';
import { WhyUs } from '../pages/WhyUs';
import { Verify } from '../pages/Verify';



export const UserRoute = () => 
{
    return (
            
            <Routes>
                <Route path='' element={<Home />}></Route> 
                <Route path='/contact-us' element={<ContactUs />}></Route> 
                <Route path='/start-transaction' element={<StartTransaction />}></Route>
                <Route path='/why-us' element={<WhyUs />}></Route>
                <Route path='/about-us' element={<AboutUs />}></Route>
                <Route path='/services' element={<Service />}></Route>
                <Route path='/transaction' element={<Transaction />}></Route>
                <Route path='/confirm' element={<Protected><Confirm /></Protected>}></Route>
                <Route path='/verify' element={<Protected><Verify /></Protected>}></Route>
                <Route path='/unauthorized' element={<UnAuthorized />}></Route> 
                <Route path='/*' element={<NotFound />}></Route> 
            </Routes>
    );
}