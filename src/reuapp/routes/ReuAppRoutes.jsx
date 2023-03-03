import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../page/HomePage";
import { ManagementPage } from "../page/ManagementPage";
import { RegisterPage } from "../page/RegisterPage";
import { ReportPage } from "../page/ReportPage";
import { UserPage } from "../page/UserPage";

export const ReuAppRoutes = () => {
    return (
        <Routes>
            {/* <Route path='/home' element={<HomePage />} /> */}
            <Route path='/user' element={<UserPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/list' element={<ManagementPage />} />
            <Route path='/report' element={<ReportPage />} />
            <Route path='/*' element={<Navigate to="/register" />} />
        </Routes>
    )
}