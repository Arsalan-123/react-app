import Signup from "./Screens/Signup/Signup";
import Login from "./Screens/Login/Login"
import Home from "./Home/Home";
import { Routes as ReactRoutes, Route } from 'react-router-dom';

const CreateRoutes = () => {
    return (
        <ReactRoutes>
            

            <Route >

                <Route path="/" element={<Home />}/>
                <Route path='/register' element={<Signup />} />
                <Route path='/login' element={<Login />}/>

            </Route>



        </ReactRoutes>
    )    
};
export default CreateRoutes;
