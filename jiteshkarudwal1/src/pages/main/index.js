import * as React from 'react'
import Header from './header'
import DataTable from './table'
import TabsMenu from '../components/tabs'


export default function Main() {
    return (
        <React.Fragment>
            <Header />
            <TabsMenu />
            <DataTable />
        </React.Fragment>
    )
}