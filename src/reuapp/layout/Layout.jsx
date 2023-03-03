import { Footer, Header } from "../components";
import { useAuthStore } from "../../store/auth";
import { Loader } from "../components/Loader";

export const Layout = ({ children }) => {

    const isAuth = useAuthStore(state => state.isAuth);

    if (isAuth === 'checking') {
        return <Loader />
    }

    return (
        <div className='mx-auto flex flex-col min-h-screen' style={{ width: '768px' }}>
            <Header />
                <div className="flex-auto">
                    {children}
                </div>
            <Footer />
        </div>
    )
}