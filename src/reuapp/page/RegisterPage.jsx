import { RegisterView } from '../views/RegisterView';
import { Layout } from '../layout/Layout';
import { Navigation } from '../components';

export const RegisterPage = () => {
   return (
    <Layout>
        <Navigation />
        <RegisterView />
    </Layout>
    // <ReuAppLaoyut>
    //     <ReuAppContentLayout page='Registro' text='Los campos con el símbolo de (*) son obligatorios!'>
    //         <RegisterView />
    //     </ReuAppContentLayout>
    // </ReuAppLaoyut>
   )
}