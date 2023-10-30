import React from 'react';
import {Route, Routes} from "react-router-dom";
import Homepage from "../Component/Homepage/Homepage";

const AppRouter:React.FC = () => {
    return (
        <Routes>
            <Route element={<Homepage/>} path={"/"}/>
        </Routes>
    );
};

export default AppRouter;
