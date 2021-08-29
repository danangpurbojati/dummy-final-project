import React from 'react';
import { Layout} from 'antd';
import Sidenav from '../Sidenav';

import './dashboardLayout.scss';

const DashboardLayout = ({children}) => {
    return (
        <Layout>
            <Sidenav />
            <Layout.Content className="content-wrapper">
                {children}
            </Layout.Content>
        </Layout>
    )
}

export default DashboardLayout
