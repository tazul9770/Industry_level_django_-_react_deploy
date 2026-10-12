import { Route, Routes } from "react-router";
import Test from "../component/Test";

const AppRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Test/>}/>
            </Routes>
        </div>
    );
};

export default AppRoutes;