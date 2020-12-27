import React from 'react';
import Sidebar from '../components/UserDashboard/Sidebar';
import Body from '../components/UserDashboard/Body';
import Footer from '../components/UserDashboard/Footer';

function UserDashboard({ spotify }) {
    return(
        <div className = 'player'>
            
            <div className = 'player__body' style = {{display: 'flex'}}>
                <Sidebar />
                <Body spotify = {spotify} />
            </div>
            <Footer />
            
        </div>
    )
}



export default UserDashboard;