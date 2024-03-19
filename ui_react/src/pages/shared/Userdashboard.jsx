import React from 'react'
import Sidebar from '../../components/admin/Sidebar';
import ContentArea from './Contentarea';

const Userdashboard = () => {
    return (
        <div className="flex h-screen bg-gray-100">
          <Sidebar />
          <div className="flex-1 p-6 overflow-auto">
            <ContentArea />
          </div>
        </div>
      );
}

export default Userdashboard