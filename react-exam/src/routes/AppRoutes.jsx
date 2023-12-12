import {Routes,Route} from 'react-router-dom';
import RegistrationForm from '../components/RegistrationForm';
import Login from "../pages/Login";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={"/"} element={<RegistrationForm/>}/>
            <Route path={"/Login"} element={<Login/>}/>

        </Routes>
    )
}

export default AppRoutes;