import { ManagementView } from "../views/ManagementView"
import { Layout } from "../layout/Layout"
import { Navigation } from "../components"

export const ManagementPage = () => {
   return (
    <Layout>
        <Navigation />
        <ManagementView />
    </Layout>
    // <ReuAppLaoyut>
    //     <ReuAppContentLayout page='Registros' text='Todos los registros'>
    //         <ManagementView />
    //     </ReuAppContentLayout>
    // </ReuAppLaoyut>
   )
}