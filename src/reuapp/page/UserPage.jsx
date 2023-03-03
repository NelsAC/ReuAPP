import { Navigation } from "../components"
import { Layout } from "../layout/Layout"
import { UsersView } from "../views/UsersView"

export const UserPage = () => {
   return (
    <Layout>
        <Navigation />
        <UsersView />
    </Layout>
   )
}