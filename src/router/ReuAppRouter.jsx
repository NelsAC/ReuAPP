import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthRoutes } from '../auth';
import { useAuth } from '../hooks/useAuth';
import { HomePage } from '../reuapp/page/HomePage';
import { ReuAppRoutes } from '../reuapp/routes/ReuAppRoutes';
import { useAuthStore } from '../store/auth';

export const ReuAppRouter = () => {

    const { checkAuthToken } = useAuth();

    useEffect(() => {
        checkAuthToken();
    }, [])
    

    const isAuth = useAuthStore(state => state.isAuth);

   return (
    <Router>
        <Routes>
            <Route index path="/" element={ <HomePage /> } />
            {
                (isAuth === 'not-authenticated')
                ? <Route path='/auth/*' element={ <AuthRoutes /> } />
                : <Route path='/*' element={ <ReuAppRoutes /> } />
            }
            <Route path="/*" element={ <Navigate to="/auth/login" /> } />
        </Routes>
    </Router>
   )
}