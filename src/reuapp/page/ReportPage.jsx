import { Navigation } from "../components"
import { Layout } from "../layout/Layout"
import { ReportView } from "../views/ReportView"

export const ReportPage = () => {
    return (
        <Layout>
            <Navigation />
            <ReportView />
        </Layout>
       )
}